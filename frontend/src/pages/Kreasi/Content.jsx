import React, { useState, useRef } from "react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

const categories = [
  { name: "Semua", isActive: true },
  { name: "Warna Kulit", isActive: false },
  { name: "Bentuk Badan", isActive: false },
];

const images = [
  { src: "asset/image/1.svg", category: ["Warna Kulit Sawo Matang","Bentuk Badan Kurus"] },
  { src: "asset/image/2.svg", category: ["Warna Kulit Terang","Bentuk Badan Sedang"] },
  { src: "asset/image/3.svg", category: ["Bentuk Badan Gemuk"] },
  { src: "asset/image/4.svg", category: ["Warna Kulit Terang","Bentuk Badan Sedang"]},
  { src: "asset/image/5.svg", category: ["Warna Kulit Terang","Bentuk Badan Sedang"] },
  { src: "asset/image/6.svg", category: ["Warna Kulit Terang","Bentuk Badan Sedang"] },
  { src: "asset/image/7.svg", category: ["Warna Kulit Terang","Bentuk Badan Sedang"] },
  { src: "asset/image/8.svg", category: ["Warna Kulit Sawo Matang","Bentuk Badan Kurus"] },
  { src: "asset/image/9.svg", category: ["Warna Kulit Gelap","Bentuk Badan Sedang"] },
  { src: "asset/image/10.svg", category: ["Warna Kulit Terang","Bentuk Badan Sedang"] },
  { src: "asset/image/11.svg", category: ["Warna Kulit Gelap"] },
  { src: "asset/image/12.svg", category: ["Warna Kulit Gelap"] },
  { src: "asset/image/13.svg", category: ["Warna Kulit Sawo Matang"] },
  { src: "asset/image/14.svg", category: ["Warna Kulit Gelap"] },
  { src: "asset/image/15.svg", category: ["Warna Kulit Gelap"] },
  { src: "asset/image/16.svg", category: ["Warna Kulit Gelap", "Bentuk Badan Kurus"] },
  { src: "asset/image/17.svg", category: ["Warna Kulit Gelap"] },
  { src: "asset/image/18.svg", category: ["Warna Kulit Sawo Matang","Bentuk Badan Sedang"] },
  { src: "asset/image/19.svg", category: ["Warna Kulit Gelap","Bentuk Badan Kurus"] },
  { src: "asset/image/20.svg", category: ["Warna Kulit Gelap","Bentuk Badan Gemuk"] },
  { src: "asset/image/21.svg", category: ["Warna Kulit Terang"] },
  { src: "asset/image/22.svg", category: ["Warna Kulit Gelap"] },
  { src: "asset/image/23.svg", category: ["Bentuk Badan Gemuk"] },
  { src: "asset/image/24.svg", category: ["Bentuk Badan Gemuk"] },
  { src: "asset/image/25.svg", category: ["Warna Kulit Sawo Matang"] },
  { src: "asset/image/26.svg", category: ["Bentuk Badan Gemuk"] },
  { src: "asset/image/27.svg", category: ["Bentuk Badan Gemuk"] },
  { src: "asset/image/28.svg", category: ["Warna Kulit Terang","Bentuk Badan Sedang"] },
  { src: "asset/image/29.svg", category: ["Bentuk Badan Gemuk"] },
  { src: "asset/image/30.svg", category: ["Warna Kulit Terang"] },
  { src: "asset/image/31.svg", category: ["Warna Kulit Terang"] },
  { src: "asset/image/32.svg", category: ["Warna Kulit Sawo Matang"] },
  { src: "asset/image/33.svg", category: ["Warna Kulit Sawo Matang"] },
  { src: "asset/image/34.svg", category: ["Warna Kulit Sawo Matang", "Bentuk Badan Gemuk"] },
  { src: "asset/image/35.svg", category: ["Warna Kulit Sawo Matang","Bentuk Badan Sedang"] },
  { src: "asset/image/36.svg", category: ["Warna Kulit Gelap","Bentuk Badan Sedang"] },
  { src: "asset/image/37.svg", category: ["Warna Kulit Sawo Matang"] },
  { src: "asset/image/38.svg", category: ["Warna Kulit Terang"] },
  { src: "asset/image/39.svg", category: ["Warna Kulit Sawo Matang"] },
  { src: "asset/image/40.svg", category: ["Warna Kulit Sawo Matang"] },
  { src: "asset/image/41.svg", category: ["Warna Kulit Sawo Matang"] },
  { src: "asset/image/42.svg", category: ["Warna Kulit Sawo Matang"] },
];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const firstImageRef = useRef(null);

  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const filteredImages = images.filter((image) => {
    return (
      image.category.some((category) =>
        category.toLowerCase().includes(activeCategory.toLowerCase())
      ) || activeCategory === "Semua"
    );
  });

  return (
    <div className="flex flex-col lg:flex-row items-start gap-4 p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Filter */}
      <div className="w-full lg:w-[22%] xl:w-[20%] p-4 mt-0 lg:mt-0 ml-20">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Galeri */}
      <div className="w-full lg:w-[78%] xl:w-[64%]">
        <ImageGallery
          images={filteredImages}
          activeCategory={activeCategory}
          firstImageRef={firstImageRef}
        />
      </div>
    </div>
  );
};

export default HomePage;
