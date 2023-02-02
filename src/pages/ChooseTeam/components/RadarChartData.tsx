import { PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"
import { ChartData } from "../adapters"
import { RadarChartComponent } from "../style-components";

interface IRadarChartDataProps{
    data: ChartData[];
    color: string;
}

const RadarChartData = ({data,color}:IRadarChartDataProps) => {

  return (
    <RadarChartComponent
        outerRadius={150}
        height={450}
        width={550}
        data={data}
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
  </RadarChartComponent>
  )
}
export default RadarChartData