import "../../styles/components/Dashboard/Dashboard.css";
import Activity from "./Charts/Activity";
import Sessions from "./Charts/Sessions";
import Radar from "./Charts/Radar";
import Score from "./Charts/Score";
import Calories from "./Charts/Calories";
import Proteines from "./Charts/Proteines";
import Glucides from "./Charts/Glucides";
import Lipides from "./Charts/Lipides";
import PropTypes from "prop-types";

function Dashboard({ userData }) {
  const todayScore = userData.getTodayScore();
  const keyData = userData.getKeyData();

  return (
    <div className="dashboard">
      <div className="dashboard__left">
        <Activity userId={userData.id} />
        <Sessions userId={userData.id} />
        <Radar userId={userData.id} />
        <Score score={todayScore} />
      </div>
      <div className="dashboard__right">
        <Calories calories={keyData.calorie} />
        <Proteines proteines={keyData.protein} />
        <Glucides glucides={keyData.carbohydrate} />
        <Lipides lipides={keyData.lipid} />
      </div>
    </div>
  );
}

export default Dashboard;

Dashboard.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    getTodayScore: PropTypes.func.isRequired,
    getKeyData: PropTypes.func.isRequired,
  }).isRequired,
};
