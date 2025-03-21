import React, { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import axios from "axios";
import Loader from "@/components/ui/loader/Loader";

const ImageUpload = ({ formik, setFieldValue, product }) => {

  const fileRef = useRef();
  const [images, setImages] = useState(product?.images ?? []);
  const [coverImage, setCoverImage] = useState(images[0] ?? "");
  const [loading, setLoading] = useState(false);

  const handleDivClick = () => {
    fileRef.current.click(); // Trigger the file input when the div is clicked
  };

  useEffect(() => {
    if (product?.images) {
      setImages(product.images);
    }
  }, [product?.images]);

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
  const handleImageChange = async (event) => {
    const files = event.target.files;
    if (!files) return;

    const uploadedUrls = [];

    for (const image of files) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", image);

      try {
        const response = await axios.post(
          "/api/admin/images/imageUpload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Ensure correct content type
            },
          }
        );
        if (response.data?.url) {
          uploadedUrls.push(response.data?.url);
        } else {
          alert("Upload failed for an image: " + res.data?.error);
        }
      } catch (err) {
        console.error("Error uploading image:", err);
        alert("Upload error!");
      } finally {
        setLoading(false);
      }
    }
    setFieldValue("images", [
      ...(formik?.values.images || []),
      ...uploadedUrls,
    ]);
    setImages((prev) => [...prev, ...uploadedUrls]);
  };


  9544335513
  // deleting the images by removing the iamges from the 
  const handleDelete = async (id) => {
    setImages((prev) => prev.filter((item) => item !== id));
    setFieldValue(
      "images",
      formik.values.images.filter((item) => item !== id)
    );
  };

  return (
    <div>
      <div
        className={`border border-gray-50 rounded-lg py-2 px-4 bg-gray-100 w-full relative `}
      >
        {loading && (
          <div className="absolute inset-0  flex justify-center items-center bg-gray-200 bg-opacity-70 border rounded-lg border-gray-200 gap-2">
            <Loader />
            <p className="text-sm font-light text-black">image uploading</p>
          </div>
        )}
        <h1 className="text-lg font-medium py-2">Upload Image</h1>
        {images.length > 0 ? (
          <div
            className="flex justify-center items-center py-3"
            onDragOver={allowDrop}
            onDrop={handleDrop}
          >
            <div className="rounded-xl w-full h-[20rem] border bg-white border-white ">
              <img
                src={`${images[0]}`}
                className="object-contain h-full w-full "
                alt="productImg"
              />
            </div>
          </div>
        ) : (
          <div
            className="overflow-hidden rounded-lg flex justify-center items-center border border-dashed border-gray-400 cursor-pointer h-[20rem]"
            onClick={handleDivClick}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e)}
              className="hidden"
              multiple
              ref={fileRef}
            />
            <div className="flex justify-center items-center bg-gray-500 rounded-full">
              <Plus className="text-white" />
            </div>
          </div>
        )}
        {images.length > 0 && (
          <div className="grid grid-cols-4 gap-2 p-1 py-2  ">
            {images?.length > 0 &&
              images?.slice(1).map((item, i) => (
                <div
                  className="overflow-hidden border border-gray-100 rounded-lg aspect-w-1 h-[6rem]  hover:bg-white relative cursor-pointer group"
                  key={i}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item)}
                >
                  <img
                    src={item}
                    className="object-cover w-full h-full "
                    alt="product img"
                  />
                  <div className="absolute inset-0 bg-white bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div
                      className="flex justify-center items-center"
                      onClick={() => handleDelete(item)}
                    >
                      <div className="rounded-full bg-white bg-opacity-60 border border-red-400 py-1 px-2 hover:bg-red-400 hover:text-white transition-all duration-300">
                        <p className="text-xs">Delete</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {/* {images.length < 5 && ( */}
            <div
              className={`overflow-hidden rounded-lg flex justify-center items-center border border-dashed border-gray-400 cursor-pointer h-[6rem]`}
              onClick={handleDivClick}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
                className="hidden"
                multiple
                ref={fileRef}
              />
              <div className="flex justify-center items-center bg-gray-500 rounded-full">
                <Plus className="text-white" />
              </div>
            </div>
            {/* )} */}
          </div>
        )}
        {/* <div
          className="py-3 flex justify-center items-center border rounded-lg bg-white m-2 cursor-pointer"
          onClick={handleUpload}
        >
          Upload images in cloudinary
        </div> */}
      </div>
    </div>
  );
};

export default ImageUpload;
