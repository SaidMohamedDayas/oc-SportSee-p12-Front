import "../../styles/components/Dashboard/Dashboard.css";
import Poids from "./Poids";
import Objectifs from "./Objectifs";
import Radar from "./Radar";
import Score from "./Score";
import Calories from "./Calories";
import Proteines from "./Proteines";
import Glucides from "./Glucides";
import Lipides from "./Lipides";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__left">
        <Poids />
        <Objectifs />
        <Radar />
        <Score />
      </div>
      <div className="dashboard__right">
        <Calories />
        <Proteines />
        <Glucides />
        <Lipides />
      </div>
    </div>
  );
}

export default Dashboard;
