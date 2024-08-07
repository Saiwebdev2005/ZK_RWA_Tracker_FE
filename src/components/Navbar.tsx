"use client"
import React, { useState } from 'react';
import ConnectWallet from './wallet/ConnectButton';
import Link from 'next/link';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className='text-xl font-bold'>
              <Link href="/">ZKAV</Link>
              </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/nft-marketplace" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">NFT Marketplace</Link>
              <Link href="/Assetverifier" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Asset Verify</Link>
            </div>
          </div>
          
          {/* Button */}
          <div className="hidden md:block">
            {/* <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
              Sign Up
            </button> */}
           <ConnectWallet/>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">About</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <button className="block w-full text-left px-4 py-2 text-base font-medium text-white bg-gray-700 hover:bg-gray-600">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;