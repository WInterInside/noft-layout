import s from "./phenotype.module.scss";

import clsx from "clsx";
// import { Link } from "react-router-dom";

import EyesImg from "@/public/images/phenotype/eyes.png?url";
import HeadImg from "@/public/images/phenotype/head.png?url";
import PatternImg from "@/public/images/phenotype/pattern.svg?url";
import BgrndImg from "@/public/images/phenotype/bgrnd.png?url";

export function PhenotypeComponent() {
  const Phenotype = (
    <section className={s.phenotype}>
      <h2 className={s.sectionHeading}>phenotype</h2>
      <div className={s.phenotypeBlock}>
        <div className={s.phenotypeItem}>
          <div className={clsx(s.phenotypePreview)}>
            <div className={s.phenotypePreviewContent}>
              <img src={BgrndImg} alt="#" />
            </div>
          </div>
          <h3 className={s.phenotypeCaption}>BGRND</h3>
        </div>

        <div className={s.phenotypeItem}>
          <div className={clsx(s.phenotypePreview)}>
            <div className={clsx(s.phenotypePreviewContent, s.phenotypePreviewContentSize)}></div>
          </div>
          <h3 className={s.phenotypeCaption}>size</h3>
        </div>

        <div className={s.phenotypeItem}>
          <div className={clsx(s.phenotypePreview)}>
            <div className={clsx(s.phenotypePreviewContent, s.phenotypePreviewContentBody)}></div>
          </div>
          <h3 className={s.phenotypeCaption}>body</h3>
        </div>

        <div className={s.phenotypeItem}>
          <div className={clsx(s.phenotypePreview)}>
            <div className={s.phenotypePreviewContent}>
              <img src={PatternImg} alt="#" />
            </div>
          </div>
          <h3 className={s.phenotypeCaption}>pattern</h3>
        </div>

        <div className={s.phenotypeItem}>
          <div className={clsx(s.phenotypePreview)}>
            <div className={s.phenotypePreviewContent}>
              <img src={HeadImg} alt="#" />
            </div>
          </div>
          <h3 className={s.phenotypeCaption}>head</h3>
        </div>

        <div className={s.phenotypeItem}>
          <div className={clsx(s.phenotypePreview)}>
            <div className={s.phenotypePreviewContent}>
              <img src={EyesImg} alt="#" />
            </div>
          </div>
          <h3 className={s.phenotypeCaption}>eyes</h3>
        </div>
      </div>
    </section>
  );

  return Phenotype;
}
