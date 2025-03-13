import cloudinary from "@/lib/cloudinary";

export const POST = async (req) => {
  console.log("consoling the data");
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    console.log(file, "the file inthe consle");

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
      });
    }

    // Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Convert Buffer to Base64 (Cloudinary needs a string format)
    const base64File = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(base64File, {
      folder: "uploads", // Optional: Organize images into a folder
    });

    return new Response(JSON.stringify({ url: uploadResponse.secure_url }), {
      status: 200,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    return new Response(JSON.stringify({ error: "Image upload failed" }), {
      status: 500,
    });
  }
};
