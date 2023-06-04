import { Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

function Formulario() {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="categoria">Buscar por categoría:</Form.Label>
          <Form.Select name="categoria" id="categoria">
            <option>Seleccionar categoria</option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <ListaNoticias />
    </>
  );
}

export default Formulario;
