// app/components/MovieCard.tsx
import Image from 'next/image'
import React from 'react'
import { Movie } from '@/types/Movie'

interface MovieCardProps {
  movie: Movie
  onClick?: () => void
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const imageSrc = movie.backdrop || movie.poster

  return (
    <div
      onClick={onClick}
      className="relative w-full h-40 sm:h-48 md:h-52 lg:h-52 xl:h-52 rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
    >
      <Image
        src={imageSrc}
        alt={movie.title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
      <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-4 md:left-4 md:right-4">
        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg line-clamp-2">{movie.title}</h2>
      </div>
    </div>
  )
}

export default MovieCard