import { Typography, Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { ColorType, colorTypesList } from '../../../utilities/colorsTypesList';
import { CircleSmall, PokemonData, PokemonName, PokemonSection, Pulse } from '../style-components/main';
import PokemonSearchBar from './PokemonSearchBar';
import statsbg from '../../../assets/prueba.png';
import { BarChart } from 'recharts';
import StatChar from './StatChar';
import RadarChartData from './RadarChartData';
import { CharDataAdapter } from '../adapters/ChartData.adapter';
import { charDataEmptyValues } from '../utilities/constant';

const PokemonInformation = () => {
    const { name, id, imageFront, health, attack, defense, speed, types, status } = useSelector( (store: AppStore) => store.search);
    const typeInformation: ColorType = types ? colorTypesList(types[0]) : colorTypesList('none');
    const ChartData = attack ? CharDataAdapter({attack, defense, health,speed}) : charDataEmptyValues() ;
    console.log(types);
  return (
    <Box height='100vh' width='75vw'  overflow='hidden' sx={{ background:'rgba(0,0,0,0.90)'}}>
      <PokemonSearchBar/>
          {
            attack ? (
              <Box display='flex' flexDirection='column'>
                <PokemonSection>
                  <PokemonData >
                    <Typography variant="h4">Stats</Typography>
                      <StatChar statName="Attack" stat={Number(attack)} color={typeInformation.bgColor} />
                      <StatChar statName="Defense" stat={Number(defense)} color={typeInformation.bgColor}/>
                      <StatChar statName="Speed" stat={Number(speed)} color={typeInformation.bgColor}/>
                      <StatChar statName="Health" stat={Number(health)} color={typeInformation.bgColor}/>
                      {
                        types?.map( (pokeType:any, index) => (
                          <Box display='flex' flexDirection='row' alignItems='center'>
                            <Typography key={pokeType} fontSize={20} fontWeight={600} textTransform="capitalize">{pokeType} </Typography>
                            <img src={colorTypesList(types[index]).symbol} alt={`${pokeType} type`} style={{ width:24, height:24, paddingLeft:4}}/>
                          </Box>
                        ))
                      }
                      <RadarChartData data={ChartData} color={typeInformation.bgColor}/>
                  </PokemonData>
                  <Box display='flex' flexDirection='column' alignItems='center' width='50%' height="100%" position='relative'  m='auto' mt={5}  >
                    <PokemonName style={{ backgroundImage:typeInformation.bgGradient }}>{name}</PokemonName>
                    <img src={imageFront} alt={name} style={{ zIndex:100, display:"flex", margin:"0 auto", width:"350px", height:"350px",  WebkitBoxReflect:"below 0 linear-gradient(transparent, transparent, #005)"}} />
                    <Pulse style={{ animationDelay: '0s', backgroundImage: typeInformation.bgGradient }}/>
                    <Pulse style={{ animationDelay: '1s', backgroundImage: typeInformation.bgGradient  }}/>
                    <Pulse style={{ animationDelay: '2s', backgroundImage: typeInformation.bgGradient  }}/>
                    <Pulse style={{ animationDelay: '3s', backgroundImage: typeInformation.bgGradient  }}/>
                  </Box>
              </PokemonSection>
            </Box>
            )
            : null
          }
     
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