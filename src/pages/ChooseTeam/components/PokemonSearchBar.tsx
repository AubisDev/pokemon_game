import { Typography, TextField, Snackbar, Alert, Button } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { CommonButton } from "../../../style-components/home.styles-components"
import { SearchBarContainer } from "../style-components/main"
import { fetchPokemonData } from '../utilities/FindPokemon';
import { PokemonDataAdapter } from '../../../adapters/PokemonData.adapter';
import { setPokemonData } from "../../../redux/state/pokemon";


const PokemonSearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const data = await fetchPokemonData(searchInput);
        const adaptedData = PokemonDataAdapter(data);
        dispatch( setPokemonData(adaptedData));
      }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchInput(event.currentTarget.value)
      }
      
  return (
    <SearchBarContainer>
        
        <form style={{ display:"flex", flexDirection:"row", padding:0, margin:0, alignItems:'center', justifyContent:'center'}}>
        <Typography pb={1}  textAlign="left" variant="subtitle1"> Search a Pokemon</Typography>
            <TextField
                id="username-input"
                name='username'
                placeholder="eg: Pikachu"
                value={searchInput}
                onChange={ (e) => handleChange(e)}
                sx={{padding:'0 1em'}}
            />
            <Button type="submit" onClick={ (e) => handleSubmit(e)} style={{ background:"rgb(8,81,122)", boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }} > Search </Button>
        </form>
        <Typography textAlign='center' variant="subtitle2" color="darkblue)">Please make sure to write the name correctly</Typography>
    </SearchBarContainer>
  )
}
export default PokemonSearchBar