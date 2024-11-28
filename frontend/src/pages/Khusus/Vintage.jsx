import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Vintage() {
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
            src="/asset/image/image 15.svg"
            alt="Vintage"
            className="object-contain w-full max-h-[597px]"  
            style={{ objectPosition: 'left' }}  
          />
        </div>
     <div className="flex-1 md:pl-20 md:pr-40 pr-10 py-1 bg-pink-50 flex flex-col justify-start items-start text-left h-full mt-10">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Vintage</h2> 
          
          <p className="text-black mt-8 mb-1 text-justify"> 
          Outfit vintage untuk pria adalah gaya berpakaian yang terinspirasi dari era tertentu di masa lalu, biasanya antara tahun 1920 hingga 1980-an. Gaya ini mengedepankan elemen klasik dan retro, seperti siluet, pola, warna, dan aksesori yang khas dari waktu tersebut. Pakaian vintage bisa berupa item asli dari zaman itu atau reproduksi modern dengan sentuhan gaya vintage. vintage seringkali memiliki karakteristik yang unik dan khas, seperti detail-detail yang rumit, bahan-bahan yang lembut dan berkualitas tinggi, serta desain yang sederhana namun elegan.
          </p>
          <p className="text-black mt-1  mb-8 text-justify"> 
          Kelebihan vintage dapat menghidupkan kembali gaya klasik yang elegan, tetapi juga menunjukkan apresiasi terhadap sejarah dan seni fesyen masa lalu. Outfit ini adalah pilihan sempurna bagi mereka yang ingin tampil unik, berkelas, dan ramah lingkungan, sekaligus menciptakan pernyataan gaya yang personal.
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

export default Vintage;
