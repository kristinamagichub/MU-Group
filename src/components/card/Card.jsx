import "./Card.css";
import ReadMoreIcon from "../../assets/read-more-vector.svg";

export function Card({ title, description, link, bgColor }) {
  return (
    <div className="card__container">
      <img
        className="card__img"
        style={{ backgroundColor: bgColor }}
        src="#"
        alt="card color"
      />
      <div className="card__content">
        <h3 className="card__title h-3">{title}</h3>
        <p className="card__description ">{description}</p>
        {/* <a href={link} target="_blank" className="card__link">
        Read more
      </a> */}

        <a href={link} target="_blank" className="card__link">
          Read more
          <img className="card__arrow" src={ReadMoreIcon} alt="card-arrow" />
        </a>
      </div>
    </div>
  );
}

export default Card;
