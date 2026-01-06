import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HardHat,
  LayoutDashboard,
  Bot,
  FileText,
  Users,
  CreditCard,
  Coins,
  Settings,
  ChevronLeft,
  ChevronRight,
  Shield,
  Database,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Upload,
  Trash2,
  Edit,
  Eye,
  Search,
  Filter,
  MoreVertical,
  FileUp,
  BookOpen,
  Scale,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const adminMenuItems = [
  { title: "대시보드", id: "dashboard", icon: LayoutDashboard },
  { title: "AI 관리", id: "ai", icon: Bot },
  { title: "문서 관리", id: "documents", icon: FileText },
  { title: "회원 관리", id: "members", icon: Users },
  { title: "결제 관리", id: "payments", icon: CreditCard },
  { title: "API 비용", id: "api-costs", icon: Coins },
  { title: "설정", id: "settings", icon: Settings },
];

// Mock Data
const documents = [
  { id: 1, name: "건축법 시행령", type: "법률", category: "건축", status: "active", updatedAt: "2025-01-05", size: "2.4MB" },
  { id: 2, name: "건설기술진흥법", type: "법률", category: "건설", status: "active", updatedAt: "2025-01-04", size: "1.8MB" },
  { id: 3, name: "콘크리트 표준시방서", type: "시방서", category: "토목", status: "active", updatedAt: "2025-01-03", size: "15.2MB" },
  { id: 4, name: "철근콘크리트 구조기준", type: "기준", category: "구조", status: "pending", updatedAt: "2025-01-02", size: "8.7MB" },
  { id: 5, name: "감리업무 수행지침", type: "지침", category: "감리", status: "active", updatedAt: "2025-01-01", size: "3.1MB" },
];

const members = [
  { id: 1, name: "김감리", email: "kim@example.com", role: "감리원", plan: "프로", status: "active", lastLogin: "2025-01-06 09:30" },
  { id: 2, name: "이단장", email: "lee@example.com", role: "감리단장", plan: "엔터프라이즈", status: "active", lastLogin: "2025-01-06 08:15" },
  { id: 3, name: "박발주", email: "park@example.com", role: "발주처", plan: "스타터", status: "active", lastLogin: "2025-01-05 16:45" },
  { id: 4, name: "최품질", email: "choi@example.com", role: "품질담당", plan: "프로", status: "inactive", lastLogin: "2024-12-20 11:00" },
];

const payments = [
  { id: 1, user: "김감리", plan: "프로", amount: 299000, status: "completed", date: "2025-01-01", method: "카드" },
  { id: 2, user: "이단장", plan: "엔터프라이즈", amount: 990000, status: "completed", date: "2025-01-01", method: "계좌이체" },
  { id: 3, user: "박발주", plan: "스타터", amount: 99000, status: "pending", date: "2025-01-05", method: "카드" },
  { id: 4, user: "정공정", plan: "프로", amount: 299000, status: "failed", date: "2025-01-04", method: "카드" },
];

const apiUsage = [
  { model: "GPT-4o", requests: 15420, tokens: 4850000, cost: 145500, trend: 12 },
  { model: "Gemini 2.5 Flash", requests: 8930, tokens: 2150000, cost: 43000, trend: -5 },
  { model: "GPT-4o-mini", requests: 42100, tokens: 12500000, cost: 62500, trend: 28 },
];

export default function Admin() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return <AdminDashboard />;
      case "ai":
        return <AIManagement />;
      case "documents":
        return <DocumentManagement />;
      case "members":
        return <MemberManagement />;
      case "payments":
        return <PaymentManagement />;
      case "api-costs":
        return <APICostManagement />;
      case "settings":
        return <AdminSettings />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "flex flex-col bg-sidebar text-sidebar-foreground transition-all duration-300 h-screen sticky top-0",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex items-center gap-3 px-4 h-16 border-b border-sidebar-border">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sidebar-accent">
            <Shield className="w-5 h-5 text-sidebar-accent-foreground" />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold text-sidebar-primary">관리자</span>
          )}
        </div>

        <nav className="flex-1 py-4 px-2">
          <ul className="space-y-1">
            {adminMenuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveMenu(item.id)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors w-full text-left",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    activeMenu === item.id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "text-sidebar-foreground/80"
                  )}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span>{item.title}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-2 border-t border-sidebar-border">
          <Link
            to="/landing"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          >
            <HardHat className="w-5 h-5" />
            {!collapsed && <span className="text-sm">서비스로 이동</span>}
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center justify-center w-full py-2 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground/60 hover:text-sidebar-foreground mt-1"
          >
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 sticky top-0 z-10">
          <h1 className="text-lg font-semibold text-foreground">
            {adminMenuItems.find((m) => m.id === activeMenu)?.title}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">관리자</span>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-medium text-primary-foreground">A</span>
            </div>
          </div>
        </header>
        <main className="p-6">{renderContent()}</main>
      </div>
    </div>
  );
}

