import "../styles/components/NavLeft.css";
import yoga from "../assets/yoga.png";
import natation from "../assets/natation.png";
import cyclisme from "../assets/cyclisme.png";
import musculation from "../assets/musculation.png";

function NavLeft() {
  return (
    <nav className="nav-left">
      <ul className="nav-left-menu">
        <li>
          <img src={yoga} alt="Icone Yoga" />
        </li>
        <li>
          <img src={natation} alt="Icone Natation" />
        </li>
        <li>
          <img src={cyclisme} alt="Icone Cyclisme" />
        </li>
        <li>
          <img src={musculation} alt="Icone Musculation" />
        </li>
      </ul>
      <footer>
        <p>Copyright, SportSee 2020</p>
      </footer>
    </nav>
  );
}

export default NavLeft;
