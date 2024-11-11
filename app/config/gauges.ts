/*
        RPM
        VEHICLE SPEED
        COOLANT TEMP
        CALCULATE ENGINE LOAD
        ABSOLUTE THROTTLE POSITION
        INTAKE AIR TEMPERATURE
        MANIFOLD PRESSURE SENSOR
        FUEL RAIL PRESSURE
        BATTERY VOLTAGE
 */
import GaugeProps = Gauges.GaugeProps;
import { Colors } from "~/config/colors";

declare module Gauges {
  export class GaugeProps {
    /** Min value of the gauge */
    minValue: number;
    /** Max value of the gauge */
    maxValue: number;
    /** Label which sits below each gauge */
    label?: string;
    /** Unit for the gauge's value */
    unit: string;
    /** Type of arc. Note that grafana cannot have a pointer (bug in the component) */
    type?: "semicircle" | "radial" | "grafana";
    /** Colors spread throughout the arc. Must be '#HEX' */
    colorArray?: string[];
    /** Array for each tick label on the arc */
    ticks?: Tick[];
    /** Array of intervals for breakpoints in the arc "SubArc's" */
    subArcs?: SubArc[];
  }

  export interface Tick {
    /**Test*/
    value: number;
  }

  export interface SubArc {
    /**Another Test*/
    limit?: number;
    color?: string;
  }
}


export const RPM:GaugeProps =  {
  minValue: 0,
  maxValue: 10,
  label: "RPM (x1000)",
  unit: "RPM",
  type: "radial",
  // colorArray: ['#71a624','#5BE12C','#EA4228'],
  ticks: [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
  ],
  subArcs: [{limit: 2, color:Colors.Color1} , {limit: 4, color:Colors.Color2}, {limit: 5.4, color: Colors.Color3}, {limit: 8, color: Colors.Color4}, {color: Colors.Color5}],
}