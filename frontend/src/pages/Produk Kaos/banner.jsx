import { Heading } from "../../components";
import React from "react";

export default function Banner() {
  return (
<<<<<<< HEAD
    <div className="relative flex h-[452px] items-center justify-start bg-[url(/asset/image/bannerProduk.svg)] bg-cover bg-no-repeat md:h-auto md:py-5">
      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />

      {/* Content container */}
      <div className="container-xs relative ml-10 px-14 py-24 md:px-5 md:ml-5 md:py-16">
=======
    <div className="flex h-[452px] items-center justify-start bg-[url(/asset/image/bannerProduk.svg)] bg-cover bg-no-repeat md:h-auto md:py-5">
      <div className="container-xs ml-10 px-14 py-24 md:px-5 md:ml-5 md:py-16">
>>>>>>> 992d6b7c20873a474a69820bbacbf391b0c530f4
        <Heading
          as="h1"
          className="text-[48px] font-bold FONT text-white md:text-[44px] sm:text-[38px]"
        >
<<<<<<< HEAD
          PRODUK VASTRA
=======
          PRODUK KAMI
>>>>>>> 992d6b7c20873a474a69820bbacbf391b0c530f4
        </Heading>
      </div>
    </div>
  );
}
