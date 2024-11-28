const ImageGallery = ({ images, activeCategory, firstImageRef }) => {
    const filteredImages =
      activeCategory === "Semua"
        ? images
        : images.filter((image) =>
            image.category.includes(activeCategory)
          );
  
    return (
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 -ml-4"> {/* Negative margin */}
          {filteredImages.map((image, index) => (
            <div key={index} className="relative group">
              <img
                ref={index === 0 ? firstImageRef : null}
                src={image.src}
                alt={`Image ${index + 1}`}
                className="w-full h-auto "
              />
            </div>
          ))}
        </div>
      </div>
    );
  };  
  export default ImageGallery;