import { ResponsiveRadialBar } from "@nivo/radial-bar";

const data = [
    { id: "Outer", data: [{ x: "value", y: 25 }] },
    { id: "Middle", data: [{ x: "value", y: 45 }] },
    { id: "Inner", data: [{ x: "value", y: 70 }] }
];

export const RadialRingChart = () => {
    return (
        <div style={{ height: 190, width: 190 }}>
            <ResponsiveRadialBar
                data={data}
                maxValue={100}
                endAngle={360}
                padding={0.25}
                cornerRadius={5}
                colors={["#65ee97", "#94a3b8"]}
                enableRadialGrid={false}
                enableCircularGrid={false}
                layers={["bars", "tracks"]}
                radialAxisStart={{ tickSize: 0, tickPadding: 0 }}
                circularAxisOuter={{ tickSize: 0, tickPadding: 0 }}
            />
        </div>
    );
};
