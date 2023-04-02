import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <Link to='/'>Domů</Link>
      <span> | </span>
      <Link to='/recenze'>Recenze</Link>
      <span> | </span>
      <Link to='/clanky'>Články</Link>
      <span> | </span>
      <Link to='/filmy'>Filmy</Link>
    </nav>
  )
}

export default Menu
