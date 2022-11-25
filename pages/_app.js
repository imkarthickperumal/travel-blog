import "../styles/globals.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";



const theme = createTheme({
  palette: {
    text: {
      primary: "#708238",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h2: {
      fontFamily: "Alex Brush",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
