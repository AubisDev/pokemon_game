import { PropsWithChildren, ReactElement } from "react";
import { Pulse } from "../style-components/main";

interface IPulseEffectProps {
  color: string;
  children: PropsWithChildren | ReactElement<any, any>;
}

function PulseEffect({ color, children }: IPulseEffectProps) {
  return (
    <>
      {children}
      <Pulse
        className="center_abs_item"
        style={{ animationDelay: "0s", backgroundImage: color, opacity: 0.5 }}
      />
      <Pulse
        className="center_abs_item"
        style={{ animationDelay: "1s", backgroundImage: color, opacity: 0.5 }}
      />
      <Pulse
        className="center_abs_item"
        style={{ animationDelay: "2s", backgroundImage: color, opacity: 0.5 }}
      />
      <Pulse
        className="center_abs_item"
        style={{ animationDelay: "3s", backgroundImage: color, opacity: 0.5 }}
      />
    </>
  );
}
export default PulseEffect;
