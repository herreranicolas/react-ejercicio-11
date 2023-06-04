import { Container } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = () => {
  return (
    <Container fluid className="py-3 border border-2 border-dark">
      <Noticia />
    </Container>
  );
};

export default ListaNoticias;
