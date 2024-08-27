import "./style.css";

export default function Button(props) {
  return <button className="btn">{props.title || "texto botão"}</button>;
}
