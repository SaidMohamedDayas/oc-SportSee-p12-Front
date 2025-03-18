import "../styles/components/Header.css";
import PropTypes from "prop-types";

function Header({ firstName }) {
  return (
    <header className="header">
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos sessions hier 👏</p>
    </header>
  );
}

// props validation

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Header;
