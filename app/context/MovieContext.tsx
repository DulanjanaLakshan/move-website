// app/context/MovieContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Movie } from '@/types/Movie';

interface MovieContextType {
  featuredMovie: Movie | null;
  setFeaturedMovie: (movie: Movie | null) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within MovieProvider');
  }
  return context;
};

interface MovieProviderProps {
  children: ReactNode;
  initialMovie?: Movie | null;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ 
  children, 
  initialMovie = null 
}) => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(initialMovie);

  return (
    <MovieContext.Provider value={{ featuredMovie, setFeaturedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};