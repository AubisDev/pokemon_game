import { Typography, TextField, Button, Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { SearchBarContainer, Form } from "../style-components";
import { fetchPokemonData, SearchErrorMessage } from "../utilities";
import { PokemonDataAdapter } from "../../../adapters";
import { setPokemonData } from "../../../redux/state/pokemon";
import useSnackbar from "../../../hooks/useSnackbar";

function PokemonSearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState<string>("");
  const { errorSB, throwErrorSnackbar, ErrorSnackbar } = useSnackbar();

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const data = await fetchPokemonData(searchInput);
    if (data !== "Not found") {
      const adaptedData = PokemonDataAdapter(data);
      dispatch(setPokemonData(adaptedData));
    } else {
      throwErrorSnackbar();
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchInput(event.currentTarget.value);
  };

  return (
    <SearchBarContainer>
      <Form>
        <Typography pb={1} textAlign="left" variant="subtitle1" mt={1}>
          {" "}
          Search a Pokemon
        </Typography>
        <TextField
          id="username-input"
          name="username"
          placeholder="eg: Pikachu"
          value={searchInput}
          onChange={(e) => handleChange(e)}
          sx={{ padding: { xs: "1em", sm: "0 1em" } }}
        />
        <Button
          type="submit"
          variant="contained"
          onClick={(e) => handleSubmit(e)}
          sx={{
            mt: "-1",
            color: "white",
            background: "rgb(8,81,122)",
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          }}
        >
          {" "}
          Search{" "}
        </Button>
      </Form>
      <Typography
        textAlign="center"
        fontSize={12}
        variant="subtitle2"
        color="gray"
        pt={1}
      >
        Please make sure to write the name correctly
      </Typography>
      {errorSB ? ErrorSnackbar(SearchErrorMessage, errorSB) : null}
    </SearchBarContainer>
  );
}
export default PokemonSearchBar;
