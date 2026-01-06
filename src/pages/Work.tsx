import { useState } from "react";
import { Calendar, Camera, Mic, Sparkles, ClipboardList, AlertTriangle } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const Work = () => {
  const [selectedProcess, setSelectedProcess] = useState("");
  const [memo, setMemo] = useState("");

  const processes = [
    "철근공사",
    "콘크리트공사",
    "거푸집공사",
    "방수공사",
    "조적공사",
    "미장공사",
  ];

  const checklistItems = [
    { id: "1", name: "철근 피복두께 확인", status: null as string | null },
    { id: "2", name: "철근 이음 및 정착길이 확인", status: null as string | null },
    { id: "3", name: "배근간격 확인", status: null as string | null },
    { id: "4", name: "스페이서 설치 상태", status: null as string | null },
    { id: "5", name: "철근 오염 여부", status: null as string | null },
  ];

  const [checklist, setChecklist] = useState(checklistItems);

  const updateChecklistStatus = (id: string, status: string) => {
    setChecklist(prev => 
      prev.map(item => item.id === id ? { ...item, status } : item)
    );
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Work</h1>
          <p className="text-muted-foreground mt-1">감리일지, 체크리스트, 이슈 관리</p>
        </div>

        <Tabs defaultValue="daily-log" className="space-y-4">
          <TabsList className="bg-muted p-1">
            <TabsTrigger value="daily-log" className="data-[state=active]:bg-card">
              <Calendar className="w-4 h-4 mr-2" />
              감리일지
            </TabsTrigger>
            <TabsTrigger value="checklist" className="data-[state=active]:bg-card">
              <ClipboardList className="w-4 h-4 mr-2" />
              체크리스트
            </TabsTrigger>
            <TabsTrigger value="issues" className="data-[state=active]:bg-card">
              <AlertTriangle className="w-4 h-4 mr-2" />
              이슈 등록
            </TabsTrigger>
          </TabsList>

          {/* Daily Log Tab */}
          <TabsContent value="daily-log" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Form */}
              <div className="bg-card rounded-lg border border-border shadow-sm p-5 space-y-4">
                <h3 className="font-semibold text-foreground">감리일지 작성</h3>
                
                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">날짜</label>
                  <input 
                    type="date" 
                    defaultValue={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground"
                  />
                </div>

                {/* Process Selection */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">공정 선택</label>
                  <select 
                    value={selectedProcess}
                    onChange={(e) => setSelectedProcess(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground"
                  >
                    <option value="">공정을 선택하세요</option>
                    {processes.map((process) => (
                      <option key={process} value={process}>{process}</option>
                    ))}
                  </select>
                </div>

                {/* Photo Upload */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">사진 업로드</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Camera className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">클릭하여 사진 업로드</p>
                    <p className="text-xs text-muted-foreground mt-1">또는 드래그 앤 드롭</p>
                  </div>
                </div>

                {/* Memo */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    현장 메모
                    <button className="ml-2 text-info hover:underline text-xs font-normal">
                      <Mic className="w-3 h-3 inline mr-0.5" />
                      음성 입력
                    </button>
                  </label>
                  <textarea
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    placeholder="현장 상황을 메모하세요..."
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground resize-none"
                  />
                </div>

                {/* AI Buttons */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <Button variant="outline" size="sm" className="text-primary border-primary/30 hover:bg-primary/10">
                    <Sparkles className="w-4 h-4 mr-1.5" />
                    일지 초안 생성
                  </Button>
                  <Button variant="outline" size="sm">
                    문장 더 단단하게
                  </Button>
                  <Button variant="outline" size="sm">
                    발주처 제출용 변환
                  </Button>
                </div>
              </div>

              {/* Generated Output */}
              <div className="bg-card rounded-lg border border-border shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">생성된 일지</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-info/10 text-info">AI 초안</span>
                </div>
                
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="font-medium text-foreground mb-2">■ 금일 시공 현황</p>
                    <p>입력된 내용을 기반으로 AI가 일지를 생성합니다.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="font-medium text-foreground mb-2">■ 문제점</p>
                    <p>-</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="font-medium text-foreground mb-2">■ 조치사항</p>
                    <p>-</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="font-medium text-foreground mb-2">■ 특이사항</p>
                    <p>-</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex gap-2">
                  <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    저장
                  </Button>
                  <Button variant="outline" className="flex-1">
                    PDF 다운로드
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Checklist Tab */}
          <TabsContent value="checklist" className="space-y-4">
            <div className="bg-card rounded-lg border border-border shadow-sm">
              <div className="p-5 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">검측 체크리스트</h3>
                  <select className="px-3 py-1.5 rounded-lg border border-input bg-background text-sm">
                    <option>철근공사</option>
                    <option>콘크리트공사</option>
                    <option>거푸집공사</option>
                  </select>
                </div>
              </div>
              
              <ul className="divide-y divide-border">
                {checklist.map((item) => (
                  <li key={item.id} className="px-5 py-4 flex items-center justify-between">
                    <span className="text-sm text-foreground">{item.name}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateChecklistStatus(item.id, "적합")}
                        className={cn(
                          "px-3 py-1 text-sm rounded-lg border transition-colors",
                          item.status === "적합"
                            ? "bg-success text-success-foreground border-success"
                            : "border-border hover:border-success hover:text-success"
                        )}
                      >
                        적합
                      </button>
                      <button
                        onClick={() => updateChecklistStatus(item.id, "미흡")}
                        className={cn(
                          "px-3 py-1 text-sm rounded-lg border transition-colors",
                          item.status === "미흡"
                            ? "bg-destructive text-destructive-foreground border-destructive"
                            : "border-border hover:border-destructive hover:text-destructive"
                        )}
                      >
                        미흡
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              {checklist.some(item => item.status === "미흡") && (
                <div className="p-5 border-t border-border bg-destructive/5">
                  <Button className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    시정조치요구서 생성
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Issues Tab */}
          <TabsContent value="issues" className="space-y-4">
            <div className="bg-card rounded-lg border border-border shadow-sm p-5 max-w-2xl">
              <h3 className="font-semibold text-foreground mb-4">이슈 등록</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">위치 (동/층)</label>
                    <input 
                      type="text"
                      placeholder="예: A동 3층"
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">공종</label>
                    <select className="w-full px-3 py-2 rounded-lg border border-input bg-background">
                      <option>철근공사</option>
                      <option>콘크리트공사</option>
                      <option>거푸집공사</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">심각도</label>
                  <div className="flex gap-2">
                    {["경미", "보통", "심각", "긴급"].map((level) => (
                      <button
                        key={level}
                        className={cn(
                          "px-4 py-2 rounded-lg border transition-colors text-sm",
                          level === "긴급" 
                            ? "border-destructive text-destructive hover:bg-destructive/10"
                            : level === "심각"
                            ? "border-warning text-warning-foreground hover:bg-warning/10"
                            : "border-border hover:border-primary hover:text-primary"
                        )}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">사진 업로드</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <Camera className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                    <p className="text-sm text-muted-foreground">클릭하여 사진 업로드</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">설명</label>
                  <textarea
                    placeholder="이슈 상황을 설명하세요..."
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background resize-none"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" className="text-primary border-primary/30 hover:bg-primary/10">
                    <Sparkles className="w-4 h-4 mr-1.5" />
                    AI 이슈 요약
                  </Button>
                  <Button variant="outline">
                    시정 요청 문구 생성
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    이슈 등록
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Work;
