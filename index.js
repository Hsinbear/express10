// import express from "express";
// import {resolve} from "path";
// const __dirname = import.meta.dirname;

const express = require("express");
const path = require("path");
const { dirname } = require("path");
const { fileURLToPath } = require("url");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static(resolve(__dirname, "public")));
app.use("/bootstrap", express.static(resolve(__dirname, "node_modules/bootstrap/dist")));
app.use("/jquery", express.static(resolve(__dirname, "node_modules/jquery/dist")))
app.use('/fontawesome', express.static(resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free')));

app.get("/", (req, res) => {
  res.send("網站首頁")
});


app.listen(3000, () => {
  ;console.log("伺服器已啟動於 http://localhost:3000");
})