const express = require('express')

const router = express.Router()

const Author = require('../models/author')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const multer = require('multer')

filename = ''

const mystorage = multer.diskStorage({
    destination: './uploads/article',
    filename: (req, file, redirect) => {
        let date = Date.now()
        let fl = date + '.' + file.mimetype.split('/')[1];
        redirect(null, fl);
        filename = fl;
    }
})

const upload = multer({ storage: mystorage })

router.post('/register', upload.any('image'), async (req, res) => {
    try {
        data = req.body
        author = new Author(data)
        author.image = filename
        salt = bcrypt.genSaltSync(10)
        cryptPass = bcrypt.hashSync(data.password, salt)
        author.password = cryptPass
        savedAuthor = await author.save()
        filename = ''
        res.status(200).send(savedAuthor)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        data = req.body
        author = await Author.findOne({ email: data.email })
        if (!author) {
            res.status(404).send('email or password invalid !')
        } else {
            validPass = bcrypt.compareSync(data.password, author.password)
            if (!validPass) {
                res.status(404).send('email or password invalid !')
            } else {
                payload = {
                    _id: author._id,
                    email: author.email,
                    name: author.name
                }
                token = jwt.sign(payload, '1234567')
                res.status(200).send({ mytoken: token })
            }
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/all', async (req, res) => {
    try {
        author = await Author.find();
        res.status(200).send(author);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/getbyid/:id', async (req, res) => {
    try {
        id = req.params.id
        author = await Author.findById({ _id: id });
        res.status(200).send(author);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        id = req.params.id
        author = await Author.findOneAndDelete({ _id: id });
        res.status(200).send(author);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/update/:id', upload.any('image'), async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        if (filename) {
            data.image = filename;
        }
        const updatedAuthor = await Author.findByIdAndUpdate(id, data, { new: true });
        filename = '';
        res.status(200).send(updatedAuthor);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router