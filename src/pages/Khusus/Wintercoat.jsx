import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../../components/Header/Header';

function Wintercoat() {
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
            src="/asset/image/winter.svg"
            alt="Casual"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 md:pl-10 md:pr-16 pr-10 py-10 bg-pink-50 flex flex-col justify-start items-start text-left h-full">
        <h2 className="text-5xl font-bold mt-16 mb-1  text-left">Winter Coat</h2>
        <p className="text-black mt-6 mb-1 text-justify"> {/* Adjusted the margin-top to push the text lower */}
        Outfit winter coat untuk pria adalah jenis pakaian luar (outerwear) yang dirancang khusus untuk melindungi tubuh dari cuaca dingin selama musim dingin atau di tempat dengan suhu rendah. Winter coat biasanya dibuat dari bahan tebal, seperti wol, polyester, atau bulu angsa (down), dan sering dilengkapi lapisan tambahan untuk menjaga kehangatan tubuh. Selain fungsional, winter coat juga memiliki beragam desain dan gaya yang membuatnya menjadi bagian penting dari fashion musim dingin.          </p>
          <p className="text-black mt-1 mb-8 text-justify"> {/* Added more margin-top to further space from the first paragraph */}
          Kelebihan winter coat pakaian esensial untuk menghadapi musim dingin. Tidak hanya melindungi tubuh dari suhu rendah dan angin dingin, winter coat juga memberikan kesan stylish yang bisa menambah percaya diri. Dengan berbagai pilihan gaya, Anda dapat menemukan winter coat yang sesuai dengan kebutuhan fungsional dan estetika Anda.

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

export default Wintercoat;
