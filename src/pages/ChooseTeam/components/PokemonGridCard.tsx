import { Box, Grid, Typography } from "@mui/material"
import pokeball  from '../../../assets/pokeball.webp';
import { Circle, GridItem } from "../style-components";
import { Pokemon } from '../../../models/';


const PokemonGridCard = (pokemon: Pokemon) => {
  return (
    <Grid item xs={12}  height="90px"  borderRadius='10px'>
      <GridItem>
        <Typography width='30%' color='white' py={1} fontWeight={700} fontSize={14} letterSpacing={1}>?</Typography>
        <Box display='flex' flexDirection='column' width='70%' alignItems='center'>
          <Typography color='white' py={1} fontWeight={700} fontSize={14} letterSpacing={1}>EMPTY SPOT</Typography>
          <img src={pokeball} alt="pokeball" style={{ width:"20px"}}/>
        </Box>
        <Circle/>
      </GridItem>
      
    </Grid>
  )
}
export default PokemonGridCard