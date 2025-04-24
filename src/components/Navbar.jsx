import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ is_fixed = true }) => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (is_fixed && navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: '-100%' },
        {
          y: '0%',
          ease: 'power3.out',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: '+=200',
            scrub: true,
          },
        }
      );
    }
  }, [is_fixed]);

  return (
    <nav
      ref={navRef}
      className={`top-0 left-0 w-full z-50 bg-black text-white shadow-md ${is_fixed ? 'fixed' : 'relative'}`}
    >
      <div className="px-6 md:px-30 flex py-4 justify-between items-center">
        <a href="/">
        <div className="text-3xl md:text-5xl font-bold">RATE MY FLAT</div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          {/* <a href="/about" className="hover:text-gray-300">About</a> */}
          <a href="/find" className="hover:text-gray-300">Flats</a>
          <a
            href="https://zennai99.b2clogin.com/zennai99.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_carrerally&client_id=cd0a749b-f57d-4172-be86-b00ba933235d&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fcareerally-78e9f.web.app%2Flogin&scope=openid&response_type=code&prompt=login"
            className="bg-white text-black px-4 py-1 rounded-full font-semibold hover:bg-gray-200 transition hover:scale-110 active:scale-100"
          >
            Login
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center pb-4">
          <a href="/home" className="block hover:text-gray-300">Home</a>
          <a href="#" className="block hover:text-gray-300">About</a>
          <a href="#" className="block hover:text-gray-300">Services</a>
          <a href="#" className="block hover:text-gray-300">Contact</a>
          <a
            href="#"
            className="inline-block bg-white text-black px-5 py-1 rounded-full font-semibold hover:bg-gray-200 transition mt-2"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
