import { createTheme } from "@mui/material/styles";

const lightestGray = "#f2f0f0";
const lightGray = "rgba(220,220,220,1)";
const mediumGray = "rgba(180,180,180,1)";
const darkestGray = "rgba(80,80,80,1)";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#00838f",
    },
    secondary: {
      //@ts-ignore
      lighter: lightestGray,
      light: lightGray,
      main: mediumGray,
      dark: darkestGray,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default Theme;
