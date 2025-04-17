// import React from "react";
import React, { useEffect, useState } from "react";

const Home = () => {
  
  return (
    <div>
      <div className="flex m-10 mt-20 justify-around">
        <div className="left">
          <p className="text-9xl font-bold">RATE MY</p>
          <p className="text-9xl font-bold">FLAT</p>
          <div className="flex gap-5 mt-10">
            <p className="bg-[#262626] rounded-full px-5 py-1">Pune</p>
            <p className="bg-[#262626] rounded-full px-5 py-1">Mumbai</p>
            <p className="bg-[#262626] rounded-full px-5 py-1">Banglore</p>
            <p className="bg-[#262626] rounded-full px-5 py-1">More</p>
          </div>
        </div>
        <div className="right">
          <p className="text-2xl m-5">
            Discover Harmonious Living Spaces With<br></br>
            Honest Reviews by your Peers.<br></br>
            <br></br>
            The only Transparent Platform !
          </p>
          <input
            type="text"
            className="bg-[#262626] m-5 p-2 ps-5 rounded-full text-large w-2/3"
            placeholder="🔍 Search Flats Near Your Institute"
          />
        </div>
      </div>
      <img src="./home.png" alt="" className="w-full px-30" />
      <div className="mt-30">
        <p className="text-center text-6xl">Find A Home Near You</p>
        <nav className="mt-10 items-center">
          <ul className="flex  justify-center w-full city-list">
            <li>
              <a href="#" className="text-large m-5 hover:underline me-4 md:me-6">
                Pune
              </a>
            </li>
            <li>
              <a href="#" className="text-large m-5 hover:underline me-4 md:me-6">
                Mumbai
              </a>
            </li>
            <li>
              <a href="#" className="text-large m-5 hover:underline me-4 md:me-6">
                Banglore
              </a>
            </li>
            <li>
              <a href="#" className="text-large m-5 hover:underline me-4 md:me-6">
                Delhi
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="m-10">
        <div className="flex px-10 gap-10">
          <div className="w-1/4">
            <img src="./sit.png" alt="" className="" />
            <p className="">Symbiosis Institute of Technology</p>
            <p className="text-sm text-[#d9d9d9]">Avg Cost 25k/Month</p>
            <p className="text-sm text-gray-600">Lavle</p>
          </div>
          <div className="w-1/4">
            <img src="./ISBM.png" alt="" className="" />
            <p className="">ISBM</p>
            <p className="text-sm text-[#d9d9d9]">Avg Cost 25k/Month</p>
            <p className="text-sm text-gray-600">Lavle</p>
          </div>
          <div className="w-1/4">
            <img src="./MIT.png" alt="" className="" />
            <p className="">MIT</p>
            <p className="text-sm text-[#d9d9d9]">Avg Cost 25k/Month</p>
            <p className="text-sm text-gray-600">Lavle</p>
          </div>
          <div className="w-1/4">
            <img src="./DYP.png" alt="" className="" />
            <p className="">DY Patil</p>
            <p className="text-sm text-[#d9d9d9]">Avg Cost 25k/Month</p>
            <p className="text-sm text-gray-600">Lavle</p>
          </div>

        </div>
      </div>


<footer class="rounded-lg shadow-sm m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rate My Flat</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">Rate My Flat™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  );
};

export default Home;
