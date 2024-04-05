import React from "react";

import homeImage from "../assets/images/home.png";

const Home = () => {
  return (
    <div className="h-screen w-full bg-black" name="Home">
      <div className="flex flex-col items-center h-full px-6 text-white">
        <img
          src={homeImage}
          alt="RadaR"
          className="h-[80vh]"
        />
        <div className="text-center home-text">
          <h2 className="text-6xl md:text-7xl font-bold py-6">RadaR</h2>
        </div>
      </div>
    </div>
  );
};


export default Home;
