import { Overlay } from '../../style-components/home.styles-components';
import PlayerTeam from './components/PlayerTeam';
import PokemonSearchBar from './components/PokemonSearchBar';
import { TeamSelectionContainer } from './style-components/main';
import PokemonInformation from './components/PokemonInformation';


const ChooseTeam = () => {
  return (
    <TeamSelectionContainer>
      <Overlay>
        <PokemonInformation/> 
        {/* <PokemonSearchBar/> */}
        <PlayerTeam/>
      </Overlay>
    </TeamSelectionContainer>
  )
}
export default ChooseTeam