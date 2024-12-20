import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Head from './components/Head';
import Corte from './components/page/Corte';
import "./App.css"
import StateCortes from './components/Context/StateCortes';
import Turnos from "./components/page/Turnos"
import Inventario from './components/page/Inventario';

const App = () => {
  return (
    <StateCortes>
      <BrowserRouter>
      <Head/>
        <Routes>
          <Route path="/" element={<Corte />} />
          <Route path="/turnos" element={<Turnos />} />
          <Route path="/inventario" element={<Inventario />} />

        </Routes>
      </BrowserRouter>
    </StateCortes>
  );
};

export default App;