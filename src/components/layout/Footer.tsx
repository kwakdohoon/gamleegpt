export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">주식회사 로얄버드</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>대표자: 최자랑</p>
              <p>사업자번호: 855-81-00831</p>
              <p>우편번호: 05545</p>
              <p className="leading-relaxed">
                주소: 서울특별시 송파구 오금로11길 55, 2층 213-10호
                <br />
                (방이동, 현대주상복합빌딩)
              </p>
            </div>
          </div>

          {/* Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">서비스</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">감리GPT 소개</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">요금제</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">도입 문의</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">API 연동</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">고객지원</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">이용약관</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">개인정보처리방침</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">자주 묻는 질문</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">문의하기</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/60">
            © 2025 주식회사 로얄버드. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
