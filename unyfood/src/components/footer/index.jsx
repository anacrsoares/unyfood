import "./style.css";
import img5 from "../../img/img5.svg";
import img6 from "../../img/img6.svg";

export default function Footer() {
  return (
    <div className="footer_container">
      <h3>Todos os direitos reservados</h3>
      <div className="icons">
        <img src={img5} />
        <img src={img6} />
      </div>
    </div>
  );
}
