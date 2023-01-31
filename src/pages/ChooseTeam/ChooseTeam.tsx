import { Overlay } from '../../style-components/home.styles-components';
import { TeamSelectionContainer } from './style-components/main';
import PokemonInformation from './components/PokemonInformation';


const ChooseTeam = () => {
  return (
    <TeamSelectionContainer>
      <Overlay>
        <PokemonInformation/> 
      </Overlay>
    </TeamSelectionContainer>
  )
}
export default ChooseTeam