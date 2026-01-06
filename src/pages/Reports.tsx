import { FileText, Download, Eye, Calendar } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

interface Report {
  id: string;
  type: "weekly" | "monthly" | "meeting";
  title: string;
  period: string;
  createdAt: string;
  status: "draft" | "complete";
}

const reports: Report[] = [
  {
    id: "1",
    type: "weekly",
    title: "2024년 2주차 주간감리보고서",
    period: "2024.01.08 ~ 2024.01.14",
    createdAt: "2024-01-14",
    status: "complete",
  },
  {
    id: "2",
    type: "weekly",
    title: "2024년 1주차 주간감리보고서",
    period: "2024.01.01 ~ 2024.01.07",
    createdAt: "2024-01-07",
    status: "complete",
  },
  {
    id: "3",
    type: "meeting",
    title: "정기현장회의록 (1월)",
    period: "2024.01.10",
    createdAt: "2024-01-10",
    status: "complete",
  },
  {
    id: "4",
    type: "monthly",
    title: "12월 월간감리보고서",
    period: "2023.12.01 ~ 2023.12.31",
    createdAt: "2024-01-02",
    status: "complete",
  },
];

const Reports = () => {
  const typeLabels = {
    weekly: "주간보고",
    monthly: "월간보고",
    meeting: "회의록",
  };

  const typeStyles = {
    weekly: "bg-info/10 text-info",
    monthly: "bg-primary/10 text-primary",
    meeting: "bg-success/10 text-success",
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground mt-1">주간/월간 보고서 및 회의록 관리</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              기간 선택
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              + 보고서 생성
            </Button>
          </div>
        </div>

        {/* Report Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card rounded-lg border border-border p-5 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-info/10">
                <FileText className="w-5 h-5 text-info" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">주간보고서</h3>
                <p className="text-xs text-muted-foreground">자동 생성</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">금주 감리일지 기반으로 주간보고서를 자동 생성합니다.</p>
            <Button variant="outline" size="sm" className="mt-3 w-full">
              생성하기
            </Button>
          </div>

          <div className="bg-card rounded-lg border border-border p-5 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">월간보고서</h3>
                <p className="text-xs text-muted-foreground">자동 생성</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">월간 감리 실적을 종합하여 보고서를 생성합니다.</p>
            <Button variant="outline" size="sm" className="mt-3 w-full">
              생성하기
            </Button>
          </div>

          <div className="bg-card rounded-lg border border-border p-5 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-success/10">
                <FileText className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">회의록</h3>
                <p className="text-xs text-muted-foreground">자동 생성</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">회의 내용을 입력하면 표준 양식으로 정리합니다.</p>
            <Button variant="outline" size="sm" className="mt-3 w-full">
              생성하기
            </Button>
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-card rounded-lg border border-border shadow-sm">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="font-semibold text-foreground">최근 보고서</h3>
          </div>
          
          <div className="divide-y divide-border">
            {reports.map((report) => (
              <div key={report.id} className="px-5 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-muted">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-0.5 rounded font-medium ${typeStyles[report.type]}`}>
                        {typeLabels[report.type]}
                      </span>
                      <h4 className="font-medium text-foreground">{report.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{report.period}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{report.createdAt}</span>
                  <Button variant="ghost" size="icon">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reports;
