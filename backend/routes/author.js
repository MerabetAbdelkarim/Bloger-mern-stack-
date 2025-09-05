const express = require("express");
const router = express.Router();
const Author = require("../models/author");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");

let filename = "";

const mystorage = multer.diskStorage({
    destination: "./uploads/article",
    filename: (req, file, redirect) => {
        let date = Date.now();
        let fl = date + "." + file.mimetype.split("/")[1];
        redirect(null, fl);
        filename = fl;
    },
});

const upload = multer({ storage: mystorage });

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).send("Access denied, no token provided.");
    }
    try {
        const decoded = jwt.verify(token, "1234567"); // نفس السر المستخدم في login
        req.user = decoded; // حفظ بيانات المستخدم في الطلب
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};

router.post("/register", upload.any("image"), async (req, res) => {
    try {
        const data = req.body;
        let author = new Author(data);
        author.image = filename;
        const salt = bcrypt.genSaltSync(10);
        const cryptPass = bcrypt.hashSync(data.password, salt);
        author.password = cryptPass;
        const savedAuthor = await author.save();
        filename = "";
        res.status(200).send(savedAuthor);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const data = req.body;
        const author = await Author.findOne({ email: data.email });
        if (!author) {
            return res.status(404).send("email or password invalid ! email invalid !");
        }

        const validPass = bcrypt.compareSync(data.password, author.password);
        if (!validPass) {
            return res.status(404).send("email or password invalid ! password invalid !");
        }

        const payload = {
            _id: author._id,
            email: author.email,
            name: author.name,
        };
        const token = jwt.sign(payload, "1234567");
        res.status(200).send({ mytoken: token });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/profile", authMiddleware, async (req, res) => {
    try {
        const author = await Author.findById(req.user._id).select("-password");
        if (!author) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(author);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/all", async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).send(authors);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/getbyid/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const author = await Author.findById({ _id: id });
        res.status(200).send(author);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const author = await Author.findOneAndDelete({ _id: id });
        res.status(200).send(author);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put("/update/:id", upload.any("image"), async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        if (filename) {
            data.image = filename;
        }
        const updatedAuthor = await Author.findByIdAndUpdate(id, data, { new: true });
        filename = "";
        res.status(200).send(updatedAuthor);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
