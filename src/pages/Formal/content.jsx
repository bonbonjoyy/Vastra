import React from 'react';
import ProductCard from '/src/components/ProductCard/ProductCard';
import SectionDivider from '../../components/SectionDivider/SectionDivider';


function Formal() {
  const products = [
    { image: '/asset/image/fullbody.svg', text: 'FullBody Suit', link: '/Fullbodysuit' },
    { image: '/asset/image/casualformal.svg', text: 'Casual' ,link: '/Casuall' },
    { image: '/asset/image/smartc.svg', text: 'Smart Casual' , link: '/SmartCasuall'},
    { image: '/asset/image/preppy.svg', text: 'Preppy Cardigan' , link: '/PreppyCardigan' },
    { image: '/asset/image/preppysweater.svg', text: 'Preppy Sweater' ,link: '/PreppySweater' },
    { image: '/asset/image/batik.svg', text: 'Batik', link:'/Batik' },
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
          <p></p>
        </div>
      </div>
      <SectionDivider />
      <main>
        <section className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-20">
          <div className="text-left w-full md:w-1/2 mb-8 md:mb-5">
            <p className="text-5xl leading-relaxed">Setelan Formal</p>
          </div>
          <div className="text-left w-full md:w-1/2">
            <p className="text-justify leading-relaxed">
            Ditujukan untuk suasana formal atau profesional, seperti di kantor, rapat bisnis, atau acara semi-formal. Setelan ini mencakup jas atau blazer, kemeja formal, dan dasi, yang dipadukan dengan celana bahan dan sepatu kulit. Warna-warna netral seperti hitam, biru tua, dan abu-abu biasanya dipilih untuk memberi kesan profesional dan rapi.            
            </p>
          </div>
        </section>
        <SectionDivider />
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

export default Formal;
