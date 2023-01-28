import { useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";
import { BotPokemonImage } from "../style-components/main";

interface IBotPokemonProps{
    botAttackMove: boolean;

}

const BotPokemon = ({botAttackMove}:IBotPokemonProps) => {
    const { userTeam } = useSelector( (store:AppStore) => store.teams);
    
  return (
    <>
    {
        botAttackMove ? 
        (   
                <BotPokemonImage 
                    src={ userTeam[1].imageSpot} 
                    alt={userTeam[1].name} 
                    animate={{
                        translateX:-400,
                        translateY: 250
                    }}

                    transition={{
                        duration:0.5
                    }}
                />
        )
        :
        (
                <BotPokemonImage src={ userTeam[1].imageSpot} alt={userTeam[1].name} />
        )
    }

    
    </>
  )
}
export default BotPokemon