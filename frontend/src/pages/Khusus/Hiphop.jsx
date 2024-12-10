import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHeart } from '@fortawesome/free-solid-svg-icons';

function Hiphop() {
  const [selectedImage, setSelectedImage] = useState(null); // State untuk gambar yang diklik
  const additionalImages = [
    '/asset/image/Free Photo _ Young hip-hop dancer standing on white.jpeg',
    '/asset/image/download (38).jpeg',
    '/asset/image/Big L.jpeg',
    '/asset/image/lil yachty for supreme.jpeg',
    '/asset/image/download (40).jpeg',
    '/asset/image/Red M-51 style.jpeg', // Gambar tambahan
  ];

  // Fungsi untuk menutup popup
  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="font-sans text-gray-900 min-h-screen overflow-auto">
      <Header /> {/* Reusable Header */}

      <div className="w-full">
        <hr className="border-t border-black" />
      </div>

      <div className="flex flex-col items-center justify-center h-full bg-pink-50 mt-2">
        <h2 className="text-5xl font-bold text-center mt-16 mb-8">Hiphop</h2>

        <p className="text-black text-justify max-w-5xl px-6 mb-4">
        Outfit hip-hop untuk pria adalah gaya berpakaian yang berakar dari budaya hip-hop yang muncul pada tahun 1970-an di Amerika Serikat. Gaya ini mencerminkan ekspresi diri, kebebasan, dan keunikan, serta sering terinspirasi oleh musik, tarian, dan kehidupan jalanan. Outfit hip-hop biasanya mencakup pakaian longgar, aksesori mencolok, dan elemen streetwear yang menonjol.         
        </p>
        <p className="text-black text-justify max-w-5xl px-6 mb-8">
        Kelebihan hip-hop ini tidak hanya tentang pakaian, tetapi juga tentang cara seseorang mengekspresikan gaya hidup dan kreativitas. Gaya ini memberikan kebebasan penuh untuk berkreasi, menjadikannya salah satu gaya yang paling unik dan penuh kepribadian di dunia fashion.        </p>      </div>

      <section className="mt-16 bg-white py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-screen-xl mx-auto px-8">
          {additionalImages.map((image, index) => (
            <div  
              key={index}
              className="flex items-center justify-center bg-gray-50 hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg shadow-lg transform hover:shadow-xl"
              onClick={() => setSelectedImage(image)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md w-full max-w-sm">  {/* Adjusted max-w-sm for smaller card */}
                <img
                  src={image}
                  alt={`Inspirasi Denim ${index + 1}`}
                  className="object-contain w-full h-56"  // Adjusted height to 56 for a smaller image size
                />
                <div className="p-4 mt-4">  {/* Added margin-top to create space between the image and the text */}
                  <p className="text-center text-gray-800 font-semibold">Hiphop Item {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-2/5 max-w-sm relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closePopup}
            >
              ✖
            </button>
            <img src={selectedImage} alt="Selected Denim" className="w-full mb-4 rounded max-w-full" />
            
            {/* Tombol dengan Background dan Icons */}
            <div className="flex flex-col items-center justify-between bg-gray-100 p-4 rounded">
  {/* Tombol Download */}
  <a
    href={selectedImage} // Tautan ke gambar yang akan diunduh
    download // Menjadikan elemen ini tombol unduh
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2 w-full flex items-center justify-center"
  >
    <FontAwesomeIcon icon={faDownload} className="mr-2" />
    Download
  </a>

  {/* Tombol Favorite */}
  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full flex items-center justify-center">
    <FontAwesomeIcon icon={faHeart} className="mr-2" />
    Favorite
  </button>
</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hiphop;
