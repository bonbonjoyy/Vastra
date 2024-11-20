import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Tropical() {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/Harian'); 
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
            src="/asset/image/172172361162df48b0228eca3cb4d91da78d0932fd_thumbnail_750x999 1.svg"
            alt="Denim Fashion"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mb-6">Tropical</h2>
          <p className="text-black mt-1 mb-8 text-justify">
          Outfit dengan gaya tropical sangat identik dengan motif-motif cerah dan santai, sempurna untuk liburan. Materialnya biasanya lebih ringan dan nyaman, seperti katun atau linen, yang cocok digunakan di cuaca panas.
            <br /><br />
            Gaya ini mengedepankan kesan kasual, namun tetap stylish, membuatnya ideal untuk berbagai kesempatan santai atau liburan.
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

export default Tropical;
