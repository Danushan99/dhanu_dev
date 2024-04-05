import React from 'react';
import myImage from '../assets/me.jpg';

function Slide() {
  return (
    <div className='p-20 bg-Home'>
      <div className="flex flex-col md:flex-row justify-center items-center p-20 bg-cont">
        {/* Text, Name, Buttons */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:order-2 " >
          <div className="text-center">
          <p className="text-gray-700 fon">Wellawatai,  Colombo Srilanka</p>
            <h2 className="font-bold font-Butler-regular text-4xl ">Make your next move your best move.</h2>
         
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Button 1</button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Button 2</button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 md:order-1 ">
          <img
            src={myImage}
            className="w-full h-auto md:max-w-lg"
            alt="..." 
          />
        </div>
      </div>
     </div>
  );
}

export default Slide;
