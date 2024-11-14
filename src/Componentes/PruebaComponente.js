import React, {useEffect, useState} from 'react';

export const PruebaComponente =() =>{
    const[usuario, setUsuario] = useState("Gerardo Pineda");
    const[fecha, setFecha] = useState("01-01-2024");

    const modUsuario = e =>{
        setUsuario(e.target.value);
    };

    const modFecha = e =>{
        setFecha(Date.now());
    }

    useEffect(() =>{
        console.log("Se cargo el componente de prueba");
    });

    useEffect(()=>{
        console.log("Cambio el usuario");
    },[usuario]);

    return (
        <div>
            <h3>El efecto - Hook useEffect</h3>
            <br></br>
            <strong>{usuario}</strong>
            <br></br>
            <strong>{fecha}</strong>
            <br></br>
            <input type='text' onChange={modUsuario} placeholder='ingresa nombre'></input>
            <br></br>
            <button onClick={modFecha}>Cambiar fecha</button>
        </div>

    )
}
