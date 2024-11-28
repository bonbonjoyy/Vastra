import React, { useState } from "react";

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    skinColor: false,
    bodyShape: false,
  });

  const toggleDropdown = (categoryName) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
  };

  const handleCategoryClick = (categoryName) => {
    if (categoryName === "Warna Kulit") {
      toggleDropdown("skinColor");
    } else if (categoryName === "Bentuk Badan") {
      toggleDropdown("bodyShape");
    } else {
      onCategoryChange(categoryName);
    }
  };

  return (
    <div className="border p-4 rounded-lg bg-gray-100 w-full sm:w-max mx-auto sm:mx-0">
      <div className="text-xl font-bold text-black mb-4">Filter</div>
      <div className="mb-4">
        <button
          onClick={() => handleCategoryClick("Semua")}
          className={`${
            activeCategory === "Semua" ? "" : "text-black"
          } block text-lg`}
        >
          Semua
        </button>
        <hr className="my-0 border-t border-gray-300" />
      </div>
      <div className="mb-4">
        <button
          onClick={() => handleCategoryClick("Warna Kulit")}
          className={`${
            activeCategory === "Warna Kulit" ? "text-blue-600" : "text-black"
          } block text-lg`}
        >
          Warna Kulit
        </button>

        {isDropdownOpen.skinColor && (
          <div className="pl-4 mt-2">
            <button
              onClick={() => {
                onCategoryChange("Warna Kulit Terang");
                setIsDropdownOpen((prevState) => ({
                  ...prevState,
                  skinColor: false,
                }));
              }}
              className={`${
                activeCategory === "Warna Kulit Terang"
                  ? "bg-white text-black"
                  : "text-black"
              } block w-full px-4 py-2 text-sm text-left hover:bg-gray-200 rounded-md focus:outline-none`}
            >
              Terang
            </button>
            <button
              onClick={() => {
                onCategoryChange("Warna Kulit Sawo Matang");
                setIsDropdownOpen((prevState) => ({
                  ...prevState,
                  skinColor: false,
                }));
              }}
              className={`${
                activeCategory === "Warna Kulit Sawo Matang"
                  ? "bg-white text-black"
                  : "text-black"
              } block w-full px-4 py-2 text-sm text-left hover:bg-gray-200 rounded-md focus:outline-none`}
            >
              Sawo Matang
            </button>
            <button
              onClick={() => {
                onCategoryChange("Warna Kulit Gelap");
                setIsDropdownOpen((prevState) => ({
                  ...prevState,
                  skinColor: false,
                }));
              }}
              className={`${
                activeCategory === "Warna Kulit Gelap"
                  ? "bg-white text-black"
                  : "text-black"
              } block w-full px-4 py-2 text-sm text-left hover:bg-gray-200 rounded-md focus:outline-none`}
            >
              Gelap
            </button>
          </div>
        )}

        <hr className="my-0 border-t border-gray-300" />
      </div>
      <div className="mb-4">
        <button
          onClick={() => handleCategoryClick("Bentuk Badan")}
          className={`${
            activeCategory === "Bentuk Badan" ? "text-blue-600" : "text-black"
          } block text-lg`}
        >
          Bentuk Badan
        </button>

        {isDropdownOpen.bodyShape && (
          <div className="pl-4 mt-2">
            <button
              onClick={() => {
                onCategoryChange("Bentuk Badan Kurus");
                setIsDropdownOpen((prevState) => ({
                  ...prevState,
                  bodyShape: false,
                }));
              }}
              className={`${
                activeCategory === "Bentuk Badan Kurus"
                  ? "bg-white text-black"
                  : "text-black"
              } block w-full px-4 py-2 text-sm text-left hover:bg-gray-200 rounded-md focus:outline-none`}
            >
              Kurus
            </button>
            <button
              onClick={() => {
                onCategoryChange("Bentuk Badan Sedang");
                setIsDropdownOpen((prevState) => ({
                  ...prevState,
                  bodyShape: false,
                }));
              }}
              className={`${
                activeCategory === "Bentuk Badan Sedang"
                  ? "bg-white text-black"
                  : "text-black"
              } block w-full px-4 py-2 text-sm text-left hover:bg-gray-200 rounded-md focus:outline-none`}
            >
              Sedang
            </button>
            <button
              onClick={() => {
                onCategoryChange("Bentuk Badan Gemuk");
                setIsDropdownOpen((prevState) => ({
                  ...prevState,
                  bodyShape: false,
                }));
              }}
              className={`${
                activeCategory === "Bentuk Badan Gemuk"
                  ? "bg-white text-black"
                  : "text-black"
              } block w-full px-4 py-2 text-sm text-left hover:bg-gray-200 rounded-md focus:outline-none`}
            >
              Gemuk
            </button>
          </div>
        )}

        <hr className="my-0 border-t border-gray-300" />
      </div>
    </div>
  );
};

export default CategoryFilter;
