import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";
ChartJS.register(LineElement, TimeScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = (props) => {
  const data = {
    labels: props.date,
    datasets: [
      {
        label: props.label,
        data: props.count,
        backgroundColor: "blue",
        borderColor: "black",
        tension: 0, // curve
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: { unit: "day" },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 11,
        },
      },
      y: { beginAtZero: true },
    },
  };

  return <Line data={data} options={options}></Line>;
};

export default LineChart;
