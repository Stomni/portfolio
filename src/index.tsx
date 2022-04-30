import { ColorModeScript, theme } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
  </>,

  document.getElementById("root")
);
