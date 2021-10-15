import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

const SALT_ROUNDS = process.env.SALT_ROUNDS || 11;
const TOKEN_KEY = process.env.TOKEN_KEY || "amegareallylonggoodkey";

const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 30);

export const signUp = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      email,
      phone,
      password_digest,
    });

    await user.save();

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000),
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select(
      "username email password_digest"
    );
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).send("Not Authorized");
  }
};

export const changePassword = async (req, res) => {};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("items");
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("items");
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getUserItems = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const userItems = await Item.find({ userId: user._id });
    res.json(userItems);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getUserItem = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const userItem = await Item.findById(req.params.itemId).populate("userId");
    if (userItem.userId.equals(user._id)) {
      return res.json(userItem);
    }
    throw new Error(`Item ${userItem._id} does not belong to user ${user._id}`);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createUserItem = async (req, res) => {
  try {
    if (await User.findById(req.body.userId)) {
      const userItem = new Item(req.body);
      await userItem.save();
      res.status(201).json(userItem);
      //changed the line above to be userProduct instead of product
    }
    throw new Error(`User ${req.body.userId} does not exist!`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateUserItem = async (req, res) => {
  try {
    if (await User.findById(req.params.id)) {
      const item = await Item.findByIdAndUpdate(itemId, req.body, {
        new: true,
      });
      res.status(200).json(item);
    }
    throw new Error(`User ${req.params.id} does not exist!`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteUserItem = async (req, res) => {
  try {
    if (await User.findById(req.params.id)) {
      const deleted = await Item.findByIdAndDelete(req.params.itemId);
      if (deleted) {
        return res.status(200).send("Item deleted");
      }
      throw new Error(`Item ${req.params.itemId} not found`);
    }
    throw new Error(`User ${req.params.id} does not exist!`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
