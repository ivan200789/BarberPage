import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Head from './components/Head';

import "./App.css";
import Turnos from "./components/page/Turnos";
import Inventario from './components/page/Inventario';
import Login from './components/page/Login';
import Corte from './components/page/Corte';
import { Suspense } from 'react';
import StateCortes from './components/Context/StateCortes';
import StateUsuarios from './components/Context/StateUsuarios';
const AppContent = () => {
  const location = useLocation();
  
  return (
    <>
      {/* Mostrar el Head solo si no estamos en la ruta "/" */}
      {location.pathname !== "/" && <Head />}
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/corte"
          element={
            <Suspense fallback={<div>Cargando datos...</div>}>
              <Corte/>
            </Suspense>
          }
        />
        <Route
          path="/turnos"
          element={
            <Suspense fallback={<div>Cargando datos...</div>}>
              <Turnos />
            </Suspense>
          }
        />
        <Route
          path="/inventario"
          element={
            <Suspense fallback={<div>Cargando datos...</div>}>
              <Inventario />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <StateCortes>
      <StateUsuarios>
        <Router>
          <AppContent />
        </Router>
      </StateUsuarios>
    </StateCortes>
  );
};

export default App;
