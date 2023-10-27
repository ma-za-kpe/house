import React from 'react';
import { FaBed, FaBath, FaCar, FaDollarSign } from 'react-icons/fa';

const Card = ({ product }) => {
  const { product_name, price, image_url, features, product_owner } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-black">
        <div className='h-[300px] w-[400px]'>
          <img src={image_url} alt={product_name} className="w-[100%] h-[100%] object-cover" />
        </div>
      <div className="px-6 py-1">
        <div className="font-bold text-xl mb-2">{product_name}</div>
        <div className="flex items-center">
          <span className="ml-2 font-semibold text-xl">{price} Eth</span>
        </div>
        <p className="text-gray-700 my-4 flex">
          <span className="mr-2">
            <FaBed />
            {features.includes('Bedrooms') ? features[features.indexOf('Bedrooms') + 1] : 'N/A'}
          </span>
          <span className="mr-2">
            <FaBath />
            {features.includes('Bathrooms') ? features[features.indexOf('Bathrooms') + 1] : 'N/A'}
          </span>
          <span className="mr-2">
            <FaCar />
            {features.includes('Garage') ? 'Yes' : 'No'}
          </span>
        </p>
      </div>
      <div className="px-6 py-1">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Buy
        </button>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600">Product Owner: {product_owner}</p>
      </div>
    </div>
  );
};

export default Card;
