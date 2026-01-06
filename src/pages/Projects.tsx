import { Building2, MapPin, Calendar, Users, ChevronRight } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  name: string;
  client: string;
  contractor: string;
  status: "정상" | "주의" | "위험";
  location: string;
  lastUpdated: string;
  progress: number;
}

const projects: Project[] = [
  {
    id: "1",
    name: "서울역 복합환승센터",
    client: "서울시",
    contractor: "삼성건설",
    status: "정상",
    location: "서울특별시 용산구",
    lastUpdated: "2024-01-15",
    progress: 68,
  },
  {
    id: "2",
    name: "강남 오피스타워 신축",
    client: "강남개발",
    contractor: "현대건설",
    status: "주의",
    location: "서울특별시 강남구",
    lastUpdated: "2024-01-14",
    progress: 45,
  },
  {
    id: "3",
    name: "인천 물류센터 증축",
    client: "인천항만공사",
    contractor: "대림건설",
    status: "위험",
    location: "인천광역시 중구",
    lastUpdated: "2024-01-13",
    progress: 32,
  },
  {
    id: "4",
    name: "부산 해운대 리조트",
    client: "부산관광공사",
    contractor: "포스코건설",
    status: "정상",
    location: "부산광역시 해운대구",
    lastUpdated: "2024-01-12",
    progress: 85,
  },
];

const Projects = () => {
  const getStatusStyles = (status: Project["status"]) => {
    switch (status) {
      case "정상":
        return "bg-success/10 text-success";
      case "주의":
        return "bg-warning/10 text-warning-foreground";
      case "위험":
        return "bg-destructive/10 text-destructive";
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground mt-1">현장 목록 및 관리</p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            + 새 현장 등록
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                  <span className={cn(
                    "text-xs px-2.5 py-1 rounded-full font-medium",
                    getStatusStyles(project.status)
                  )}>
                    {project.status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="text-muted-foreground">공정률</span>
                    <span className="font-medium text-foreground">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">발주처</p>
                    <p className="font-medium text-foreground">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">시공사</p>
                    <p className="font-medium text-foreground">{project.contractor}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    최근 업데이트: {project.lastUpdated}
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
