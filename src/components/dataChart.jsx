import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

const DataChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1900, 3000, 2500, 4000, 3500, 5000],
        backgroundColor: "rgba(117, 98, 243, 0.7)",
        borderRadius: 8,
        barPercentage: 0.5,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  return <Bar data={data} options={options} />;
};

export default DataChart;
