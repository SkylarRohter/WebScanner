import dynamic from "next/dynamic";
import {Box, Paper, Stack} from "@mantine/core";
const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: true });

import GaugeProps = Gauges.GaugeProps;
import classes from "./gauge.module.css";

export default function Gauge(props:GaugeProps,onClick:(gaugeUnit:string)=>void, key:number){
    return (
        <Paper
               shadow="xs"
               key={key}
        >
            <Box className={classes.boxeight} onClick={() => {
                console.log("Gauge:"+props.unit)
                onClick(props.unit);
            }}>
                <Stack
                    align="center"
                >
                    <GaugeComponent
                        value={props.value}
                        minValue={props.minValue}
                        maxValue={props.maxValue}
                        type={props.type}
                        labels={{
                            valueLabel: {
                                style: {fontSize: 40},
                                formatTextValue: (value: string): string => {
                                    const newValue: number = parseInt(value) * props.formatMultiplier;
                                    return `${newValue} ${props.unit}`
                                },
                            },
                            tickLabels: {
                                type: "inner",
                                ticks: props.ticks
                            }
                        }}
                        arc={{
                            colorArray: props.colorArray,
                            subArcs: props.subArcs,
                            padding: 0.009,
                            width: 0.15,
                            cornerRadius: 0,
                        }}
                        pointer={{
                            elastic: true,
                            color: "#FFFFFF",
                            width: 10,
                            baseColor: "#000000",
                            animationDelay: 0
                        }}
                    />
                </Stack>
            </Box>
        </Paper>
    );
}