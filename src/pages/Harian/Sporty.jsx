import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Sporty() {
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
            src="/asset/image/image 17.svg"
            alt="Denim Fashion"
            className="object-contain w-full max-h-[597px]" 
            style={{ objectPosition: 'left' }}
          />
        </div>
        
        <div className="flex-1 md:pl-20 md:pr-40 pr-10 py-1 bg-pink-50 flex flex-col justify-start items-start text-left h-full mt-10">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Sporty</h2> 
          <p className="text-black mt-8 mb-1 text-justify"> 
          Outfit sporty untuk pria adalah gaya berpakaian yang mengutamakan kenyamanan dan fungsionalitas, dengan sentuhan sporty atau atletik. Gaya ini sering kali melibatkan pakaian dan aksesori yang dirancang khusus untuk aktivitas fisik atau olahraga, namun sekarang juga banyak digunakan untuk tampilan kasual sehari-hari. Outfit sporty biasanya terdiri dari pakaian yang terbuat dari bahan elastis, ringan, dan breathable, serta desain yang simpel namun modern.          </p>
          
          <p className="text-black mt-1  mb-8 text-justify"> 
          Kelebihan sporty meliputi memberikan kesan yang terlihat aktif dan energik, serta dapat memberikan kesan yang terlihat nyaman dan terinspirasi dari dunia olahraga.           </p>
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

export default Sporty;
