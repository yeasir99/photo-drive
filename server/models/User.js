const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Add Name'],
  },
  email: {
    type: String,
    required: [true, 'Please add a valid email address'],
  },
  unique: true,
  match: [
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    'Please add a valid email',
  ],
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password minimum length is 8 characters'],
  },
  avatar: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('user', UserSchema);
