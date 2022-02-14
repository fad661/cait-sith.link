import '@emotion/react'

declare module '@emotion/react' {
  interface Theme {
    fonts: Fonts
    colors: Colors
  }
}

interface Fonts {
  main: string;
  sub: string;
  text: string;
  alphanumeric: string;
}

interface Colors {
  light: Color;
  dark: Color;
}

interface Color {
  primary: string;
  secondary: string;
  text: string;
  line: string;
  background: string;
  board: string;
  selected: string;
  disabled: string;
  danger: string;
  caution: string;
  accept: string;
  information: string;
}