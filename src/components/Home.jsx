import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center"
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold" data-aos="zoom-in">
        Hi, I'm [Your Name]
      </h1>
      <p className="text-xl mt-4" data-aos="fade-right">
        Web Developer | Designer | Freelancer
      </p>
    </div>
  );
};

export default Home;
