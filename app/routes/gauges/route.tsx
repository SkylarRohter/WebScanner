import {AppShell, Button, Grid, Menu, Textarea} from '@mantine/core';
import {LoaderFunction, LoaderFunctionArgs} from "@remix-run/node";
import {useDisclosure} from "@mantine/hooks";
import Gauge from "~/components/Gauge/Gauge";

import getGauge, {RPM, VEHICLE_SPEED} from "~/config/gauges";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import GaugeProps = Gauges.GaugeProps;
import * as assert from "node:assert";

export interface onClickProps {
    config: GaugeProps

}
export default function Route() {
    let key:number = 0;
    const didMount:MutableRefObject<boolean> = useRef(false)

    const [desktopOpened, {toggle: toggleDesktop}] = useDisclosure();
    const [selectedGauge, setSelectedGauge] = useState<string | null>(RPM.unit);
    function click(gaugeName: string){
        setSelectedGauge(getGauge(gaugeName));
        console.log("Selected Gauge:" + selectedGauge)
    }
    const [gauges, setGauges] =  useState([
        Gauge(RPM, click),
        Gauge(VEHICLE_SPEED, click),
        // Gauge("Test"),
        // Gauge("awddawdawd")
    ]);
    useEffect(() => {
        if(!didMount.current) {
            didMount.current = true;
            return;
        }
        toggleDesktop();
        console.log("useeffect:" + selectedGauge)
    },[selectedGauge])
    return (
        <AppShell
            aside={{
                width: { sm: 200, lg: 300},
                breakpoint:'sm',
                collapsed: {desktop: !desktopOpened}
        }}
        >
            <AppShell.Aside>
                {selectedGauge}
            </AppShell.Aside>
            <AppShell.Main
            >
                <Button
                    onClick={toggleDesktop}
                    variant={"outline"}
                    color="#FFFFFF"
                >
                    Toggle
                </Button>
                <Grid >
                    {
                        gauges.map(gauge => {
                           key++;
                           return <Grid.Col span={3} key={key}>{gauge}</Grid.Col>
                        })
                    }
                </Grid>
            </AppShell.Main>
        </AppShell>
    );
}
