import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Military() {
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
            src="/asset/image/image 12.svg"
            alt="Casual"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mb-6">Military</h2>
          <p className="text-black mt-1 mb-8 text-justify">
          Military adalah Pakaian standar yang dikenakan oleh anggota angkatan bersenjata dan paramiliter. Seragam militer memiliki berbagai tingkat formalitas, seperti seragam lengkap, seragam makan, seragam dinas, dan seragam tempur. tetapi ada juga pakian yang lebih santai seperti seragam olahraga dan seragam khusus untuk kegiatan tertentu.
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

export default Military;
