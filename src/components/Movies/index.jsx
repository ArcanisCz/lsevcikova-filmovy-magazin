import React from 'react'
import MovieList from '../MoviesList'
import { Outlet } from 'react-router-dom'

const Movies = () => {
  return (
    <main>
      <h1>Filmy</h1>
      <MovieList />
      <Outlet />
    </main>
  )
}

export default Movies
