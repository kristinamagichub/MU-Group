import "./Footer.css";
import InstagramIcon from "../../assets/instagram-icon.svg";
import TelegramIcon from "../../assets/telegram-icon.svg";
import LinkedInIcon from "../../assets/linkedIn-icon.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";

export function Footer({}) {
  return (
    <section className="footer">
      <div className="footer__social-block">
        <div className="footer__social-links">
          <a href="#" target="_blank">
            <img
              src={InstagramIcon}
              alt="instagram-icon"
              // className="footer__social-link-icon"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src={TelegramIcon}
              alt="telegram-icon"
              className="footer__social-link-icon"
            />
          </a>
          <a href="#" target="_blank">
            {" "}
            <img
              src={LinkedInIcon}
              alt="linkedIn-icon"
              className="footer__social-link-icon"
            />
          </a>
          <a href="#" target="_blank">
            {" "}
            <img
              src={FacebookIcon}
              alt="facebook-icon"
              className="footer__social-link-icon"
            />
          </a>
        </div>

        <p className="footer__description txt-1 ">
          You're not just a student - you're part of a vibrant community of
          like-minded individuals united by a passion for frontend development.
          Collaborate, innovate, and grow alongside fellow learners and industry
          professionals as you embark on this exciting journey together.
        </p>
      </div>

      <div className="footer__links">
        <a
          href="https://support.animaapp.com/en/"
          target="_blank"
          className="footer__link txt-3"
        >
          Help Center
        </a>
        <a
          href="https://forum.animaapp.com/privacy"
          target="_blank"
          className="footer__link txt-3"
        >
          Privacy Policy
        </a>
        <a
          href="https://forum.animaapp.com/tos"
          target="_blank"
          className="footer__link txt-3"
        >
          Terms of Service
        </a>
      </div>
    </section>
  );
}

export default Footer;
