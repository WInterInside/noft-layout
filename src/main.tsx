import { render } from "react-dom";
import { StrictMode } from "react";
import { AppComponent } from "./components/common/app";

render(
  <StrictMode>
    <AppComponent />
  </StrictMode>,
  document.getElementById("app")
);
