import { Box, Button, Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { ColorType, colorTypesList } from '../../../utilities';
import { charDataEmptyValues } from '../utilities';
import PokemonSearchBar from './PokemonSearchBar';
import RadarChartData from './RadarChartData';
import PokemonImage from './PokemonImage';
import { CharDataAdapter, ChartData } from '../adapters';
import Stats from './Stats';
import { InformationContainer, PokemonData } from '../style-components';
import { addPokemon } from '../../../redux/state/teams';
import PlayerTeam from './PlayerTeam';


const PokemonInformation = () => {
    const dispatch = useDispatch();
    const { name, id, imageFront, imageSpot, imageBack, health, attack, defense, speed, types, status } = useSelector( (store: AppStore) => store.search);
    const { userTeam } = useSelector( (store: AppStore) => store.teams);
    const typeInformation: ColorType = types ? colorTypesList(types[0]) : colorTypesList('none');
    const chartData:ChartData[] = attack ? CharDataAdapter({attack, defense, health,speed}) : charDataEmptyValues();
    const foundPokemon = attack ? true : false;

    const handleClick = () => {
      const newState = [...userTeam];
      let itsAlreadyInTeam = userTeam.some( elem => elem.id === id);
      if ( !itsAlreadyInTeam ){
        let emptyIndex = newState.findIndex( elem => elem.name === '');
        console.log(emptyIndex);
        if( emptyIndex !== -1) {
          let pokemonData = { name, id, attack, defense, speed, health, types, status, imageSpot, imageBack, imageFront };
          dispatch( addPokemon({
            pokemonData,
            index: emptyIndex
          }));
        }
      }
    }

    return (
    <Box height='100vh' display='flex' flexDirection='row' position='relative' width='100vw'  overflow='hidden' sx={{ background:'rgba(0,0,0,0.90)', position:"relative"}}>
      <Box display='flex' flexDirection='column' width='75%'>
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
                  <Button onClick={ handleClick} fullWidth={false} variant="contained" sx={{ width:'200px', marginX:"auto" ,position:"absolute", bottom:15, left:0, right:0}} >Add to my team</Button>
                </>
              )
              : null
            }
        </Box>
      <PlayerTeam/>
    </Box>
  )
}
export default PokemonInformation
