import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faBuilding, faStar, faUsers } from '@fortawesome/free-solid-svg-icons'
import Footer from "@/components/Footer";

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

      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find, review, and rate student accommodations in three simple steps.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border">
              <FontAwesomeIcon icon={faUniversity} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Find Your College</h3>
              <p className="text-muted-foreground">
                Browse through our list of cities and colleges to find accommodations near your campus.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border">
              <FontAwesomeIcon icon={faBuilding} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Explore Flats</h3>
              <p className="text-muted-foreground">
                View detailed information about available flats, including photos, amenities, and student reviews.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border">
              <FontAwesomeIcon icon={faStar} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Rate & Review</h3>
              <p className="text-muted-foreground">
                Share your experience by rating and reviewing flats to help other students make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>    



      <div className="w-full py-12 md:py-24 lg:py-32 bg-[#262626] text-white">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#A0A0A0] pt-3">
                Connect with thousands of students sharing their accommodation experiences
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-5">
              <a href="https://zennai99.b2clogin.com/zennai99.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_carrerally&client_id=cd0a749b-f57d-4172-be86-b00ba933235d&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fcareerally-78e9f.web.app%2Flogin&scope=openid&response_type=code&prompt=login">
              <button className="bg-black gap-3 text-white rounded-full px-5 py-5 text-base sm:text-lg font-semibold hover:scale-110 active:scale-100 transition duration-300 flex items-center space-x-2">
                  <FontAwesomeIcon icon={faUsers} />
                  Sign Up Now
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
