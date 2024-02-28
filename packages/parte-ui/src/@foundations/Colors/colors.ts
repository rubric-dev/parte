export const COLORS = {
  N900: "#1B222B",
  N800: "#353F4E",
  N700: "#636F82",
  N600: "#818D9E",
  N500: "#A5B0BF",
  N400: "#E0E5ED",
  N300: "#EBEDF0",
  N200: "#F0F2F5",
  N100: "#F4F6FA",
  N75: "#F9FAFC",
  N50: "#FAFBFF",
  N0: "#FFFFFF",
  B600: "#204A8F",
  B500: "#2B64BF",
  B400: "#2F80F4",
  B300: "#70A4F3",
  B200: "#ADCBF8",
  B100: "#D6E4FB",
  B50: "#EAF2FD",
  G600: "#15774E",
  G500: "#1D9F69",
  G400: "#15C880",
  G300: "#60D6A8",
  G200: "#A3E8CD",
  G100: "#D1F3E6",
  G50: "#E8F9F2",
  Y600: "#966C2A",
  Y500: "#C99139",
  Y400: "#FDB234",
  Y300: "#FCCB79",
  Y200: "#FDE1B1",
  Y100: "#FEF0D8",
  Y50: "#FEF7EB",
  R600: "#8F2F34",
  R500: "#BE3E45",
  R400: "#F14352",
  R300: "#F38087",
  R200: "#F8B5BA",
  R100: "#FBDADD",
  R50: "#FDEDED",
  V600: "#702F85",
  V500: "#953EB1",
  V400: "#BC4CE1",
  V300: "#CF83E7",
  V200: "#E4B8F1",
  V100: "#F1DCF8",
  V50: "#F8EDFC",
  T600: "#12666C",
  T500: "#0F8296",
  T400: "#0AA2C0",
  T300: "#84D0DF",
  T200: "#A9DEE9",
  T100: "#DAF1F6",
  T50: "#EBF8FA",
  P600: "#8E3374",
  P500: "#BE449B",
  P400: "#ED55C2",
  P300: "#F499DA",
  P200: "#F8BBE7",
  P100: "#FBDDF3",
  P50: "#FEF5FB",
  O600: "#985016",
  O500: "#CA6B20",
  O400: "#FF8002",
  O300: "#FDAA59",
  O200: "#FECE9E",
  O100: "#FEE6CE",
  O50: "#FFF3E6",
  transparent: "transparent",
  ChartTeal: "#74DDE5",
  ChartYellow: "#FAC86B",
  ChartBlue: "#678AF7",
  ChartGreen: "#6BDAAE",
  ChartViolet: "#8F59EF",
  ChartPink: "#FD8ADC",
  ChartAqua: "#70B0FF",
  ChartOrange: "#FF9D66",
  ModalBackground: "rgba(67, 90, 111, 0.30)",
};

export type ColorKey = keyof typeof COLORS;
export type Colors = Record<ColorKey, string>;
