import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

export default function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="w-[90px] text-center">
      <Link href={`/peliculas/${movie._id}`}>
        {movie.poster && !imageError ? (
          <div>
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[135px] object-cover rounded-md"
              onError={handleImageError}
            />
          </div>
        ) : (
          <div className="w-full h-[135px] bg-gray-300 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-600 text-center">{movie.title}</span>
          </div>
        )}
      </Link>

      <div>
        <button
          className={`heart-button ${liked ? 'liked' : ''}`}
          onClick={toggleLike}
          aria-label={liked ? 'Quitar Me gusta' : 'Dar Me gusta'}
        >
          <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} />
        </button>
      </div>

      <p className="text-xs mt-1 truncate">{movie.title}</p>
      <p>{movie.year}</p>
    </div>
  );
}
