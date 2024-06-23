import "./Card.css";

export function Card({ title, description, link, bgColor, imgSrc }) {
  return (
    <div className="card__container">
      {imgSrc ? (
        <img
          className="card__img"
          style={{ backgroundColor: bgColor }}
          src={imgSrc}
          alt="card color"
        />
      ) : (
        <div className="card__img" style={{ backgroundColor: bgColor }}></div>
      )}

      <div className="card__content">
        <h3 className="card__title h-3 card__title-desctop">{title}</h3>
        <p className="card__description ">{description}</p>
        {/* <a href={link} target="_blank" className="card__link">
        Read more
      </a> */}

        <a href={link} target="_blank" className="card__link">
          Read more
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="card__arrow"
            alt="card-arrow"
          >
            <path
              d="M1.25 1.125L5.625 5.5L1.25 9.875"
              stroke="#3366FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card;
