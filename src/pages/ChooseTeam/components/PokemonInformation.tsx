import { Box, Button, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { ColorType, colorTypesList } from '../../../utilities';
import { charDataEmptyValues } from '../utilities';
import PokemonSearchBar from './PokemonSearchBar';
import RadarChartData from './RadarChartData';
import PokemonImage from './PokemonImage';
import { CharDataAdapter, ChartData } from '../adapters';
import Stats from './Stats';
import { InformationContainer, PokemonData } from '../style-components';


const PokemonInformation = () => {
    const { name, id, imageFront, health, attack, defense, speed, types, status } = useSelector( (store: AppStore) => store.search);
    const typeInformation: ColorType = types ? colorTypesList(types[0]) : colorTypesList('none');
    const chartData:ChartData[] = attack ? CharDataAdapter({attack, defense, health,speed}) : charDataEmptyValues();
    const foundPokemon = attack ? true : false;

    return (
    <Box height='100vh' width='75vw'  overflow='hidden' sx={{ background:'rgba(0,0,0,0.90)', position:"relative"}}>
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
                <Button fullWidth={false} variant="contained" sx={{ width:'200px', marginX:"auto" ,position:"absolute", bottom:15, left:0, right:0}} >Add to my team</Button>
              </>
            )
            : null
          }
    </Box>
  )
}
export default PokemonInformation
