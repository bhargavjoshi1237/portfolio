"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  time: {
    label: "Response Time",
  },
  dnsLookup: {
    label: "DNS Lookup",
    color: "hsl(0, 0%, 100%)",  // White
  },
  tcpConnection: {
    label: "TCP Connection",
    color: "hsl(0, 0%, 88%)",   // #E0E0E0
  },
  tlsHandshake: {
    label: "TLS Handshake",
    color: "hsl(0, 0%, 74%)",   // #BDBDBD
  },
  firstByte: {
    label: "First Byte",
    color: "hsl(0, 0%, 62%)",   // #9E9E9E
  },
  contentDownload: {
    label: "Content Download",
    color: "hsl(0, 0%, 46%)",   // #757575
  },
  processing: {
    label: "Processing",
    color: "hsl(0, 0%, 38%)",   // #616161
  }
}

const defaultData = [
  { name: "dnsLookup", time: 30, fill: "#FFFFFF" },
  { name: "tcpConnection", time: 45, fill: "#E0E0E0" },
  { name: "tlsHandshake", time: 25, fill: "#BDBDBD" },
  { name: "firstByte", time: 35, fill: "#9E9E9E" },
  { name: "contentDownload", time: 55, fill: "#757575" },
  { name: "processing", time: 20, fill: "#616161" }
];

const getPerformanceColor = (time) => {
  if (time < 30) return "#22C55E"; // Green for fast
  if (time < 100) return "#FBC02D"; // Yellow for medium
  return "#EF4444"; // Red for slow
};

// Add custom tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#161616] p-2 border border-[#333] rounded">
        <div className="flex items-center gap-2">
          <p className="text-white">
            {(chartConfig[data.name]?.label || data.name)}<br/>
            {data.time.toFixed(2)} ms
          </p>
          <div 
            className="w-[5px] h-[5px] rounded-full ml-1" 
            style={{ backgroundColor: getPerformanceColor(data.time) }}
          />
        </div>
      </div>
    );
  }
  return null;
};

export default function Chart1({ data = defaultData, centerLabel = null }) {
  const chartData = React.useMemo(() => {
    return data.length === 0 ? defaultData : data;
  }, [data]);

  const totalTime = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.time, 0)
  }, [chartData]);

  // Add dataKey to force re-render when data changes
  const dataKey = React.useMemo(() => 
    chartData.map(d => d.time).join('-'), 
    [chartData]
  );

  return (
    <Card className="flex  flex-col bg-transparent border-none text-white">
      <CardContent className="flex-1 pb-0 text-white">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[200px] text-white"
        >
          <PieChart key={dataKey} className="text-white">
            <ChartTooltip
              cursor={false}
              content={<CustomTooltip  className="text-white" />}
              className="text-white"
            />
            <Pie
              data={chartData}
              dataKey="time"
              nameKey="name"
              innerRadius={60}
              className="text-white"
              strokeWidth={5}
              animationBegin={0}
              animationDuration={1500}
              fill={(entry) => entry.fill}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        className="fill-white font-medium"
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      > 
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-white text-3xl font-bold"
                        >
                          {centerLabel || totalTime}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-white text-sm"
                        >
                          ms
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 text-white font-medium leading-none text-center">
          Time took to bounce request client to POP & back.
        </div>
        <div className="leading-none text-muted-foreground text-center">
          Coldstarts may affect the time, give it couple of goes.
        </div>
      </CardFooter>
    </Card>
  )
}
