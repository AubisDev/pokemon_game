import { Box } from "@mui/material";
import {
  PokemonCompleteImage,
  PokemonImageContainer,
  PokemonImageSectionContainer,
  PokemonName,
} from "../style-components";
import PulseEffect from "./PulseEffect";

interface IPokemonImageProps {
  name: string;
  color: string;
  image: string | undefined;
  gradientColor: string;
}

function PokemonImage({
  name,
  color,
  image,
  gradientColor,
}: IPokemonImageProps) {
  return (
    <PokemonImageSectionContainer>
      <PokemonName style={{ backgroundImage: gradientColor }}>
        {name}
      </PokemonName>
      <PokemonImageContainer>
        <PulseEffect color={gradientColor}>
          <PokemonCompleteImage
            className="center_abs_item"
            src={image}
            alt={name}
          />
        </PulseEffect>
      </PokemonImageContainer>
    </PokemonImageSectionContainer>
  );
}
export default PokemonImage;
