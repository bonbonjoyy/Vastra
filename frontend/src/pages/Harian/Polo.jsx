import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';  // Ganti faDownload dengan faEye
import Footer from '../../components/Footer/Footer';

function Polo() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galeriImages, setGaleriImages] = useState([]);

  useEffect(() => {
    const fetchGaleri = async () => {
      try {
        const response = await fetch('https://vastra-backend.vercel.app/api/galeris/kategori/Harian/subCategory/Polo');
        const data = await response.json();
        setGaleriImages(data); // Store gallery data in state
      } catch (error) {
        console.error('Error fetching galeri:', error);
      }
    };

    fetchGaleri();
  }, []);

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="font-sans text-gray-900 min-h-screen overflow-auto">
      <Header />

      <div className="w-full">
        <hr className="border-t border-black" />
      </div>

      <div className="flex flex-col items-center justify-center h-full bg-pink-50 mt-2">
        <h2 className="text-5xl font-bold text-center mt-16 mb-8">Polo Fashion</h2>

        <p className="text-black text-justify max-w-5xl px-6 mb-4">
          Outfit polo untuk pria adalah gaya berpakaian yang menggunakan kaos polo, yaitu jenis kaos dengan kerah dan biasanya dilengkapi dengan kancing di bagian leher. Kaos polo awalnya dirancang untuk aktivitas olahraga seperti polo atau tenis, tetapi sekarang telah menjadi pakaian kasual yang populer di berbagai kesempatan, baik untuk tampilan santai maupun lebih formal. Kaos polo terbuat dari berbagai jenis bahan, seperti katun, polyester, atau campuran keduanya, yang memberikan kenyamanan serta sirkulasi udara yang baik.
        </p>
        <p className="text-black text-justify max-w-5xl px-6 mb-8">
          Kelebihan polo ini dapat tampil santai namun tetap terkesan rapi dan stylish. Polo merupakan pilihan yang tepat untuk gaya kasual yang tidak terlalu santai, memberikan kenyamanan dan kesan lebih terstruktur dalam satu tampilan yang sederhana dan elegan.
        </p>
      </div>

      <section className="mt-6 mb-16 bg-white py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-screen-xl mx-auto px-[145px]">
          {galeriImages.length === 0 ? (
            <div className="col-span-5 text-center text-gray-500 font-semibold">
              <p>No Data Available</p>
            </div>
          ) : (
            galeriImages.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gray-50 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg transform hover:shadow-xl"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="bg-white overflow-hidden shadow-md w-full max-w-sm"> {/* Ukuran card seperti di halaman Denim */}
                  <img
                    src={`https://vastra-backend.vercel.app${item.image}`}
                    alt={`Polo ${index + 1}`}
                    className="object-contain w-full h-56"  
                  />
                  <div className="p-4 mt-4">
                    <p className="text-center text-gray-800 font-semibold">{item.title || 'No Title'}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 w-full max-w-sm max-h-[90vh] h-auto overflow-auto relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closePopup}
            >
              ✖
            </button>
            <img src={`https://vastra-backend.vercel.app${selectedImage}`} alt="Selected Polo" className="w-full mb-4 max-w-full" />
            <div className="flex flex-col items-center justify-between bg-gray-100 p-4">
              <a
                href={`https://vastra-backend.vercel.app${selectedImage}`}
                download
                className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 mb-2 w-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faEye} className="mr-2" /> {/* Ganti dengan faEye */}
                Lihat Gambar Penuh
              </a>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Polo;
