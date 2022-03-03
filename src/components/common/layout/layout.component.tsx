import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../header";

export function LayoutComponent() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}
