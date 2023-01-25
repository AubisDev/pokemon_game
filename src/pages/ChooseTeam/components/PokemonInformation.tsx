import { Typography, Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { ColorType, colorTypesList } from '../../../utilities/colorsTypesList';
import { PokemonData, PokemonName, PokemonSection, Pulse } from '../style-components/main';
import PokemonSearchBar from './PokemonSearchBar';
import StatChar from './StatChar';
import RadarChartData from './RadarChartData';
import { CharDataAdapter } from '../adapters/ChartData.adapter';
import { charDataEmptyValues } from '../utilities/constant';
import PulseEffect from './PulseEffect';
import { v4 as uuidv4 } from 'uuid';



const PokemonInformation = () => {
    const { name, id, imageFront, health, attack, defense, speed, types, status } = useSelector( (store: AppStore) => store.search);
    const typeInformation: ColorType = types ? colorTypesList(types[0]) : colorTypesList('none');
    const ChartData = attack ? CharDataAdapter({attack, defense, health,speed}) : charDataEmptyValues();
    console.log(health)
    return (
    <Box height='100vh' width='75vw'  overflow='hidden' sx={{ background:'rgba(0,0,0,0.90)', position:"relative"}}>
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
                          <Box key={uuidv4()} display='flex' flexDirection='row' alignItems='center'>
                            <Typography key={pokeType} fontSize={20} fontWeight={600} textTransform="capitalize">{pokeType} </Typography>
                            <img src={colorTypesList(types[index]).symbol} alt={`${pokeType} type`} style={{ width:24, height:24, paddingLeft:4}}/>
                          </Box>
                        ))
                      }
                      <RadarChartData data={ChartData} color={typeInformation.bgColor}/>
                  </PokemonData>



                  <Box display='flex' flexDirection='column' alignItems='center' width='50%' height="100%" position='relative'  m='auto' mt={5}  >
                    <PokemonName style={{ backgroundImage:typeInformation.bgGradient }}>{name}</PokemonName>
                    <Box width={300} height={300} zIndex={100} position='relative'>
                      <PulseEffect color={typeInformation.bgGradient}>
                        <img className="center_abs_item" src={imageFront} alt={name} style={{ display:"flex", width:"100%", height:"100%",  WebkitBoxReflect:"below 0 linear-gradient(transparent, transparent, #005)"}} />
                      </PulseEffect>
                    </Box>
                  </Box>
              </PokemonSection>

            </Box>
            )
            : null
          }
         <Button fullWidth={false} variant="contained" sx={{ width:'200px', marginX:"auto" ,position:"absolute", bottom:15, left:0, right:0}} >Add to my team</Button>
    </Box>
  )
}
export default PokemonInformation
