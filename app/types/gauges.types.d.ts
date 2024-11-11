declare module Gauges {
    export class GaugeProps {
        /** Min value of the gauge */
        minValue: number;
        /** Max value of the gauge */
        maxValue: number;
        /** Label which sits below each gauge */
        label?: string;
        /** Unit for the gauge's value */
        unit: string;
        /** Type of arc. Note that grafana cannot have a pointer (bug in the component) */
        type?: "semicircle" | "radial" | "grafana";
        /** Colors spread throughout the arc. Must be '#HEX' */
        colorArray?: string[];
        /** Array for each tick label on the arc */
        ticks?: Tick[]
        /** Array of intervals for breakpoints in the arc "SubArc's" */
        subArcs?: SubArc[]
    }

    export interface Tick {
        /**Test*/
        value: number;
    }

    export interface SubArc {
        /**Another Test*/
        limit?: number;
        color?: string;
    }
}
