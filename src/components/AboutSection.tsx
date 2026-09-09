import { Compass, HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function AboutSection() {
  const valueIcons = [
    <HeartHandshake className="w-5 h-5 text-amber-600" key="1" />,
    <Lightbulb className="w-5 h-5 text-teal-600" key="2" />,
    <ShieldCheck className="w-5 h-5 text-indigo-600" key="3" />
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-amber-700 uppercase mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>About Me & Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#13273D] tracking-tight mb-4">
            {portfolioData.aboutHeadline}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            교육대학원에서 배움의 본질을 학문적으로 성찰하며, 지식의 전달을 넘어 학습자 고유의 잠재력과 주체성을 깨우는 교육적 실천을 고민합니다.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-base leading-relaxed text-left">
            <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-slate-200/80 space-y-4">
              <h3 className="text-lg font-bold text-[#13273D] border-b border-slate-200/70 pb-3">
                교육관 및 연구자로서의 지향점
              </h3>
              {portfolioData.aboutPhilosophy.map((para, idx) => (
                <p key={idx} className="text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Academic Track Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                <div className="text-xs text-slate-500 font-medium mb-1">학업 신분</div>
                <div className="font-bold text-[#13273D] text-sm">{portfolioData.role}</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                <div className="text-xs text-slate-500 font-medium mb-1">소속 기관</div>
                <div className="font-bold text-[#13273D] text-sm">{portfolioData.affiliation}</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                <div className="text-xs text-slate-500 font-medium mb-1">지향 교실</div>
                <div className="font-bold text-[#13273D] text-sm">포용과 성장의 교실</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Educational Values */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#EDF3F8]/50 border border-[#13273D]/10">
              <h3 className="text-base font-bold text-[#13273D] mb-5 flex items-center justify-between">
                <span>3가지 핵심 교육 가치</span>
                <span className="text-xs text-[#1E3A5F] font-semibold bg-white px-2.5 py-1 rounded-full border border-slate-200">
                  Core Values
                </span>
              </h3>

              <div className="space-y-4">
                {portfolioData.coreValues.map((val, idx) => (
                  <div
                    key={val.id}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all text-left"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 shrink-0 mt-0.5">
                        {valueIcons[idx]}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#13273D] text-sm">
                          {val.title}
                        </h4>
                        <div className="text-[11px] font-medium text-slate-400">
                          {val.englishTitle}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2.5 pl-11">
                      {val.description}
                    </p>
                    <div className="pl-11 text-xs font-serif italic text-amber-800 font-medium">
                      {val.quote}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
