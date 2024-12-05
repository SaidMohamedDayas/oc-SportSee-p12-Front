import "../styles/components/NavTop.css";
import logo from "../assets/logo.svg";

function NavTop() {
  return (
    <nav className="nav-top">
      <div className="logo">
        <img src={logo} alt="Logo SportSee" />
      </div>
      <ul className="nav-top-menu">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
}

export default NavTop;
