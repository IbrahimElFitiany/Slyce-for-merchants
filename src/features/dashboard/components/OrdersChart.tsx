import { MoonLoader } from "react-spinners";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

interface OrdersChartProps {
  dataPoints:{label:string,orders:number}[];
  isLoading:boolean;
}

function OrdersChart({dataPoints, isLoading}:OrdersChartProps) {

  if (isLoading) {
    return (
      <div className="flex h-[280px] w-full items-center justify-center">
        <MoonLoader size={40} color="#4CB050" />
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%"  height={280} style={{outline: "none"}}>

      <BarChart data={dataPoints} margin={{ top: 30, right: 10, left: -30, bottom: 5 }}>

        <CartesianGrid vertical={true} horizontal={false} stroke="#e5e7eb"/>

        <XAxis
          dataKey="label"
          tick={{ fontSize: 11, fill: "#9ca3af", angle: -45, textAnchor: "end" }}
          tickLine={false}
          axisLine={false}
          interval={0}
        />

        <YAxis
          tick={{ fontSize: 11, fill: "#9ca3af" }}
          tickLine={false}
          axisLine={false}
          allowDecimals={false}
          domain={[0, (dataMax: number) => Math.max(Math.ceil(dataMax * 1.17), 5)]}
          tickCount={8}
        />

        <Tooltip
          cursor={{ fill: "rgba(0,0,0,0.04)" }}
          contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb" }}
        />

        <Bar
          dataKey="orders"
          fill="var(--color-accent)"
          radius={[2, 2, 0, 0]}
          animationDuration={350}
        />

      </BarChart>

    </ResponsiveContainer>
  );
}

export default OrdersChart