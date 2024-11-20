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
    const [desktopOpened, {toggle: toggleDesktop, open: openDesktop, close: closeDesktop}] = useDisclosure();
    const [mobileOpened, {toggle: toggleMobile, open: openMobile, close: closeMobile}] = useDisclosure();

    const outsideRef = useClickOutside(() => closeDesktop);
    const [selectedGauge, setSelectedGauge] = useState<string>(RPM.unit);
    function onGaugeClick(gaugeName: string){
        setSelectedGauge(gaugeName);
        openDesktop();
        openMobile();
    }
    function onSaveClick(){
        toggleDesktop();
        toggleMobile();
    }
    const [gauges, setGauges] =  useState([
        Gauge(RPM, onGaugeClick, 0),
        Gauge(RPM, onGaugeClick, 1),
        Gauge(RPM, onGaugeClick, 2),
        Gauge(RPM, onGaugeClick, 3),
        Gauge(RPM, onGaugeClick, 4),
        Gauge(VEHICLE_SPEED, onGaugeClick, 5),
        Gauge(VEHICLE_SPEED, onGaugeClick, 6),
        Gauge(VEHICLE_SPEED, onGaugeClick, 7),
    ]);
    return (
        <AppShell
            aside={{
                width: {sm: 100, lg: 200},
                collapsed: {desktop: !desktopOpened, mobile: !mobileOpened}

            }}
        >
            <AppShell.Aside ref={outsideRef}>
                <GaugeModifer selectedGauge={selectedGauge} setSelectedGauge={setSelectedGauge} onSaveClick={onSaveClick} />
            </AppShell.Aside>
            <AppShell.Main>
                <GaugeDisplay numGauges={8} gauges={gauges} onClick={onGaugeClick}/>
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