"use client";
import HomeHero from "@/app/components/hero/home_hero";
import MovieRow from "@/app/components/movies/MovieRow";
import { useMovieContext } from "@/app/context/MovieContext";

export default function HomePage() {
  const { featuredMovie } = useMovieContext();
  
  return (
    <div className="h-full flex flex-col">
      <HomeHero movie={featuredMovie} />
      <MovieRow />
    </div>
  );
}