import "./style.css";
import RESTAURANTES from "./mock";

export default function Restaurants() {
  return (
    <div className="restaurants_container">
      <h3>Conheça os nossos restaurantes!</h3>

      <div className="restaurant_container">
        {RESTAURANTES.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            title={restaurant.title}
            category={restaurant.category}
            color={restaurant.color}
          />
        ))}
      </div>
    </div>
  );
}

function Restaurant(props) {
  return (
    <div className="restaurant_card">
      <div className="avatar" style={{ backgroundColor: props.color }}></div>

      <div className="restaurant_info">
        <p>{props.title}</p>
        <p>{props.category}</p>
      </div>
    </div>
  );
}
