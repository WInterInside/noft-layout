import s from "./offer.module.scss";

import clsx from "clsx";
import { Link } from "react-router-dom";

export function OfferComponent() {
  const Offer = (
    <section className={s.offer}>
      <p className={clsx(s.offerElement, s.offerElementPrice)}>0.15 bnb</p>
      <Link to="#" className={clsx(s.offerElement, s.offerElementBuy)}>
        buy
      </Link>
      <div className={s.offerShadow}></div>
    </section>
  );

  return Offer;
}
