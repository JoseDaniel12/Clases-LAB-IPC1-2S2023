import { useContext } from 'react';
import { UserContext } from '../../App'
import PacienteNavbar from '../PacienteNavbar/PacienteNavbar'
import EnfermeraNavbar from '../EnfermeraNavbar/EnfermeraNavbar'
import { Outlet } from 'react-router-dom';

function UserLayout() {
    const usuario = useContext(UserContext);

    let navbar = <PacienteNavbar />;
    switch (usuario.tipoUsuario) {
        case "ENFERMERA":
            navbar = <EnfermeraNavbar />
    }

    return (
        <>
            {navbar}
            <Outlet />
        </>
    )
}

export default UserLayout;