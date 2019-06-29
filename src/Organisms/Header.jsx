import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h2>Logo</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">inicia</Link>
          </li>
          <li>
            <Link to="/notes">Lista de notas</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
