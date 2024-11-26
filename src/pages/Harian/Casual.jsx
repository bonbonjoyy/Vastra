import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Casual() {
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
            src="/asset/image/casual.svg"
            alt="Casual"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Casual</h2> {/* Align text to the left */}
          
          <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}
            Outfit casual untuk pria adalah gaya busana yang sederhana dan santai, biasanya digunakan untuk kegiatan sehari-hari atau acara informal. Outfit casual biasanya terdiri dari bahan-bahan yang nyaman dan tidak terlalu formal, seperti kaos, celana pendek atau jeans, sepatu sneakers atau sandal, dan aksesori seperti topi atau kacamata hitam. Gaya ini sering kali dianggap sebagai gaya yang mudah dipadukan dan dapat disesuaikan dengan selera pribadi. Outfit casual juga dapat memberikan tampilan yang terbuka dan tidak terlalu kaku, serta dapat memberikan kesan yang santai dan tidak terlalu serius.
          </p>
          
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
            Kelebihan casual dapat memberikan kesan yang ingin tampil santai namun tetap stylish. Dengan sedikit usaha dalam padu padan, gaya ini dapat mencerminkan kepribadian dan memberikan kenyamanan sepanjang hari.
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

export default Casual;
