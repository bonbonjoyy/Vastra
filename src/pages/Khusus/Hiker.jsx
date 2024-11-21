import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Hiker() {
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
            src="/asset/image/image 9.svg"
            alt="Hiker"
            className="object-contain w-full max-h-[597px]" 
            style={{ objectPosition: 'left' }}  
          />
        </div>
        
        <div className="flex-1 md:pl-20 md:pr-40 pr-10 py-1 bg-pink-50 flex flex-col justify-start items-start text-left h-full mt-10">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Hiker</h2>
          
          <p className="text-black mt-8 mb-1 text-justify">
        Outfit hiker untuk pria adalah gaya berpakaian yang dirancang untuk kegiatan hiking atau mendaki, dengan fokus pada kenyamanan, fungsionalitas, dan perlindungan dari elemen alam seperti cuaca dan medan. Outfit ini biasanya mencakup pakaian dan aksesori yang tahan lama, breathable, serta mendukung mobilitas untuk berbagai kondisi medan. Selain digunakan untuk hiking, gaya ini kini juga menjadi tren fesyen karena memberikan kesan sporty dan tangguh.          </p>
        <p className="text-black mt-1  mb-8 text-justify"> 
        Kelebihan hiker adalah kepraktisannya. Outfit ini dirancang untuk memberikan kenyamanan dan perlindungan saat melakukan kegiatan fisik yang intensif. Anda tidak hanya siap menghadapi kondisi alam yang menantang, tetapi juga tetap nyaman dan stylish. Gaya ini adalah perpaduan sempurna antara fungsi dan mode, ideal untuk kegiatan outdoor dan tren kasual.

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

export default Hiker;
