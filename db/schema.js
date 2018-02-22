const mongoose = require('./connection')

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: String
})

const recipe = mongoose.model('Recipe', recipeSchema)

module.exports = recipe
