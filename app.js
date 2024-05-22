import { upload } from "@canva/asset";

// Function to handle asset upload
async function uploadImage() {
  const image = await upload({
    type: "IMAGE",
    mimeType: "image/png",
    url: "https://inspiradoragency.github.io/canvacards/index.html", // Adjust this to the correct image URL if necessary
    thumbnailUrl: "https://inspiradoragency.github.io/canvacards/index.html" // Adjust this to the correct thumbnail URL if necessary
  });

  console.log("The asset reference is", image.ref);

  await image.whenUploaded();
  console.log("The upload is complete.");
}

// Call the upload function (you can call this function based on your app's logic)
uploadImage();
