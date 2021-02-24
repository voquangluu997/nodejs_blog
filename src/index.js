const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars");
const route = require('./routes/index.route')

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(morgan("combined"));
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
