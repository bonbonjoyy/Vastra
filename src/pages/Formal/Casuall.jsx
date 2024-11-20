import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Out() {
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
            src="/asset/image/casualformal.svg"
            alt="Denim Fashion"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Casual</h2> {/* Align text to the left */}
          
          <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}
          Outfit casual untuk pria adalah gaya pakaian formal menjadi lebih santai dan nyaman, tanpa mengurangi kesan rapi dan profesional. Biasanya, setelan resmi terdiri dari jas atau blazer, celana kain, kemeja berkancing, dan dasi. Dengan menambahkan elemen-elemen kasual pada setelan resmi, Anda dapat menciptakan tampilan yang lebih santai dan lebih mudah diterima dalam berbagai acara non-formal atau semi-formal.          </p>
          
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
          Kelebihan casual meliputi anda bisa tetap tampil profesional tetapi lebih santai, memberikan kesan yang lebih modern dan sesuai dengan acara yang lebih informal atau semi-formal. Gaya ini sangat fleksibel dan cocok untuk berbagai kesempatan.          </p>

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

export default Out;