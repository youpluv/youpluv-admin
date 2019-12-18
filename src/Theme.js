import { createMuiTheme } from "@material-ui/core";
import LatoRegular from "./assets/fonts/Lato-Regular.ttf";

// const lato ={
//   fontFamily: 'Lato',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('Lato-Regular'),
//     url(${LatoRegular}) format('ttf')
//   `,
//   unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// }

const Theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#EC008C",
      error: "#ffaaaa",
      highlight: "#f1f1f1"
    },
    secondary: {
      main: "#000"
    }
  }
  // typography: {
  //   fontFamily: 'Lato'
  // },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': [lato]
  //     }
  //   }
  // }
});

export default Theme;
