const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const geocode = require("./utils/giocodeus");
const forecast = require("./utils/forecast");
app.set("view engine", "hbs");

const pathfilehhh = path.join(__dirname, "../public");
const viewspath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partial");
hbs.registerPartials(partialsPath);
const port = process.env.PORT || 3000;
app.set("views", viewspath);
app.use(express.static(pathfilehhh));
app.get("/app", (req, res) => {
  res.send("you are now at app");
});
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send("errror ocour over here");
  }
  geocode(req.query.address, (error, data) => {
    if (error) {
      return res.send({ error });
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        location: req.query.address,
        forecastData,
      });
    });
  });
});
app.get("/", (req, res) => {
  res.render("weather2", {
    name: "weather2",
    l: "patel",
  });
});
app.get("/about2", (req, res) => {
  res.render("about2", {
    name: "about",
    lastname: "patel",
  });
});
app.get("/home2", (req, res) => {
  res.render("home2", {
    name: "home",
    lastname: "patel",
  });
});
app.get("/me2", (req, res) => {
  res.render("me2", {
    name: "sandeep",
    lastname: "patel",
  });
});

app.get("/about", (req, res) => {
  res.send("about aboutv about about about abot abpou");
});
app.get("*", (req, res) => {
  res.send("404 page not foundby sandeep");
});
app.listen(port, () => {
  console.log("heynvohj");
});
