"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const data: ChartData<"bar"> = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Red",
      data: [12],
      backgroundColor: ["#41C090"],
      barThickness: 100,
    },
    {
      label: "Blue",
      data: [19],
      backgroundColor: ["#F1AE71"],
    },
  ],
};

export const options: ChartOptions<"bar"> = {
  responsive: true,
  layout: {
    padding: {
      top: 40,
      right: 40,
      bottom: 40,
      left: 0,
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
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};
export const BarCard = ({ title }) => {
  return (
    <div className="min-w-full lg:min-w-[48%] flex gap-2 flex-col justify-between p-7 shadow rounded-lg bg-white min-h-[115px] flex-1">
      <h4 className="font-header font-normal text-2xl leading-none">{title}</h4>
      <div className="max-w-[500px] mx-auto w-full h-full flex-1">
        <Bar data={data} options={options} style={{height:'500px'}} />
      </div>
    </div>
  );
};
