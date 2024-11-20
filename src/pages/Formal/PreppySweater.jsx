import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Hiphop() {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/Formal'); 
  };

  return (
    <div className="font-sans text-gray-900 h-screen overflow-hidden">
      <Header /> {/* Reusable Header */}

      <div className="w-full">
        <hr className="border-t border-black" />
      </div>
      
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex-max-w-[50%] flex-shrink-0 h-full">
          <img
            src="/asset/image/image 235.svg"
            alt="Denim Fashion"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Preppy Sweater</h2> {/* Align text to the left */}
          
          <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}
          Outfit preppy sweater untuk pria adalah gaya berpakaian yang terinspirasi oleh budaya dan estetika universitas atau sekolah bergengsi di Amerika Serikat, dengan fokus pada tampilan yang rapi, terstruktur, dan sedikit klasik. Gaya preppy sering melibatkan pakaian yang memiliki elemen formal atau semi-formal yang dipadukan dengan kesan santai. Sweater preppy biasanya terbuat dari bahan seperti wol, kasmir, atau cotton, dengan desain yang simpel dan elegan. Gaya ini juga dikenal dengan penggunaan warna-warna cerah, pola-pola ikonik seperti garis-garis, argyle, atau pola kabel (cable knit), dan sering dipadukan dengan celana chinos atau rok midi.          </p>
          
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
          Kelebihan preppy sweater dapat memberikan kesan tampil elegan, terstruktur, dan nyaman dalam satu tampilan. Gaya ini cocok untuk berbagai kesempatan, memberikan kesan cerdas dan modis tanpa perlu berusaha terlalu keras.          </p>
          <button 
            className="px-8 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition duration-300 mt-1 mb-6"
            onClick={handleBackClick}
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hiphop;
