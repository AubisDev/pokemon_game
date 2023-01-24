import { Overlay } from '../../style-components/home.styles-components';
import PlayerTeam from './components/PlayerTeam';
import PokemonSearchBar from './components/PokemonSearchBar';
import { TeamSelectionContainer } from './style-components/main';


const ChooseTeam = () => {
  return (
    <TeamSelectionContainer>
      <Overlay>
        {/* <PokemonPreSelection/> */}
        <PokemonSearchBar/>
        <PlayerTeam/>
      </Overlay>
    </TeamSelectionContainer>
  )
}
export default ChooseTeam