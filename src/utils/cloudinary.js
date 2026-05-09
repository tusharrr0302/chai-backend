import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //file has upload successfully on cloudinary, now we can remove it from local storage
        console.log("File has been uploaded on cloudinary, now removing it from local storage", response.url);
        return (response.url)

    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the file from local storage if there is an error while uploading on cloudinary
        console.log("Error while uploading file on cloudinary", error);
        return null;
    }
}

export default uploadOnCloudinary;