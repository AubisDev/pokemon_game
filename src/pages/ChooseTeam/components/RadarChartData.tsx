import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"
import { ChartData } from "../adapters/ChartData.adapter"

interface IRadarChartDataProps{
    data: ChartData[];
}

const RadarChartData = ({data}:IRadarChartDataProps) => {

  return (
    <RadarChart
        outerRadius={150}
        height={450}
        width={550}
        data={data}
        style={{ transform: 'scale(0.70)', fontSize:"22px"}}
    >
        <PolarGrid />
        <PolarAngleAxis dataKey="statName"  />
        <PolarRadiusAxis domain={[0, 150]} />
        <Radar
            name="Chart"
            dataKey="statValue"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
        />
  </RadarChart>
  )
}
export default RadarChartData