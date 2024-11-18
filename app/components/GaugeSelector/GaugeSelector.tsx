import {SetStateAction, useState} from "react";
import {useCombobox, Combobox, InputBase, Input, CheckIcon, Group} from "@mantine/core";
import {RPM, VEHICLE_SPEED} from "~/config/gauges";

export interface GaugeSelectorProps {
    value: string;
    setValue: (prestate: string) => void;
}

const gauges = [RPM.unit, VEHICLE_SPEED.unit]

export default function GaugeSelector({value, setValue}:GaugeSelectorProps) {
    const combobox = useCombobox({
       onDropdownClose: () => combobox.resetSelectedOption(),
       onDropdownOpen: (eventSource) => {
           if(eventSource === 'keyboard'){
               combobox.selectActiveOption();
           } else {
               combobox.updateSelectedOptionIndex('active');
           }
       }
    });

    const options = gauges.map((gauge) => (
        <Combobox.Option active={value === gauge} value={gauge} key={gauge}>
            <Group gap="xs">
                {value === gauge && <CheckIcon size={12} />}
                <span>{gauge}</span>
            </Group>
        </Combobox.Option>
    ));

    return (
        <Combobox
            store={combobox}
            resetSelectionOnOptionHover
            onOptionSubmit={(val) => {
                setValue(val);
                combobox.updateSelectedOptionIndex('active')
            }}
        >
            <Combobox.Target>
                <InputBase
                    component="button"
                    type="button"
                    pointer
                    rightSection={<Combobox.Chevron />}
                    rightSectionPointerEvents="none"
                    onClick={() => combobox.toggleDropdown()}
                >
                    {value || <Input.Placeholder>Select Gauge</Input.Placeholder>}
                </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}