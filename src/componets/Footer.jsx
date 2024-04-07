/* eslint-disable react/no-unknown-property */
import React from 'react';

function Footer() {
  return (
    <div className="bg-gome">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase text-indigo-600 font-bold">Menu</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-indigo-600" href="#">Home</a>
            </li>
            <li className="my-2">
              <a className="hover:text-indigo-600" href="#">Services</a>
            </li>
            <li className="my-2">
              <a className="hover:text-indigo-600" href="#">Products</a>
            </li>
            <li className="my-2">
              <a className="hover:text-indigo-600" href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-indigo-600 mb-4">Componentity</h3>
          <p className="text-gray-500 text-sm mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.</p>
        </div>
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-indigo-600 font-bold">Contact Us</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-indigo-600" href="#">XXX XXXX, Floor 4 San Francisco, CA</a>
            </li>
            <li className="my-2">
              <a className="hover:text-indigo-600" href="#">contact@company.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="#" className="w-6 mx-1">
            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%"
              viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/"
              style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
              <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                5.373,-12 12,-12c6.627,0 12,5.373
                12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
            </svg>
          </a>
          {/* Add other social media icons similarly */}
        </div>
        <div className="my-5">© Copyright 2023. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
