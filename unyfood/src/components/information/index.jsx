import "./style.css";
import Button from "../button";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";

export default function Information() {
  return (
    <div className="informations_container">
      <h3>Informações</h3>
      <InformationCard
        img={img3}
        info="A partir da convergência de ideias que emergem no contexto contemporâneo, é imperativo considerar as nuances que permeiam a relação entre as diversas esferas do conhecimento. Nesse sentido, o processo de transição paradigmática, alicerçado nos pilares da interdisciplinaridade, oferece um panorama multifacetado que transcende as abordagens tradicionais, ressignificando o papel das práticas emergentes na construção de novas epistemologias."
      />
      <InformationCard
        img={img4}
        info="Dessa forma, a sinergia entre os agentes envolvidos catalisa a evolução do pensamento crítico, promovendo uma releitura dos conceitos preexistentes e ampliando os horizontes das possibilidades."
      />
    </div>
  );
}

function InformationCard(props) {
  return (
    <div className="information_container">
      <img src={props.img} />

      <div className="information_information">
        <h4>Título</h4>
        <p>{props.info}</p>
        <Button title="Saiba Mais" />
      </div>
    </div>
  );
}
