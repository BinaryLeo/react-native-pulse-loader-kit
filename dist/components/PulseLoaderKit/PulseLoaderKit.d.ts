import React from "react";
export interface PulseLoaderProps {
    dotColor?: string;
    dotCount?: number;
    dotSize?: number;
    interval?: number;
    isLoaderInAction?: boolean;
    message?: string;
    messageColor?: string;
    pulseStages?: number[];
    singlePulse?: boolean;
    isGradient?: boolean;
    gradientColors?: [string, string, ...string[]];
}
declare const _default: React.NamedExoticComponent<PulseLoaderProps>;
export default _default;
