import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Vintage() {
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
            src="/asset/image/image 15.svg"
            alt="Casual"
            className="w-full h-full object-cover"
          />
        </div>
     {/* Bagian kanan dengan penyesuaian layout */}
     <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
          
          {/* Heading Vintage ke bagian atas dengan jarak bawah */}
          <h2 className="text-5xl font-bold mb-6">Vintage</h2>

          {/* Paragraf penjelasan dengan jarak bawah */}
          <p className="text-black mt-1 mb-8 text-justify">
            Vintage style adalah istilah untuk menunjukkan aspek desain atau gaya yang otentik dan relevan dengan era tertentu.
            Bisa disebut, kalau tema vintage style telah menjadi lebih dari sekadar tren sementara, ia juga punya peran dengan pesona yang tak lekang oleh waktu.
            Menggabungkan sentuhan klasik dengan nuansa modern, gaya vintage masih bisa menciptakan estetika yang unik dan menarik bagi para pecinta mode dan desain interior.
          </p>

          {/* Tombol kembali dengan penempatan di bawah */}
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

export default Vintage;
