import React from 'react';
import Image from 'next/image';
import valuewarelogo from '../../../public/valuewarelogowithouttext.png';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-300 text-white">
      <Image src={valuewarelogo} alt="Valueware Logo" width={60} height={60} />
      <nav>
        <a href="#home" className="mx-2 hover:bg-blue-700 p-2 rounded">Home</a>
        <a href="#about" className="mx-2 hover:bg-blue-700 p-2 rounded">About</a>
        <a href="#contact" className="mx-2 hover:bg-blue-700 p-2 rounded">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
