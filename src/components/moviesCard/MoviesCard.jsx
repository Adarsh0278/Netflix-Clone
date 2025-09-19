import React, { useState, useRef, useEffect } from "react";
import axiosInstance from "@/api/axios";
import "./MoviesCard.css";

function MoviesCard({ title, category }) {
  const [data, setData] = useState([]);
  const scrollRef = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axiosInstance.get(
          `/movie/${category}?language=en-US&page=1`
        );
        setData(res.data.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();

    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleScroll);

    return () => {
      el.removeEventListener("wheel", handleScroll);
    };
  }, [category]);

  return (
    <div className="px-6 md:px-24 py-4">
      <h2 className="text-2xl font-bold mb-4">
        {title || "Popular on Netflix"}
      </h2>
      <div
        className="flex gap-4 overflow-x-auto pb-4 card-List"
        ref={scrollRef}
      >
        {data.map((card, index) => (
          <div
            key={index}
            className="flex-none w-[300px] transition-transform hover:scale-105"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
              alt={card.original_title}
              className="w-full h-[150px] object-cover rounded"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/fallback-image.jpg"; // ✅ use a local fallback image
              }}
            />
            <h3 className="mt-2 text-md font-bold">{card.original_title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesCard;
