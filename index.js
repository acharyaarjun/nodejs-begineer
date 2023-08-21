const express = require("express"); // package import.
const app = express(); // making express app using express
const routes = require("./app/routes"); // app vitra ko routes vitra ko index.js yaniki routre import gareko
const requestIp = require("request-ip");

app.use(requestIp.mw());
app.use((req, res, next) => {
  console.log(req.clientIp);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", routes);

app.listen(8080, () => {
  console.log("listening on port 8080");
});
