import { ThemeOptions } from "@mui/material/styles";

interface ExtendedTheme extends ThemeOptions {
    joy?: {
      palette?: {
        primary?: string;
        secondary?: string;
      };
    };
  }

export default ExtendedTheme