const ImageData = require('../models/ImageData');

exports.uploadImage = async (req, res) => {
  try {
    const user = req.user.sub;
    const imageData = req.body;
    const imageDataMod = imageData.map(image => ({
      ...image,
      user,
    }));
    const uploadedData = await ImageData.insertMany(imageDataMod);
    return res.status(200).json({
      msg: 'Data Upload Successfully',
      data: uploadedData,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'Server Error',
    });
  }
};
exports.getImageData = async (req, res) => {};
