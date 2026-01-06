import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
  };
  variant?: "default" | "danger" | "warning" | "success" | "info";
}

export function StatCard({ title, value, icon: Icon, trend, variant = "default" }: StatCardProps) {
  const variantStyles = {
    default: "bg-card",
    danger: "bg-card border-l-4 border-l-destructive",
    warning: "bg-card border-l-4 border-l-warning",
    success: "bg-card border-l-4 border-l-success",
    info: "bg-card border-l-4 border-l-info",
  };

  const iconStyles = {
    default: "bg-muted text-muted-foreground",
    danger: "bg-destructive/10 text-destructive",
    warning: "bg-warning/10 text-warning-foreground",
    success: "bg-success/10 text-success",
    info: "bg-info/10 text-info",
  };

  return (
    <div className={cn(
      "rounded-lg border border-border p-5 shadow-sm animate-fade-in",
      variantStyles[variant]
    )}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-2 text-3xl font-bold text-foreground">{value}</p>
          {trend && (
            <p className="mt-1 text-xs text-muted-foreground">
              {trend.label}
            </p>
          )}
        </div>
        <div className={cn("p-3 rounded-lg", iconStyles[variant])}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
