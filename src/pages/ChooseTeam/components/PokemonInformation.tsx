import { Typography, Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
// import { Card, Circle, CircleSmall, PokemonData } from '../style-components/main';
import { ColorType, colorTypesList } from '../../../utilities/colorsTypesList';
import { CircleSmall, PokemonData, PokemonName, PokemonSection } from '../style-components/main';
import PokemonSearchBar from './PokemonSearchBar';
import statsbg from '../../../assets/prueba.png';
import { BarChart } from 'recharts';
import StatChar from './StatChar';

const PokemonInformation = () => {
    const { name, id, imageFront, health, attack, defense, speed, type, status } = useSelector( (store: AppStore) => store.search);
    const typeInformation: ColorType = type ? colorTypesList(type[0].name) : colorTypesList('none') ;

  return (
    <Box height='100vh' width='75vw'  overflow='hidden' sx={{ background:'rgba(0,0,0,0.90)'}}>
      <PokemonSearchBar/>
      <Box display='flex' flexDirection='column'>
      <PokemonName style={{ backgroundImage:typeInformation.bgGradient }}>{name}</PokemonName>
      <PokemonSection>
          <PokemonData >
              <Typography>{attack}</Typography>
                <StatChar statName="Attack" stat={Number(attack)}/>
                <StatChar statName="Defense" stat={Number(defense)}/>
                <StatChar statName="Speed" stat={Number(speed)}/>
                <StatChar statName="Health" stat={Number(health)}/>
                {
                  type?.map( pokeType => <Typography fontSize={20} fontWeight={600} textTransform="capitalize">Type: {pokeType.name} </Typography>)
                }
          </PokemonData>
          <img src={imageFront} alt={name} style={{ display:"flex", margin:"0 auto", width:"325px", height:"325px",  WebkitBoxReflect:"below 0 linear-gradient(transparent, transparent, #005)"}} />
        </PokemonSection>
      </Box>
     
    </Box>
  )
}
export default PokemonInformation

         {/* <Typography fontSize="24px" fontFamily='Yrsa' >Name: {name}</Typography>
          <Typography fontSize="24px" fontFamily='Yrsa' >Healt: {health}</Typography>
          <Typography fontSize="24px" fontFamily='Yrsa' >Attack: {attack}</Typography>
          <Typography fontSize="24px" fontFamily='Yrsa' >Defense: {defense}</Typography>
          <Typography fontSize="24px" fontFamily='Yrsa' >Speed: {speed}</Typography>
          <Stack>
            {
              type?.map( pokeElem => <Typography fontSize="24px" fontFamily='Yrsa' >Type: {pokeElem.name}</Typography>)
            }
          </Stack> */}