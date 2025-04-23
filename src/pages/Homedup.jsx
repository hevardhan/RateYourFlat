import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Homedup = () => {
  const logoRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(logoRef.current, {
      scale: 0.5, // Shrinks the text
      y: -50, // Moves it upwards
      x: -100, // Moves it left into the navbar
      duration: 0.5,
    }).to(navbarRef.current, { backgroundColor: "#262626", opacity: 1 }, 0);
  }, []);

  return (
    <div>
      {/* Navbar with the same "RATE MY FLAT" text */}
      <div ref={navbarRef} className="navbar fixed top-0 left-0 w-full flex items-center justify-between px-10 py-3 opacity-0 transition-all duration-300">
        <p ref={logoRef} className="text-9xl font-bold transition-all duration-500">
          RATE MY FLAT
        </p>
        <ul className="flex gap-5">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Locations</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="hero flex m-10 mt-20 justify-around">
        <div className="left">
          <p ref={logoRef} className="text-9xl font-bold">RATE MY FLAT</p>
          <div className="flex gap-5 mt-10">
            <p className="bg-[#262626] rounded-full px-5 py-1">Pune</p>
            <p className="bg-[#262626] rounded-full px-5 py-1">Mumbai</p>
            <p className="bg-[#262626] rounded-full px-5 py-1">Banglore</p>
            <p className="bg-[#262626] rounded-full px-5 py-1">More</p>
          </div>
        </div>
        <div className="right">
          <p className="text-2xl m-5">
            Discover Harmonious Living Spaces With<br />
            Honest Reviews by your Peers.<br />
            <br />
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
        <nav className="mt-10">
          <ul className="flex justify-center w-full">
            <li><a href="#" className="text-large m-5 hover:underline">Pune</a></li>
            <li><a href="#" className="text-large m-5 hover:underline">Mumbai</a></li>
            <li><a href="#" className="text-large m-5 hover:underline">Banglore</a></li>
            <li><a href="#" className="text-large m-5 hover:underline">Delhi</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Homedup;
