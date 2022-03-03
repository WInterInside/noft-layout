import s from "./abilities.module.scss";

import AbilitiesImg from "@/public/images/abilities-img.jpg?url";

import clsx from "clsx";
// import { Link } from "react-router-dom";
import { useAdaptive } from "@/hooks";

export function AbilitiesComponent() {
  const isMobile = useAdaptive("1000px");

  const Desktop = (
    <section className={s.abilities}>
      <h2 className={s.sectionHeading}>abilities</h2>
      <div className={s.abilitiesBlock}>
        <div className={s.abilitiesBlockLeft}>
          <div className={s.abilitiesPower}>
            <div className={clsx(s.abilitiesIcon, s.abilitiesIconPower)}>
              <div className={clsx(s.abilitiesPic, s.abilitiesPicPower)}></div>
            </div>
            <div className={s.abilitiesContent}>
              <h2 className={s.abilitiesCaption}>power</h2>
              <div className={s.abilitiesBorder}></div>
              <div className={s.abilitiesBar}>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
              </div>
              <div className={s.abilitiesValue}>
                <span className={s.abilitiesValueCurrent}>56/</span>
                <span className={s.abilitiesValueCap}>100</span>
                <div className={s.abilitiesValueAbout}></div>
                <div className={s.abilitiesAdvice}>
                  <p>
                    <span>meaning/</span>how big is size of one shot damage
                  </p>
                  <button className={s.abilitiesBtn}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className={s.abilitiesVision}>
            <div className={clsx(s.abilitiesIcon, s.abilitiesIconVision)}>
              <div className={clsx(s.abilitiesPic, s.abilitiesPicVision)}></div>
            </div>
            <div className={s.abilitiesContent}>
              <h2 className={s.abilitiesCaption}>Vision</h2>
              <div className={s.abilitiesBorder}></div>
              <div className={s.abilitiesBar}>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
              </div>
              <div className={s.abilitiesValue}>
                <span className={s.abilitiesValueCurrent}>56/</span>
                <span className={s.abilitiesValueCap}>100</span>
                <div className={s.abilitiesValueAbout}></div>
                <div className={s.abilitiesAdvice}>
                  <p>
                    <span>meaning/</span>how broad is the angle of detection, how big is viewing distance length and
                    critical damage chance
                  </p>
                  <button className={s.abilitiesBtn}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className={s.abilitiesSpeed}>
            <div className={clsx(s.abilitiesIcon, s.abilitiesIconSpeed)}>
              <div className={clsx(s.abilitiesPic, s.abilitiesPicSpeed)}></div>
            </div>
            <div className={s.abilitiesContent}>
              <h2 className={s.abilitiesCaption}>Speed</h2>
              <div className={s.abilitiesBorder}></div>
              <div className={s.abilitiesBar}>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
              </div>
              <div className={s.abilitiesValue}>
                <span className={s.abilitiesValueCurrent}>56/</span>
                <span className={s.abilitiesValueCap}>100</span>
                <div className={s.abilitiesValueAbout}></div>
                <div className={s.abilitiesAdvice}>
                  <p>
                    <span>meaning/</span>how fast is rotation, movements, and attack
                  </p>
                  <button className={s.abilitiesBtn}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.abilitiesImg}>
          <img className={s.abilitiesImgContent} src={AbilitiesImg} alt="#" />
        </div>

        <div className={s.abilitiesBlockRight}>
          <div className={s.abilitiesAgility}>
            <div className={clsx(s.abilitiesIcon, s.abilitiesIconAgility)}>
              <div className={clsx(s.abilitiesPic, s.abilitiesPicAgility)}></div>
            </div>
            <div className={s.abilitiesContent}>
              <h2 className={s.abilitiesCaption}>Agility</h2>
              <div className={s.abilitiesBorder}></div>
              <div className={s.abilitiesBar}>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
              </div>
              <div className={s.abilitiesValue}>
                <span className={s.abilitiesValueCurrent}>56/</span>
                <span className={s.abilitiesValueCap}>100</span>
                <div className={s.abilitiesValueAbout}></div>
                <div className={s.abilitiesAdvice}>
                  <p>
                    <span>meaning/</span>how fast is rotation and attack, how big is the angle of detection and dodge
                    chance
                  </p>
                  <button className={s.abilitiesBtn}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className={s.abilitiesVitality}>
            <div className={clsx(s.abilitiesIcon, s.abilitiesIconVitality)}>
              <div className={clsx(s.abilitiesPic, s.abilitiesPicVitality)}></div>
            </div>
            <div className={s.abilitiesContent}>
              <h2 className={s.abilitiesCaption}>Vitality</h2>
              <div className={s.abilitiesBorder}></div>
              <div className={s.abilitiesBar}>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
              </div>
              <div className={s.abilitiesValue}>
                <span className={s.abilitiesValueCurrent}>56/</span>
                <span className={s.abilitiesValueCap}>100</span>
                <div className={s.abilitiesValueAbout}></div>
                <div className={s.abilitiesAdvice}>
                  <p>
                    <span>meaning/</span>how big is the size of damage reduction and overall health points
                  </p>
                  <button className={s.abilitiesBtn}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className={s.abilitiesLuck}>
            <div className={clsx(s.abilitiesIcon, s.abilitiesIconLuck)}>
              <div className={clsx(s.abilitiesPic, s.abilitiesPicLuck)}></div>
            </div>
            <div className={s.abilitiesContent}>
              <h2 className={s.abilitiesCaption}>Luck</h2>
              <div className={s.abilitiesBorder}></div>
              <div className={s.abilitiesBar}>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
              </div>
              <div className={s.abilitiesValue}>
                <span className={s.abilitiesValueCurrent}>56/</span>
                <span className={s.abilitiesValueCap}>100</span>
                <div className={s.abilitiesValueAbout}></div>
                <div className={s.abilitiesAdvice}>
                  <p>
                    <span>meaning/</span>how broad is the angle of detection, how big are critical damage chance, dodge
                    chance, and damage reduction
                  </p>
                  <button className={s.abilitiesBtn}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Mobile = (
    <section className={s.abilities}>
      <h2 className={s.sectionHeading}>abilities</h2>
      <div className={s.abilitiesBlock}>
        <div className={s.abilitiesBlockLeft}>
          <div className={s.abilitiesPower}>
            <div className={clsx(s.abilitiesIcon, s.abilitiesIconPower)}>
              <div className={clsx(s.abilitiesPic, s.abilitiesPicPower)}></div>
            </div>
            <div className={s.abilitiesContent}>
              <h2 className={s.abilitiesCaption}>power</h2>
              <div className={s.abilitiesBorder}></div>
              <div className={s.abilitiesBar}>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
              </div>
              <div className={s.abilitiesValue}>
                <span className={s.abilitiesValueCurrent}>56/</span>
                <span className={s.abilitiesValueCap}>100</span>
                <div className={s.abilitiesValueAbout}></div>
                <div className={s.abilitiesAdvice}>
                  <div className={s.abilitiesAdviceContent}>
                    <p>
                      <span>meaning/</span>how big is size of one shot damage
                    </p>
                    <button className={s.abilitiesBtn}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.abilitiesSpeed}>
            <div className={clsx(s.abilitiesIcon, s.abilitiesIconSpeed)}>
              <div className={clsx(s.abilitiesPic, s.abilitiesPicSpeed)}></div>
            </div>
            <div className={s.abilitiesContent}>
              <h2 className={s.abilitiesCaption}>Speed</h2>
              <div className={s.abilitiesBorder}></div>
              <div className={s.abilitiesBar}>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
              </div>
              <div className={s.abilitiesValue}>
                <span className={s.abilitiesValueCurrent}>56/</span>
                <span className={s.abilitiesValueCap}>100</span>
                <div className={s.abilitiesValueAbout}></div>
                <div className={s.abilitiesAdvice}>
                  <div className={s.abilitiesAdviceContent}>
                    <p>
                      <span>meaning/</span>how fast is rotation, movements, and attack
                    </p>
                    <button className={s.abilitiesBtn}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.abilitiesLuck}>
            <div className={clsx(s.abilitiesIcon, s.abilitiesIconLuck)}>
              <div className={clsx(s.abilitiesPic, s.abilitiesPicLuck)}></div>
            </div>
            <div className={s.abilitiesContent}>
              <h2 className={s.abilitiesCaption}>Luck</h2>
              <div className={s.abilitiesBorder}></div>
              <div className={s.abilitiesBar}>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
              </div>
              <div className={s.abilitiesValue}>
                <span className={s.abilitiesValueCurrent}>56/</span>
                <span className={s.abilitiesValueCap}>100</span>
                <div className={s.abilitiesValueAbout}></div>
                <div className={s.abilitiesAdvice}>
                  <div className={s.abilitiesAdviceContent}>
                    <p>
                      <span>meaning/</span>how broad is the angle of detection, how big are critical damage chance,
                      dodge chance, and damage reduction.
                    </p>
                    <button className={s.abilitiesBtn}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.abilitiesBlockRight}>
          <div className={s.abilitiesVision}>
            <div className={clsx(s.abilitiesIcon, s.abilitiesIconVision)}>
              <div className={clsx(s.abilitiesPic, s.abilitiesPicVision)}></div>
            </div>
            <div className={s.abilitiesContent}>
              <h2 className={s.abilitiesCaption}>Vision</h2>
              <div className={s.abilitiesBorder}></div>
              <div className={s.abilitiesBar}>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
              </div>
              <div className={s.abilitiesValue}>
                <span className={s.abilitiesValueCurrent}>56/</span>
                <span className={s.abilitiesValueCap}>100</span>
                <div className={s.abilitiesValueAbout}></div>
                <div className={s.abilitiesAdvice}>
                  <div className={s.abilitiesAdviceContent}>
                    <p>
                      <span>meaning/</span>how broad is the angle of detection, how big is viewing distance length and
                      critical damage chance
                    </p>
                    <button className={s.abilitiesBtn}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.abilitiesAgility}>
            <div className={clsx(s.abilitiesIcon, s.abilitiesIconAgility)}>
              <div className={clsx(s.abilitiesPic, s.abilitiesPicAgility)}></div>
            </div>
            <div className={s.abilitiesContent}>
              <h2 className={s.abilitiesCaption}>Agility</h2>
              <div className={s.abilitiesBorder}></div>
              <div className={s.abilitiesBar}>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
              </div>
              <div className={s.abilitiesValue}>
                <span className={s.abilitiesValueCurrent}>56/</span>
                <span className={s.abilitiesValueCap}>100</span>
                <div className={s.abilitiesValueAbout}></div>
                <div className={s.abilitiesAdvice}>
                  <div className={s.abilitiesAdviceContent}>
                    <p>
                      <span>meaning/</span>how fast is rotation and attack, how big is the angle of detection and dodge
                      chance
                    </p>
                    <button className={s.abilitiesBtn}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.abilitiesVitality}>
            <div className={clsx(s.abilitiesIcon, s.abilitiesIconVitality)}>
              <div className={clsx(s.abilitiesPic, s.abilitiesPicVitality)}></div>
            </div>
            <div className={s.abilitiesContent}>
              <h2 className={s.abilitiesCaption}>Vitality</h2>
              <div className={s.abilitiesBorder}></div>
              <div className={s.abilitiesBar}>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
                <span className={clsx(s.abilitiesBarSegment)}></span>
              </div>
              <div className={s.abilitiesValue}>
                <span className={s.abilitiesValueCurrent}>56/</span>
                <span className={s.abilitiesValueCap}>100</span>
                <div className={s.abilitiesValueAbout}></div>
                <div className={s.abilitiesAdvice}>
                  <div className={s.abilitiesAdviceContent}>
                    <p>
                      <span>meaning/</span>how big is the size of damage reduction and overall health points
                    </p>
                    <button className={s.abilitiesBtn}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return !isMobile ? Desktop : Mobile;
}
