import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <div className="flex flex-col lg:flex-row m-5 sm:m-10 mt-20 justify-around items-center">
        <div className="left text-center lg:text-left">
          <p className="text-5xl sm:text-7xl lg:text-9xl font-bold">RATE MY</p>
          <p className="text-5xl sm:text-7xl lg:text-9xl font-bold">FLAT</p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-5 mt-6">
            {["Pune", "Mumbai", "Banglore", "More"].map((city, i) => (
              <p key={i} className="bg-[#262626] rounded-full px-4 py-1 text-sm sm:text-base">
                {city}
              </p>
            ))}
          </div>
        </div>

        <div className="right mt-10 lg:mt-0 text-center lg:text-left">
          <p className="text-lg sm:text-2xl m-3 sm:m-5">
            Discover Harmonious Living Spaces With<br />
            Honest Reviews by your Peers.<br /><br />
            The only Transparent Platform!
          </p>
          <input
            type="text"
            className="bg-[#262626] m-3 sm:m-5 p-2 ps-5 rounded-full text-base w-full sm:w-2/3"
            placeholder="🔍 Search Flats Near Your Institute"
          />
        </div>
      </div>

      <img src="./home.png" alt="" className="w-full px-4 md:px-30 sm:px-10" />

      <div className="mt-16 text-center">
        <p className="text-3xl sm:text-5xl lg:text-6xl font-semibold">Find A Home Near You</p>
        <nav className="mt-6 sm:mt-10">
          <ul className="flex flex-wrap justify-center gap-5">
            {["Pune", "Mumbai", "Banglore", "Delhi"].map((city, i) => (
              <li key={i}>
                <a href="#" className="text-base sm:text-lg hover:underline">
                  {city}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="m-5 sm:m-10">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 px-4 sm:px-10">
          {[
            { img: "./sit.png", name: "Symbiosis Institute of Technology" },
            { img: "./ISBM.png", name: "ISBM" },
            { img: "./MIT.png", name: "MIT" },
            { img: "./DYP.png", name: "DY Patil" }
          ].map((inst, idx) => (
            <div key={idx} className="w-40 sm:w-1/4 text-center">
              <img src={inst.img} alt="" className="w-full h-auto mx-auto" />
              <p className="mt-2">{inst.name}</p>
              <p className="text-sm text-[#d9d9d9]">Avg Cost 25k/Month</p>
              <p className="text-sm text-gray-600">Lavle</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="rounded-lg shadow-sm m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between text-center sm:text-left">
            <a href="#" className="flex justify-center sm:justify-start items-center mb-4 sm:mb-0 space-x-3">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rate My Flat</span>
            </a>
            <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Licensing</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700" />
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2025 <a href="#" className="hover:underline">Rate My Flat™</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
