import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  //Check existing user account

  const q = "select * from users where email = ? or username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length)
      return res.status(409).json("User account already exists!");

    //Password hash and account creation

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "insert into users(`username`, `email`, `password`) values (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User account has been created.");
    });
  });
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
