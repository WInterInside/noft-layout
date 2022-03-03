// import { useAdaptive } from "@/hooks";
import s from "./banner.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as BannerLogo } from "@/public/images/banner-img.svg";
import clsx from "clsx";

export function BannerComponent() {
  const Banner = (
    <section className={s.banner}>
      <BannerLogo />
      <p className={s.bannerText}>REGISTRATION IS ONGOING</p>
      <Link to="#" className={clsx(s.btn, s.btnRed)}>
        JOIN AND WIN 3 BNB
      </Link>
      <div className={s.bannerBg}></div>
    </section>
  );

  return Banner;
}
