import { Box, Typography } from '@mui/material';

interface IStatProps {
    statName: string;
    stat: number;
}

const StatChar = ({statName, stat}:IStatProps) => {
    const Rest = Math.floor((150-stat)/10);
    const StatsPercentagePoints = 15 - Rest;
    const dataArray = new Array(StatsPercentagePoints).fill(true).concat( new Array(Rest).fill(false));
  return (
    <Box display='flex' flexDirection='row' alignItems="center" pb={4} >
        <Typography fontSize={18} fontWeight={600}>{statName}:  </Typography>
        {
            dataArray?.map( data => 
                data ?  <span style={{width:"12px", height:"8px", background:"green", marginLeft:"4px"}}></span>
                     :  <span style={{width:"12px", height:"8px", background:"white", marginLeft:"4px"}}></span>
            )
        }
    </Box>
  )
}
export default StatChar