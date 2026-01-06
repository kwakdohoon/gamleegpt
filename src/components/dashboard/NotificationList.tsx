import { Bell, AlertTriangle, CheckCircle, Info, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  type: "warning" | "success" | "info" | "urgent";
  message: string;
  time: string;
  read: boolean;
}

const notifications: Notification[] = [
  { id: "1", type: "urgent", message: "B동 5층 안전난간 미설치 - 즉시 조치 필요", time: "10분 전", read: false },
  { id: "2", type: "warning", message: "금일 감리일지 미작성 현장 2곳", time: "30분 전", read: false },
  { id: "3", type: "success", message: "A동 철근배근 검측 완료", time: "1시간 전", read: true },
  { id: "4", type: "info", message: "주간보고서가 자동 생성되었습니다", time: "2시간 전", read: true },
  { id: "5", type: "warning", message: "시정조치 D-02 마감일 임박 (D-3)", time: "3시간 전", read: true },
];

const typeStyles = {
  urgent: { icon: AlertTriangle, bg: "bg-destructive/10", text: "text-destructive" },
  warning: { icon: Clock, bg: "bg-warning/10", text: "text-warning-foreground" },
  success: { icon: CheckCircle, bg: "bg-success/10", text: "text-success" },
  info: { icon: Info, bg: "bg-info/10", text: "text-info" },
};

export function NotificationList() {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <h3 className="font-semibold text-foreground">알림</h3>
        </div>
        <span className="text-xs text-info cursor-pointer hover:underline">모두 읽음 처리</span>
      </div>
      <ul className="divide-y divide-border max-h-80 overflow-y-auto">
        {notifications.map((notification) => {
          const { icon: Icon, bg, text } = typeStyles[notification.type];
          return (
            <li 
              key={notification.id} 
              className={cn(
                "flex items-start gap-3 px-5 py-3 hover:bg-muted/50 transition-colors cursor-pointer",
                !notification.read && "bg-info/5"
              )}
            >
              <div className={cn("p-2 rounded-lg flex-shrink-0", bg)}>
                <Icon className={cn("w-4 h-4", text)} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn("text-sm", !notification.read ? "font-medium text-foreground" : "text-muted-foreground")}>
                  {notification.message}
                </p>
                <span className="text-xs text-muted-foreground">{notification.time}</span>
              </div>
              {!notification.read && (
                <div className="w-2 h-2 rounded-full bg-info flex-shrink-0 mt-2" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
