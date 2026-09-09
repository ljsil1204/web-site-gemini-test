import { useState } from 'react';
import { FileCode, Mail, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenExportModal: () => void;
}

export function Navbar({ onOpenExportModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand */}
        <button
          id="nav-brand-btn"
          type="button"
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-full bg-[#13273D] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-[#1E3A5F] transition-colors">
            {portfolioData.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-[#13273D] tracking-tight group-hover:text-[#1E3A5F] transition-colors">
              {portfolioData.name}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {portfolioData.role}
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button
            id="nav-link-about"
            type="button"
            onClick={() => scrollTo('about')}
            className="hover:text-[#13273D] transition-colors py-1 cursor-pointer"
          >
            소개 및 교육관
          </button>
          <button
            id="nav-link-research"
            type="button"
            onClick={() => scrollTo('research')}
            className="hover:text-[#13273D] transition-colors py-1 cursor-pointer"
          >
            관심 및 연구 분야
          </button>
          <button
            id="nav-link-contact"
            type="button"
            onClick={() => scrollTo('contact')}
            className="hover:text-[#13273D] transition-colors py-1 cursor-pointer"
          >
            연락처
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-export-code-btn"
            type="button"
            onClick={onOpenExportModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-[#13273D] hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs"
            title="CSS가 포함된 단일 HTML 파일 코드 확인 및 다운로드"
          >
            <FileCode className="w-4 h-4 text-amber-600" />
            <span>단일 HTML 코드 복사</span>
          </button>

          <button
            id="nav-contact-cta"
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#13273D] text-white hover:bg-[#1E3A5F] active:translate-y-0.5 transition-all shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>문의하기</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-export-icon-btn"
            type="button"
            onClick={onOpenExportModal}
            className="p-2 rounded-lg border border-slate-200 text-[#13273D] bg-white hover:bg-slate-50"
            title="단일 HTML 코드"
          >
            <FileCode className="w-4 h-4 text-amber-600" />
          </button>

          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-[#13273D] hover:bg-slate-100 transition-colors"
            aria-label="메뉴 열기/닫기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <button
            id="m-nav-link-about"
            type="button"
            onClick={() => scrollTo('about')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-[#13273D]"
          >
            소개 및 교육관
          </button>
          <button
            id="m-nav-link-research"
            type="button"
            onClick={() => scrollTo('research')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-[#13273D]"
          >
            관심 및 연구 분야
          </button>
          <button
            id="m-nav-link-contact"
            type="button"
            onClick={() => scrollTo('contact')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-[#13273D]"
          >
            연락처
          </button>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="m-nav-export-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExportModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800"
            >
              <FileCode className="w-4 h-4 text-amber-600" />
              <span>단일 HTML 코드 복사 / 다운로드</span>
            </button>
            <button
              id="m-nav-contact-btn"
              type="button"
              onClick={() => scrollTo('contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-[#13273D] text-white"
            >
              <Mail className="w-4 h-4" />
              <span>문의하기</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
