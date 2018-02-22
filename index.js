const express = require("express");
const hbs = require("hbs");
// const bodyParser = require('body-parser')
// const methodOverride = require('method-override')

const app = express();
const recipesController = require("./controllers/recipes");

app.use("/recipes", recipesController);

app.set("view engine", "hbs");
// app.use(bodyParser.urlencoded([ extended: true ]))
// app.use(methodOverride('_method'))

app.get("/", (req, res) => {
  //
  //
  res.render("index");
  // this should be res.render(index)
});

app.listen(3000, () => {
  console.log("this is working (on 3000)");
});
