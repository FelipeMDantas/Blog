import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const addPost = (req, res) => {};

export const getPost = (req, res) => {
  const q =
    "select `username`, `title`, `desc`, p.img, u.img as userImg, `cat`, `date` from users u join posts p on u.id = p.uid where p.id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "select * from posts where cat=?"
    : "select * from posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Invalid token.");

    const postId = req.params.id;
    const q = "delete from posts where `id`= ? and `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err)
        return res
          .status(403)
          .json("You're not authorized to delete other's posts.");

      return res.json("Post has been deleted.");
    });
  });
};

export const updatePost = (req, res) => {
  res.json("from controller");
};
