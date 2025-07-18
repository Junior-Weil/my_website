import React from 'react';
import FlipCard from '../components/FlipCard';

// src/pages/Home.jsx
const Home = () => (
  <div className="p-8 bg-white">
    <h1 className="text-3xl font-bold">Home</h1>
    {/* <p>Welcome to my website!</p>
    <FlipCard
      frontContent={<div className="bg-blue-500 text-white p-4">Front Side</div>}
      backContent={<div className="bg-green-500 text-white p-4">Back Side</div>}
      className="mt-8"
      onClick={() => console.log('Card flipped!')}
    />
    <p className="mt-4">This is a simple flip card component.</p> */}
    <div className="p-8 bg-slate-100 min-h-screen flex items-center justify-center">
      <FlipCard
        frontContent={
          <div className=" bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
              className="w-48 h-48 object-contain mb-4"
            />
            <h2 className="text-xl font-bold">Nike Shoes</h2>
            <p className="text-gray-600">$199.99</p>
          </div>
        }
        backContent={
          <div className="w-full h-full bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2">Product Details</h3>
            <p className="text-gray-600 text-center mb-4">
              Premium comfort with innovative design. Perfect for both casual
              wear and sports activities.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        }
      />
    </div>
  </div>
);
export default Home;
