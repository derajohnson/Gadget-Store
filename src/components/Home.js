import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-description">
        <h1>Welcome to My<span className="gadgets">Gadgets</span></h1>
        <p>Where all your gadgets needs are fulfilled.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum ullam ex tempora deserunt itaque explicabo voluptatibus dolorem maiores perferendis?
        </p>
      </div>
      <div className="home-img">
        <img src="../assets/hero.svg" alt="home-img" />
      </div>
    </div>
  );
};

export default Home;
