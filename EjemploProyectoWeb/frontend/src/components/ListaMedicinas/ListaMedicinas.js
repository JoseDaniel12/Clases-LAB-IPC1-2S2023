import { useState, useEffect } from 'react'

function ListaMedicinas() {
    const [medicinas, setMedicinas] = useState([]);

    const getMedicinas = async () => {
        const response = await fetch('http://localhost:4000/paciente/stockMedicinas');
        const data = await response.json();
        setMedicinas(data.medicinas);
    }

    useEffect(() => {
        getMedicinas();
    }, [])

    return (
        <div>
            <div><b>Lista de ListaMedicinas</b></div>
            {
                medicinas.map(meidicina => {
                    return (
                        <div key={meidicina.idMedicina}> {meidicina.nombre} </div>
                    )
                })
            }
        </div>
    )
}

export default ListaMedicinas;