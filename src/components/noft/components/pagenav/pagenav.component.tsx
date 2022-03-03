import s from "./pagenav.module.scss";

import clsx from "clsx";
import { Link } from "react-router-dom";
import { useAdaptive } from "@/hooks";

export function PagenavComponent() {
  const isMobile = useAdaptive("1200px");

  const Desktop = (
    <nav className={s.pagenav}>
      <Link to="#" className={clsx(s.pagenavItem, s.pagenavItemCurrentOverview)}>
        Overview
      </Link>
      <Link to="#" className={clsx(s.pagenavItem)}>
        stats
      </Link>
      <Link to="#" className={clsx(s.pagenavItem)}>
        transactions
      </Link>
    </nav>
  );

  const Mobile = (
    <section>
      <nav className={s.pagenav}>
        <Link to="#" className={clsx(s.pagenavItem, s.pagenavItemCurrentOverview)}>
          Overview
        </Link>
        <Link to="#" className={clsx(s.pagenavItem)}>
          stats
        </Link>
        <Link to="#" className={clsx(s.pagenavItem)}>
          transactions
        </Link>
      </nav>
      <div className={s.pagenavTabs}>
        <div className={clsx(s.pagenavTab)}>
          <ul className={s.pagenavTabList}>
            <li className={s.pagenavTabListItem}>
              <Link to="#" className={clsx(s.pagenavLink, s.pagenavLinkCurrent)}>
                preview
              </Link>
            </li>
            <li className={s.pagenavTabListItem}>
              <Link to="#" className={clsx(s.pagenavLink)}>
                lvl/exp
              </Link>
            </li>
            <li className={s.pagenavTabListItem}>
              <Link to="#" className={clsx(s.pagenavLink)}>
                abilities
              </Link>
            </li>
            <li className={s.pagenavTabListItem}>
              <Link to="#" className={clsx(s.pagenavLink)}>
                phenotype
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );

  return !isMobile ? Desktop : Mobile;
}

//, s.pagenavItemCurrentOverview;
//, s.pagenavItemCurrentTrans;
//, s.pagenavItemCurrentStats;

{
  /* <div className={clsx(s.pagenavTab)}>
<ul className={s.pagenavTabList}>
  <li className={s.pagenavTabListItem}>1</li>
  <li className={s.pagenavTabListItem}>2</li>
  <li className={s.pagenavTabListItem}>3</li>
</ul>
</div> */
}
