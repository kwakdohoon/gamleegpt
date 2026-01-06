import { User, Shield, Bot, FileText, Bell } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">시스템 및 사용자 설정</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList className="bg-muted p-1">
            <TabsTrigger value="profile" className="data-[state=active]:bg-card">
              <User className="w-4 h-4 mr-2" />
              프로필
            </TabsTrigger>
            <TabsTrigger value="permissions" className="data-[state=active]:bg-card">
              <Shield className="w-4 h-4 mr-2" />
              권한
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-card">
              <Bot className="w-4 h-4 mr-2" />
              AI 설정
            </TabsTrigger>
            <TabsTrigger value="templates" className="data-[state=active]:bg-card">
              <FileText className="w-4 h-4 mr-2" />
              템플릿
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-card">
              <Bell className="w-4 h-4 mr-2" />
              알림
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4">
            <div className="bg-card rounded-lg border border-border shadow-sm p-6 max-w-2xl">
              <h3 className="font-semibold text-foreground mb-4">사용자 정보</h3>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <Button variant="outline" size="sm">프로필 사진 변경</Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">이름</label>
                    <input 
                      type="text"
                      defaultValue="김건설"
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">직책</label>
                    <input 
                      type="text"
                      defaultValue="감리단장"
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">이메일</label>
                  <input 
                    type="email"
                    defaultValue="kim@example.com"
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">연락처</label>
                  <input 
                    type="tel"
                    defaultValue="010-1234-5678"
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background"
                  />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  저장
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Permissions Tab */}
          <TabsContent value="permissions" className="space-y-4">
            <div className="bg-card rounded-lg border border-border shadow-sm p-6 max-w-2xl">
              <h3 className="font-semibold text-foreground mb-4">권한 관리</h3>
              
              <div className="space-y-3">
                {[
                  { role: "Admin", desc: "모든 기능 접근 가능", count: 1 },
                  { role: "Manager", desc: "보고서 작성 및 이슈 관리", count: 3 },
                  { role: "Viewer", desc: "읽기 전용 접근", count: 5 },
                ].map((item) => (
                  <div key={item.role} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div>
                      <h4 className="font-medium text-foreground">{item.role}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">{item.count}명</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-4">
                + 사용자 초대
              </Button>
            </div>
          </TabsContent>

          {/* AI Settings Tab */}
          <TabsContent value="ai" className="space-y-4">
            <div className="bg-card rounded-lg border border-border shadow-sm p-6 max-w-2xl">
              <h3 className="font-semibold text-foreground mb-4">AI 모델 설정</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">기본 AI 모델</label>
                  <select className="w-full px-3 py-2 rounded-lg border border-input bg-background">
                    <option>GPT-4o</option>
                    <option>GPT-4 Turbo</option>
                    <option>Gemini Pro</option>
                    <option>Claude 3</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">출력 톤 기본값</label>
                  <div className="flex gap-2">
                    {["공문체", "현장 톤", "간결체"].map((tone) => (
                      <button
                        key={tone}
                        className="px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm"
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">응답 언어</label>
                  <select className="w-full px-3 py-2 rounded-lg border border-input bg-background">
                    <option>한국어</option>
                    <option>English</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  저장
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates" className="space-y-4">
            <div className="bg-card rounded-lg border border-border shadow-sm p-6 max-w-2xl">
              <h3 className="font-semibold text-foreground mb-4">문서 템플릿</h3>
              
              <div className="space-y-3">
                {[
                  { name: "감리일지 양식", type: "일지", updated: "2024-01-10" },
                  { name: "시정조치요구서", type: "공문", updated: "2024-01-08" },
                  { name: "주간보고서 양식", type: "보고서", updated: "2024-01-05" },
                  { name: "회의록 양식", type: "회의록", updated: "2024-01-03" },
                ].map((template) => (
                  <div key={template.name} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium text-foreground">{template.name}</h4>
                        <p className="text-sm text-muted-foreground">{template.type} · {template.updated}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">편집</Button>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-4">
                + 새 템플릿 추가
              </Button>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-4">
            <div className="bg-card rounded-lg border border-border shadow-sm p-6 max-w-2xl">
              <h3 className="font-semibold text-foreground mb-4">알림 설정</h3>
              
              <div className="space-y-4">
                {[
                  { label: "이슈 등록 알림", desc: "새로운 이슈가 등록되면 알림을 받습니다" },
                  { label: "시정조치 마감 알림", desc: "시정조치 마감일 1일 전 알림" },
                  { label: "일지 미작성 알림", desc: "오후 5시까지 일지 미작성 시 알림" },
                  { label: "보고서 생성 완료", desc: "AI 보고서 생성 완료 시 알림" },
                ].map((notification) => (
                  <div key={notification.label} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div>
                      <h4 className="font-medium text-foreground">{notification.label}</h4>
                      <p className="text-sm text-muted-foreground">{notification.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-card after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Settings;
