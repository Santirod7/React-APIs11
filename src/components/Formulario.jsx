import '../bootstrap.min.css'
import Form from 'react-bootstrap/Form';
    import ListaNoticias from './ListaNoticias';
    import { useEffect, useState } from 'react';
const Formulario = () => {
    const [categorias, setCategorias]=useState([])

    useEffect (()=>{
        consultarAPI();
    }, [])

    const consultarAPI = async()=>{
        const respuesta = await fetch('https://newsdata.io/api/1/latest?apikey=pub_53810e3520453101b16e9a2ec8b3cfed1fbd1')
        const datos = await respuesta.json()
        console.log(datos)
        setCategorias(datos.results)
    }
    return (
        <div className="bg-secondary px-3">
            <div className='d-flex justify-content-center border border-light'>
            <h6 className='text-light me-3 align-content-center'> Buscar por categoria</h6>
            <div className='my-3'>
            <Form.Select size="sm" className='w-100' aria-label="Default select example">
      <option>Abrir menu de opciones</option>
      <option value="1">Categoria 1</option>
      <option value="2">Categoria 2</option>
      <option value="3">Categoria 3</option>
    </Form.Select>
            </div>
            </div>
            <ListaNoticias categorias={categorias}></ListaNoticias>)   
            
        </div>
    );
};

export default Formulario;