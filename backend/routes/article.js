const express = require('express')

const router = express.Router()

const Article = require('../models/article')

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

router.post('/add', upload.any('image'), async (req, res) => {
    try {
        data = req.body
        article = new Article(data)
        article.date = new Date()
        article.image = filename
        article.tags = data.tags.split(',')
        savedArticl = await article.save()
        filename = ''
        res.status(200).send(savedArticl)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/all', async (req, res) => {
    try {
        articles = await Article.find()
        res.status(200).send(articles)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/getbyid/:id', async (req, res) => {
    try {
        id = req.params.id
        article = await Article.findById({ _id: id })
        res.status(200).send(article)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/getbyidauthor/:id', async (req, res) => {
    try {
        id = req.params.id
        article = await Article.findById({ idAuthor: id })
        res.status(200).send(article)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        id = req.params.id
        article = await Article.findByIdAndDelete({ _id: id })
        res.status(200).send(article)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/updatearticle/:id', upload.any('image'), async (req, res) => {
    try {
        let id = req.params.id
        let data = req.body
        data.tags = data.tags.split(',')
        if (filename.length > 0) {
            data.image = filename
        }
        article = await Article.findByIdAndUpdate({ _id: id }, data)
        filename = ''
        res.status(200).send(article)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router