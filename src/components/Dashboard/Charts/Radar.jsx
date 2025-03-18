import { useEffect, useState } from "react";
import "../../../styles/components/Dashboard/Charts/Radar.css";
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  PolarGrid,
} from "recharts";
import { fetchUserPerformance } from "../../../api/api";
import PropTypes from "prop-types";

function RadarChartComponent({ userId }) {
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    async function getPerformance() {
      try {
        const userPerformance = await fetchUserPerformance(userId);

        const kindMapping = {
          1: "Cardio",
          2: "Energie",
          3: "Endurance",
          4: "Force",
          5: "Vitesse",
          6: "Intensité",
        };
        const readablePerformance =
          userPerformance.getReadablePerformance(kindMapping);
        setPerformance(readablePerformance);
      } catch (error) {
        console.error("Error fetching performance data:", error);
      }
    }

    getPerformance();
  }, [userId]);

  // Détermine la valeur maximale pour les axes radiaux
  const maxValue = Math.max(...performance.map((item) => item.value), 0);

  return (
    <div id="radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          className="rechartRadar"
          outerRadius={90}
          data={performance}
          startAngle={90}
          endAngle={-270}
        >
          <PolarGrid
            gridType="polygon"
            radialLines={false}
            polarRadius={[0, 10, 23, 46, 70, 95]}
          />
          <PolarAngleAxis
            dataKey="name"
            tick={{
              fill: "#fff",
              fontSize: 12,
              fontWeight: "500",
              lineHeight: "24px",
              dy: 4,
            }}
            tickLine={true}
            axisLine={true}
            type="category"
            orient={"top"}
            tickSize={15}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, maxValue]}
            tick={false}
            axisLine={false}
          />
          <Radar
            dataKey="value"
            stroke="#ff0101"
            fill="#ff0101"
            fillOpacity={0.6}
          />
          <Tooltip
            cursor={false}
            coordinate={{ x: 80, y: 80 }}
            content={({ payload }) =>
              payload.length > 0 && (
                <div className="tooltip-content">
                  <p>{payload[0].value}</p>
                </div>
              )
            }
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarChartComponent.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default RadarChartComponent;
