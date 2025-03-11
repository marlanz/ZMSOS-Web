// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: import.meta.env.VITE_CLOUDINARY_NAME || "dr7jfcorn",
//   api_key: import.meta.env.CLOUDINARY_API_KEY || "319319988869934",
//   api_secret:
//     import.meta.env.CLOUDINARY_API_SECRET || "VA5tnYpzBl_tEwPy9o2r04RrOPM",
// });
// /**
//  * Uploads a file to Cloudinary and returns the secure URL.
//  *
//  * @param {File} file - The file to upload.
//  * @returns {Promise<string>} - The secure URL of the uploaded file.
//  */

// export const uploadSingleToCloudinary = async (file, folder) => {
//   try {
//     const result = await cloudinary.uploader.upload(file, {
//       resource_type: "auto",
//       folder: folder || "my_folder",
//       //   transformation: {
//       //     width: width,
//       //     height: height,
//       //     crop: 'fit', // Adjust cropping method as per your requirement
//       //   },
//     });
//     return result.secure_url;
//   } catch (error) {
//     console.error("Error uploading to Cloudinary:", error);
//     throw new Error("Failed to upload image. Please try again.");
//   }
// };
export const uploadSingleToCloudinary = async (file, folder = "my_folder") => {
  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_NAME;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error("Cloudinary configuration is missing in .env file");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", folder);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    const data = await response.json();
    return data.secure_url; // Trả về URL của ảnh đã upload
  } catch (error) {
    console.error("Upload error:", error);
    throw new Error("Failed to upload image. Please try again.");
  }
};
