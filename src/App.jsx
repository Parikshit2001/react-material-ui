import ButtonComponent from "./components/ButtonComponent"
import { useState } from "react";
import TextFieldComponent from "./components/TextFieldComponent"
import TypographyComponent from "./components/TypographyComponent"
import { Button, ButtonGroup, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
    },
  },
});

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => setActiveComponent(null)}>Clear</Button>
          <Button onClick={() => setActiveComponent(<TypographyComponent/>)}>Typography</Button>
          <Button onClick={() => setActiveComponent(<ButtonComponent/>)}>Buttons</Button>
          <Button onClick={() => setActiveComponent(<TextFieldComponent/>)}>TextField</Button>
        </ButtonGroup>
        {activeComponent}
      </ThemeProvider>
    </>
  )
}

export default App
