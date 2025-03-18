import "../../../styles/components/Dashboard/Charts/Score.css";
import PropTypes from "prop-types";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

function Score({ score }) {
  // Convertir le score en pourcentage
  const scorePercentage = score * 100;

  // Données pour le graphique
  const data = [{ name: "Score", value: scorePercentage, fill: "#E60000" }];

  return (
    <div id="score">
      <h3 className="score-title">Score</h3>
      <div className="path"></div>
      <ResponsiveContainer width="100%" height="80%" zIndex={2}>
        <RadialBarChart
          innerRadius="80%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={90 + (360 * scorePercentage) / 100}
        >
          <RadialBar dataKey="value" cornerRadius="50%" barSize={10} />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="score-label">
        <p>
          {scorePercentage}%
          <br />
          <span>
            de votre <br /> objectif
          </span>
        </p>
      </div>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
