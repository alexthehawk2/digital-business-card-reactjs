import infoImg from "../images/Rectangle 90.png";
import emailImg from "../images/Mail.png";
import linkdinImg from "../images/linkedin.png";
export default function Info() {
  return (
    <div>
      <img className="info-img" src={infoImg} alt="profile-img-abir-dey" />
      <h1>Abir Dey</h1>
      <h3>MERN Stack Developer</h3>
      <a
        className="info-anchor"
        target="_blank"
        href="https://abir-dey.onrender.com"
        rel="noopener noreferrer"
      >
        abir-dey.onrender.com
      </a>
      <div className="info--btns">
        <a href="mailto:abirdeyworkmail@gmail.com">
          <img src={emailImg} className="info-btn-img" alt="email icon" />
          Email
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/abirdeyalexthehawk/"
          rel="noopener noreferrer"
        >
          <img src={linkdinImg} className="info-btn-img" alt="linkedin icon" />
          Linkedin
        </a>
      </div>
    </div>
  );
}
