

export const fetchPokemonData = async(pokemon: string) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}/`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
        return 'Not found'
    }

}