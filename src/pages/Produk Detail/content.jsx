import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heading, Img } from "../../components";
import { getProductById } from "../../components/ProdukData";
import Header from "../../components/Header/Header";

export default function Content() {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const product = getProductById(category, id);

  if (!product) return null;

  const productImages = product.images || [product.image];

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => {
      const newValue = prev + increment;
      return newValue > 0 ? newValue : 1;
    });
  };

  const handleAddToCart = () => {
    if (category !== "aksesoris" && !selectedSize) {
      alert("Silahkan pilih ukuran terlebih dahulu");
      return;
    }
    alert("Produk berhasil ditambahkan ke keranjang!");
  };

  const getImageStyle = () => {
    return "w-full h-full object-cover object-center";
  };

  return (
    <>
      <Header className="bg-white-a700" />
      <div className="px-[120px] pt-[74px] pb-[127px]">
        <div className="border border-black flex h-[713px]">
          {category === "aksesoris" ? (
            // Layout untuk aksesoris
            <>
              <div className="w-[548px] relative border-r border-black overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className={getImageStyle()}
                  />
                </div>
              </div>
            </>
          ) : (
            // Layout untuk jaket dan kaos
            <>
              {/* Main Image Container */}
              <div className="w-[548px] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={productImages[activeImageIndex]}
                    alt={product.title}
                    className={getImageStyle()}
                  />
                </div>
              </div>

              {/* Thumbnail Container */}
              <div className="w-[143px] border-l border-r border-black">
                <div className="h-full flex flex-col">
                  {productImages.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-[142.6px] relative group cursor-pointer
                        ${index !== 0 ? "border-t border-black" : ""}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={img}
                          alt={`${product.title} view ${index + 1}`}
                          className={getImageStyle()}
                        />
                      </div>
                      {/* Hover and Active Effects */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                      {activeImageIndex === index && (
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Right Section - Product Info */}
          <div className="flex-1 relative">
            {/* Back Button */}
            <div
              onClick={() => navigate(`/Produk-Kami/${category}`)}
              className="absolute right-[13px] top-[13px] w-[75px] h-[75px] flex items-center justify-center cursor-pointer rounded-full border border-black hover:bg-black group"
            >
              <div className="text-2xl font-normal group-hover:text-white">
                &lt;
              </div>
            </div>

            {/* Product Info */}
            <div className="pl-[95px] pt-[129px] pr-[129px] h-full">
              {/* Title and Price */}
              <div className="mb-[72px]">
                <Heading
                  as="h1"
                  className="text-[40px] font-bold mb-[25px] font-['Helvetica'] whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {product.title}
                </Heading>
                <div className="text-[34px] text-[#868686] font-['Helvetica']">
                  {product.price}
                </div>
              </div>

              {/* Size Selection - Only show for non-accessories */}
              {category !== "aksesoris" && (
                <div className="mb-[72px]">
                  <div className="text-lg font-['Helvetica'] mb-[15px]">
                    Ukuran
                  </div>
                  <div className="flex border border-black inline-flex">
                    {product.sizes.map((size, index) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-[42px] h-[42px] font-['Helvetica'] transition-colors
                          ${
                            selectedSize === size
                              ? "bg-black text-white"
                              : "bg-white text-black hover:bg-black hover:text-white"
                          }
                          ${index !== 0 ? "border-l border-black" : ""}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selection */}
              <div className="mb-[72px]">
                <div className="text-lg font-['Helvetica'] mb-[15px]">
                  Jumlah
                </div>
                <div className="flex border border-black inline-flex">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-[42px] h-[42px] font-['Helvetica'] hover:bg-black hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <div className="w-[42px] h-[42px] border-l border-r border-black flex items-center justify-center font-['Helvetica']">
                    {quantity}
                  </div>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-[42px] h-[42px] font-['Helvetica'] hover:bg-black hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-[216px] h-[42px] border border-black hover:bg-black hover:text-white transition-colors font-['Helvetica']"
              >
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
