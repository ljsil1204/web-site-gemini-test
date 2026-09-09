import { BookMarked, HelpCircle, Layers, MonitorSmartphone, Sparkles, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ResearchSection() {
  const areaIcons = [
    <Layers className="w-5 h-5 text-indigo-600" key="1" />,
    <MonitorSmartphone className="w-5 h-5 text-teal-600" key="2" />,
    <Users className="w-5 h-5 text-amber-600" key="3" />,
    <Sparkles className="w-5 h-5 text-rose-600" key="4" />
  ];

  return (
    <section id="research" className="py-20 bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-amber-700 uppercase mb-2">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Interests & Research</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#13273D] tracking-tight mb-4">
            관심 및 연구 분야
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            시대의 변화 속에서도 변하지 않는 교육의 본질적 가치를 지키기 위해, 현장 실천성과 학문적 깊이를 아우르는 4가지 주요 연구 주제를 탐구하고 있습니다.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.researchAreas.map((area, index) => (
            <article
              key={area.id}
              className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between text-left group"
            >
              <div>
                {/* Top header with number and icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[#EDF3F8] text-[#1E3A5F]">
                    RESEARCH {area.number}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-[#EDF3F8]/50 transition-colors">
                    {areaIcons[index]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#13273D] group-hover:text-[#1E3A5F] transition-colors leading-snug mb-1">
                  {area.title}
                </h3>
                <div className="text-xs font-medium text-slate-400 mb-3">
                  {area.englishTitle}
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {area.summary}
                </p>

                {/* Keyword Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {area.keywords.map((kw, kIdx) => (
                    <span
                      key={kIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/60"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Research Questions Footer */}
              <div className="pt-4 border-t border-slate-100 mt-auto bg-slate-50/60 -mx-7 -mb-7 p-5 rounded-b-2xl">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-2">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>주요 탐구 질문</span>
                </div>
                <div className="space-y-1.5">
                  {area.keyQuestions.map((question, qIdx) => (
                    <div
                      key={qIdx}
                      className="text-xs text-slate-600 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span>{question}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
