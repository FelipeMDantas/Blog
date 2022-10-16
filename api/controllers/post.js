import { db } from "../db.js";

export const addPost = (req, res) => {};

export const getPost = (req, res) => {
  res.json("from controller");
};

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "select * from posts where cat=?"
    : "select * from posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const deletePost = (req, res) => {
  res.json("from controller");
};

export const updatePost = (req, res) => {
  res.json("from controller");
};
