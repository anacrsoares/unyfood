import "./style.css";
import Button from "../button/index.jsx";

export default function Header() {
  return (
    <header>
      <h1>Unyfood</h1>

      <nav>
        <ul>
          <li>Categorias</li>
          <li>Restaurantes</li>
          <li>Informações</li>
          <li>Cadastre-se</li>
          <li>
            <Button title="Entrar" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
