import "../../../styles/components/Dashboard/Charts/Proteines.css";
import PropTypes from "prop-types";
import proteinIcon from "../../../assets/icons/protein-icon.png";

function Proteines({ proteines }) {
  return (
    <div id="proteines">
      <img src={proteinIcon} alt="proteine icon" className="proteines-icon" />
      <div className="proteines-value">
        <div>{proteines.toLocaleString("en-US")}g</div>
        <p className="proteines-title">Proteines</p>
      </div>
    </div>
  );
}

export default Proteines;

Proteines.propTypes = {
  proteines: PropTypes.number.isRequired,
};
