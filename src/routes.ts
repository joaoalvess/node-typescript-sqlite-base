import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json("Hello aaaaa");
});

export default routes;
