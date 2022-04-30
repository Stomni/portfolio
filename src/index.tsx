import { createRoot } from "react-dom/client";
import { ColorModeScript, theme } from "@chakra-ui/react";


import { App } from "./App";
const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>
);
