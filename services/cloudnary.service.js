let cloudinary = require("cloudinary").v2;

let uploadImage = (path, originalname) => {
  // Configuration
  cloudinary.config({
    cloud_name: "ddsljveia",
    api_key: "523867376243312",
    api_secret: "uwxfZrn0d3OjSqcc6xG7zwIrajg", // Click 'View Credentials' below to copy your API secret
  });

  // Upload an image
  const uploadResult = cloudinary.uploader
    .upload(path, {
      public_id: `${originalname}`,
    })
    .catch((error) => {
      console.log(error);
    });

  return uploadResult;
};

module.exports = uploadImage;
