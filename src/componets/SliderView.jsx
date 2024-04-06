import React from "react";
import myImage from "../assets/me.jpg";

function SliderView() {
  return (
    <div className="flex p-4 md:p-20">
      <div className="section no-bottom-space top-space-small w-full">
        <div className="container grid-container">
          <div className="w-layout-grid grid-vertical">
            <div className="large-title-row">
              <img
                src={myImage}
                alt="Photo"
                className="large-title-grid-image object-contain md:object-scale-down w-full"
              />
              <div className="large-title-content bg-primary-1 px-4">
                <div className="content-width-large">
                  <div className="text-center">
                    <p className="text-gray-700 font-normal md:font-medium">
                      Wellawatai, Colombo Srilanka
                    </p>
                    <h2 className="font-bold font-Butler-regular text-3xl md:text-5xl lg:text-6xl">
                      Make your next move your best move.
                    </h2>
                    <div className="mt-4 flex flex-wrap justify-center">
                      <button className="box-border border border-black bg-black text-white font-bold py-2 px-4  w-full md:w-auto md:mr-2 hover:bg-gray-1 hover:text-nav-bar transition duration-300 ease-in-out">
                        Hire Me
                      </button>
                      <button className="box-border border bg-black border-black bg-transparent text-white font-bold py-2 px-4 w-full md:w-auto hover:nav-bar hover:text-gray-800 transition duration-300 ease-in-out bg-gray-1">
                        Download Cv
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderView;
