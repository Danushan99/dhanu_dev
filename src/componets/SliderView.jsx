import React from "react";
import myImage from "../assets/me.jpg";

function navigateToUrl() {
  const cvUrl =
    "https://drive.google.com/file/d/1PyL1eWm7zp-2L6wPSwzzzbPiUXoiHZsj/view?usp=drive_link";
  window.location.href = cvUrl;
}

function SliderView() {
  return (
    <div className="flex p-0 md:p-0">
      <div className="section no-bottom-space top-space-small w-full">
        <div className="container grid-container">
          <div className="w-layout-grid grid-vertical">
            <div className="large-title-row">
              <img
                src={myImage}
                alt="Photo"
                className="large-title-grid-image object-contain md:object-scale-down w-full"
              />
              <div className="large-title-content bg-primary-1 p-40">
                <div className="content-width-large">
                  <div className="text-center">
                    <p className="text-gray-700  font-Jost  md:font-medium">
                      Wellawatai, Colombo Srilanka
                    </p>
                    <h2 className=" font-EB-Garamond  text-3xl md:text-5xl lg:text-6xl">
                      Make your next move your best move.
                    </h2>
                    <div className="w-full flex justify-center mt-20 ">
                      <div className="flex flex-col  items-center gap-4 sm:flex-row justify-center max-w-[400px] w-full h-[60px]">
                        <button className=" flex-1 lg:w-[60%] w-full box-border border border-black bg-primary-1 hover:text-white font-bold py-2 px-4md:mb-0  h-[60px] md:w-auto hover:bg-gray-1 hover:text-nav-bar transition duration-300 text-black ease-in-out">
                          Hire Me
                        </button>
                        <button
                          className=" flex-1 lg:w-[40%] w-full box-border border bg-gray-1 hover:bg-transparent border-black  text-white font-bold py-2 h-[60px]  px-4 md:w-auto hover:nav-bar hover:text-gray-800 transition duration-300 ease-in-out"
                          onClick={navigateToUrl}
                        >
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
    </div>
  );
}

export default SliderView;
