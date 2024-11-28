import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Arabicdress() {
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
            src="/asset/image/image 14.svg"
            alt="Arabic Dress"
            className="object-contain w-full max-h-[597px]"  
            style={{ objectPosition: 'left' }} 
          />
        </div>
        
        <div className="flex-1 md:pl-20 md:pr-40 pr-10 py-1 bg-pink-50 flex flex-col justify-start items-start text-left h-full mt-10">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Arabic Dress</h2>
          
          <p className="text-black mt-8 mb-1 text-justify"> 
        Outfit arabic dress untuk pria adalah gaya berpakaian tradisional yang terinspirasi dari budaya Timur Tengah, dengan desain yang anggun, longgar, dan sering kali dihiasi dengan detail yang rumit seperti bordir, manik-manik, atau motif khas. Pakaian ini biasanya terdiri dari potongan busana panjang seperti abaya, kaftan, thobe, atau jalabiya yang mencerminkan kesopanan sekaligus keindahan budaya Arab.          </p>
        <p className="text-black mt-1  mb-8 text-justify"> 
        Kelebihan arabic dress dapat memberikan rasa keanggunan dan elegan, dengan desain dan detail yang indah dan unik. Secara keseluruhan, outfit ini adalah pakaian yang menghormati dan mematuhi nilai-nilai keagamaan dan budaya, memberikan rasa kehangatan dan kenyamanan, serta memberikan rasa keanggunan dan elegan.

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

export default Arabicdress;
