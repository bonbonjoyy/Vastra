import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Tropical() {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/Harian'); 
  };

  return (
    <div className="font-sans text-gray-900 min-h-screen overflow-auto">
    <Header /> {/* Reusable Header */}

    <div className="w-full">
      <hr className="border-t border-black" />
    </div>
    
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex-max-w-[50%] flex-shrink-0 h-full">
          <img
            src="/asset/image/172172361162df48b0228eca3cb4d91da78d0932fd_thumbnail_750x999 1.svg"
            alt="Denim Fashion"
            className="object-contain w-full max-h-[597px]"  
            style={{ objectPosition: 'left' }}  
          />
        </div>
        
        <div className="flex-1 md:pl-20 md:pr-40 pr-10 py-1 bg-pink-50 flex flex-col justify-start items-start text-left h-full mt-10">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Tropical</h2>
          
          <p className="text-black mt-8 mb-1 text-justify"> 
          Outfit tropical untuk pria adalah gaya berpakaian yang dirancang untuk memberikan kenyamanan dan gaya di cuaca tropis yang panas dan lembap. Outfit ini memadukan pakaian ringan, bahan bernapas, dan motif yang segar untuk menciptakan tampilan santai namun tetap stylish.
          </p>
          
          <p className="text-black mt-1  mb-8 text-justify"> 
          Kelebihan tropical bahwa ia dapat memberikan tampilan yang terlihat santai dan terbuka, serta dapat memberikan kesan yang terlihat sehat dan terbuka. Selain itu memberikan pilihan sempurna untuk tetap tampil modis dan nyaman di cuaca panas. Dengan bahan dan motif yang sesuai, gaya ini mencerminkan semangat santai namun tetap elegan.          </p>
          <button 
           className="px-8 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition duration-300 mt-6 mb-6"
           onClick={handleBackClick}
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tropical;
