import { FileEdit, Camera, AlertOctagon, ClipboardCheck, MessageSquare, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  { icon: FileEdit, label: "감리일지 작성", href: "/work", color: "bg-info/10 text-info" },
  { icon: Camera, label: "사진 업로드", href: "/work", color: "bg-success/10 text-success" },
  { icon: AlertOctagon, label: "이슈 등록", href: "/work", color: "bg-destructive/10 text-destructive" },
  { icon: ClipboardCheck, label: "체크리스트", href: "/work", color: "bg-warning/10 text-warning-foreground" },
  { icon: MessageSquare, label: "AI 질의", href: "/ai-assistant", color: "bg-primary/10 text-primary" },
  { icon: FileText, label: "보고서 생성", href: "/reports", color: "bg-muted text-muted-foreground" },
];

export function QuickActions() {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-semibold text-foreground">빠른 실행</h3>
      </div>
      <div className="p-4 grid grid-cols-3 gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            to={action.href}
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <div className={`p-3 rounded-lg ${action.color} group-hover:scale-110 transition-transform`}>
              <action.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground text-center">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
