import { Button, Grid, Typography, Box } from '@mui/material';
import { Pokemon } from "../../../models"
import { AlivePokemonContainer, AvailablePokemonImage } from '../style-components';
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
        <Grid item xs={6} height='90%' width={{xs:'175px', md:'150px'}}>
        <AlivePokemonContainer onClick={ () => handlePokemonChange(pokemon)} zIndex={200}>
            <AvailablePokemonImage src={pokemon.imageSpot} alt={pokemon.name} />
            <Typography fontSize={{xs:12,sm:14}} textTransform="capitalize" pl={{xs:0,sm:1}}>{pokemon.name}</Typography>
        </AlivePokemonContainer>
        </Grid>
    )
}
export default AvailablePokemon