import React, {useEffect, useState} from 'react';

function ListaNombres(){
    const [nombres, setNombres] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (response => {
            if (!response.ok){
                throw new Error('Error de conexion')
            }
            return response.json();
        })
        .then((data) => {
            setNombres(data);
            setCargando(false);
        })
        .catch((error) =>{
            setError(error);
            setCargando(false);
        });
    },[]);

    return(
        <div>
            <h1>Lista de nombres</h1>
            <ul>
                {nombres.map((nom, index) =>(
                    <li key={index}>{nom.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default ListaNombres;