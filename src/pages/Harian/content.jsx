import React from 'react';
import ProductCard from '/src/components/ProductCard/ProductCard';
import SectionDivider from '../../components/SectionDivider/SectionDivider';

function Harian() {
  const products = [
    { image: '/asset/image/dod.svg', text: 'Denim on Denim', link: '/Denim' },
    { image: '/asset/image/casual.svg', text: 'Casual', link: '/Casual' },
    { image: '/asset/image/smartcasual.svg', text: 'Smart Casual', link: '/Smartcasual' },
    { image: '/asset/image/tropical.svg', text: 'Tropical', link: '/Tropical' },
    { image: '/asset/image/flanel.svg', text: 'Flannel', link: '/Flannel' },
    { image: '/asset/image/sporty.svg', text: 'Sporty', link: '/Sporty' },
    { image: '/asset/image/polo.svg', text: 'Polo', link: '/Polo' },
    { image: '/asset/image/streetwear.svg', text: 'Streetwear', link: '/Streetwear' }
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
            <p className="text-5xl leading-relaxed">Setelan Harian</p>
          </div>
          <div className="text-left w-full md:w-1/2">
            <p className="text-justify leading-relaxed">
              Didesain untuk kenyamanan dan kemudahan bergerak dalam kegiatan sehari-hari.
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

export default Harian;
