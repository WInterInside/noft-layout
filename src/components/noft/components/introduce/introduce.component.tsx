import s from "./introduce.module.scss";
import clsx from "clsx";
import { useAdaptive } from "@/hooks";

import { OfferComponent } from "/components/noft/components/offer/offer.component";
import { Link } from "react-router-dom";

import AvatarImg from "@/public/images/avatar-img.svg?url";

export function IntroduceComponent() {
  const isMobile = useAdaptive("700px");

  const Desktop = (
    <section className={s.introduce}>
      <div className={s.introduceCard}>
        <div className={s.introduceAvatar}>
          <img src={AvatarImg} alt="#" />
        </div>
        <div className={s.introduceData}>
          <h1 className={s.introduceName}>
            noft<span className={s.introduseId}>#1007</span>
          </h1>
          <div className={s.introduceWrapper}>
            <span className={s.introduceSupporttext}>OWNER:</span>
            <Link to="#" className={s.introduceOwner}>
              0x3483809556c18c2298c7a00ec1BAca7Bdc256609
            </Link>
          </div>
        </div>
      </div>
      <div className={s.introduceOffer}>
        <OfferComponent />
        <div className={clsx(s.introduseWrapper, s.introduceWrapperOffer)}>
          <span className={s.introduceText}>Available for rent</span>
          <Link to="#" className={s.introduceLink}>
            free
          </Link>
        </div>
      </div>
    </section>
  );

  const Mobile = (
    <section className={s.introduce}>
      <div className={s.introduceCard}>
        <div className={s.introduceData}>
          <h1 className={s.introduceName}>
            noft<span className={s.introduseId}>#1007</span>
          </h1>
          <div className={s.introduceAvatar}>
            <img src={AvatarImg} alt="#" />
          </div>
          <div className={s.introduceWrapper}>
            <span className={s.introduceSupporttext}>OWNER:</span>
            <p className={s.introduceOwner}>0x3483809556...c256609</p>
          </div>
        </div>
      </div>
      <div className={s.introduceOffer}>
        <OfferComponent />
        <div className={clsx(s.introduseWrapper, s.introduceWrapperOffer)}>
          <span className={s.introduceText}>Available for rent</span>
          <Link to="#" className={s.introduceLink}>
            free
          </Link>
        </div>
      </div>
    </section>
  );

  return !isMobile ? Desktop : Mobile;
}
