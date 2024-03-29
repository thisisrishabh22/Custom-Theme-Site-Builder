import { Dispatch, SetStateAction } from "react";

export interface ThemesInterface {
  primary: string;
  secondary: string;
  bgPrimary: string;
  bgSecondary: string;
  font: string;
  fontSize1: string;
  fontSize2: string;
}

export interface ThemeInterface {
  theme: Array<ThemesInterface>;
  selectedTheme: any;
  setSelectedTheme: Dispatch<SetStateAction<number>>;
}
