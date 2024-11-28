import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Military() {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/Khusus'); 
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
            src="/asset/image/image 12.svg"
            alt="Military"
            className="object-contain w-full max-h-[597px]"  
            style={{ objectPosition: 'left' }}  
          />
        </div>
        
        <div className="flex-1 md:pl-20 md:pr-40 pr-10 py-1 bg-pink-50 flex flex-col justify-start items-start text-left h-full mt-10">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Military</h2> 
          
          <p className="text-black mt-8 mb-1 text-justify"> 
        Outfit military untuk pria adalah Pakaian yang dirancang untuk memberikan kesan kuat dan tegas. Pakaian ini biasanya terdiri dari jaket atau coat dengan detail militer, celana atau rok, sepatu boot, dan aksesori seperti topi dan sabuk. Gaya berpakaian yang terinspirasi oleh pakaian militer, yang mengedepankan fungsionalitas, daya tahan, dan tampilan maskulin atau tangguh. Gaya ini sering kali menggunakan elemen seperti warna-warna khas militer (hijau zaitun, cokelat, beige, dan hitam), potongan pakaian yang utilitarian, serta aksesori yang terlihat kokoh.          </p>
        <p className="text-black mt-1  mb-8 text-justify"> 
        Kelebihan military meliputi kesan yang tangguh, fungsional, dan stylish. Gaya ini tidak hanya memberikan kenyamanan, tetapi juga kesan yang kuat dan percaya diri, menjadikannya pilihan yang ideal untuk berbagai kesempatan.

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

export default Military;
