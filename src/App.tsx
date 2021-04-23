import {
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { Layout } from "./components"


const theme = {
  colors: {
    background: {
      page: "#505050",
      sidebar: "#333333",
      section: "#424242",
      subsection: "#333333",
    },
    font: {
      primary: "rgba(255, 255, 255, 0.9)",
      secondary: "rgba(255, 255, 255, 0.8)"
    },
    accent: {
      primary: "#824ED2"
    }
  }
}

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
  }
  
  body::-webkit-scrollbar {
    width: 1em;
  }
  
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid black;
  }
`;



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}
