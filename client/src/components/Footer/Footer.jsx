import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <p>Meet The Docs crew:</p>
      <div className="fab fa-linkedin">
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/matthew-moyka-952651111/"
        >
          Matt Moyka
        </a>
      </div>
      <div className="fab fa-linkedin">
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/mirian-zhagui-79284421a/"
        >
          Mirian Zhagui
        </a>
      </div>
      <div className="fab fa-linkedin">
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/dylan-boger-3868851a8/"
        >
          Dylan Boger
        </a>
      </div>
      <div className="fab fa-linkedin">
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/michael-grieshaber-23907867/"
        >
          Michael Grieshaber
        </a>
      </div>
    </div>
  );
}
