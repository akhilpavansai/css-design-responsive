import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "emotion-theming";
import ZDTheme from "../src/theme/index";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={ZDTheme}>
      <ThemeProvider theme={ZDTheme}>
        <Story />
      </ThemeProvider>
    </MUIThemeProvider>
  ),
];
