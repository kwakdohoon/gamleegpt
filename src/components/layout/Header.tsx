import { Building2, ChevronDown, Bell, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const sites = [
  { id: "1", name: "서울역 복합환승센터", status: "진행중" },
  { id: "2", name: "강남 오피스타워 신축", status: "진행중" },
  { id: "3", name: "인천 물류센터 증축", status: "주의" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between h-16 px-6 bg-card border-b border-border">
      {/* Site Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 text-foreground hover:bg-muted">
            <Building2 className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">서울역 복합환승센터</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64">
          {sites.map((site) => (
            <DropdownMenuItem key={site.id} className="flex items-center justify-between py-2">
              <span>{site.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded ${
                site.status === "주의" 
                  ? "bg-warning/10 text-warning-foreground" 
                  : "bg-success/10 text-success"
              }`}>
                {site.status}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <User className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">김건설</p>
                <p className="text-xs text-muted-foreground">감리단장</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>프로필 설정</DropdownMenuItem>
            <DropdownMenuItem>로그아웃</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
