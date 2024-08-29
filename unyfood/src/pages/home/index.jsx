import Header from "../../components/header";
import Search from "../../components/search";
import Card from "../../components/card";
import Restaurants from "../../components/restaurants";
import Information from "../../components/information";
import Footer from "../../components/footer";
import img1 from "../../img/img1.svg";
import img2 from "../../img/img2.svg";
import "./style.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Search />

      <div className="container_card">
        <Card title="Comidas" img={img1} alt="Lanche" color="#ed1c16" />
        <Card title="Bebidas" img={img2} alt="Bebida" color="#009432" />
      </div>

      <Restaurants />
      <Information />
      <Footer />
    </div>
  );
}
