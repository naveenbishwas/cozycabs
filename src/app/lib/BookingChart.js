"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function BookingChart({ data }) {
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D80117" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#D80117" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" opacity={0.15} />

          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />

          <Tooltip
            contentStyle={{
              background: "#111",
              border: "1px solid #333",
              borderRadius: "8px",
              color: "#fff",
            }}
            labelStyle={{ color: "#aaa" }}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#D80117"
            strokeWidth={2}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="bookings"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="url(#colorBookings)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
