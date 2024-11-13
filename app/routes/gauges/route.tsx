import {AppShell, Button, Grid, Textarea} from '@mantine/core';
import {LoaderFunction, LoaderFunctionArgs} from "@remix-run/node";
import {useDisclosure} from "@mantine/hooks";
import Gauge from "~/components/Gauge/Gauge";

import {RPM, VEHICLE_SPEED} from "~/config/gauges";


export default function hi() {
    const [desktopOpened, {toggle: toggleDesktop}] = useDisclosure();
    function onGaugeClick(gaugeName:string):void{ console.log(`${gaugeName}`)}
    const gauges = [
        Gauge(RPM, 10),
        Gauge(VEHICLE_SPEED, onGaugeClick, 130),
        Gauge("Test"),
        Gauge("awddawdawd")
    ];
    return (
        <AppShell
            aside={{
                width: { sm: 200, lg: 300},
                breakpoint:'sm',
                collapsed: {desktop: !desktopOpened}
        }}
        >
            <AppShell.Aside>
                Hi
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
                           return <Grid.Col span={3} key={`${gauge.key}`}>{gauge}</Grid.Col>
                        })
                    }
                </Grid>
            </AppShell.Main>
        </AppShell>
    );
}
