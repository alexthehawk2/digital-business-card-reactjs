import About from "./About";
import Info from "./Info";
import Interests from "./Interests";
import Socials from "./Socials";

export default function Card() {
  return (
    <div className="Card">
      <Info />
      <About />
      <Interests />
      <Socials />
    </div>
  );
}
