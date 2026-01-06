import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "월", 감리일지: 3, 시정조치: 2, 이슈: 1 },
  { name: "화", 감리일지: 2, 시정조치: 1, 이슈: 3 },
  { name: "수", 감리일지: 4, 시정조치: 3, 이슈: 2 },
  { name: "목", 감리일지: 3, 시정조치: 2, 이슈: 1 },
  { name: "금", 감리일지: 5, 시정조치: 4, 이슈: 2 },
  { name: "토", 감리일지: 1, 시정조치: 0, 이슈: 0 },
  { name: "일", 감리일지: 0, 시정조치: 0, 이슈: 0 },
];

export function WeeklyChart() {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-semibold text-foreground">주간 업무 현황</h3>
      </div>
      <div className="p-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }} 
              className="fill-muted-foreground"
            />
            <YAxis 
              tick={{ fontSize: 12 }} 
              className="fill-muted-foreground"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "12px"
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Bar dataKey="감리일지" fill="hsl(var(--info))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="시정조치" fill="hsl(var(--warning))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="이슈" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
