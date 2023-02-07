import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { Pokemon } from '../../../models';
import { AppStore } from '../../../redux/store';
import AvailablePokemon from './AvailablePokemon';

interface IAvailablePokemonList {
    handleUserSelection: (selectedPokemon: Pokemon) => Promise<void>
}

const AvailablePokemonList = ({handleUserSelection}:IAvailablePokemonList) => {
    const { alivePokemons } = useSelector( (store: AppStore) => store.game);

    return alivePokemons.length > 0 ? 

    (
        <Box>
            <Grid container gridTemplateColumns='repeat(2, minmax(0, 1fr))' width="75%" margin='auto' >
                {
                    alivePokemons?.map( pokemon => <AvailablePokemon pokemon={pokemon} handleUserSelection={handleUserSelection} />)
                }

            </Grid>
        </Box>
    ) : <div></div>

}
export default AvailablePokemonList