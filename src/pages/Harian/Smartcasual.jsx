import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Smartcasual() {
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
            src="/asset/image/4adb5681732ab72232a9c23a5702d433 1.svg"
            alt="Smartcasual"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mb-6">Smart Casual</h2>
          <p className="text-black mt-1 mb-8 text-justify">          Smart Casual adalah sebutan untuk busana profesional yang memadukan pakaian klasik dengan kasual atau trendi. Itu sebabnya, Smart Casual membuat tampilan rapi dan profesional tapi tidak terlalu formal. Tidak terlalu resmi, tapi juga tidak terlalu santai.
          Gaya smart casual ini seringkali menjadi dress code untuk ngantor di beberapa perusahaan. Outfit ini juga kerap jadi dress code di berbagai acara formal lainnya. Itu sebabnya, outfit smart casual kini semakin digandrungi para millennial dan genz di Tanah Air. Begini panduannya untuk para pria dan wanita.
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

export default Smartcasual;
