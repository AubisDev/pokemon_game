import { Box, Button, Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { colorTypesList, TypeData } from '../../../utilities';
import { charDataEmptyValues } from '../utilities';
import PokemonSearchBar from './PokemonSearchBar';
import RadarChartData from './RadarChartData';
import PokemonImage from './PokemonImage';
import { CharDataAdapter, ChartData } from '../adapters';
import Stats from './Stats';
import { FindPokemonSectionContainer, InformationContainer, MainSectionContainer, PokemonData } from '../style-components';
import { addPokemon } from '../../../redux/state/teams';
import PlayerTeam from './PlayerTeam';


const PokemonInformation = () => {
    const dispatch = useDispatch();
    const { name, id, imageFront, imageSpot, imageBack, health, attack, defense, speed, types, status, currentHealth } = useSelector( (store: AppStore) => store.search);
    const { userTeam } = useSelector( (store: AppStore) => store.teams);
    const typeInformation: TypeData = types ? colorTypesList(types[0]) : colorTypesList('none');
    const chartData:ChartData[] = attack ? CharDataAdapter({attack, defense, health,speed}) : charDataEmptyValues();
    const foundPokemon = attack ? true : false;

    const handleClick = () => {
      const newState = [...userTeam];
      let itsAlreadyInTeam = userTeam.some( elem => elem.id === id);
      if ( !itsAlreadyInTeam ){
        let emptyIndex = newState.findIndex( elem => elem.name === '');
        if( emptyIndex !== -1) {
          let pokemonData = { name, id, attack, defense, speed, health, types, status, imageSpot, imageBack, imageFront, currentHealth };
          dispatch( addPokemon({
            pokemonData,
            index: emptyIndex
          }));
        }
      }
    }

    return (
    <MainSectionContainer>
      <FindPokemonSectionContainer>
        <PokemonSearchBar/>
            {foundPokemon ? (
                <>
                  <Stack>
                    <InformationContainer>
                      <PokemonData >
                        <Stats stats={{attack, defense, health, speed}} types={types} color={typeInformation.bgColor}/>
                        <RadarChartData data={chartData}  color={typeInformation.bgColor}/>
                      </PokemonData>
                      <PokemonImage color={typeInformation.bgColor} image={imageFront} name={name} gradientColor={typeInformation.bgGradient} />
                    </InformationContainer>
                  </Stack>
                  <Button 
                    onClick={ handleClick} 
                    fullWidth={false} 
                    variant="contained" 
                    sx={{ width:'200px', marginX:"auto" ,position:"absolute", bottom:15, left:0, right:"0"}} 
                  >
                    Add to my team
                  </Button>
                </>
              )
              : null
            }
        </FindPokemonSectionContainer>
      <PlayerTeam/>
    </MainSectionContainer>
  )
}
export default PokemonInformation
