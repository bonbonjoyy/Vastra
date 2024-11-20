import React from 'react';
import ProductCard from '/src/components/ProductCard/ProductCard';
import SectionDivider from '../../components/SectionDivider/SectionDivider';

function Khusus() {
  const products = [
    { image: '/asset/image/arabicdress.svg', text: 'Arabic Dress', link: '/Arabicdress' },
    { image: '/asset/image/vintage.svg', text: 'Vintage' ,link: '/Vintage' },
    { image: '/asset/image/hiker.svg', text: 'Hiker' , link: '/Hiker'},
    { image: '/asset/image/royal.svg', text: 'The Royal' , link: '/Theroyal' },
    { image: '/asset/image/hiphop.svg', text: 'Hip Hop' ,link: '/Hiphop' },
    { image: '/asset/image/military.svg', text: 'Military', link:'/Military' },
    { image: '/asset/image/winter.svg', text: 'Winter Coat' , link: '/Wintercoat'},
    { image: '/asset/image/biker.svg', text: 'Biker', link:'/Biker' },
  ];

  return (
    <div className="font-sans text-gray-900">
      <div className="relative">
        {/* Gambar Header */}
        <img
          src="/asset/image/Header.svg"
          alt="Header Image"
          className="w-full h-[239px] object-cover"
        />
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold space-y-4">
          <p>Galeri Vastra</p>
        </div>
      </div>

      <SectionDivider />

      <main>
        {/* Deskripsi */}
        <section className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-20">
          <div className="text-left w-full md:w-1/2 mb-8 md:mb-5">
            <p className="text-5xl leading-relaxed">Setelan Khusus</p>
          </div>
          <div className="text-left w-full md:w-1/2">
            <p className="text-justify leading-relaxed">
            Dipakai untuk acara-acara spesial yang menuntut penampilan elegan dan berkelas, seperti pernikahan, gala, atau pesta formal. Terdiri dari pakaian formal premium seperti tuxedo atau setelan dengan potongan khusus, biasanya dengan tambahan aksesoris mewah seperti dasi kupu-kupu, jam tangan eksklusif, dan sepatu formal.
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* Grid Produk */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-10 p-20">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </section>
      </main>

      <SectionDivider />
    </div>
  );
}

export default Khusus;
