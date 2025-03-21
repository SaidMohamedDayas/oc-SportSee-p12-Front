import { useEffect, useState, useRef } from "react";
import "../../../styles/components/Dashboard/Charts/Sessions.css";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Rectangle } from "recharts";
import { fetchUserAverageSessions } from "../../../api/api";
import PropTypes from "prop-types";

const CustomCursor = (props) => {
  const { points, width = 40, height, offset = 0, chartWidth } = props;
  const { x } = points[0];

  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)"
      x={x - width / 8 + offset}
      y={0}
      width={chartWidth - x + width / 2 - offset}
      height={height + 150}
    />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  offset: PropTypes.number,
  chartWidth: PropTypes.number,
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

function Sessions({ userId }) {
  const [sessions, setSessions] = useState([]);
  const chartRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

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

  useEffect(() => {
    if (chartRef.current) {
      const updateWidth = () => {
        const width = chartRef.current.getBoundingClientRect().width;
        setChartWidth(width);
      };

      updateWidth();
      window.addEventListener("resize", updateWidth);

      return () => window.removeEventListener("resize", updateWidth);
    }
  }, []);

  return (
    <div ref={chartRef} id="sessions">
      <h4 className="sessions-title">
        Durée moyenne des <br />
        sessions
      </h4>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sessions} margin={{ top: 100, right: 10, left: 10, bottom: 10 }}>
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
            content={<CustomTooltip />}
            cursor={<CustomCursor width={30} offset={1} chartWidth={chartWidth} />}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.4)",
              strokeWidth: 10,
              r: 4,
              fill: "#FFFFFF",
            }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

Sessions.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Sessions;
