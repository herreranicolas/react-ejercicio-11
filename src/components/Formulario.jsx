import { Col, Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

function Formulario() {
  return (
    <>
      <Form className="p-3 border border-2 border-dark border-bottom-0">
        <Form.Group
          as={Row}
          className="justify-content-center align-items-center"
        >
          <Form.Label
            column
            sm={2}
            htmlFor="categoria"
            className="p-0 text-end"
          >
            Buscar por categoría:
          </Form.Label>
          <Col sm={10} md={4}>
            <Form.Select name="categoria" id="categoria">
              <option>Seleccionar categoria</option>
              <option value="1">Categoria 1</option>
              <option value="2">Categoria 2</option>
              <option value="3">Categoria 3</option>
            </Form.Select>
          </Col>
        </Form.Group>
      </Form>
      <ListaNoticias />
    </>
  );
}

export default Formulario;
