import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ image, text, link }) {
  return (
    <div
      className="relative group border border-black shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
    >
      <div className="w-auto h-auto">
        <img
          src={image}  // Directly use the image prop
          alt={text}
          className="object-contain w-full max-h-full"
        />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 bg-white p-2 flex justify-between items-center"
        style={{ width: '100%' }}
      >
        {link ? (
          <Link to={link}>
            <button className="px-4 py-2 bg-white border-2 border-black text-black hover:bg-black hover:text-white transition duration-300">
              {text}
            </button>
          </Link>
        ) : (
          <button className="px-4 py-2 bg-white border-2 border-black text-black hover:bg-black hover:text-white transition duration-300">
            {text}
          </button>
        )}
        <img src="/asset/image/bookmark.svg" alt="Bookmark" className="h-5" />
      </div>
    </div>
  );
}

export default ProductCard;
