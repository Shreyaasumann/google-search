const mongoose = require('mongoose');
const express = require('express');
const routes = reuire('./routes')
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true});

app.use(routes)

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });