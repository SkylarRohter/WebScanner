import {Grid} from "@mantine/core";

import Gauge from "~/components/Gauge/Gauge"

interface GaugeDisplayProps {
    numGauges: number
    gauges: Gauge[]
}

export default function GaugeDisplay({numGauges, gauges}:GaugeDisplayProps){
    let span:number = 0;
    switch(numGauges){
        case 8:
            span = 3;
            break;
        case 4:
            span = 5;
            break;
        default:
            span = 0;
            break;
    }
    return (
        <Grid >
            {
                gauges.map((gauge) => {
                    return <Grid.Col span={span} key={gauge.key}>{gauge}</Grid.Col>
                })
            }
        </Grid>
    )
}