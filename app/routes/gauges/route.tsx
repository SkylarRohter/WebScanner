import {AppShell, Button, Grid, Textarea} from '@mantine/core';
import {LoaderFunction, LoaderFunctionArgs} from "@remix-run/node";
import {useDisclosure} from "@mantine/hooks";
import Gauge from "~/components/Gauge/Gauge"

import { RPM } from "~/config/gauges"


export default function hi() {
    const [desktopOpened, {toggle: toggleDesktop}] = useDisclosure();
    const gauges = [Gauge(RPM, 10), Gauge("Gauge"), Gauge("Test"), Gauge("awddawdawd")]
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
                <Button onClick={toggleDesktop}>Toggle</Button>
                <Grid >
                    {
                        gauges.map(gauge => {
                           return <Grid.Col span={3}>{gauge}</Grid.Col>
                        })
                    }
                </Grid>
            </AppShell.Main>
        </AppShell>
    );
}
