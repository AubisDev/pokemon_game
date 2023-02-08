import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { Pokemon } from '../../../models';
import { AppStore } from '../../../redux/store';
import AvailablePokemon from './AvailablePokemon';
import { v4 as uuidv4 } from 'uuid';

interface IAvailablePokemonList {
    handleUserSelection: (selectedPokemon: Pokemon) => Promise<void>
}

const AvailablePokemonList = ({handleUserSelection}:IAvailablePokemonList) => {
    const { alivePokemons } = useSelector( (store: AppStore) => store.game);

    return alivePokemons.length > 0 ? 

    (
        <Box>
            <Grid container gridTemplateColumns='repeat(2, minmax(0, 1fr))' width={{xs:"85%", sm:"75%"}} margin='auto' >
                {
                    alivePokemons?.map( pokemon => <AvailablePokemon key={uuidv4()} pokemon={pokemon} handleUserSelection={handleUserSelection} />)
                }

            </Grid>
        </Box>
    ) : <div></div>

}
export default AvailablePokemonList