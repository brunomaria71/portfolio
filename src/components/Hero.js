import image from "../assets/background.jpeg";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <div className="mainBox" style={{ backgroundImage: `url(${image})` }}></div>
  );
}
