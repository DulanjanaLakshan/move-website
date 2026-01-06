import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { mediaList } from "@/data/MovieData";
import { useMovieContext } from "@/app/context/MovieContext";
import MovieCard from "./MovieCard";

interface MovieRowProps {
  title: string | null;
  subtitle: string | null;
  data?: typeof mediaList;
}

const MovieRow = ({ 
  title,
  subtitle,
  data = mediaList 
}: MovieRowProps) => {
  const { setFeaturedMovie } = useMovieContext();
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const handleMovieClick = (movie: typeof mediaList[0]) => {
    setFeaturedMovie(movie);
  };

  const trendingMovies = data.filter(movie => movie.isTrending);

  return (
    <div className="pb-6 md:pb-8 lg:pb-10">
      <div className="mb-4 px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {title}
        </h2>
        <p className="text-white/70 mt-2 text-sm md:text-base">
          {subtitle}
        </p>
      </div>
      <div className="w-full">
        <div className="flex justify-start items-end h-full w-full text-white px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            plugins={[plugin.current]}
          >
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
              {trendingMovies.map((movie) => (
                <CarouselItem
                  key={movie.id}
                  className="pl-2 sm:pl-3 md:pl-4 
                basis-1/1 
                xs:basis-1/1
                sm:basis-1/2 
                md:basis-1/2 
                lg:basis-1/3 
                xl:basis-1/4
                2xl:basis-1/5"
                >
                  <MovieCard
                    movie={movie}
                    onClick={() => handleMovieClick(movie)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MovieRow;