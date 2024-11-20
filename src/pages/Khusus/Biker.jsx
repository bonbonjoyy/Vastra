import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Biker() {
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
            src="/asset/image/biker.svg"
            alt="Casual"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Biker</h2>
        <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}        Outfit biker untuk pria adalah pakaian yang dirancang untuk memberikan kesan kasar dan agresif. Gaya berpakaian yang terinspirasi dari para pengendara motor, khususnya komunitas pengendara motor besar (motor gede atau motorcycle riders). Gaya ini mengutamakan kombinasi antara tampilan yang edgy, fungsional, dan perlindungan saat berkendara. Outfit biker identik dengan penggunaan bahan kulit, warna gelap, dan aksen yang kuat seperti ritsleting, paku keling (studs), atau bordir logo komunitas. </p>
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
          Kelebihan biker meliputi kesan yang berani dan kuat dalam ekspresi diri, menampilkan detail-detail yang kasar dan agresif, memberikan rasa keanggunan dan kepercayaan diri, dan dapat memberikan rasa kebersamaan dan kebersamaan dengan komunitas yang sama.
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

export default Biker;
