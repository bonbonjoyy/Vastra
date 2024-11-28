import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Smartcasual() {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/Harian'); 
  };

  return (
    <div className="font-sans text-gray-900 min-h-screen overflow-auto">
      <Header /> 

      <div className="w-full">
        <hr className="border-t border-black" />
      </div>
      
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex-max-w-[50%] flex-shrink-0 h-full">
          <img
            src="/asset/image/4adb5681732ab72232a9c23a5702d433 1.svg"
            alt="Smartcasual"
            className="object-contain w-full max-h-[597px]"  
            style={{ objectPosition: 'left' }} 
          />
        </div>
        
        <div className="flex-1 md:pl-20 md:pr-40 pr-10 py-1 bg-pink-50 flex flex-col justify-start items-start text-left h-full mt-10">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Smart Casual</h2> 
          
        <p className="text-black mt-8 mb-1 text-justify"> 
        Outfit smart casual untuk pria adalah gaya berpakaian yang memadukan elemen kasual (santai) dengan sentuhan formal untuk menciptakan tampilan yang rapi namun tetap nyaman. Gaya ini fleksibel dan cocok untuk berbagai situasi semi-formal, seperti acara kantor yang santai, makan malam, atau pertemuan dengan klien.          </p>
          
          <p className="text-black mt-1  mb-8 text-justify"> 
          Kelebihan smart casual adalah bahwa ia dapat memberikan tampilan yang terlihat rapi dan terorganisir, namun tetap terlihat santai dan tidak terlalu formal. Selain itu, outfit smart casual juga dapat memberikan kesan yang terlihat profesional dan terlihat rapi, namun tetap terlihat santai dan tidak terlalu terbebani.          </p>

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

export default Smartcasual;
