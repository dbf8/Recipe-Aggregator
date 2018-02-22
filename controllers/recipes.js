const express = require('express')
const router = express.Router()

const Recipe = require('../model/Recipe')

router.get('/', (req, res) => {
    Recipe.find({}).then(recipes => {
        res.render('recipes/index', { recipes })
    }).catch(err => console.log(err))
})

module.exports = router
