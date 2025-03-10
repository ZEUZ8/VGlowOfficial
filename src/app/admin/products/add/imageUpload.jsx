import React, { useRef, useState } from "react";
import { Plus } from "lucide-react";

const ImageUpload = () => {
  const initialImages = [
    "/wood&orange.png",
    "/withGrape.png",
    "/onRock.png",
    "/rashi.png",
  ];

  const fileRef = useRef();
  const [images, setImages] = useState(initialImages);
  const [coverImage, setCoverImage] = useState(images[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDivClick = () => {
    fileRef.current.click(); // Trigger the file input when the div is clicked
  };

  const handleDragStart = (event, image) => {
    event.dataTransfer.setData("imageSrc", image);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedImage = event.dataTransfer.getData("imageSrc");

    if (droppedImage) {
      setCoverImage(droppedImage);

      // Move the dragged image to the first position in the list
      setImages((prevImages) => {
        const filteredImages = prevImages.filter((img) => img !== droppedImage);
        return [droppedImage, ...filteredImages];
      });
    }
  };

  // Allow drop
  const allowDrop = (event) => {
    event.preventDefault();
  };

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
        <div
          className="flex justify-center items-center py-3"
          onDragOver={allowDrop}
          onDrop={handleDrop}
        >
          <div className="rounded-xl w-full h-[20rem] border bg-white border-white ">
            <img
              src={coverImage}
              className="object-contain h-full w-full "
              alt="productImg"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 p-1 py-2  ">
          {images?.length &&
            images?.slice(1).map((item, i) => (
              <div
                className="overflow-hidden rounded-lg aspect-w-1 h-[6rem] hover:opacity-50 hover:bg-white"
                key={i}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
              >
                <img
                  src={item}
                  className="object-cover w-full h-full "
                  alt="product img"
                />
              </div>
            ))}
          {images.length < 5 && (
            <div
              className="overflow-hidden rounded-lg flex justify-center items-center border border-dashed border-gray-400 cursor-pointer "
              onClick={handleDivClick}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                ref={fileRef}
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
