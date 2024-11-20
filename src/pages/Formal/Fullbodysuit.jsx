import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Fullbodysuit() {
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
            src="/asset/image/fullbody.svg"
            alt="Denim Fashion"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">FullBody Suit</h2> {/* Align text to the left */}
          
          <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}
          Outfit fullbody suit untuk pria adalah pakaian yang dirancang untuk menutupi seluruh tubuh dari leher hingga pergelangan kaki, biasanya dalam bentuk satu setelan terusan. Gaya ini sering digunakan untuk aktivitas olahraga, seperti balap, bela diri, atau bahkan dalam kostum karakter tertentu. Namun, fullbody suit juga dapat ditemukan dalam konteks fesyen, terutama dalam bentuk jumpsuit atau bodysuit yang dirancang untuk memberikan tampilan yang sleek dan modern.          </p>
          
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
          Kelebihan fullbody suit meliputi kesan stylish, nyaman, dan dinamis. Desainnya yang unik dan fungsional membuatnya cocok untuk berbagai aktivitas, dari olahraga hingga acara sosial, memberikan Anda tampilan yang menarik dan penuh kepercayaan diri.          </p>
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

export default Fullbodysuit;