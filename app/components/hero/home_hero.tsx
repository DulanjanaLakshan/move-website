import React from "react";

import { Play, Info, Star, Clock, Calendar } from "lucide-react";
import { useMovieContext } from "@/app/context/MovieContext";

const HomeHero = () => {
  const { featuredMovie } = useMovieContext();
  return (
    <div className="flex-1 flex flex-col justify-center px-4 md:px-6 lg:px-8 max-w-4xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
        {featuredMovie?.title || "Featured Movie"}
      </h1>

      <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="text-white font-semibold text-lg">8.5/10</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-white/70" />
          <span className="text-white/80 text-lg">2024</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-white/70" />
          <span className="text-white/80 text-lg">2h 28m</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
            Action
          </span>
          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
            Adventure
          </span>
          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
            Sci-Fi
          </span>
        </div>
      </div>
      <p className="text-white/90 text-lg md:text-xl mb-8 md:mb-10 leading-relaxed max-w-3xl drop-shadow">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel rem optio
        iste, reiciendis explicabo, neque adipisci suscipit non tempora
        repellendus aspernatur quasi sequi dicta? Vero veniam repellat eaque
        expedita alias. An epic adventure that will take you beyond imagination.
      </p>
      <div className="flex flex-wrap gap-4 md:gap-6 mb-10 md:mb-12">
        <button className="group flex items-center gap-3 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
          <Play className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-pulse" />
          <span className="font-bold text-base md:text-lg">Play Now</span>
        </button>

        <button className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40">
          <Info className="w-5 h-5 md:w-6 md:h-6" />
          <span className="font-semibold text-base md:text-lg">
            Watch Trailer
          </span>
        </button>

        <button className="group flex items-center gap-3 bg-white/5 backdrop-blur-sm text-white px-4 md:px-6 py-3 md:py-4 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/30">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 group-hover:fill-white/20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="font-medium text-sm md:text-base">
            Add to Watchlist
          </span>
        </button>
      </div>

      <div className="mb-8 md:mb-10">
        <h3 className="text-white/80 text-lg md:text-xl mb-4 font-medium">
          Starring
        </h3>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {[
            "Chris Evans",
            "Scarlett Johansson",
            "Robert Downey Jr.",
            "Mark Ruffalo",
          ].map((actor) => (
            <div
              key={actor}
              className="px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            >
              <span className="text-white/90 text-sm md:text-base">
                {actor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
