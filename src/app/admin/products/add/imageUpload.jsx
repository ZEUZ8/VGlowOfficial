import React, { useState } from "react";
import { Plus } from "lucide-react";

const ImageUpload = () => {
  const images = ["/withGrape.png", "/onRock.png", "/rashi.png"];

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      //   setPreviewUrl(URL.createObjectURL(file)); // Create a preview URL
      images.push(URL.createObjectURL(file));
    }
  };

  // Handle form submission (optional)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedImage) {
      // Simulate an upload
      console.log("Uploading:", selectedImage);
    }
  };

  return (
    <div>
      <div className="border border-gray-50 rounded-lg py-2 px-4 bg-gray-100 w-full">
        <h1 className="text-lg font-medium py-2">Upload Image</h1>
        <div className="flex justify-center items-center py-3">
          <div className="rounded-xl w-full h-[20rem] border bg-white border-white ">
            <img
              src="/wood&orange.png"
              className="object-contain h-full w-full "
              alt="productImg"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 p-1 py-2  ">
          {images?.length &&
            images.map((item,i) => (
              <div className="overflow-hidden rounded-lg aspect-w-1 h-[6rem]" key={i}>
                <img
                  src={item}
                  className="object-contain w-full h-full "
                  alt="product img"
                />
              </div>
            ))}
          {images.length < 4 && (
            <div className="overflow-hidden rounded-lg flex justify-center items-center border border-dashed border-gray-400 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <div className="flex justify-center items-center bg-gray-500 rounded-full">
                <Plus className="text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
