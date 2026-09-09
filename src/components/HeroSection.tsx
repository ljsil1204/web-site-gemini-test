import { BookOpen, CheckCircle2, ChevronRight, GraduationCap, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenExportModal: () => void;
}

export function HeroSection({ onOpenExportModal }: HeroSectionProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle atmospheric background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF3F8] border border-[#13273D]/10 text-xs font-semibold text-[#1E3A5F]">
              <GraduationCap className="w-4 h-4 text-[#1E3A5F]" />
              <span>{portfolioData.affiliation}</span>
              <span className="w-1 h-1 rounded-full bg-slate-400" />
              <span>{portfolioData.role}</span>
            </div>

            {/* UX Catchphrase (Standout 1-line hook) */}
            <div className="text-amber-700 font-serif font-bold text-lg md:text-xl tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{portfolioData.heroCatchphrase}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#13273D] leading-tight tracking-tight">
              안녕하세요, 교육대학원생<br className="hidden sm:inline" />
              <span className="relative inline-block ml-1 sm:ml-0 text-[#1E3A5F]">
                {portfolioData.name}
                <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-200/50 -z-10 rounded-sm" />
              </span>
              입니다.
            </h1>

            {/* Intro paragraph */}
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {portfolioData.heroIntro}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="hero-about-btn"
                type="button"
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#13273D] text-white font-semibold text-sm hover:bg-[#1E3A5F] active:scale-[0.98] transition-all shadow-sm"
              >
                <span>교육 철학 및 소개</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                id="hero-research-btn"
                type="button"
                onClick={() => scrollTo('research')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-slate-300 text-[#13273D] font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98] transition-all shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>연구 관심 분야 (4)</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 border-t border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>현장 연계형 수업 설계 연구</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>에듀테크 & 포용적 교육(UDL)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>과정 중심 평가 체계 탐구</span>
              </div>
            </div>
          </div>

          {/* Right Profile Summary Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-200/90 p-7 shadow-md relative group hover:shadow-lg transition-all duration-300">
              {/* Top Accent line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#13273D] via-[#1E3A5F] to-amber-500 rounded-b-full" />

              <div className="text-center">
                {/* Avatar Badge */}
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#EDF3F8] to-[#D8E5F0] border-4 border-white shadow-sm flex items-center justify-center text-[#13273D] font-black text-3xl">
                    {portfolioData.name}
                  </div>
                  <div
                    className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-teal-600 text-white border-2 border-white flex items-center justify-center text-xs shadow-xs"
                    title="교육대학원 연구생"
                  >
                    ✓
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[#13273D] tracking-tight">
                  {portfolioData.name}
                </h2>
                <div className="text-xs font-medium text-slate-500 mt-0.5 mb-3">
                  {portfolioData.nameEnglish} · {portfolioData.role}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700">
                    교육학 석사과정
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700">
                    교수학습설계
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700">
                    에듀테크
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700">
                    포용교육
                  </span>
                </div>

                {/* Motto Box */}
                <div className="p-3.5 rounded-xl bg-[#EDF3F8]/80 text-[#1E3A5F] text-xs font-medium leading-relaxed border border-[#1E3A5F]/10 mb-5">
                  “배움의 주어는 언제나 학생이며,<br />
                  교사는 성장의 길을 비추는 등대입니다.”
                </div>

                {/* Email Direct Trigger */}
                <a
                  id="hero-card-mail-link"
                  href={`mailto:${portfolioData.email}`}
                  className="block w-full py-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors"
                >
                  ✉ {portfolioData.email}
                </a>

                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                  신뢰감 있는 교직 전문성과 따뜻한 교육관
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
