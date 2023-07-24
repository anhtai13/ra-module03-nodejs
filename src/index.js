// const express = require("express");

import express, { request, response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import fs from "fs";

const app = express();

// app.use(express.json());
// app.use(express.urlencoded());

// Cấu hình body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Cấu hình morgan
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream("src/logs/access.log", {
  flags: "a",
});

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

app.get(
  "/users",
  (req, res, next) => {
    if (req.query.keyword !== undefined) {
      next();
    } else {
      res.send({
        error: "invalid request",
      });
    }
  },
  (req, res) => {
    res.send({ user: [] });
  }
);

app.get(
  "/users/:id",
  (req, res, next) => {
    if (req.params.id === "0") {
      next("route");
    } else {
      next();
    }
  },
  (req, res) => {
    res.send({ id: req.params.id });
  }
);

app.post("/users", (req, res) => {
  res.send({ requestBody: req.body });
});

app.listen(8000, () => {
  console.log("server started");
});
