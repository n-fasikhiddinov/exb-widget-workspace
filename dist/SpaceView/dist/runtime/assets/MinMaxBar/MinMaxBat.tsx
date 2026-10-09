import { React } from "jimu-core";
import type { CSSProperties } from "react";
import "./MinMaxBar.css";

interface barValues {
    minVal: number;
    maxVal: number;
}

interface minMaxBarProps {
    minValue: number;
    maxValue: number;
    step: number;
    minGap?: number;
    inclusive?: boolean;
    onChange: (min: number, max: number) => void;
    initialMin?: number | "";
    initialMax?: number | "";
    title?: string;
}

export default function MinMaxBar(props: minMaxBarProps) {
    const barRef = React.useRef<HTMLDivElement>(null);

    const [controlType, setControlType] = React.useState<"none" | "min" | "max">("none");

    const range = props.maxValue - props.minValue;

    const clampAndStep = (val: number) => {
        const v = Math.max(props.minValue, Math.min(val, props.maxValue));
        const steps = Math.round((v - props.minValue) / props.step);
        return Number((props.minValue + steps * props.step).toFixed(6));
    };

    const [currValues, setCurrValues] = React.useState<barValues>({
        minVal:
            props.initialMin === "" || props.initialMin === undefined
                ? props.minValue
                : clampAndStep(props.initialMin as number),
        maxVal:
            props.initialMax === "" || props.initialMax === undefined
                ? props.maxValue
                : clampAndStep(props.initialMax as number),
    });

    React.useEffect(() => {
        const newMin =
            props.initialMin === "" || props.initialMin === undefined
                ? props.minValue
                : clampAndStep(props.initialMin as number);
        const newMax =
            props.initialMax === "" || props.initialMax === undefined
                ? props.maxValue
                : clampAndStep(props.initialMax as number);

        setCurrValues({ minVal: newMin, maxVal: newMax });
    }, [props.initialMin, props.initialMax, props.minValue, props.maxValue, props.step]);

    const minPercent = range === 0 ? 0 : (currValues.minVal - props.minValue) / range;
    const maxPercent = range === 0 ? 1 : (currValues.maxVal - props.minValue) / range;

    const fillStyle: CSSProperties = {
        left: `${minPercent * 100}%`,
        width: `${Math.max(0, (maxPercent - minPercent) * 100)}%`,
    };

    const thumbStyle = (percent: number): CSSProperties => ({
        left: `${percent * 100}%`,
    });

    const emitChange = (values: barValues) => {
        let retMin = values.minVal;
        let retMax = values.maxVal;

        if (!props.inclusive) {
            retMin = Number((retMin + props.step).toFixed(6));
            retMax = Number((retMax - props.step).toFixed(6));
        }

        props.onChange(retMin, retMax);
    };

    React.useEffect(() => {
        const minGap = props.minGap ?? 0;

        const move = (e: MouseEvent) => {
            const bar = barRef.current;
            if (!bar || controlType === "none") return;

            const barRect = bar.getBoundingClientRect();
            const barWidth = barRect.width;
            if (barWidth === 0) return;

            let mouseX = e.clientX - barRect.left;
            mouseX = Math.max(0, Math.min(mouseX, barWidth));
            const percent = mouseX / barWidth;
            let rawValue = props.minValue + percent * range;
            let realValue = clampAndStep(rawValue);

            if (controlType === "min") {
                realValue = Math.min(realValue, currValues.maxVal - minGap);
                setCurrValues((prev) => {
                    const updated = { ...prev, minVal: realValue };
                    emitChange(updated);
                    return updated;
                });
            } else if (controlType === "max") {
                realValue = Math.max(realValue, currValues.minVal + minGap);
                setCurrValues((prev) => {
                    const updated = { ...prev, maxVal: realValue };
                    emitChange(updated);
                    return updated;
                });
            }
        };

        const stop = () => setControlType("none");

        if (controlType !== "none") {
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", stop);
        }

        return () => {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", stop);
        };
    }, [controlType, currValues, range, props]);

    return (
        <div className="MinMaxBarArea">
            {props.title && <div className="barTitle">{props.title}</div>}
            <div className="barArea">
                <div className="bar" ref={barRef}>
                    <div className="barFill" style={fillStyle} aria-hidden="true" />
                    <div
                        data-value={currValues.minVal}
                        className={`control sv-slider-thumb min ${controlType === "min" ? "activ" : ""}`}
                        style={thumbStyle(minPercent)}
                        onMouseDown={() => setControlType("min")}
                    >
                        <span className="sv-slider-thumb-grip" aria-hidden="true" />
                    </div>
                    <div
                        data-value={currValues.maxVal}
                        className={`control sv-slider-thumb max ${controlType === "max" ? "activ" : ""}`}
                        style={thumbStyle(maxPercent)}
                        onMouseDown={() => setControlType("max")}
                    >
                        <span className="sv-slider-thumb-grip" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </div>
    );
}
