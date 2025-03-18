import "../../../styles/components/Dashboard/Charts/Calories.css";
import PropTypes from "prop-types";
import calorieIcon from "../../../assets/icons/calories-icon.png";

function Calories({ calories }) {
  return (
    <div id="calories">
      <img src={calorieIcon} alt="calories" className="calories-icon" />
      <div className="calories-value">
        <div>{calories.toLocaleString("en-US")}kCal</div>
        <p className="calories-title">Calories</p>
      </div>
    </div>
  );
}

export default Calories;

Calories.propTypes = {
  calories: PropTypes.number.isRequired,
};
