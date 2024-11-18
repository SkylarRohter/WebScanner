import {AppShell, Button, Flex, Grid, Menu, Stack, Textarea} from '@mantine/core';
import {LoaderFunction, LoaderFunctionArgs} from "@remix-run/node";
import {useDisclosure, useClickOutside} from "@mantine/hooks";
import Gauge from "~/components/Gauge/Gauge";

import {RPM, VEHICLE_SPEED} from "~/config/gauges";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import GaugeProps = Gauges.GaugeProps;
import GaugeSelector from "~/components/GaugeSelector/GaugeSelector";
import GaugeDisplay from "~/components/GaugeDisplay/GaugeDisplay";

export interface onClickProps {
    config: GaugeProps

}
export default function Route() {
    const didMount:MutableRefObject<boolean> = useRef(false)
    const [desktopOpened, {toggle: toggleDesktop, open: openDesktop, close: closeDesktop}] = useDisclosure();

    const outsideRef = useClickOutside(() => closeDesktop);
    const [selectedGauge, setSelectedGauge] = useState<string>(RPM.unit);
    function onGaugeClick(gaugeName: string){
        setSelectedGauge(gaugeName);
        openDesktop();
    }
    function onSaveClick(){
        toggleDesktop();
    }
    const [gauges, setGauges] =  useState([
        Gauge(RPM, onGaugeClick),
        Gauge(VEHICLE_SPEED, onGaugeClick),
    ]);
    useEffect(() => {
        if(!didMount.current) {
            didMount.current = true;
            return;
        }
    },[selectedGauge])
    return (
        <AppShell
            aside={{
                width: {sm: 200, lg: 300},
                breakpoint: 'sm',
                collapsed: {desktop: !desktopOpened}

            }}
        >
            <AppShell.Aside ref={outsideRef}>
                <GaugeModifer selectedGauge={selectedGauge} setSelectedGauge={setSelectedGauge} onSaveClick={onSaveClick} />
            </AppShell.Aside>
            <AppShell.Main>
                <GaugeDisplay gauges={gauges} onClick={onGaugeClick}/>
            </AppShell.Main>
        </AppShell>
    );
}

function GaugeModifer({selectedGauge,setSelectedGauge, onSaveClick}:any) {
    return (
        <Stack
            justify="space-between"
            align="stretch"
            gap="xl"
            h="90vh"
        >
            <div>
                <p>{`Selected Gauge: ${selectedGauge}`}</p>
                <GaugeSelector value={selectedGauge} setValue={setSelectedGauge}/>
            </div>
            <Button
                onClick={onSaveClick}
                variant={"outline"}
                color="#FFFFFF"
            >
                Save
            </Button>
        </Stack>
    );
}