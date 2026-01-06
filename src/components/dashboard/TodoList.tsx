import { Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TodoItem {
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
}

const todos: TodoItem[] = [
  { id: "1", title: "A동 3층 철근배근 검측", priority: "high", completed: false },
  { id: "2", title: "금일 감리일지 작성", priority: "high", completed: false },
  { id: "3", title: "시정조치 D-01 현장 확인", priority: "medium", completed: false },
  { id: "4", title: "주간회의 참석 (14:00)", priority: "medium", completed: true },
  { id: "5", title: "콘크리트 타설 입회", priority: "low", completed: false },
];

export function TodoList() {
  const priorityStyles = {
    high: "bg-destructive/10 text-destructive",
    medium: "bg-warning/10 text-warning-foreground",
    low: "bg-muted text-muted-foreground",
  };

  const priorityLabels = {
    high: "긴급",
    medium: "보통",
    low: "일반",
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-sm">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-semibold text-foreground">오늘의 할 일</h3>
      </div>
      <ul className="divide-y divide-border">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-3 px-5 py-3 hover:bg-muted/50 transition-colors">
            <button className={cn(
              "flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
              todo.completed 
                ? "bg-success border-success" 
                : "border-muted-foreground/40 hover:border-primary"
            )}>
              {todo.completed && <Check className="w-3 h-3 text-success-foreground" />}
            </button>
            <span className={cn(
              "flex-1 text-sm",
              todo.completed && "line-through text-muted-foreground"
            )}>
              {todo.title}
            </span>
            <span className={cn(
              "text-xs px-2 py-0.5 rounded-full font-medium",
              priorityStyles[todo.priority]
            )}>
              {priorityLabels[todo.priority]}
            </span>
          </li>
        ))}
      </ul>
      <div className="px-5 py-3 border-t border-border">
        <button className="text-sm text-info hover:underline font-medium">
          + 새 할 일 추가
        </button>
      </div>
    </div>
  );
}
