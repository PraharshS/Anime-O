const express = require("express");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded());

const animelist = [
  {
    name: "Death Note",
    image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
  },
  {
    name: "Attack on titan",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
  },
  {
    name: "Full Metal Alchemist",
    image: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
  },
  {
    name: "One Punch Man",
    image: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
  },
  {
    name: "Steins gate",
    image: "https://cdn.myanimelist.net/images/anime/5/73199.jpg",
  },
  {
    name: "Tokyo Ghoul",
    image: "https://cdn.myanimelist.net/images/anime/5/64449.jpg",
  },
];

app.get("/", (req, res) => {
  res.render("index", { animelist: animelist });
});

app.get("/new", (req, res) => {
  res.render("newanime");
});

app.post("/new", (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const newAnime = {
    name: req.body.name,
    image: req.body.image,
  };
  console.log(name);
  console.log(image);

  animelist.push(newAnime);
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("SERVER STARTED AT 3000");
});
