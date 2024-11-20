import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Vintage() {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/Formal'); 
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
            src="/asset/image/image 2.svg"
            alt="Denim Fashion"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Smart Casual</h2> {/* Align text to the left */}
          
          <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}
          Outfit smart casual untuk pria adalah gaya berpakaian yang menggabungkan elemen formal dengan sentuhan kasual yang lebih santai dan nyaman. Meskipun tetap mempertahankan kesan rapi dan terorganisir, smart casual pada setelan resmi tidak seformal setelan jas tradisional, tetapi tetap memberikan tampilan profesional yang lebih fleksibel dan tidak kaku. Gaya ini sangat populer untuk acara kantor yang tidak mengharuskan pakaian formal lengkap, pertemuan bisnis non-formal, atau acara sosial seperti makan malam atau pesta yang membutuhkan penampilan rapi namun tetap santai.          </p>
          
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
          Kelebihan smart casual meliputi  keseimbangan sempurna antara profesionalisme dan kenyamanan. Gaya ini memungkinkan Anda tampil rapi, fleksibel, dan tetap bergaya untuk berbagai acara yang membutuhkan penampilan yang lebih santai namun tetap terorganisir.          </p>

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
