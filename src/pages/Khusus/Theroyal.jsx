import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Theroyal() {
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
            src="/asset/image/royal.svg"
            alt="Casual"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">The Royal</h2>
        <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}
        Outfit the royal untuk pria adalah gaya berpakaian yang terinspirasi dari penampilan keluarga kerajaan atau bangsawan. Gaya ini menampilkan kesan elegan, anggun, dan berkelas dengan detail yang cermat pada bahan, potongan, dan aksesori. Outfit ini sering mencerminkan kemewahan namun tetap memiliki unsur kesopanan, sehingga tampak formal dan menawan.
        Gaya The Royal bisa diterapkan untuk acara formal seperti pesta, pernikahan, atau pertemuan resmi.          </p>
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
          Kelebihan the royal merupakan pilihan sempurna untuk tampil luar biasa di acara-acara formal. Kombinasi pakaian berkualitas tinggi, desain elegan, dan aksesori mewah menciptakan tampilan yang tidak hanya anggun tetapi juga meninggalkan kesan mendalam.

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

export default Theroyal;
