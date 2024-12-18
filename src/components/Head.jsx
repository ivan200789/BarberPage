import "./header.css";
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';


export default function Head () {

  return (
    <header className="header">
      <img src="logo.png" alt="" className="logo" />
      <h1>Admin</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
                Corte
            </Link>
            <Link to="/turnos">
                Turnos
            </Link>
            <Link to="/inventario">
                Inventario
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}