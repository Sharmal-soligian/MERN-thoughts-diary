const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        
        if (!user) {
          return res.status(400).json("Wrong credentials!");
        }
    
        const validated = await bcrypt.compare(req.body.password, user.password);
        
        if (!validated) {
          return res.status(400).json("Wrong credentials!");
        }
    
        const { password, ...others } = user._doc;
        
        return res.status(200).json(others);
      } catch (err) {
        return res.status(500).json(err);
      }
});

module.exports = router;
