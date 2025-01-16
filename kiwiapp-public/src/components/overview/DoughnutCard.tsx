"use client";

import { Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data: ChartData<"doughnut"> = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#41C090",
        "#F1AE71",
        "#D090EF",
        "#7FCBEB",
        "#7E90ED",
        "#F1E471",
      ],
      borderWidth: 0,
    },
  ],
};

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  cutout: "70%",
  layout: {
    padding: {
      top: 40,
      right: 40,
      bottom: 40,
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
export const DoughnutCard = ({ title }) => {
  return (
    <div className="min-w-full lg:min-w-[48%] flex gap-2 flex-col justify-between p-7 shadow rounded-lg bg-white min-h-[115px] flex-1">
      <h4 className="font-header font-normal text-2xl leading-none">{title}</h4>
      <div className="max-w-[500px] mx-auto w-full h-full flex-1">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};
