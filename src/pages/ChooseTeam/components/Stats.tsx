import { Typography, Box } from "@mui/material"
import { colorTypesList } from "../../../utilities"
import StatChar from "./StatChar"
import { v4 as uuidv4 } from 'uuid';


interface IStatsProps{
    stats: {
        attack:number | undefined;
        defense: number | undefined;
        speed: number | undefined;
        health: number | undefined;
    };
    color: string;
    types: string[] | undefined;
}

const Stats = ({stats, color, types }:IStatsProps) => {
    const { attack, defense, speed, health } = stats;
    
    return (
        <>
            <Typography variant="h4">Stats</Typography>
            <StatChar statName="Attack" stat={Number(attack)} color={color} />
            <StatChar statName="Defense" stat={Number(defense)}  color={color}/>
            <StatChar statName="Speed" stat={Number(speed)}  color={color}/>
            <StatChar statName="Health" stat={Number(health)}  color={color}/>
            {
            types?.map( (pokeType:any, index) => (
                <Box key={uuidv4()} display='flex' flexDirection='row' alignItems='center'>
                <Typography key={pokeType} fontSize={20} fontWeight={600} textTransform="capitalize">{pokeType} </Typography>
                <img src={colorTypesList(types[index]).symbol} alt={`${pokeType} type`} style={{ width:24, height:24, paddingLeft:4}}/>
                </Box>
            ))
            }
        </>
    )
}
export default Stats