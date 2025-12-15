import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="p-5 bg-[url('/background.png')] bg-cover bg-center min-h-screen text-white">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Link to="/about" className="text-[#61dafb]">Go to About</Link>
    </div>
  );
};

export default Home;
