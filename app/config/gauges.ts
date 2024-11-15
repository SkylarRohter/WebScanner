/*
TODO
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

function onGaugeClickCallback(gaugeName:string) {
  console.log(`${gaugeName} clicked.`)
}

export const RPM:GaugeProps =  {
  value: 10,
  minValue: 0,
  maxValue: 10,
  label: "RPM (x1000)",
  unit: "RPM",
  type: "radial",
  formatMultiplier: 1000,
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
  gaugeClickCallback: onGaugeClickCallback
}

export const VEHICLE_SPEED:GaugeProps = {
  value: 130,
  minValue: 0,
  maxValue: 150,
  label: "MPH",
  unit: "MPH",
  type: "grafana",
  formatMultiplier: 1,
  colorArray: [Colors.Color1,Colors.Color3,Colors.Color5],
  ticks: [
    { value: 10},
    { value: 20},
    { value: 30},
    { value: 40},
    { value: 50},
    { value: 60},
    { value: 70},
    { value: 80},
    { value: 90},
    { value: 100},
    { value: 110},
    { value: 120},
    { value: 130},
    { value: 140},
    { value: 150},
  ],
  gaugeClickCallback: onGaugeClickCallback
  // subArcs: [{limit}]
}

const gaugePropsArray:GaugeProps[] = [RPM, VEHICLE_SPEED];

export default function getGauge(gaugeName:string):GaugeProps | null {
  console.log("GaugeNameFromTs:"+gaugeName)
  gaugePropsArray.forEach((gauge:GaugeProps) => {
    console.log("Gauge from ts :" + gauge.unit)
    if(gauge.unit === gaugeName){
      return gauge;
    }
  })
  return null;
}