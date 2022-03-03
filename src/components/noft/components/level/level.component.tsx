import s from "./level.module.scss";

import clsx from "clsx";
// import { Link } from "react-router-dom";

export function LevelComponent() {
  const Level = (
    <section className={s.level}>
      <h2 className={s.sectionHeading}>level</h2>
      <div className={s.levelBlock}>
        <div className={s.levelValue}>44</div>
        <div className={s.levelBar}>
          <span className={clsx(s.levelBarSegment, s.levelBarSegmentFill)}></span>
          <span className={clsx(s.levelBarSegment, s.levelBarSegmentFill)}></span>
          <span className={clsx(s.levelBarSegment)}></span>
          <span className={clsx(s.levelBarSegment)}></span>
          <span className={clsx(s.levelBarSegment)}></span>
          <span className={clsx(s.levelBarSegment)}></span>
          <span className={clsx(s.levelBarSegment)}></span>
          <span className={clsx(s.levelBarSegment)}></span>
          <span className={clsx(s.levelBarSegment)}></span>
          <span className={clsx(s.levelBarSegment)}></span>
          <span className={clsx(s.levelBarSegment)}></span>
        </div>
        <div className={s.levelExp}>
          <h3 className={s.levelExpCaption}>EXP</h3>
          <span className={s.levelExpCurrent}>55/</span>
          <span className={s.levelExpCap}>100</span>
        </div>
      </div>
    </section>
  );

  return Level;
}
