import { AlertTriangle, ShieldAlert, Clock } from "lucide-react";

interface RiskItem {
  id: string;
  category: "safety" | "quality" | "schedule";
  title: string;
  level: "high" | "medium";
  location: string;
}

const risks: RiskItem[] = [
  { 
    id: "1", 
    category: "safety", 
    title: "고소작업 안전난간 미설치", 
    level: "high",
    location: "B동 5층" 
  },
  { 
    id: "2", 
    category: "quality", 
    title: "철근 간격 시방서 미달", 
    level: "high",
    location: "A동 3층" 
  },
  { 
    id: "3", 
    category: "schedule", 
    title: "콘크리트 양생 기간 부족 우려", 
    level: "medium",
    location: "C동 지하1층" 
  },
];

export function RiskList() {
  const categoryIcons = {
    safety: ShieldAlert,
    quality: AlertTriangle,
    schedule: Clock,
  };

  const categoryLabels = {
    safety: "안전",
    quality: "품질",
    schedule: "공정",
  };

  const categoryStyles = {
    safety: "text-destructive bg-destructive/10",
    quality: "text-warning-foreground bg-warning/10",
    schedule: "text-info bg-info/10",
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-sm">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-semibold text-foreground">이번 주 리스크 TOP 3</h3>
      </div>
      <ul className="divide-y divide-border">
        {risks.map((risk) => {
          const Icon = categoryIcons[risk.category];
          return (
            <li key={risk.id} className="px-5 py-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${categoryStyles[risk.category]}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${categoryStyles[risk.category]}`}>
                      {categoryLabels[risk.category]}
                    </span>
                    {risk.level === "high" && (
                      <span className="text-xs px-2 py-0.5 rounded bg-destructive/10 text-destructive font-medium">
                        고위험
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-foreground truncate">{risk.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{risk.location}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
