import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Flannel() {
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
            src="/asset/image/adfecd64d42c309460189be4e40e04d3 1.svg"
            alt="Flannel"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Flannel</h2> {/* Align text to the left */}
          
          <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}
          Outfit flanel untuk pria adalah gaya berpakaian yang menggunakan bahan flanel, yaitu kain yang lembut dan hangat yang biasanya terbuat dari wol atau campuran bahan sintetis. Flanel sering kali dikenal dengan pola kotak-kotaknya yang khas, meskipun saat ini tersedia dalam berbagai warna dan desain. Outfit flanel cocok untuk suasana santai dan cuaca yang lebih dingin, seperti musim gugur dan musim dingin, karena memberikan kehangatan dan kenyamanan.          </p>
          
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
          Kelebihan flanel anda dapat tampil stylish dan tetap nyaman. Flanel menjadi pilihan yang sempurna untuk gaya kasual dan memberikan kesan yang hangat di musim yang lebih dingin.          </p>

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

export default Flannel;
