import "../../../styles/components/Dashboard/Charts/Lipides.css";
import PropTypes from "prop-types";
import fatIcon from "../../../assets/icons/fat-icon.png";

function Lipides({ lipides }) {
  return (
    <div id="lipides">
      <img src={fatIcon} alt="lipides icon" className="lipides-icon" />
      <div className="lipides-value">
        <div>{lipides.toLocaleString("en-US")}g</div>
        <p className="lipides-title">Lipides</p>
      </div>
    </div>
  );
}

export default Lipides;

Lipides.propTypes = {
  lipides: PropTypes.number.isRequired,
};
