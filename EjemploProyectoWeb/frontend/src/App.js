import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import UserLayout from './components/UserLayout/UserLayout';
import ListaMedicinas from './components/ListaMedicinas/ListaMedicinas'
import CargarMedicina from './components/CargarMedicina/CargarMedicina';
import EditarMedicamento from './components/EditarMedicamento/EditarMedicamento';

export const UserContext = React.createContext();

function App() {
  const [usuario, setUsuario] = useState({
    idUsuario: 'b953a531-296e-415b-986a-6a5c80ac3353',
    nombre: 'monica',
    contrasenia: '123',
    tipoUsuario: 'ENFERMERA'
  });

  return (
    <UserContext.Provider value={usuario}>
      <Routes>
        // Rutas de Autenticacion
        <Route path="/" element={<Login setUsuario={setUsuario} />} />
        <Route path="/login" element={<Login setUsuario={setUsuario} />} />

        // Rutas de los Usuarios de Tipo PACIENTE
        <Route path="/paciente" element={<UserLayout />}>
          <Route index element={<ListaMedicinas />} />
          <Route path="verMedicinas" element={<ListaMedicinas />} />
        </Route>

        // Rutas de los Usuarios de Tipo ENFERMERA
        <Route path="/enfermera" element={<UserLayout />}>
          <Route index element={<CargarMedicina />} />
          <Route path="cargarMedicina" element={<CargarMedicina />} />
          <Route path="editarMedicamento" element={<EditarMedicamento />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
