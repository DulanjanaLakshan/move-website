// app/page.tsx
"use client";
import NavBar from "@/app/components/navbar/NavBar";
import Image from "next/image";
import HomePage from "./pages/home/page";
import { useMovieContext } from "./context/MovieContext";

export default function Home() {
  const { featuredMovie } = useMovieContext();
  const url = featuredMovie?.backdrop || "";

  return (
    <div className="relative w-screen h-screen overflow-x-hidden">
      {/* background */}
      <div className="fixed inset-0 z-0">
        {url ? (
          <Image
            src={url}
            alt="Background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-900" />
        )}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/20" />
      </div>
      <div className="relative z-10 flex h-full">
        <NavBar />
        <main className="flex-1 h-full p-10 lg:ml-72">
          <HomePage />
        </main>
      </div>
    </div>
  );
}