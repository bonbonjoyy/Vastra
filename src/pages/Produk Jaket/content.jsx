import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Heading, Img, BannerProduk, getAllProducts } from "../../components";

const ProductCard = ({ image, title, price, onClick }) => (
  <div className="flex flex-col cursor-pointer" onClick={onClick}>
    <div className="relative border border-black h-[400px]">
      <div className="relative h-[340px] overflow-hidden">
        <Img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-black">
        <Heading as="h3" className="text-l font-bold text-black text-center">
          {title}
        </Heading>
        <Heading as="p" className="text-m font-normal text-gray-500 text-center">
          {price}
        </Heading>
      </div>
    </div>
  </div>
);

export default function Content() {
  const navigate = useNavigate();
  const products = getAllProducts("jaket");

  const handleProductClick = (productId) => {
    navigate(`/Produk-Kami/jaket/${productId}`);
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