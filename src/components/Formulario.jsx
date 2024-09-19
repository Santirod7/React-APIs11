import '../bootstrap.min.css'
import Form from 'react-bootstrap/Form';
    import ListaNoticias from './ListaNoticias';
const Formulario = () => {
    return (
        <div className="bg-secondary">
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
            <ListaNoticias></ListaNoticias>
        </div>
    );
};

export default Formulario;