// Admin Dashboard
function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} title="총 회원" value="1,284" trend="+12%" positive />
        <StatCard icon={CreditCard} title="월 매출" value="₩48.5M" trend="+8.2%" positive />
        <StatCard icon={Bot} title="AI 요청" value="156.2K" trend="+23%" positive />
        <StatCard icon={FileText} title="학습 문서" value="847" trend="+5" positive />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg border border-border shadow-sm p-5">
          <h3 className="font-semibold text-foreground mb-4">최근 가입</h3>
          <div className="space-y-3">
            {members.slice(0, 3).map((member) => (
              <div key={member.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xs font-medium">{member.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.email}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-info/10 text-info">{member.plan}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border shadow-sm p-5">
          <h3 className="font-semibold text-foreground mb-4">API 사용량 요약</h3>
          <div className="space-y-4">
            {apiUsage.map((api) => (
              <div key={api.model}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-foreground">{api.model}</span>
                  <span className="text-sm font-medium text-foreground">₩{api.cost.toLocaleString()}</span>
                </div>
                <Progress value={(api.requests / 50000) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, title, value, trend, positive }: { icon: any; title: string; value: string; trend: string; positive: boolean }) {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm p-5">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-muted">
          <Icon className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className={cn("flex items-center gap-1 text-xs font-medium", positive ? "text-success" : "text-destructive")}>
          {positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {trend}
        </div>
      </div>
      <p className="mt-3 text-2xl font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  );
}

// AI Management
function AIManagement() {
  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg border border-border shadow-sm p-5">
        <h3 className="font-semibold text-foreground mb-4">AI 모델 설정</h3>
        <div className="grid gap-4">
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="font-medium text-foreground">GPT-4o</p>
                <p className="text-xs text-muted-foreground">OpenAI 최신 모델</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 rounded-full bg-success/10 text-success">활성</span>
              <Button variant="outline" size="sm">설정</Button>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-info" />
              </div>
              <div>
                <p className="font-medium text-foreground">Gemini 2.5 Flash</p>
                <p className="text-xs text-muted-foreground">Google AI</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 rounded-full bg-success/10 text-success">활성</span>
              <Button variant="outline" size="sm">설정</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border shadow-sm p-5">
        <h3 className="font-semibold text-foreground mb-4">시스템 프롬프트</h3>
        <textarea
          className="w-full h-32 p-3 bg-muted/50 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-info"
          placeholder="AI의 기본 행동 지침을 설정하세요..."
          defaultValue="당신은 건설 감리 전문 AI 어시스턴트입니다. 항상 근거 문서를 인용하며, 확실하지 않은 경우 '명확한 근거를 찾을 수 없습니다'라고 답변합니다."
        />
        <div className="flex justify-end mt-3">
          <Button size="sm">저장</Button>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border shadow-sm p-5">
        <h3 className="font-semibold text-foreground mb-4">학습 현황</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted/50 rounded-lg text-center">
            <Database className="w-6 h-6 text-info mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">847</p>
            <p className="text-xs text-muted-foreground">총 학습 문서</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg text-center">
            <TrendingUp className="w-6 h-6 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">2.4M</p>
            <p className="text-xs text-muted-foreground">학습된 토큰</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg text-center">
            <Clock className="w-6 h-6 text-warning-foreground mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">2시간 전</p>
            <p className="text-xs text-muted-foreground">마지막 동기화</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Document Management
function DocumentManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="문서 검색..." className="pl-9 w-64" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="타입" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="law">법률</SelectItem>
              <SelectItem value="spec">시방서</SelectItem>
              <SelectItem value="standard">기준</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="gap-2">
          <Upload className="w-4 h-4" />
          문서 업로드
        </Button>
      </div>

      <Tabs defaultValue="documents" className="w-full">
        <TabsList>
          <TabsTrigger value="documents" className="gap-2">
            <FileText className="w-4 h-4" />
            문서 목록
          </TabsTrigger>
          <TabsTrigger value="laws" className="gap-2">
            <Scale className="w-4 h-4" />
            법률/규정
          </TabsTrigger>
          <TabsTrigger value="standards" className="gap-2">
            <BookOpen className="w-4 h-4" />
            기준/지침
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="mt-4">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">문서명</th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">타입</th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">카테고리</th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">상태</th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">수정일</th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">용량</th>
                  <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">작업</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-muted/30">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-info" />
                        <span className="text-sm font-medium text-foreground">{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{doc.type}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{doc.category}</td>
                    <td className="px-4 py-3">
                      <span className={cn(
                        "text-xs px-2 py-1 rounded-full",
                        doc.status === "active" ? "bg-success/10 text-success" : "bg-warning/10 text-warning-foreground"
                      )}>
                        {doc.status === "active" ? "활성" : "대기"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{doc.updatedAt}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{doc.size}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="laws" className="mt-4">
          <div className="bg-card rounded-lg border border-border p-6 text-center text-muted-foreground">
            법률/규정 관리 화면
          </div>
        </TabsContent>

        <TabsContent value="standards" className="mt-4">
          <div className="bg-card rounded-lg border border-border p-6 text-center text-muted-foreground">
            기준/지침 관리 화면
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Member Management
function MemberManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="회원 검색..." className="pl-9 w-64" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="상태" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="active">활성</SelectItem>
              <SelectItem value="inactive">비활성</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="gap-2">
          <Users className="w-4 h-4" />
          회원 추가
        </Button>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">회원</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">역할</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">요금제</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">상태</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">마지막 로그인</th>
              <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">작업</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-muted/30">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-xs font-medium">{member.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{member.role}</td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-info/10 text-info">{member.plan}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={cn(
                    "text-xs px-2 py-1 rounded-full",
                    member.status === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                  )}>
                    {member.status === "active" ? "활성" : "비활성"}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{member.lastLogin}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Payment Management
function PaymentManagement() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg border border-border p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-success/10">
              <DollarSign className="w-5 h-5 text-success" />
            </div>
            <span className="text-sm text-muted-foreground">이번 달 매출</span>
          </div>
          <p className="text-2xl font-bold text-foreground">₩48,500,000</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-warning/10">
              <Clock className="w-5 h-5 text-warning-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">대기 중</span>
          </div>
          <p className="text-2xl font-bold text-foreground">₩1,890,000</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-destructive/10">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <span className="text-sm text-muted-foreground">실패</span>
          </div>
          <p className="text-2xl font-bold text-foreground">₩299,000</p>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h3 className="font-semibold text-foreground">결제 내역</h3>
        </div>
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">회원</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">요금제</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">금액</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">상태</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">결제일</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">결제수단</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-muted/30">
                <td className="px-4 py-3 text-sm font-medium text-foreground">{payment.user}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{payment.plan}</td>
                <td className="px-4 py-3 text-sm font-medium text-foreground">₩{payment.amount.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <span className={cn(
                    "text-xs px-2 py-1 rounded-full",
                    payment.status === "completed" ? "bg-success/10 text-success" :
                    payment.status === "pending" ? "bg-warning/10 text-warning-foreground" :
                    "bg-destructive/10 text-destructive"
                  )}>
                    {payment.status === "completed" ? "완료" : payment.status === "pending" ? "대기" : "실패"}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{payment.date}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{payment.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// API Cost Management
function APICostManagement() {
  const totalCost = apiUsage.reduce((sum, api) => sum + api.cost, 0);
  const totalRequests = apiUsage.reduce((sum, api) => sum + api.requests, 0);
  const totalTokens = apiUsage.reduce((sum, api) => sum + api.tokens, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border border-border p-5">
          <p className="text-sm text-muted-foreground mb-1">이번 달 예상 비용</p>
          <p className="text-2xl font-bold text-foreground">₩{totalCost.toLocaleString()}</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-5">
          <p className="text-sm text-muted-foreground mb-1">총 요청 수</p>
          <p className="text-2xl font-bold text-foreground">{totalRequests.toLocaleString()}</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-5">
          <p className="text-sm text-muted-foreground mb-1">사용 토큰</p>
          <p className="text-2xl font-bold text-foreground">{(totalTokens / 1000000).toFixed(1)}M</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-5">
          <p className="text-sm text-muted-foreground mb-1">평균 비용/요청</p>
          <p className="text-2xl font-bold text-foreground">₩{(totalCost / totalRequests).toFixed(1)}</p>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h3 className="font-semibold text-foreground">모델별 사용량</h3>
        </div>
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">모델</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">요청 수</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">토큰 사용량</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">비용</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">전월 대비</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {apiUsage.map((api) => (
              <tr key={api.model} className="hover:bg-muted/30">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-info" />
                    <span className="text-sm font-medium text-foreground">{api.model}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{api.requests.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{(api.tokens / 1000000).toFixed(2)}M</td>
                <td className="px-4 py-3 text-sm font-medium text-foreground">₩{api.cost.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <span className={cn(
                    "flex items-center gap-1 text-xs font-medium",
                    api.trend > 0 ? "text-destructive" : "text-success"
                  )}>
                    {api.trend > 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {Math.abs(api.trend)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-card rounded-lg border border-border p-5">
        <h3 className="font-semibold text-foreground mb-4">비용 예측</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">이번 주 예상</p>
            <p className="text-xl font-bold text-foreground">₩62,500</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">이번 달 예상</p>
            <p className="text-xl font-bold text-foreground">₩251,000</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">분기 예상</p>
            <p className="text-xl font-bold text-foreground">₩753,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Admin Settings
function AdminSettings() {
  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg border border-border p-5">
        <h3 className="font-semibold text-foreground mb-4">일반 설정</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">서비스명</label>
            <Input defaultValue="감리GPT" className="mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">관리자 이메일</label>
            <Input defaultValue="admin@royalbird.co.kr" className="mt-1" />
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-5">
        <h3 className="font-semibold text-foreground mb-4">API 키 관리</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">OpenAI API Key</label>
            <Input type="password" defaultValue="sk-xxxxxxxxxxxxxxxx" className="mt-1 font-mono" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Google AI API Key</label>
            <Input type="password" defaultValue="AIzaxxxxxxxxxxxxxxxx" className="mt-1 font-mono" />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button size="sm">저장</Button>
        </div>
      </div>
    </div>
  );
}
