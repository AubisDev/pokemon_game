import { Box } from "@mui/material"
import { PokemonName } from "../style-components"
import PulseEffect from "./PulseEffect"

interface IPokemonImageProps{
    name: string;
    color: string;
    image: string | undefined;
    gradientColor: string;
}

const PokemonImage = ({name, color, image, gradientColor}:IPokemonImageProps ) => {
    return (
        <Box display='flex' flexDirection='column' alignItems='center' width='50%' height="100%" position='relative'  m='auto' mt={5}  >
            <PokemonName style={{ backgroundImage:color }}>{name}</PokemonName>
            <Box width={300} height={300} zIndex={100} position='relative'>
                <PulseEffect color={gradientColor}>
                <img className="center_abs_item" src={image} alt={name} style={{ display:"flex", width:"100%", height:"100%",  WebkitBoxReflect:"below 0 linear-gradient(transparent, transparent, #005)"}} />
                </PulseEffect >
            </Box>
        </Box>
    )
}
export default PokemonImage