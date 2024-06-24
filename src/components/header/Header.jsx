import "./Header.css";
import Logo from "../../assets/company-logo.svg";

export function Header({}) {
  return (
    <header className="header">
      <a href="#" target="_blank">
        <img src={Logo} alt="Company Logo" className="company-logo" />
      </a>
    </header>
  );
}

export default Header;
