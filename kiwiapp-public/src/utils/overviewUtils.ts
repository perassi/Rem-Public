import { sumBy } from "lodash";

import { getChartColor } from "@/utils/chartUtils";
import { CommissionData } from "@/pages/api/commission/types";

export const getNewEnrollmentsByCarrier = (data: {
  [key: string]: CommissionData;
}) => {
  return {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.keys(data).map((carrier) => {
          return sumBy(
            data[carrier],
            (item) => Number(item["Commission Amount Total"]) ?? 0,
          );
        }),
        backgroundColor: Object.keys(data).map((carrier) =>
          getChartColor(carrier),
        ),
        borderWidth: 0,
      },
    ],
  };
};

export const getNewEnrollmentsByAgency = (data: {
  [key: string]: CommissionData;
}) => {
  return {
    labels: Object.keys(data),
    datasets: Object.keys(data).map((carrier) => {
      return {
        label: carrier,
        data: [
          sumBy(
            data[carrier],
            (item) => Number(item["Commission Amount Total"]) ?? 0,
          ),
        ],
        backgroundColor: getChartColor(carrier),
      };
    }),
  };
};
