import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Polo() {
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
            src="/asset/image/polo.svg"
            alt="Polo"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Polo</h2> {/* Align text to the left */}
          
          <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}
          Outfit polo untuk pria adalah gaya berpakaian yang menggunakan kaos polo, yaitu jenis kaos dengan kerah dan biasanya dilengkapi dengan kancing di bagian leher. Kaos polo awalnya dirancang untuk aktivitas olahraga seperti polo atau tenis, tetapi sekarang telah menjadi pakaian kasual yang populer di berbagai kesempatan, baik untuk tampilan santai maupun lebih formal. Kaos polo terbuat dari berbagai jenis bahan, seperti katun, polyester, atau campuran keduanya, yang memberikan kenyamanan serta sirkulasi udara yang baik.
          </p>
          
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
          Kelebihan polo ini dapat tampil santai namun tetap terkesan rapi dan stylish. Polo merupakan pilihan yang tepat untuk gaya kasual yang tidak terlalu santai, memberikan kenyamanan dan kesan lebih terstruktur dalam satu tampilan yang sederhana dan elegan.
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

export default Polo;