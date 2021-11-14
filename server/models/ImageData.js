const mongoose = require('mongoose');

const ImageDataSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  asset_id: {
    type: String,
    required: true,
  },
  public_id: {
    type: String,
    required: true,
  },

  secure_url: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('imageData', ImageDataSchema);
