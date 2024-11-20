import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';


function Hiphop() {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/Khusus'); 
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
            src="/asset/image/image 255.svg"
            alt="Casual"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mb-6">Hip hop</h2>
        <p className="text-black mt-1 mb-8 text-justify">
          Mengacu pada berbagai gaya berpakaian yang berasal dari kaum kulit hitam urban Amerika dan kaum muda kota di kota-kota seperti New York City , Atlanta , dan Los Angeles . Menjadi bagian utama dari budaya hip hop , gaya ini selanjutnya berkembang di kota-kota lain di seluruh Amerika Serikat,dengan masing-masing menyumbangkan elemen yang berbeda pada gaya keseluruhan yang sekarang dikenal di seluruh dunia.
          </p>
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
