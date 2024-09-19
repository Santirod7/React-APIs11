import Card from 'react-bootstrap/Card';
import '../bootstrap.min.css'
import'../App.css'

const Noticia = ({titulo,descripcion,link,img}) => {
    return (
        <article className='col-12 col-md-6 col-lg-3 my-2'>
            <Card className='h-100'>
            <div className='text-center'>
      <Card.Img className='tamañoimg' variant="top" src={img} />
      <Card.Body>
        <Card.Title className='fw-bolder'>{titulo}</Card.Title>
        <Card.Text size='sm'>
          {
          descripcion
          }
        </Card.Text>
        <a className='btn btn-info' href={link}>Ver noticia completa</a>
      </Card.Body>
            </div>
    </Card>
        </article>
    );
};

export default Noticia;