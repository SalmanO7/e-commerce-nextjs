import Image from "next/image";
import React from "react";
import img from "@/assets/burg.png";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between rounded-lg p-4 sm:p-8 max-w-screen-lg">
        <div className="content mt-8 sm:mt-0 flex flex-col text-center sm:text-left sm:mr-8">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
            Eat Best At Own Restaurant
          </h1>
          <p className="text-gray-800 w-[250px] md:w-full mb-4">
            Welcome to Tasty Food, your ultimate destination for the best and
            freshest food experience! Enjoy a variety of delicious dishes made
            from high-quality ingredients, crafted to satisfy every taste. From
            mouthwatering burgers to flavorful sides, we serve it all with
            passion and perfection.
          </p>
          <button className="w-[100px] mt-4 mb-4 border-black px-5 py-2 rounded-md bg-[#004581] text-yellow-50 font-bold">
            Explore
          </button>
        </div>
        <Image
          src={img}
          alt="Hero Img"
          className="w-full sm:w-auto mt-[70px] sm:mt-0 md:mb-8 h-auto max-w-xs sm:max-w-sm md:w-[8000px] lg:w-[7000px]"
        />
      </div>
    </div>
  );
};

export default Hero;
