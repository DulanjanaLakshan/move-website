// app/hooks/useFeaturedMovie.ts
import { useState } from 'react';
import { Movie } from '@/types/Movie';

export const useFeaturedMovie = () => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);

  return {
    featuredMovie,
    setFeaturedMovie,
    backdropUrl: featuredMovie?.backdrop || "",
  };
};