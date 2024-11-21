import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';


function Hiphop() {
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
            src="/asset/image/image 255.svg"
            alt="Hip-hop"
            className="object-contain w-full max-h-[597px]"  
            style={{ objectPosition: 'left' }}  
          />
        </div>
        
        <div className="flex-1 md:pl-20 md:pr-40 pr-10 py-1 bg-pink-50 flex flex-col justify-start items-start text-left h-full mt-10">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Hiphop</h2> 
          
          <p className="text-black mt-8 mb-1 text-justify"> 
        Outfit hip-hop untuk pria adalah gaya berpakaian yang berakar dari budaya hip-hop yang muncul pada tahun 1970-an di Amerika Serikat. Gaya ini mencerminkan ekspresi diri, kebebasan, dan keunikan, serta sering terinspirasi oleh musik, tarian, dan kehidupan jalanan. Outfit hip-hop biasanya mencakup pakaian longgar, aksesori mencolok, dan elemen streetwear yang menonjol.           </p>
        <p className="text-black mt-1  mb-8 text-justify">

          Kelebihan hip-hop ini tidak hanya tentang pakaian, tetapi juga tentang cara seseorang mengekspresikan gaya hidup dan kreativitas. Gaya ini memberikan kebebasan penuh untuk berkreasi, menjadikannya salah satu gaya yang paling unik dan penuh kepribadian di dunia fashion.
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

export default Hiphop;
