import React, { useState } from "react";
import { Img } from "../Img/Img";

export const BannerProduk = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerData = [
    {
      image: "/asset/image/BannerProduk1.svg",
      discount: "50%",
      text: "OFF",
      textColor: "text-white",
      layout: "default",
    },
    {
      image: "/asset/image/BannerProduk2.svg",
      discount: "11",
      text: "11",
      textColor: "text-black",
      layout: "split",
    },
    {
      image: "/asset/image/BannerProduk3.svg",
      leftText: "BIG",
      rightTexts: ["SALE", "SALE", "SALE", "SALE"],
      textColor: "text-white",
      layout: "multiple",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  const renderSlideContent = () => {
    const currentData = bannerData[currentSlide];

    switch (currentData.layout) {
      case "split":
        return (
          <>
            <b
              className={`absolute top-[70px] left-[175px] text-[158px] font-bold
              ${currentData.textColor} [text-shadow:1px_0_0_#000,0_1px_0_#000,-1px_0_0_#000,0_-1px_0_#000] font-helvetica`}
            >
              {currentData.discount}
            </b>
            <b
              className={`absolute top-[70px] right-[175px] text-[158px] font-bold
              ${currentData.textColor} [text-shadow:1px_0_0_#000,0_1px_0_#000,-1px_0_0_#000,0_-1px_0_#000] font-helvetica`}
            >
              {currentData.text}
            </b>
          </>
        );
      case "multiple":
        return (
          <>
            <b
              className="absolute top-[90px] left-[175px] text-[108px] text-white font-bold
              [text-shadow:1px_0_0_#000,0_1px_0_#000,-1px_0_0_#000,0_-1px_0_#000] font-helvetica"
            >
              {currentData.leftText}
            </b>
            <div className="absolute top-[-20px] right-[195px] flex flex-col gap-0">
              {currentData.rightTexts.map((text, index) => (
                <b
                  key={index}
                  className="text-[108px] text-white font-bold leading-[0.8] tracking-wider"
                  style={{
                    textShadow:
                      "1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000, 0 -1px 0 #000] font-helvetica",
                  }}
                >
                  {text}
                </b>
              ))}
            </div>
          </>
        );
      default:
        return (
          <>
            <b
              className="absolute top-[-10px] left-[97px] text-[158px] text-white font-bold
              [text-shadow:1px_0_0_#000,0_1px_0_#000,-1px_0_0_#000,0_-1px_0_#000] font-helvetica"
            >
              {currentData.discount}
            </b>
            <b
              className="absolute top-[115px] left-[757px] text-[158px] text-white font-bold
              [text-shadow:1px_0_0_#000,0_1px_0_#000,-1px_0_0_#000,0_-1px_0_#000] font-helvetica"
            >
              {currentData.text}
            </b>
          </>
        );
    }
  };

  return (
    <div className="relative border border-black h-[338px] overflow-hidden w-full mt-[88px] mb-[74px]">
      <Img
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt=""
        src={bannerData[currentSlide].image}
      />

      {/* Arrow Button */}
      <button
        onClick={nextSlide}
        className="absolute top-[131px] right-[32px] w-[75px] h-[76px] cursor-pointer z-10 rounded-full bg-white border border-black transition-colors hover:bg-black group"
      >
        <svg
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <path
            d="M2 2L20 16L2 30"
            stroke="black"
            strokeWidth="3"
            className="group-hover:stroke-white transition-colors"
          />
        </svg>
      </button>

      <div className="absolute bottom-0 left-0 w-full h-[43px] bg-white border-t border-black" />

      {/* Slider Dots */}
      <div className="absolute bottom-[11px] left-1/2 transform -translate-x-1/2 flex gap-[12px]">
        {bannerData.map((_, index) => (
          <div
            key={index}
            className={`w-[10px] h-[10px] rounded-full border border-black 
              ${currentSlide === index ? "bg-black" : "bg-white"}`}
          />
        ))}
      </div>

      {renderSlideContent()}
    </div>
  );
};

export default BannerProduk;
