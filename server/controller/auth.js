const User = require('../models/User');
const { verifyPassword, createToken } = require('../utils');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.sub).select('-password');
    if (!user) {
      return res.status(400).json({
        msg: 'invalid user',
      });
    }
    return res.status(200).json({
      user,
      mag: 'user return successfully',
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { userEmail: email, userPassword: password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please include email and password' });
    }
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credential' });
    }
    const isMatch = verifyPassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credential' });
    }

    const token = createToken(user);

    res.cookie('token', token, {
      httpOnly: true,
    });
    res.status(200).json({
      msg: 'successfully Login',
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.logoutUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.sub).select('-password');
    if (!user) {
      return res.status(400).json({
        msg: 'Unauthorized request',
      });
    }
    res.cookie('token', '', {
      httpOnly: true,
    });
    return res.status(200).json({
      msg: 'User Logout successfully',
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};
