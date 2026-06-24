import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { hour: "00:00", orders: 33 },
  { hour: "01:00", orders: 46 },
  { hour: "02:00", orders: 12 },
  { hour: "03:00", orders: 1 },
  { hour: "04:00", orders: 3 },
  { hour: "05:00", orders: 6 },
  { hour: "06:00", orders: 0 },
  { hour: "07:00", orders: 10 },
  { hour: "08:00", orders: 23 },
  { hour: "09:00", orders: 35 },
  { hour: "10:00", orders: 35 },
  { hour: "11:00", orders: 76 },
  { hour: "12:00", orders: 61 },
  { hour: "13:00", orders: 66 },
  { hour: "14:00", orders: 45 },
  { hour: "15:00", orders: 54 },
  { hour: "16:00", orders: 25 },
  { hour: "17:00", orders: 49 },
  { hour: "18:00", orders: 20 },
  { hour: "19:00", orders: 15 },
  { hour: "20:00", orders: 38 },
  { hour: "21:00", orders: 21 },
  { hour: "22:00", orders: 0 },
  { hour: "23:00", orders: 0 },
];

function OrdersChart() {

  return (
    <ResponsiveContainer width="100%"  height={280} style={{outline: "none"}}>
      <BarChart data={data} margin={{ top: 30, right: 10, left: -35, bottom: 5 }}>
        <CartesianGrid vertical={true} horizontal={false} stroke="#e5e7eb"/>
        <XAxis
          dataKey="hour"
          tick={{ fontSize: 11, fill: "#9ca3af", angle: -45, textAnchor: "end" }}
          tickLine={false}
          axisLine={false}
          interval={0}
        />
        <YAxis
          tick={{ fontSize: 11, fill: "#9ca3af" }}
          tickLine={false}
          axisLine={false}
          ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}
        />
        <Tooltip
          cursor={{ fill: "rgba(0,0,0,0.04)" }}
          contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb" }}
        />
        <Bar dataKey="orders" fill="#4CB050" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default OrdersChart