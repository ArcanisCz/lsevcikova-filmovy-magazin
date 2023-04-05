import React from 'react'
import movies from '../../movie-database'
import { Link } from 'react-router-dom'

const MovieList = () => {
  return (
    <div className='movieList-wrapper'>
      <h1>Movies</h1>
      <ul className='movieList'>
        {movies.map(movie => (
          <li className='movieLink'>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList
