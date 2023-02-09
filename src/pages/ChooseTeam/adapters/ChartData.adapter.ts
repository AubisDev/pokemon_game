export interface ChartData {
  statName: string;
  statValue: number;
  fullMark: number;
}

export const CharDataAdapter = ({
  attack,
  defense,
  speed,
  health,
}: any): ChartData[] => {
  return [
    {
      statName: "Attack",
      statValue: attack,
      fullMark: 150,
    },
    {
      statName: "Defense",
      statValue: defense,
      fullMark: 150,
    },
    {
      statName: "Speed",
      statValue: speed,
      fullMark: 150,
    },
    {
      statName: "Health",
      statValue: health,
      fullMark: 150,
    },
  ];
};
