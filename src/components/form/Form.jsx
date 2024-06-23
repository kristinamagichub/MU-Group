import "../../utils/constants";
import "./Form.css";
import RightArrow from "../../assets/button-arrow-icon.svg";
import { EMAIL_PATTERN } from "../../utils/constants";

export function Form({}) {
  function sendRequest(event) {
    event.preventDefault();
    const isValid = event.target.parentElement.checkValidity();
    isValid ? alert("Welcome to the team!") : alert("Email is invalid");
  }
  return (
    <form className="form__container">
      <input
        placeholder="Email"
        type="email"
        pattern={EMAIL_PATTERN}
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
