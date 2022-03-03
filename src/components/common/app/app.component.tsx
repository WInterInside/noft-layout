import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LayoutComponent } from "../layout";
import { NoftPage } from "@/components/noft";
import "@/scss/global.scss";

export function AppComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/noft-landing-layout/" element={<LayoutComponent />}>
          <Route index element={<NoftPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
