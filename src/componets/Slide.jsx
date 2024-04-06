import React from "react";
import myImage from "../assets/me.jpg";

function Slide() {
  return (
    <div className="p-20">
      <div className="flex flex-col md:flex-row justify-center items-center p-20 h-full">
                {/* Image */}
                <div className="w-full md:w-1/2 md:order-1 ">
          <img src={myImage} className="w-full h-auto md:max-w-lg" alt="..." />
        </div>
        {/* Text, Name, Buttons */}
        <div className="w-full h-full md:w-1/2 mt-4 md:mt-0 md:order-2 bg-cont">
          <div className="text-center">
            <p className="text-gray-700 fon">Wellawatai, Colombo Srilanka</p>
            <h2 className="font-bold font-Butler-regular text-4xl ">
              Make your next move your best move.
            </h2>

            <div className="mt-4">
              <button className="box-border border border-black bg-black text-white font-bold py-2 px-4 mr-2 hover:bg-gray-1 hover:text-nav-bar transition duration-300 ease-in-out">
                Hire Me
              </button>

              <button className="box-border border border-black  text-white font-bold py-2 px-4 mr-2 hover:bg-gray-1 hover:text-gray-800 transition duration-300 ease-in-out">
                Hire Me
              </button>
              <button className="box-border border bg-black border-black bg-transparent text-white font-bold py-2 px-4 hover:nav-bar hover:text-gray-800 transition duration-300 ease-in-out bg-gray-1">
                Download Cv
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Slide;
