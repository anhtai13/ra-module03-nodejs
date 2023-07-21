// const express = require("express");

import express from "express"; //Phải thêm "type": "module" ở package.json,

const application = express();

application.listen(8000, () => {
  console.log("server started");
});
