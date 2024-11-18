import {Grid} from "@mantine/core";

import Gauge from "~/components/Gauge/Gauge"

interface GaugeDisplayProps {
    gauges: Gauge[];
}

export default function GaugeDisplay({gauges}:GaugeDisplayProps){

    return (
        <Grid >
            {
                gauges.map((gauge) => {
                    return <Grid.Col span={3} key={gauge.key}>{gauge}</Grid.Col>
                })
            }
        </Grid>
    )
}