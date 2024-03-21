import React, { useEffect, useState } from 'react'
import { TodosLibros } from '../funciones/funciones'

const Inicio = () => {
  const [libros,setLibros] = useState(null)
    useEffect(() =>{
        TodosLibros(setLibros)
    },[])
    return (
    <>
      {libros !== null ? (
        libros.map(libro => (
          <div key={libro.id}>
            <a>{libro.name}</a>
          </div>
          )
      )): ("no hay libros")}
    </>
  )
}

export default Inicio 