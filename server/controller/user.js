const User = require('../models/User');
const { createToken } = require('../utils');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({
      email,
    });
    if (user) {
      res.status(400).json({ msg: 'User already exists' });
    }

    user = await User.create({ name, email, password });
    const token = createToken(user);
    res.cookie('token', token, {
      httpOnly: true,
    });
    res.json({
      msg: 'User created successfully',
      user,
    });
  } catch (error) {
    res.json(error);
  }
};
