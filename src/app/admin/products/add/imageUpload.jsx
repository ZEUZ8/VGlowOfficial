import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Plus } from "lucide-react";
import axios, { formToJSON } from "axios";

const ImageUpload = forwardRef(({ formik, setFieldValue, product }, ref) => {
  console.log(product?.images, " the console");

  const fileRef = useRef();
  const [images, setImages] = useState(product?.images ?? []);
  const [coverImage, setCoverImage] = useState(images[0] ?? "");
  const [selectedImage, setSelectedImage] = useState([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);

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

  useEffect(() => {
    console.log(uploadedImageUrls, "the uploaded image urls ");
  }, [uploadedImageUrls]);

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
    const files = event.target.files;
    if (files.length === 1) {
      setSelectedImage((prev) => [...prev, files[0]]);
      //   setPreviewUrl(URL.createObjectURL(file)); // Create a preview URL
      setImages((prev) => [...prev, URL.createObjectURL(files[0])]);
    } else if (files.length > 1) {
      const fileArray = Array.from(files);
      const previews = fileArray?.map((file) => URL.createObjectURL(file));
      setSelectedImage((prev) => [...prev, ...fileArray]); // Store selected files
      setImages((prev) => [...prev, ...previews]); // Show previews
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

  const handleUpload = async () => {
    if (!selectedImage) return;

    const uploadedUrls = [];

    for (const image of selectedImage) {
      const formData = new FormData();
      formData.append("file", image);

      try {
        const response = await axios.post("/api/admin/imageUpload", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure correct content type
          },
        });
        console.log(response);
        if (response.data?.url) {
          uploadedUrls.push(response.data?.secure_url);
        } else {
          alert("Upload failed for an image: " + res.data?.error);
        }
      } catch (err) {
        console.error("Error uploading image:", err);
        alert("Upload error!");
      }
    }

    // setUploadedImageUrls(uploadedUrls); // Store uploaded URLs in state
    setUploadedImageUrls((prev) => [...prev, ...uploadedUrls]); // Store uploaded URLs
    setFieldValue("images", [
      ...(formik?.values.images || []),
      ...uploadedUrls,
    ]);
    setImages((prev) => [
      ...prev.filter((img) => !img.startsWith("blob:")), // Remove local previews
      ...uploadedUrls,
    ]);
    setSelectedImage([]);
  };

  return (
    <div>
      <div className="border border-gray-50 rounded-lg py-2 px-4 bg-gray-100 w-full">
        <h1 className="text-lg font-medium py-2">Upload Image</h1>
        {images.length > 0 ? (
          <div
            className="flex justify-center items-center py-3"
            onDragOver={allowDrop}
            onDrop={handleDrop}
          >
            <div className="rounded-xl w-full h-[20rem] border bg-white border-white ">
              <img
                src={images[0]}
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
                className={`overflow-hidden rounded-lg flex justify-center items-center border border-dashed border-gray-400 cursor-pointer   ${
                  images.length < 2 && "h-[5rem]"
                }`}
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
          </div>
        )}
        <div
          className="py-3 flex justify-center items-center border rounded-lg bg-white m-2 cursor-pointer"
          onClick={handleUpload}
        >
          Upload images in cloudinary
        </div>
      </div>
    </div>
  );
});

export default ImageUpload;
