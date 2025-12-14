import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

export default Home;
