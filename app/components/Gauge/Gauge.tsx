import dynamic from "next/dynamic";
import {Box, Paper, Stack} from "@mantine/core";
const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false });

import GaugeProps = Gauges.GaugeProps;

export default function Gauge(props:GaugeProps, value:number){
    return (
        <Paper shadow="xs">
            <Box bg='#696969'>
                <Stack
                    align="center"
                >
                    <GaugeComponent
                        value={value}
                        minValue={props.minValue}
                        maxValue={props.maxValue}
                        type={props.type}
                        labels={{
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