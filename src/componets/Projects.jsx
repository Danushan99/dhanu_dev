import React from "react";
import Bidgo from "../assets/bidgo.png";
import Ebird from "../assets/ebird.png";
import student from "../assets/student.png";
import favicon from "../assets/fav.png";

function Projects() {
  return (
    <div className="grid gap-2 p-0  md:items-center  ">
      <div className="flex flex-col justify-center items-center  ">
        <h1 className="mb-2 text-2xl font-Jost font-medium">
          Projects That I worked
        </h1>
      </div>
      <div className="max-w-screen-2xl mx-auto md:p-16 p-10">
        <div className="flex lg:flex-row flex-col justify-center gap-10">
          <div className="hover:bg-primary-1 hover:text-black transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="py-4 px-8">
              <img
                src={favicon}
                className="rounded-full h-12 w-12 mb-4"
                alt="Profile Picture"
              />
              <a href="https://gitlab.com/Codevita_pvt_ltd/accelero_logistics_customer_mobileapp">
                <h4 className="text-lg mb-3 font-semibold">
                  BidGo - Ride-hailing service Application
                </h4>
              </a>
              <p className="mb-2 text-sm text-gray-600">
                <ul>
                  <li>
                    {" "}
                    The project was to develop a cross platform App for
                    Ride-hailing service
                  </li>
                  <li>
                    {" "}
                    Developed a Flutter-based app for Ride-hailing service, Led
                    UI development and API integration for optimized user
                    experience.
                  </li>
                  <li> Technologies used : Flutter,Dart, MySQL, GitHub</li>
                </ul>
              </p>
              <img src={Bidgo} className="w-full" alt="Article Image" />
              <hr className="mt-4" />
              &nbsp;<span className="text-xs text-gray-500">PROJECTS</span>
            </div>
          </div>

          <div className="hover:bg-primary-1 hover:text-black transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="py-4 px-8">
              <img
                src={favicon}
                className="rounded-full h-12 w-12 mb-4"
                alt="Profile Picture"
              />
              <a href="https://github.com/Danushan99/Ead_Web_Api">
                <h4 className="text-lg mb-3 font-semibold">
                  E-Bird - Ticket Management System For Sliit
                </h4>
              </a>
              <p className="mb-2 text-sm text-gray-600">
                <ul>
                  <li>
                    {" "}
                    Developed an Enterprise Application For Train ticket
                    management system comprising .NET Web API backend for
                    booking and data management
                  </li>

                  <li>
                    {" "}
                    Technologies used : .NET Framework, C, ASP.NET Web API,
                    Java/Kotlin for Android, ReactJs, and RESTful API design.
                  </li>
                </ul>
              </p>
              <img src={Ebird} className="w-full" alt="Article Image" />
              <hr className="mt-4" />
              &nbsp;<span className="text-xs text-gray-500">Projects</span>
            </div>
          </div>
          <div className="hover:bg-primary-1 hover:text-black transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="py-4 px-8">
              <img
                src={favicon}
                className="rounded-full h-12 w-12 mb-4"
                alt="Profile Picture"
              />
              <a href="https://github.com/Danushan99/Assignment_frontend">
                <h4 className="text-lg mb-3 font-semibold">
                  S-Manager -Student Management System
                </h4>
              </a>
              <p className="mb-2 text-sm text-gray-600">
                <ul>
                  <li>Developed a Student Management System Using KOA JS</li>

                  <li>
                    Built a simple CRUD app , where we can post student details
                    and retrieve those details in frontend . For this I have
                    used React JS , Koa JS and Material UI
                  </li>
                </ul>
              </p>
              <img src={student} className="w-full" alt="Article Image" />
              <hr className="mt-4" />
              &nbsp;<span className="text-xs text-gray-500">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
