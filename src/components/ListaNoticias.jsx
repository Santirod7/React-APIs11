import Noticia from "./Noticia";
import '../bootstrap.min.css'

const ListaNoticias = ({categorias}) => {
    return (
        <div className="row justify-content-evenly">
       {       
                categorias.map((noticias,indice)=><Noticia key={noticias.article_id} titulo={noticias.title} descripcion={noticias.description} link={noticias.title} img={noticias.image_url}></Noticia>)   
            } 
        </div>
    );
};

export default ListaNoticias;