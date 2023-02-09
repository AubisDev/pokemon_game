import { Overlay } from "../Home/style-components";
import { TeamSelectionContainer } from "./style-components";
import { PokemonInformation } from "./components";

function ChooseTeam() {
  return (
    <TeamSelectionContainer>
      <Overlay>
        <PokemonInformation />
      </Overlay>
    </TeamSelectionContainer>
  );
}
export default ChooseTeam;
