"use client";
import HomeHero from "@/app/components/hero/home_hero";
import MovieRow from "@/app/components/movies/MovieRow";
import { useMovieContext } from "@/app/context/MovieContext";

export default function HomePage() {
  const { featuredMovie } = useMovieContext();
  
  return (
    <div className="h-full flex flex-col">
      <HomeHero movie={featuredMovie} />
      <MovieRow title = "Trending Now" subtitle = "Click on any movie to set as featured"/>
      <MovieRow title = "Cartoons " subtitle = "Click on any movie to set as featured"/>
      <MovieRow title = "Sinhala Movies" subtitle = "Click on any movie to set as featured"/>
    </div>
  );
}