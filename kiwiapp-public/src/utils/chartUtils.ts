const generateRandomColors = (numColors: number) => {
  return Array.from(
    { length: numColors },
    () =>
      `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`,
  );
};

const colorPalette: Record<string, string> = {
  Aetna: "#41C090",
  Healthfirst: "#F1AE71",
  Cigna: "#D090EF",
  Humana: "#7E90ED",
  Default: "#7FCBEB",
};

export const getChartColor = (key: string) =>
  colorPalette[key] || generateRandomColors(1)[0];
