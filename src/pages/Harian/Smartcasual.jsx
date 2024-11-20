import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Smartcasual() {
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
            src="/asset/image/smartcasual.svg"
            alt="Smartcasual"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Smart Casual</h2> {/* Align text to the left */}
          
          <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}
          Outfit smart casual untuk pria adalah gaya berpakaian yang memadukan elemen kasual (santai) dengan sentuhan formal untuk menciptakan tampilan yang rapi namun tetap nyaman. Gaya ini fleksibel dan cocok untuk berbagai situasi semi-formal, seperti acara kantor yang santai, makan malam, atau pertemuan dengan klien.          </p>
          
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
          Kelebihan smart casual adalah bahwa ia dapat memberikan tampilan yang terlihat rapi dan terorganisir, namun tetap terlihat santai dan tidak terlalu formal. Selain itu, outfit smart casual juga dapat memberikan kesan yang terlihat profesional dan terlihat rapi, namun tetap terlihat santai dan tidak terlalu terbebani.          </p>

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

export default Smartcasual;
