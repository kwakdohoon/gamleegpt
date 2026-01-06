import { Progress } from "@/components/ui/progress";

interface ProjectItem {
  id: string;
  name: string;
  progress: number;
  status: "normal" | "warning" | "danger";
  dueDate: string;
}

const projects: ProjectItem[] = [
  { id: "1", name: "송파 힐스테이트 신축공사", progress: 68, status: "normal", dueDate: "2025.12" },
  { id: "2", name: "강남 오피스텔 리모델링", progress: 45, status: "warning", dueDate: "2025.08" },
  { id: "3", name: "판교 물류센터 건설", progress: 82, status: "normal", dueDate: "2025.06" },
  { id: "4", name: "인천 공동주택 2단지", progress: 23, status: "danger", dueDate: "2026.03" },
];

const statusStyles = {
  normal: "bg-success",
  warning: "bg-warning",
  danger: "bg-destructive",
};

const statusLabels = {
  normal: "정상",
  warning: "주의",
  danger: "위험",
};

export function ProjectProgress() {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-semibold text-foreground">현장별 진행률</h3>
      </div>
      <ul className="divide-y divide-border">
        {projects.map((project) => (
          <li key={project.id} className="px-5 py-4 hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground truncate mr-2">{project.name}</span>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`text-xs px-2 py-0.5 rounded-full text-white ${statusStyles[project.status]}`}>
                  {statusLabels[project.status]}
                </span>
                <span className="text-xs text-muted-foreground">{project.dueDate}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Progress value={project.progress} className="flex-1 h-2" />
              <span className="text-sm font-medium text-muted-foreground w-12 text-right">{project.progress}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
