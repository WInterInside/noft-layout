import { useMemo } from "react";
import s from "./noft.module.scss";

import { IntroduceComponent } from "/components/noft/components/introduce/introduce.component";
import { PagenavComponent } from "/components/noft/components/pagenav/pagenav.component";
import { PreviewComponent } from "/components/noft/components/preview/preview.component";
import { LevelComponent } from "/components/noft/components/level/level.component";
import { AbilitiesComponent } from "/components/noft/components/abilities/abilities.component";
import { PhenotypeComponent } from "/components/noft/components/phenotype/phenotype.component";

export function NoftPage() {
  const data = useMemo(
    () => ({
      noft: {
        number: 1007,
        owner: "0x3483809556c18c2298c7a00ec1BAca7Bdc256609",
        isRentPossible: true,
        price: 0.15,
        preview: 5,
        expRate: 4.9,
        growRate: 1.2,
        rank: "Mystical Hero",
        level: 21,
        experience: 54,
        abilities: [
          {
            ability: "power",
            currentValue: 19,
            maxValue: 99,
          },
          {
            ability: "vision",
            currentValue: 19,
            maxValue: 99,
          },
          {
            ability: "speed",
            currentValue: 19,
            maxValue: 99,
          },
          {
            ability: "agility",
            currentValue: 19,
            maxValue: 99,
          },
          {
            ability: "vitality",
            currentValue: 19,
            maxValue: 99,
          },
          {
            ability: "luck",
            currentValue: 19,
            maxValue: 99,
          },
        ],
      },
      stats: {
        playedBattles: 20,
        wins: 10,
        survivals: 10,
        kills: [
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
          [5, 6],
        ],
        totalKills: 20,
        avgKills: 0.05,
        gotDamage: 1000,
        dealtDamage: 5000,
        gotAvg: 500,
        gotMax: 1000,
        dealtAvg: 500,
        dealtMax: 1000,
        lifetime: [
          [1, 55, 54, "protect"],
          [2, 60, 3, "attack"],
          [3, 67, 14, "hide"],
          [4, 79, 31, "hide"],
          [5, 100, 25, "auto"],
        ],
        totalLifetime: 400,
        avgLifetime: 200,
        battles: [],
      },
      transactions: {
        type: "transfer",
        date: Date.now(),
        hash: "0x0000000000000000000000000000000000000000",
        sender: "0x0000000000000000000000000000000000000000",
        recipient: "0x0000000000000000000000000000000000000000",
        price: 10,
      },
    }),
    []
  );

  return (
    <main>
      <div className={s.container}>
        <IntroduceComponent />
        <PagenavComponent />
        <PreviewComponent />
        <LevelComponent />
        <AbilitiesComponent />
        <PhenotypeComponent />
      </div>
    </main>
  );
}
