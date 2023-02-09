import { Typography, Box, Stack } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { colorTypesList } from "../../../utilities";
import StatChar from "./StatChar";
import {
  StatsContainer,
  StatsTitle,
  TypeName,
  TypeImage,
} from "../style-components";

interface IStatsProps {
  stats: {
    attack: number | undefined;
    defense: number | undefined;
    speed: number | undefined;
    health: number | undefined;
  };
  color: string;
  types: string[] | undefined;
}

function Stats({ stats, color, types }: IStatsProps) {
  const { attack, defense, speed, health } = stats;

  return (
    <StatsContainer direction="column">
      <StatsTitle>Stats</StatsTitle>
      <StatChar statName="Attack" stat={Number(attack)} color={color} />
      <StatChar statName="Defense" stat={Number(defense)} color={color} />
      <StatChar statName="Speed" stat={Number(speed)} color={color} />
      <StatChar statName="Health" stat={Number(health)} color={color} />
      {types?.map((pokeType: any, index) => (
        <Stack key={uuidv4()} direction="row" alignItems="center">
          <TypeName>{pokeType}</TypeName>
          <TypeImage
            src={colorTypesList(types[index]).symbol}
            alt={`${pokeType} type`}
          />
        </Stack>
      ))}
    </StatsContainer>
  );
}
export default Stats;
