import { FileWarning, AlertCircle, Clock, ShieldAlert } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { TodoList } from "@/components/dashboard/TodoList";
import { RiskList } from "@/components/dashboard/RiskList";
import { RecentPhotos } from "@/components/dashboard/RecentPhotos";
import { WeeklyChart } from "@/components/dashboard/WeeklyChart";
import { ProjectProgress } from "@/components/dashboard/ProjectProgress";
import { NotificationList } from "@/components/dashboard/NotificationList";
import { QuickActions } from "@/components/dashboard/QuickActions";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">오늘의 현장 현황을 한눈에 확인하세요</p>
          </div>
          <div className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString("ko-KR", { 
              year: "numeric", 
              month: "long", 
              day: "numeric",
              weekday: "long"
            })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="미작성 감리일지"
            value={2}
            icon={FileWarning}
            variant="warning"
            trend={{ value: 2, label: "오늘 작성 필요" }}
          />
          <StatCard
            title="미확인 이슈"
            value={5}
            icon={AlertCircle}
            variant="danger"
            trend={{ value: 3, label: "신규 등록" }}
          />
          <StatCard
            title="시정조치 진행중"
            value={8}
            icon={Clock}
            variant="info"
            trend={{ value: 2, label: "금주 마감 예정" }}
          />
          <StatCard
            title="고위험 리스크"
            value={3}
            icon={ShieldAlert}
            variant="danger"
            trend={{ value: 1, label: "즉시 조치 필요" }}
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Main Content Grid - Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <TodoList />
          </div>
          <div className="lg:col-span-2">
            <RiskList />
          </div>
        </div>

        {/* Main Content Grid - Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WeeklyChart />
          <ProjectProgress />
        </div>

        {/* Main Content Grid - Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentPhotos />
          </div>
          <div className="lg:col-span-1">
            <NotificationList />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
