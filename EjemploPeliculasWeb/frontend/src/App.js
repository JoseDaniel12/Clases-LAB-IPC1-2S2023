import { Route, Routes } from 'react-router-dom'
import Login from './Compontents/Auth/Login'
import CrearPelicula from './Compontents/Movies/CrearPelicula'
import Navbar from './Compontents/General/Navbar';
import ListaPeliculas from './Compontents/Movies/ListaPeliculas';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CrearPelicula />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crearPelicula" element={<CrearPelicula />} />
        <Route path="/verPeliculas" element={<ListaPeliculas />} />
      </Routes>
    </>
  );
}

export default App;
