import "./style.css";

export default function Card(props) {
  return (
    <div className="specific_card" style={{ background: props.color }}>
      <div className="specific_card_content">
        <p>{props.title}</p>
        <button>Ver Opções</button>
      </div>

      <div className="specific_card_img">
        <img src={props.img} alt={props.alt} />
      </div>
    </div>
  );
}
