/* eslint-disable react/no-unknown-property */
import React from "react";

function Footer() {
  return (
    <div className="bg-nav_bar">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-1 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase text-gray-1 font-bold">Menu</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-war" href="">
                Home
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-war" href="">
                About
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-war" href="">
                Services
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-war" href="">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-gray-1 mb-4">Quick Bio</h3>
          <p className="text-gray-500 text-sm mb-10">
            I am a highly self-motivated and enthusiastic individual with
            excellent communication and interpersonal skills.
          </p>
        </div>
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-gray-1 font-bold">
            Contact Us
          </div>
          <ul>
            <li className="my-2">
              <a className="hover:text-war" href="#">
                No 6/9 , Ben & Nancy Tower Ramakrishna Road Colombo Srilanka
              </a>
            </li>
            <li className="my-2">
              <a
                className="hover:text-war"
                href="mailto:Danuthasan008@gmail.com"
              >
                Danuthasan008@gmail.com.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="https://www.facebook.com/danu.deviil/" className="w-6 mx-1">
            <svg
              className="fill-current cursor-pointer text-gray-500 hover:text-war"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              version="1.1"
              xmlSpace="preserve"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <path
                id="Twitter"
                d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                5.373,-12 12,-12c6.627,0 12,5.373
                12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
              ></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/danushan-r/"
            className="w-6 mx-1"
          >
            <svg
              className="fill-current cursor-pointer text-gray-500 hover:text-war"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              version="1.1"
              xmlSpace="preserve"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.951 9.404H6.165V17.5H8.95V9.404zm6.841-.192c-1.324 0-1.993.629-2.385 1.156l-.127.181V9.403h-2.786l.01.484c.006.636.007 1.748.005 2.93l-.015 4.683h2.786v-4.522c0-.242.018-.484.092-.657.202-.483.66-.984 1.43-.984.955 0 1.367.666 1.408 1.662l.003.168V17.5H19v-4.643c0-2.487-1.375-3.645-3.208-3.645zM7.576 5.5C6.623 5.5 6 6.105 6 6.899c0 .73.536 1.325 1.378 1.392l.18.006c.971 0 1.577-.621 1.577-1.398C9.116 6.105 8.53 5.5 7.576 5.5z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/dhanu_thazan_/"
            className="w-6 mx-1"
          >
            <svg
              className="fill-current cursor-pointer text-gray-500 hover:text-war"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              version="1.1"
              xmlSpace="preserve"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <path d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0zm3.115 4.5h-6.23c-2.5536 0-4.281 1.6524-4.3805 4.1552L4.5 8.8851v6.1996c0 1.3004.4234 2.4193 1.2702 3.2359.7582.73 1.751 1.1212 2.8818 1.1734l.2633.006h6.1694c1.3004 0 2.389-.4234 3.1754-1.1794.762-.734 1.1817-1.7576 1.2343-2.948l.0056-.2577V8.8851c0-1.2702-.4234-2.3589-1.2097-3.1452-.7338-.762-1.7575-1.1817-2.9234-1.2343l-.252-.0056zM8.9152 5.8911h6.2299c.9072 0 1.6633.2722 2.2076.8166.4713.499.7647 1.1758.8103 1.9607l.0063.2167v6.2298c0 .9375-.3327 1.6936-.877 2.2077-.499.4713-1.176.7392-1.984.7806l-.2237.0057H8.9153c-.9072 0-1.6633-.2722-2.2076-.7863-.499-.499-.7693-1.1759-.8109-2.0073l-.0057-.2306V8.885c0-.9073.2722-1.6633.8166-2.2077.4712-.4713 1.1712-.7392 1.9834-.7806l.2242-.0057h6.2299-6.2299zM12 8.0988c-2.117 0-3.871 1.7238-3.871 3.871A3.8591 3.8591 0 0 0 12 15.8408c2.1472 0 3.871-1.7541 3.871-3.871 0-2.117-1.754-3.871-3.871-3.871zm0 1.3911c1.3609 0 2.4798 1.119 2.4798 2.4799 0 1.3608-1.119 2.4798-2.4798 2.4798-1.3609 0-2.4798-1.119-2.4798-2.4798 0-1.361 1.119-2.4799 2.4798-2.4799zm4.0222-2.3589a.877.877 0 1 0 0 1.754.877.877 0 0 0 0-1.754z" />
            </svg>
          </a>
        </div>
        <div className="my-5">© Copyright 2024. Danushan Ravindran</div>
      </div>
    </div>
  );
}

export default Footer;
