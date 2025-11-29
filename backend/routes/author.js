const express = require("express");
const router = express.Router();
const Author = require("../models/author");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const auth = require("../middlewares/auth");
const sharp = require("sharp");
const fs = require("fs");
const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post("/register", upload.single("image"), async (req, res) => {
  try {
    const data = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(data.password, salt);
    let finalImageName = null;
    if (req.file) {
      const uniqueName = Date.now() + ".jpg";
      if (!fs.existsSync("./uploads/authors"))
        fs.mkdirSync("./uploads/authors");
      if (!fs.existsSync("./uploads/authors/original"))
        fs.mkdirSync("./uploads/authors/original");
      if (!fs.existsSync("./uploads/authors/profile"))
        fs.mkdirSync("./uploads/authors/profile");
      if (!fs.existsSync("./uploads/authors/avatar"))
        fs.mkdirSync("./uploads/authors/avatar");
      await sharp(req.file.buffer)
        .jpeg({ quality: 95 })
        .toFile(`./uploads/authors/original/${uniqueName}`);
      await sharp(req.file.buffer)
        .resize(300, 300)
        .jpeg({ quality: 90 })
        .toFile(`./uploads/authors/profile/${uniqueName}`);
      await sharp(req.file.buffer)
        .resize(60, 60)
        .jpeg({ quality: 85 })
        .toFile(`./uploads/authors/avatar/${uniqueName}`);

      finalImageName = uniqueName;
    }
    const author = new Author({
      ...data,
      password: hashedPassword,
      image: finalImageName,
    });
    const savedAuthor = await author.save();
    res.status(200).send(savedAuthor);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = req.body;
    const author = await Author.findOne({ email: data.email });
    if (!author) return res.status(404).send("Invalid email or password");
    const valid = bcrypt.compareSync(data.password, author.password);
    if (!valid) return res.status(404).send("Invalid email or password");
    const token = jwt.sign(
      { _id: author._id, email: author.email, name: author.name },
      "1234567",
      { expiresIn: "7d" }
    );

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/me", auth, async (req, res) => {
  try {
    const author = await Author.findById(req.user._id).select("-password");
    res.status(200).send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
