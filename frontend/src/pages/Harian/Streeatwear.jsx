import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Streetwear() {
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
            src="/asset/image/image 236.svg"
            alt="StreetWear"
            className="object-contain w-full max-h-[597px]"
            style={{ objectPosition: 'left' }}  
          />
        </div>
        <div className="flex-1 md:pl-20 md:pr-40 pr-10 py-1 bg-pink-50 flex flex-col justify-start items-start text-left h-full mt-10">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Street Wear</h2> 
          
          <p className="text-black mt-8 mb-1 text-justify"> 
          Outfit streetwear untuk pria adalah gaya berpakaian yang terinspirasi dari budaya jalanan (street culture), seperti skateboarding, hip-hop, dan fashion urban. Gaya ini sangat dipengaruhi oleh elemen-elemen seperti grafis, logo besar, dan pakaian kasual yang nyaman, seperti hoodie, t-shirt oversized, sneakers, dan celana longgar. 
Streetwear tidak hanya tentang pakaian, tetapi juga mencakup sikap dan gaya hidup, menciptakan tampilan yang berani, casual, dan terkadang provokatif.

          </p>
          
          <p className="text-black mt-1  mb-8 text-justify"> 
          Kelebihan streetwear meliputi kesan yang keren, nyaman, dan menciptakan pernyataan gaya yang kuat. Gaya ini terus berkembang dan tetap relevan karena kemampuannya untuk beradaptasi dengan budaya populer serta tren fesyen yang sedang naik daun.
          </p>
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

export default Streetwear;
