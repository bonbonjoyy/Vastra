import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Theroyal() {
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
            src="/asset/image/preppy.svg"
            alt="Denim Fashion"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Preppy Cardigan</h2> {/* Align text to the left */}
          
          <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}
          Outfit preppy cardigan untuk pria adalah kombinasi gaya berpakaian yang menggabungkan kesan rapi, elegan, dan sedikit klasik, dengan sentuhan modern yang nyaman. Cardigan, sebagai salah satu elemen utama, memberikan kehangatan dan kelembutan, sekaligus menambah dimensi pada tampilan preppy yang khas. Gaya ini biasanya melibatkan pakaian yang terinspirasi dari budaya sekolah atau universitas, sering kali dengan sentuhan warna-warna cerah dan pola yang bersih. Outfit preppy cardigan biasanya menciptakan tampilan yang terorganisir, cerdas, dan sedikit "intellectual."          </p>
          
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
          Kelebihan preppy cardigan akan mendapatkan keseimbangan antara gaya yang rapi, elegan, namun tetap santai. Gaya ini sangat cocok bagi Anda yang ingin tampil terorganisir dan cerdas tanpa harus mengorbankan kenyamanan.          </p>
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

export default Theroyal;