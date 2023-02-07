import { Button, Grid, Typography, Box } from '@mui/material';
import { Pokemon } from "../../../models"
import { AlivePokemonContainer } from '../style-components';
import { delay } from '../utilities/gameLogic';

interface IAvailablePokemon {
    pokemon: Pokemon;
    handleUserSelection: (selectedPokemon: Pokemon) => Promise<void>
}


const AvailablePokemon = ({pokemon, handleUserSelection}:IAvailablePokemon ) => {

    const handlePokemonChange = async (selectedPokemon:Pokemon) => {
        handleUserSelection( selectedPokemon )
        await delay(1000);
    };
 

    return (
        <Grid item xs={6} height='90%' width='150px'>
        <AlivePokemonContainer onClick={ () => handlePokemonChange(pokemon)} zIndex={200}>
            <img src={pokemon.imageSpot} alt={pokemon.name} style={{ width:"40px", height:"100%"}}/>
            <Typography fontSize={14} textTransform="capitalize" pl={1}>{pokemon.name}</Typography>
        </AlivePokemonContainer>
        </Grid>
    )
}
export default AvailablePokemon