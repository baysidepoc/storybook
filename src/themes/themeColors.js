//this Variables should be loaded externally

const textLight = {
  primary: "rgba(52, 49, 76, 1)",
  secondary: "rgba(52, 49, 76, 0.54)",
  disabled: "rgba(52, 49, 76, 0.38)",
  hint: "rgba(52, 49, 76, 0.38)",
};
const secondaryColor = {
  light: "#f9a352",
  main: "#ff9e43",
  dark: "#ff932e",
  contrastText: textLight.primary,
};
const errorColor = {
  main: "#FF3D57",
};

//INJECTING COLORS INTO MATERIAL UI THEME
export const themeColors = {
  clearTheme: {
    palette: {
      type: "light",
      //These are colors, not Button Props
      primary: {
        main: "#002dd9",
        contrastText: textLight.primary,
      },
      secondary: {
        main: "#002dd9",
        contrastText: textLight.primary,
      },
      error: errorColor,
      text: textLight,
      background: {
        paper: "#f5f5f5",
        default: "#262628",
      },
    },
  },
  darkTheme: {
    palette: {
      type: "dark",
      primary: {
        main: "#ffffff",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#ffffff",
        contrastText: textLight.primary,
      },
      error: errorColor,
      background: {
        paper: "#0B0B0B",
        default: "#CCC",
      },
    },
  },
  contrastTheme: {
    palette: {
      type: "dark",
      primary: {
        main: "#C1DEF6",
        contrastText: textLight.primary,
      },
      secondary: {
        main: "#C1DEF6",
        contrastText: textLight.primary,
      },
      text: textLight,
      background: {
        paper: "#333E5E",
        default: "#CCC",
      },
    },
  },
};
