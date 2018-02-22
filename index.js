const express = require('express')
const hbs = require('hbs')
// const bodyParser = require('body-parser')
// const methodOverride = require('method-override')

const app = express()
const recipesController = require('./controllers/recipes')

app.set("view engine", "hbs")
// app.use(bodyParser.urlencoded([ extended: true ]))
// app.use(methodOverride('_method'))

app.get('/', (req, res) => {
// 
// 
  res.render('index')
// this should be res.render(index)
})

app.listen(4000, () => {
  console.log('this is working (on 4000)')
})
