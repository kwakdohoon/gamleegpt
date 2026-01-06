import { Link } from "react-router-dom";
import { 
  HardHat, 
  FileText, 
  Bot, 
  ShieldCheck, 
  Clock, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Building2,
  Users,
  FileSearch
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/Footer";

const features = [
  {
    icon: Bot,
    title: "AI 기반 문서 질의응답",
    description: "도면, 시방서, 법규 등 현장 문서를 기반으로 즉시 답변을 받으세요. 근거 문서까지 함께 제공됩니다."
  },
  {
    icon: FileText,
    title: "자동 문서 생성",
    description: "감리일지, 회의록, 시정조치요구서를 AI가 초안을 작성합니다. 수정만 하면 끝."
  },
  {
    icon: ShieldCheck,
    title: "리스크 관리",
    description: "안전, 품질, 공정 리스크를 한눈에 파악하고 우선순위에 따라 관리하세요."
  },
  {
    icon: Clock,
    title: "업무 시간 단축",
    description: "반복적인 문서 작업 시간을 80% 이상 줄여 핵심 업무에 집중할 수 있습니다."
  },
  {
    icon: FileSearch,
    title: "문서 통합 검색",
    description: "수천 페이지의 문서에서 필요한 정보를 몇 초 만에 찾아드립니다."
  },
  {
    icon: TrendingUp,
    title: "실시간 현황 대시보드",
    description: "현장별 진행률, 이슈, 일정을 실시간으로 모니터링하세요."
  }
];

const stats = [
  { value: "80%", label: "문서 작성 시간 단축" },
  { value: "24/7", label: "AI 어시스턴트 지원" },
  { value: "100+", label: "건설 법규 학습 완료" },
  { value: "99.9%", label: "서비스 가용성" }
];

const benefits = [
  "현장별 맞춤 AI 학습",
  "공문/현장 톤 자동 변환",
  "근거 문서 자동 인용",
  "감사 로그 자동 기록",
  "모바일 최적화",
  "팀 협업 기능"
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <HardHat className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">감리GPT</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">기능</a>
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">장점</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">요금제</a>
            <Link to="/admin" className="text-sm text-muted-foreground hover:text-foreground transition-colors">관리자</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="outline" size="sm">로그인</Button>
            </Link>
            <Link to="/">
              <Button size="sm">무료 체험</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-info/10 text-info text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            건설 감리 전문 AI
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            감리 업무를<br />
            <span className="text-info">AI와 함께</span> 더 빠르게
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            현장 문서 기반 질의응답, 감리일지 자동 생성, 이슈 관리까지.
            <br />
            감리GPT가 당신의 업무 시간을 획기적으로 줄여드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button size="lg" className="gap-2 px-8">
                지금 시작하기
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="gap-2">
              <FileText className="w-4 h-4" />
              도입 문의
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">핵심 기능</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              감리GPT는 건설 감리 업무에 최적화된 AI 기능을 제공합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-info/10 flex items-center justify-center mb-4 group-hover:bg-info/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-info" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                왜 감리GPT인가요?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                감리GPT는 단순한 챗봇이 아닙니다. 건설 감리 도메인에 특화된 AI로, 
                현장 문서를 학습하여 정확한 근거와 함께 답변합니다. 
                공공기관과 건설사의 실제 업무 프로세스에 맞춰 설계되었습니다.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-info" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">현장 맞춤 학습</h4>
                    <p className="text-sm text-muted-foreground">각 현장의 도면, 시방서, 계약서를 업로드하면 AI가 학습합니다</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">팀 협업</h4>
                    <p className="text-sm text-muted-foreground">감리원, 감리단장, 발주처가 함께 사용하며 히스토리 공유</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-warning-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">보안 및 감사</h4>
                    <p className="text-sm text-muted-foreground">모든 AI 답변과 문서 접근 기록이 자동으로 저장됩니다</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">요금제</h2>
            <p className="text-muted-foreground">프로젝트 규모에 맞는 요금제를 선택하세요</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">스타터</h3>
              <p className="text-muted-foreground text-sm mb-4">소규모 현장용</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">₩99,000</span>
                <span className="text-muted-foreground text-sm">/월</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>현장 1개</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>사용자 3명</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>AI 질의 100회/월</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">시작하기</Button>
            </div>

            {/* Pro */}
            <div className="p-6 bg-primary text-primary-foreground rounded-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-info text-info-foreground text-xs font-medium px-3 py-1 rounded-full">
                인기
              </div>
              <h3 className="text-lg font-semibold mb-2">프로</h3>
              <p className="text-primary-foreground/70 text-sm mb-4">성장하는 감리단</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">₩299,000</span>
                <span className="text-primary-foreground/70 text-sm">/월</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>현장 5개</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>사용자 15명</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>AI 질의 무제한</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>우선 지원</span>
                </li>
              </ul>
              <Button variant="secondary" className="w-full">시작하기</Button>
            </div>

            {/* Enterprise */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">엔터프라이즈</h3>
              <p className="text-muted-foreground text-sm mb-4">대형 건설사/공공기관</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">맞춤</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>현장 무제한</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>사용자 무제한</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>온프레미스 설치</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>전담 매니저</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">문의하기</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            14일 무료 체험으로 감리GPT의 모든 기능을 경험해보세요.
            <br />
            신용카드 없이 시작할 수 있습니다.
          </p>
          <Link to="/">
            <Button size="lg" className="gap-2 px-8">
              무료 체험 시작
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
