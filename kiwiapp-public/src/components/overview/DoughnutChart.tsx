import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export const doughnutOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  cutout: "70%",
  layout: {
    padding: {
      top: 40,
      right: 40,
      bottom: 20,
      left: 40,
    },
  },
  plugins: {
    legend: {
      position: "right",
      labels: {
        usePointStyle: true,
        padding: 30,
      },
    },
  },
};

export const DoughnutChart = ({ data }) => {
  return <Doughnut data={data} options={doughnutOptions} />;
};
