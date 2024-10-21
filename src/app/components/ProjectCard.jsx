import React, { useEffect, useRef, useState } from "react";
import {
  CodeBracketIcon,
  EyeIcon,
  XMarkIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  galleryImages,
  video,
}) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef(null);

  const toggleGallery = () => {
    setShowGallery(!showGallery);
    if (showGallery) {
      setCurrentIndex(0);
    }
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      toggleGallery();
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    if (showGallery) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showGallery]);
  return (
    <div>
      {!video && (
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            {gitUrl.length > 1 && (
              <Link
                href={gitUrl}
                className="h-14 w-14 mr-2 relative  border-[#ADB7BE] hover:border-white group/link"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
            {galleryImages.length > 0 && (
              <button
                onClick={toggleGallery}
                className="h-14 w-14 relative   hover:border-white group/link"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
              </button>
            )}
          </div>
        </div>
      )}
      {video && (
        <div className=" h-52 md:h-72 rounded-t-xl relative group">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-xl"
          >
            <source src={imgUrl} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      {showGallery && (
        <div
          className="fixed inset-0 z-50 bg-black  bg-opacity-70 flex items-center justify-center"
          // onClick={toggleGallery}
        >
          <div
            ref={modalRef}
            className="bg-[#181818] relative p-4 rounded-lg z-30 h-[95%] max-w-2xl w-full"
          >
            <div className="flex justify-end absolute top-4 right-4 ">
              <button onClick={toggleGallery} className="text-white  ">
                <XMarkIcon className=" w-6 h-6 flex" />
              </button>
            </div>
            <div className="flex items-center h-[80%] justify-between">
              <button onClick={prevImage} className="text-white">
                <ArrowLeftIcon className=" w-6 h-6 flex" />
              </button>
              <img
                src={galleryImages[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="w-[90%] h-full object-contain rounded-lg"
              />
              <button onClick={nextImage} className="text-white">
                <ArrowRightIcon className=" w-6 h-6 flex" />
              </button>
            </div>
            <div className="grid grid-cols-6 gap-2 mt-4">
              {galleryImages?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full rounded-lg h-20 md:h-28 object-cover cursor-pointer ${
                    currentIndex === index ? "border-2 border-green-500" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
