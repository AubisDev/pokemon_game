import { Box, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

interface IStatProps {
    statName: string;
    stat: number;
    color: string;
}

const StatChar = ({statName, stat, color}:IStatProps) => {
    const Rest = Math.floor((150-stat)/10);
    const StatsPercentagePoints = 15 - Rest;
    const dataArray = new Array(StatsPercentagePoints).fill(true).concat( new Array(Rest).fill(false));
    //console.log(color);
  return (
    <Box display='flex' flexDirection='row' alignItems="center" pb={4} >
        <Typography fontSize={18} fontWeight={600}>{statName}:  </Typography>
        {
            dataArray?.map( data => 
                data ?  <span key={uuidv4()} style={{width:"12px", height:"8px", background:color.toString(), marginLeft:"4px"}}></span>
                     :  <span key={uuidv4()} style={{width:"12px", height:"8px", background:"white", marginLeft:"4px"}}></span>
            )
        }
    </Box>
  )
}
export default StatChar