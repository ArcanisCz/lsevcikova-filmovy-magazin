import React from 'react'
import movies from '../../movie-database'
import { Link } from 'react-router-dom'

const MovieList = () => {
  return (
    <ul>
      {movies.map(movie => (
        <li>
          <Link to={`/filmy/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default MovieList
