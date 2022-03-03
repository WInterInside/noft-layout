import { Link } from "react-router-dom";
import { ReactComponent as HeaderLogo } from "@/public/images/logo/header.svg";
import s from "./logo.module.scss";

export function LogoComponent() {
  return (
    <Link to="/">
      <HeaderLogo className={s.logo} />
    </Link>
  );
}
