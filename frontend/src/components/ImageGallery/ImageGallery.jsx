import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          {/* Tautan unduh */}
          <a
            href={image.src}
            download={`image-${index + 1}`}
            className="relative block"
          >
            {/* Gambar */}
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full h-auto cursor-pointer transition-transform"
            />
            {/* Ikon download */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-white text-3xl"
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
