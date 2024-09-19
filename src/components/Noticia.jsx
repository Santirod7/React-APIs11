import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../bootstrap.min.css'

const Noticia = () => {
    return (
        <div className='col-3 my-2 ms-2'>

            <Card>
            <div className='text-center'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>titulo api</Card.Title>
        <Card.Text>
          contenido api
        </Card.Text>
        <Button variant="info">Ver noticia completa</Button>
      </Card.Body>
            </div>
    </Card>
        </div>
    );
};

export default Noticia;