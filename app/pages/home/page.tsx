"use client";
import HomeHero from "@/app/components/hero/home_hero";
import MovieRow from "@/app/components/movies/MovieRow";

export default function HomePage() {
  return (
    <div className="h-full flex flex-col">
      {/* Movie Details Section */}
      <HomeHero/>
      {/* Movie Row Section */}
      <div className="pb-6 md:pb-8 lg:pb-10">
        <div className="mb-4 px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Trending Now</h2>
          <p className="text-white/70 mt-2 text-sm md:text-base">Click on any movie to set as featured</p>
        </div>
        <div className="w-full">
          <MovieRow />
        </div>
      </div>
    </div>
  );
}