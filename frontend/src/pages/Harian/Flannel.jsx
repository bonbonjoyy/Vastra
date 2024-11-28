import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Flannel() {
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
            src="/asset/image/adfecd64d42c309460189be4e40e04d3 1.svg"
            alt="Flannel"
            className="object-contain w-full max-h-[597px]"  
            style={{ objectPosition: 'left' }}  
          />
        </div>
        
        <div className="flex-1 md:pl-20 md:pr-40 pr-10 py-1 bg-pink-50 flex flex-col justify-start items-start text-left h-full mt-10">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Flannel</h2> 
          
          <p className="text-black mt-8 mb-1 text-justify"> 
          Outfit flanel untuk pria adalah gaya berpakaian yang menggunakan bahan flanel, yaitu kain yang lembut dan hangat yang biasanya terbuat dari wol atau campuran bahan sintetis. Flanel sering kali dikenal dengan pola kotak-kotaknya yang khas, meskipun saat ini tersedia dalam berbagai warna dan desain. Outfit flanel cocok untuk suasana santai dan cuaca yang lebih dingin, seperti musim gugur dan musim dingin, karena memberikan kehangatan dan kenyamanan.          </p>
          
          <p className="text-black mt-1  mb-8 text-justify"> 
          Kelebihan flanel anda dapat tampil stylish dan tetap nyaman. Flanel menjadi pilihan yang sempurna untuk gaya kasual dan memberikan kesan yang hangat di musim yang lebih dingin.          </p>

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

export default Flannel;
