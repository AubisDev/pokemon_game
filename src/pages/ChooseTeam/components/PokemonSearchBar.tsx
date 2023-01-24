import { Typography, TextField, Snackbar, Alert } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { CommonButton } from "../../../style-components/home.styles-components"
import { SearchBarContainer } from "../style-components/main"


const PokemonSearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
      }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchInput(event.currentTarget.value)
      }
      
  return (
    <SearchBarContainer>
        <form style={{ display:"flex", flexDirection:"column",}}>
            <Typography pb={1} textAlign="center" variant="h6"> Search a Pokemon</Typography>
            <TextField
                id="username-input"
                name='username'
                placeholder="eg: Pikachu"
                value={searchInput}
                onChange={ (e) => handleChange(e)}
                
            />
            <Typography variant="subtitle2" color="darkblue)">Please make sure to write the name correctly</Typography>
            <CommonButton type="submit" onClick={ (e) => handleSubmit(e)} style={{ background:"rgb(8,81,122)", boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }} > Search </CommonButton>
        </form>
    </SearchBarContainer>
  )
}
export default PokemonSearchBar