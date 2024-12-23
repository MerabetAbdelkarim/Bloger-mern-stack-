const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');
const Article = require('../models/article');

const router = express.Router();

let filename = '';

const mystorage = multer.diskStorage({
    destination: './uploads/article',
    filename: (req, file, callback) => {
        const date = Date.now();
        const fileExtension = file.mimetype.split('/')[1];
        const fl = `${date}.${fileExtension}`;
        callback(null, fl);
        filename = fl;
    },
});

const upload = multer({
    storage: mystorage,
    fileFilter: (req, file, callback) => {
        const allowedTypes = ['image/jpeg', 'image/png'];
        if (!allowedTypes.includes(file.mimetype)) {
            return callback(new Error('Invalid file type'), false);
        }
        callback(null, true);
    },
});


router.post('/add', upload.single('image'), async (req, res) => {
    console.log("add article")
    try {
        const data = req.body;
        let tags = [];
        if (data.tags) {
            tags = data.tags.split(',');
        }
        const article = new Article({
            ...data,
            date: new Date(),
            image: filename,
            tags: data.tags.split(','),
        });
        const savedArticle = await article.save();
        filename = ''; 
        res.status(200).send(savedArticle);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

router.get('/all', async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).send(articles);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

router.get('/getbyid/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id);
        res.status(200).send(article);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

router.get('/getbyidauthor/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const articles = await Article.find({ idAuthor: id });
        res.status(200).send(articles);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const article = await Article.findByIdAndDelete({ _id: id });

        if (!article) {
            return res.status(404).send({ message: 'Article not found' });
        }

        const imagePath = path.join(__dirname, '..', 'uploads', 'article', article.image);
        console.log('Image Path:', imagePath);
        console.log("delete acticle");

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
            console.log('Image deleted successfully');
        } else {
            console.log('Image not found at:', imagePath);
        }

        res.status(200).send({ message: 'Article deleted successfully', article });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});




router.put('/updatearticle/:id', upload.single('image'), async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if (data.tags) {
            data.tags = data.tags.split(',')
        }
        if (filename) {
            data.image = filename;
        }
        const article = await Article.findByIdAndUpdate(id, data, { new: true });
        filename = '';
        res.status(200).send(article);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;
