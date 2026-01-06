import { useState } from "react";
import { Send, FileText, ExternalLink, Bot, User, Sparkles } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  citations?: Citation[];
}

interface Citation {
  id: string;
  documentName: string;
  page: number;
  excerpt: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "안녕하세요. 감리GPT입니다. 현장 문서를 기반으로 질문에 답변해 드립니다. 무엇을 도와드릴까요?",
  },
];

const sampleCitations: Citation[] = [
  {
    id: "c1",
    documentName: "건축공사 표준시방서",
    page: 245,
    excerpt: "콘크리트 양생 시 외기온도가 4°C 이하인 경우에는 한중콘크리트로 시공하여야 하며, 타설 후 최소 5일간 보온양생을 실시해야 한다.",
  },
  {
    id: "c2",
    documentName: "현장 특기시방서 (서울역)",
    page: 87,
    excerpt: "본 현장은 동절기 시공 시 양생온도를 10°C 이상으로 유지하고, 양생기간을 7일 이상으로 적용한다.",
  },
];

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [selectedCitations, setSelectedCitations] = useState<Citation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "네, 동절기 콘크리트 양생 기준에 대해 답변드리겠습니다.\n\n현장 특기시방서와 건축공사 표준시방서를 참조한 결과:\n\n1. **양생 온도**: 최소 10°C 이상 유지 필요\n2. **양생 기간**: 본 현장은 7일 이상 (표준은 5일)\n3. **보온 조치**: 보온양생 덮개 또는 가열 양생 필수\n\n현재 기상예보상 이번 주 최저기온이 -5°C까지 내려갈 예정이므로, 콘크리트 타설 전 보온 가설재 준비 상태를 확인하시기 바랍니다.",
        citations: sampleCitations,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setSelectedCitations(sampleCitations);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="h-[calc(100vh-8rem)] flex gap-6">
        {/* Chat Section */}
        <div className="flex-1 flex flex-col bg-card rounded-lg border border-border shadow-sm">
          {/* Chat Header */}
          <div className="px-5 py-4 border-b border-border flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">AI Assistant</h2>
              <p className="text-xs text-muted-foreground">현장 문서 기반 질의응답</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.role === "user" ? "flex-row-reverse" : ""
                )}
              >
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                  message.role === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                )}>
                  {message.role === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                </div>
                <div className={cn(
                  "max-w-[70%] rounded-lg px-4 py-3",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                )}>
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  {message.citations && message.citations.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <p className="text-xs opacity-70 mb-2">참조 문서 {message.citations.length}건</p>
                      <div className="flex flex-wrap gap-1">
                        {message.citations.map((citation) => (
                          <button
                            key={citation.id}
                            onClick={() => setSelectedCitations([citation])}
                            className="text-xs px-2 py-1 rounded bg-background/50 hover:bg-background transition-colors"
                          >
                            📄 {citation.documentName}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-muted-foreground animate-pulse" />
                </div>
                <div className="bg-muted rounded-lg px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="이 현장 도면 기준으로 이 시공 허용되나요?"
                className="flex-1 px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              💡 팁: 구체적인 위치와 공종을 포함하면 더 정확한 답변을 받을 수 있습니다.
            </p>
          </div>
        </div>

        {/* Citations Panel */}
        <div className="w-96 bg-card rounded-lg border border-border shadow-sm hidden lg:flex flex-col">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="font-semibold text-foreground">근거 인용</h3>
            <p className="text-xs text-muted-foreground mt-0.5">답변의 출처 문서를 확인하세요</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {selectedCitations.length > 0 ? (
              selectedCitations.map((citation) => (
                <div key={citation.id} className="p-4 rounded-lg border border-border bg-muted/30">
                  <div className="flex items-start gap-2 mb-2">
                    <FileText className="w-4 h-4 text-primary mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{citation.documentName}</p>
                      <p className="text-xs text-muted-foreground">p. {citation.page}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{citation.excerpt}"
                  </p>
                  <button className="mt-3 text-xs text-info hover:underline flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    원문 보기
                  </button>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <FileText className="w-12 h-12 mb-3 opacity-30" />
                <p className="text-sm">질문에 대한 답변의<br />근거 문서가 여기에 표시됩니다.</p>
              </div>
            )}
          </div>

          {/* Warning Notice */}
          <div className="p-4 border-t border-border">
            <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
              <p className="text-xs text-warning-foreground">
                ⚠️ AI 답변은 참고용입니다. 중요한 결정은 반드시 원문 문서를 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AIAssistant;
