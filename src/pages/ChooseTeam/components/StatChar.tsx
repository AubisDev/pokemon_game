import { Box, Typography, Stack } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { ChartSquare, StatText } from '../style-components';

interface IStatProps {
    statName: string;
    stat: number;
    color: string;
}

const StatChar = ({statName, stat, color}:IStatProps) => {
    const Rest = Math.floor((200-stat)/10);
    const StatsPercentagePoints = 20 - Rest;
    const dataArray = new Array(StatsPercentagePoints).fill(true).concat( new Array(Rest).fill(false));
    
  return (
    <Stack direction="row" pb={3} alignItems='center' >
        <StatText>{statName}: </StatText>
        { dataArray && 
            dataArray?.map( data => 
                data ?  <ChartSquare key={uuidv4()} sx={{background:color.toString()}}></ChartSquare>
                     :  <ChartSquare key={uuidv4()} sx={{background:"white"}}></ChartSquare>
            )
        }
    </Stack>
  )
}
export default StatChar