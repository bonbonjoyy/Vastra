import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Casual() {
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
            src="/asset/image/dc9867c8542978c8375a824d60ebb1f6 1.svg"
            alt="Casual"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mb-6">Casual</h2>
          <p className="text-black mt-1 mb-8 text-justify">          Casual style adalah gaya pakaian yang nyaman, santai, dan tidak terlalu formal. Gaya ini sering digunakan dalam situasi sehari-hari atau saat kamu ingin tampil rileks tanpa terlalu banyak pernak-pernik. Pemilihan outfit casual style merupakan aspek penting dalam dunia fashion yang memungkinkan kita untuk tampil santai namun tetap stylish dalam berbagai kesempatan. 
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

export default Casual;
