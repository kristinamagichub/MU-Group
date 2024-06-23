import Form from "../form/Form";
import "./Promo.css";
import promoImg from "../../assets/hero-image.webp";

export function Promo({}) {
  return (
    <div className="bg-divider">
      <div className="promo__container container">
        <h1 className="promo__title h-1">Muse Group Frontend Academy</h1>
        <p className="promo__description txt-1">
          Our academy offers a transformative learning experience designed to
          empower you with the skills and knowledge needed to succeed in the
          ever-evolving field of frontend development.
        </p>
        <img src={promoImg} alt="Page picture" className="promo__img" />
        <p className="promo__description txt-1 txt-1-desctop">
          Are you ready to turn your passion for technology into a thriving
          career?
        </p>
        <Form />
      </div>
    </div>
  );
}

export default Promo;
