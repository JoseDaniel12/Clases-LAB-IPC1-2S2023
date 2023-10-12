import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import UserLayout from './components/UserLayout/UserLayout';
import ListaMedicinas from './components/ListaMedicinas/ListaMedicinas'

export const UserContext = React.createContext();

function App() {
  const [usuario, setUsuario] = useState({
    idUsuario: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    nombre: 'jose',
    contrasenia: '123',
    tipoUsuario: 'PACIENTE'
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
          // compontentes hijos
        </Route>

      </Routes>
    </UserContext.Provider>
  );
}

export default App;
