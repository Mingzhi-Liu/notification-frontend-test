
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#3380c5",
    },
    secondary: {
      main: '#3F78C8',
      contrastText: '#267ACE',
    },
    warning: {
      main: "#FD2A29",
    },
    text: {
      primary: "#333333",
    },
  },
})

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
