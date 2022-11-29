import twitterIcon from "../images/socials/Twitter Icon.png";
import facebookIcon from "../images/socials/Facebook Icon.png";
import instagramIcon from "../images/socials/Instagram Icon.png";
import githubIcon from "../images/socials/GitHub Icon.png";
export default function Socials() {
  return (
    <div className="socials">
      <a
        target="_blank"
        href="https://twitter.com/Al3xTheHawK"
        rel="noopener noreferrer"
      >
        <img src={twitterIcon} alt="twitter icon" />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/alex.hawk.792303"
        rel="noopener noreferrer"
      >
        <img src={facebookIcon} alt="facebook icon" />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/abi_rdey"
        rel="noopener noreferrer"
      >
        <img src={instagramIcon} alt="instagram icon" />
      </a>
      <a
        target="_blank"
        href="https://github.com/alexthehawk2"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="github icon" />
      </a>
    </div>
  );
}
