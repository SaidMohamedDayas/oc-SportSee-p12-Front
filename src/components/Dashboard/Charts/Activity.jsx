import { useEffect, useState } from "react";
import "../../../styles/components/Dashboard/Charts/Activity.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { fetchUserActivity } from "../../../api/api";
import PropTypes from "prop-types";

// const sessions = [
//   { day: "2020-07-01", kilogram: 80, calories: 240 },
//   { day: "2020-07-02", kilogram: 80, calories: 220 },
//   { day: "2020-07-03", kilogram: 81, calories: 280 },
//   { day: "2020-07-04", kilogram: 81, calories: 290 },
//   { day: "2020-07-05", kilogram: 80, calories: 160 },
//   { day: "2020-07-06", kilogram: 78, calories: 162 },
//   { day: "2020-07-07", kilogram: 76, calories: 390 },
// ];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-line">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

function Activity({ userId }) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetchUserActivity(userId)
      .then((userActivity) => {
        setSessions(userActivity.getSessions());
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de l'activité :", error);
      });
  }, [userId]);

  return (
    <div id="activity">
      <h3 className="activity-title">Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={sessions}
          barGap={8}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            domain={["dataMin", "dataMax"]}
            tickMargin={25}
            tick={{ fill: "#9B9EAC" }}
          />
          <YAxis
            orientation="right"
            tickCount={3}
            domain={["dataMin - 1", "dataMax + 10"]}
            dataKey="kilogram"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tick={{ fill: "#9B9EAC" }}
          />
          <YAxis
            tickCount={3}
            domain={["dataMin - 10", "dataMax + 50"]}
            dataKey="calories"
            axisLine={false}
            tickLine={false}
            tick={false}
            hide={true}
            yAxisId="cal"
          />
          <Bar
            stackId="kg"
            barSize={8}
            dataKey="kilogram"
            label={false}
            fill="#282D30"
            radius={[25, 25, 0, 0]}
          />
          <Bar
            stackId="cal"
            barSize={8}
            dataKey="calories"
            label={false}
            fill="#E60000"
            radius={[25, 25, 0, 0]}
            yAxisId="cal"
          />
          <Tooltip
            label={sessions}
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
            content={<CustomTooltip />}
            offset={30}
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="custom-tooltip-legend">
        <div className="kilogram">
          <div className="blackRound"></div>
          <p className="desc">Poids (kg)</p>
        </div>

        <div className="calories">
          <div className="redRound"></div>
          <p className="desc">Calories brûlées (kCal)</p>
        </div>
      </div>
    </div>
  );
}

export default Activity;

Activity.propTypes = {
  userId: PropTypes.number.isRequired,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
