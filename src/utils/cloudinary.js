import cloudinary from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_Name: process.env.CLOUDINARY_NAME,
  cloud_Api_Key: process.env.CLOUDINARY_API_KEY,
  cloude_Screte_Api: process.env.CLOUDINARY_API_SECRETE,
});

const cloudeUploadImage = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const cloudUpload = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // if file successfully upload then
    console.log(cloudUpload.url);
    return cloudUpload;
  } catch (error) {
    // for remove file if not upload
    fs.unlinkSync(localFilePath);
    console.log(error);
  }
};

export { cloudeUploadImage };
