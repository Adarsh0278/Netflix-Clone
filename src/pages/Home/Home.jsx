import React from "react";
import Navbar from "../../components/layout/Navbar";
import Images from "../../components/constant/Image";
import { MdErrorOutline } from "react-icons/md";
import MoviesCard from "../../components/moviesCard/MoviesCard.jsx";
import { FaPlay } from "react-icons/fa";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[90vh] w-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${Images.hero_banner})` }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/20 to-blue-50/10
             "
        ></div>

        <div className="relative z-10 max-w-xl ml-6 md:ml-24 pt-[45vh] px-4">
          <img
            src={Images.hero_title}
            alt="title"
            className="mb-6 w-[70%] -mt-32"
          />
          <p className="text-base md:text-lg mb-6 text-gray-200">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex gap-4">
            {/* Play Button */}
            <button
              className="flex justify-center items-center gap-2 px-6 py-2 md:px-8 bg-white text-black rounded-sm  cursor-pointer font-semibold shadow-md 
                     hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <FaPlay className="text-lg" />
              Play
            </button>

            {/* More Info Button */}
            <button
              className="flex justify-center items-center gap-2 px-6 py-2 md:px-8 bg-black/40 text-white rounded-sm   cursor-pointer font-semibold shadow-md 
                     hover:bg-black/30 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <MdErrorOutline className="text-lg" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Movies Sections */}
      <div className="relative z-20 -mt-32 scrollbar-hide">
        <MoviesCard title="Trending Now" category="now_playing" />
        <MoviesCard title="Upcoming" category="upcoming" />
        <MoviesCard title="Top Rated" category="top_rated" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
