import "../../../styles/components/Dashboard/Charts/Glucides.css";
import PropTypes from "prop-types";
import glucidesIcon from "../../../assets/icons/carbs-icon.png";

function Glucides({ glucides }) {
  return (
    <div id="glucides">
      <img src={glucidesIcon} alt="glucides icon" className="glucides-icon" />
      <div className="glucides-value">
        <div>{glucides.toLocaleString("en-US")}g</div>
        <p className="glucides-title">Glucides</p>
      </div>
    </div>
  );
}

export default Glucides;

Glucides.propTypes = {
  glucides: PropTypes.number.isRequired,
};
