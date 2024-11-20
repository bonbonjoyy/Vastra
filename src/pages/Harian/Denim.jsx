import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Denim() {
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
            src="/asset/image/image 19.svg"
            alt="Denim Fashion"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Denim Fashion</h2>
        <p className="text-black mt-6 mb-1 text-justify">      
          Outfit denim on denim untuk pria adalah gaya yang memadukan dua atau lebih item denim, seperti jaket dan jeans, dalam satu tampilan. Terlihat maskulin dan kasual, gaya ini pertama kali muncul pada abad ke-19 sebagai pakaian kerja karena daya tahan bahan denim. Pada 1950-an, gaya ini menjadi simbol pemberontakan setelah dikenakan bintang seperti James Dean, dan populer di kalangan rock dan punk pada 1970-an dan 1980-an. Setelah sempat dianggap berlebihan, tren ini kembali diminati pada 2000-an dan mendapat pembaruan pada 2010-an dengan penekanan pada kontras warna dan potongan yang lebih seimbang. 
</p>
<p className="text-black mt-1 mb-8 text-justify">
Kelebihan denim on denim meliputi kesan stylish, maskulin, tahan lama, fleksibel untuk situasi kasual, dan memiliki banyak variasi gaya. Namun, diperlukan keseimbangan warna dan tekstur untuk menghindari tampilan yang monoton atau berlebihan.    
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

export default Denim;
