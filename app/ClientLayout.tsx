// app/ClientLayout.tsx
"use client";

import { MovieProvider } from "./context/MovieContext";
import moviesData from "@/data/movies.json";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialMovie = moviesData[0] || null;

  return (
    <MovieProvider initialMovie={initialMovie}>
      {children}
    </MovieProvider>
  );
}