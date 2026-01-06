"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Media, mediaList } from "@/data/MovieData";

interface MovieContextType {
  featuredMovie: Media | null;
  setFeaturedMovie: (movie: Media) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [featuredMovie, setFeaturedMovie] = useState<Media | null>(mediaList[0]);

  return (
    <MovieContext.Provider value={{ featuredMovie, setFeaturedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};