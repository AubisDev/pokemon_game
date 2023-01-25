import { Pulse } from "../style-components/main"

interface IPulseEffectProps{
    color: string;
}

const PulseEffect = ({color}:IPulseEffectProps) => {
  return (
    <>
        <Pulse style={{ animationDelay: '0s', backgroundImage: color, opacity:0.5 }}/>
        <Pulse style={{ animationDelay: '1s', backgroundImage: color, opacity:0.5 }}/>
        <Pulse style={{ animationDelay: '2s', backgroundImage: color, opacity:0.5 }}/>
        <Pulse style={{ animationDelay: '3s', backgroundImage: color, opacity:0.5 }}/>
    </>
  )
}
export default PulseEffect