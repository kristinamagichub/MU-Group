import "../../utils/constants";
import "./Form.css";
import RightArrow from "../../assets/button-arrow-icon.svg";

export function Form({}) {
  function sendRequest(event) {
    event.preventDefault();
    console.log("event", event);
    // const

    // isValid ? alert("Welcome to the team!") : alert("Email is invalid");
  }
  return (
    <form className="form__container">
      <input
        placeholder="Email"
        type="email"
        pattern="EMAIL_PATTERN"
        className="form__frame form__input txt-1"
      />
      <button
        onClick={sendRequest}
        type="submit"
        className="form__frame form__button txt-1"
      >
        Join
        <img src={RightArrow} alt="arrow" className="form__arrow" />
      </button>
    </form>
  );
}

export default Form;
