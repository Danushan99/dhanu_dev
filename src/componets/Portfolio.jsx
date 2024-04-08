
import React from "react";
import myImage from "../assets/me.jpg";

function navigateToUrl() {
    const cvUrl =
      "https://drive.google.com/file/d/1PyL1eWm7zp-2L6wPSwzzzbPiUXoiHZsj/view?usp=drive_link";
    window.location.href = cvUrl;
  }

function Portfolio() {
  return (
    <div className="w-full">
      <div className=" lg:max-w-[1280px] max-w-[720px] flex lg:flex-row flex-col-reverse justify-center mx-auto gap-4 lg:px-0 px-[24px] ">
        <div className="flex-[40%]">
          {" "}
          <img   src={myImage} />
        </div>
        <div className="lg:flex-[60%] bg-[#ECDDD3] lg:py-0 py-[96px] justify-center flex p-4">
          <div className="flex justify-center flex-col text-center items-center h-full gap-10 ">
            <div className="text-[14px]  font-Jostfont-bold">
            WELLAWATAI, COLOMBO SRILANKA
            </div>
            <div className="sm:text-[58px] text-[36px] font-Butler-Free-Lgt leading-[60px]">
            Make your next move your best move.

            </div>
            <div className="flex sm:flex-row flex-col gap-4">
              {/* <button className="border-[1px] border-black py-[17px] px-[36px] text-[14px] font-bold hover:bg-gray-1 hover:text-[#ECDDD3]">
              Hire Me
              </button> */}
              <a href="mailto:Danuthasan008@gmail.com" className="border-[1px] border-black py-[17px] px-[36px] text-[14px] font-bold hover:bg-gray-1 hover:text-[#ECDDD3]">      Hire Me</a>
              <button className="border-[1px] border-black py-[17px] px-[36px] text-[14px] font-bold bg-gray-1 hover:bg-transparent text-white hover:text-black"   onClick={navigateToUrl}>
              Download Cv
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;