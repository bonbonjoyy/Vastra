import React, { Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Heading, Img, BannerProduk, getAllProducts } from "../../components";

const ProductCard = ({ image, title, price, onClick, category }) => {
  // Function untuk menentukan posisi gambar berdasarkan jenis produk
  const getImagePosition = () => {
    const titleLower = title.toLowerCase();
    if (category === "aksesoris") {
      if (titleLower.includes("topi")) return "object-[center_30%]";
      if (titleLower.includes("kalung")) return "object-[center_20%]";
      if (titleLower.includes("sabuk")) return "object-[center_40%]";
      if (titleLower.includes("dompet")) return "object-[center_45%]";
      return "object-[center_40%]";
    }
    return "object-[center_25%]";
  };

  return (
    <div className="flex flex-col cursor-pointer" onClick={onClick}>
      <div className="relative border border-black h-[400px]">
        <div className="relative h-[340px] overflow-hidden">
          <div className="absolute inset-0">
            <Img
              src={image}
              alt={title}
              className={`w-full h-full object-cover ${getImagePosition()}`}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-black">
          <Heading as="h3" className="text-l font-bold text-black text-center truncate">
            {title}
          </Heading>
          <Heading as="p" className="text-m font-normal text-gray-500 text-center">
            {price}
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default function Content() {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").pop().toLowerCase();
  const products = getAllProducts(category);

  const handleProductClick = (productId) => {
    navigate(`/Produk-Kami/${category}/${productId}`);
  };

  return (
    <div className="px-[120px]">
      <div className="mt-[125px]">
        <div className="grid grid-cols-4 gap-x-10 gap-y-[75px]">
          <Suspense fallback={<div>Loading products...</div>}>
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard
                  {...product}
                  category={category}
                  onClick={() => handleProductClick(product.id)}
                />
              </div>
            ))}
          </Suspense>
        </div>
        <BannerProduk />
      </div>
    </div>
  );
}