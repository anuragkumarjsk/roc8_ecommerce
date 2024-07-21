import React from "react";

const Header1: React.FC = () => {
    return (
      <header className="bg-white-800 text-black p-4">
      <div className="flex justify-end items-center">
        <span className="hover:underline cursor-pointer">Help</span>
        <span className="m-4 hover:underline cursor-pointer">Orders & Returns</span>
        <span className="font-semibold">Hi, John</span>
      </div>
    </header>
    );
  };

  const Header2: React.FC = () => {
    return (
    <div className="flex justify-between items-center" >
      <h1 className="text-4xl font-bold">ECOMMERCE</h1>  
      <div className="flex justify-end items-center">
        <span className="hover:underline cursor-pointer">Categories</span>
        <span className="m-4 hover:underline cursor-pointer">Sale</span>
        <span className="m-4 hover:underline cursor-pointer">Clearance</span>
        <span className="m-4 hover:underline cursor-pointer">New Stock</span>
        <span className="hover:underline cursor-pointer">Trending</span>
      </div>
      <div>
      <div className="flex space-x-4">
      {/* Cart Icon */}
      <button className="p-2 bg-blue-500 text-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
      </button>

      {/* Search Icon */}
      <button className="p-2 bg-gray-200 text-black rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      </button>
    </div>
      </div>
    </div>
    );
  };

  
const Header3: React.FC = () => {
    return (
      <div className="flex bg-gray-100 justify-center items-center">
        <span className="m-4 hover:underline cursor-pointer">{`<`}</span>
        <span className="m-4 hover:underline cursor-pointer">Get 10% off on business sing up</span>
        <span className="hover:underline cursor-pointer">{`>`}</span>
      </div>
    );
  };


  export {Header1,Header2,Header3}
  