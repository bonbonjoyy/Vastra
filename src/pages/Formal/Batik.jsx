import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Military() {
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
            src="/asset/image/image 248.svg"
            alt="Denim Fashion"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Batik</h2> {/* Align text to the left */}
          
          <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}
          Outfit batik untuk pria adalah gaya busana yang menggunakan batik sebagai bahan utama pada pakaian, seperti kaos, celana panjang, dan rok. Batik adalah teknik pewarnaan yang menggunakan lilin untuk mencegah warna menyebar ke area yang tidak diinginkan pada kain. Outfit batik biasanya digunakan untuk acara-acara yang memerlukan penampilan yang terlihat indah dan serta dapat memberikan kesan yang terlihat indah dan artistik.          </p>
          
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
          Kelebihan batik meliputi tidak hanya tampil modis, tetapi juga melestarikan warisan budaya Indonesia. Batik adalah pilihan sempurna untuk tampil elegan dan mencerminkan kebanggaan terhadap budaya tradisional, sambil tetap sesuai dengan kebutuhan modern.          </p>

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
