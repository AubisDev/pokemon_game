import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"
import { ChartData } from "../adapters/ChartData.adapter"

interface IRadarChartDataProps{
    data: ChartData[];
    color: string;
}

const RadarChartData = ({data,color}:IRadarChartDataProps) => {

  return (
    <RadarChart
        outerRadius={150}
        height={450}
        width={550}
        data={data}
        style={{ transform: 'scale(0.70)', fontSize:"22px", marginTop: '-3em'}}
    >
        <PolarGrid />
        <PolarAngleAxis dataKey="statName"  />
        <PolarRadiusAxis domain={[0, 150]} />
        <Radar
            name="Chart"
            dataKey="statValue"
            stroke={color}
            fill={color}
            fillOpacity={0.6}
        />
  </RadarChart>
  )
}
export default RadarChartData