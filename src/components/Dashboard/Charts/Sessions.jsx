import { useEffect, useState } from "react";
import "../../../styles/components/Dashboard/Charts/Sessions.css";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { fetchUserAverageSessions } from "../../../api/api";
import PropTypes from "prop-types";

const customTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          padding: "2px 10px",
          fontSize: "12px",
          fontWeight: 500,
        }}
      >
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

function Sessions({ userId }) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function getSessions() {
      try {
        const userSessions = await fetchUserAverageSessions(userId);

        setSessions(userSessions.getSessions());
      } catch (error) {
        console.error("Error fetching sessions data:", error);
      }
    }

    getSessions();
  }, [userId]);

  return (
    <div id="sessions">
      <h4>
        Durée moyenne des <br />
        sessions
      </h4>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart data={sessions}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.9)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            tick={{
              fontSize: 12,
              fill: "#fff",
              fontWeight: 500,
              opacity: 0.5,
            }}
            tickLine={false}
            axisLine={false}
            padding={{ left: 10, right: 10 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "5px",
              padding: "5px 10px",
              fontSize: "12px",
            }}
            content={customTooltip}
            cursor={false}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Sessions;

Sessions.propTypes = {
  userId: PropTypes.number.isRequired,
};
