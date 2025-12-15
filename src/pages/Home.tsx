import React from 'react';
import { Link } from 'react-router-dom';
import GridDistortion from '../components/GridDistortion';

import ConnectWallet from '../components/ConnectWallet';

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <GridDistortion
        imageSrc="/background.png"
        grid={20}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Wallet Connect Button */}
      <div className="absolute top-4 right-4 z-20">
        <ConnectWallet />
      </div>

      <div className="relative z-10 p-5 text-white flex flex-col items-center justify-center h-full">
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
        <Link to="/about" className="text-[#61dafb]">Go to About</Link>
      </div>
    </div>
  );
};

export default Home;
