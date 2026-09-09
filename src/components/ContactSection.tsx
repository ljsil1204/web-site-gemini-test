import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, ExternalLink, Mail, MessageSquare, Send, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenExportModal: () => void;
}

export function ContactSection({ onOpenExportModal }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [messageName, setMessageName] = useState('');
  const [messageEmail, setMessageEmail] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmitMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!messageBody.trim()) return;

    // Direct mailto trigger with pre-filled content
    const subject = encodeURIComponent(`[교육 협업/문의] ${messageName || '방문자'}님의 메시지`);
    const body = encodeURIComponent(
      `보낸 사람: ${messageName} (${messageEmail})\n\n내용:\n${messageBody}`
    );
    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Navy Contact Card */}
        <div className="rounded-3xl bg-[#13273D] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden mb-16">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Email & Direct Contact */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get in Touch & Connect</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                배움과 성장의 대화를<br />
                언제나 따뜻한 마음으로 환영합니다.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                교육대학원 학업 및 연구 프로젝트, 교수-학습 설계 협업, 또는 교육의 방향성에 대한 진솔한 이야기를 나누고 싶으시다면 편하게 연락해 주세요.
              </p>

              {/* Email Box with Copy */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  id="direct-email-link"
                  href={`mailto:${portfolioData.email}`}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm transition-all backdrop-blur-sm"
                >
                  <Mail className="w-4 h-4 text-amber-300" />
                  <span>{portfolioData.email}</span>
                </a>

                <button
                  id="copy-email-toast-btn"
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                    copied
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'bg-white text-[#13273D] hover:bg-slate-100'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? '이메일 주소 복사됨!' : '주소 복사'}</span>
                </button>
              </div>

              {/* Quick message drawer / mailto shortcut */}
              <div className="pt-4">
                <form
                  onSubmit={handleSubmitMessage}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 max-w-xl"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                    <span>간단한 메시지 남기기 (이메일 클라이언트로 전송)</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      placeholder="성함 / 소속"
                      value={messageName}
                      onChange={(e) => setMessageName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
                    />
                    <input
                      type="email"
                      placeholder="회신받으실 이메일"
                      value={messageEmail}
                      onChange={(e) => setMessageEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <textarea
                    rows={2}
                    placeholder="문의하시거나 나누고 싶은 이야기(연구 협업, 조언 등)를 적어주세요."
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400 resize-none"
                    required
                  />

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      {sentSuccess ? '메일 작성기가 열렸습니다.' : '전송 클릭 시 기본 메일 프로그램과 연결됩니다.'}
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-xs transition-colors"
                    >
                      <Send className="w-3 h-3" />
                      <span>메시지 전송</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Social & Academic Network Links */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-left">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  학술 활동 및 네트워크 링크
                </h3>

                <div className="space-y-2.5">
                  {portfolioData.socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-xs"
                    >
                      <div>
                        <div className="font-semibold text-slate-100 group-hover:text-white flex items-center gap-1.5">
                          <span>{link.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-300 transition-colors" />
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {link.description}
                        </div>
                      </div>
                      <span className="text-[11px] text-amber-300/80 font-medium shrink-0 ml-2">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Standalone HTML trigger button */}
                <div className="mt-5 pt-4 border-t border-white/10 text-center">
                  <button
                    type="button"
                    onClick={onOpenExportModal}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white underline underline-offset-4 cursor-pointer transition-colors"
                  >
                    <span>이 웹사이트의 단일 HTML/CSS 코드 다운로드하기</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Clean Site Footer */}
        <footer className="pt-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-bold text-slate-800">{portfolioData.name}</span>
            <span className="mx-2">·</span>
            <span>{portfolioData.affiliation} {portfolioData.role}</span>
          </div>

          <div className="font-serif italic text-slate-600 text-xs">
            “진실한 마음으로 교육의 내일을 밝힙니다.”
          </div>

          <div>
            &copy; {new Date().getFullYear()} {portfolioData.name} ({portfolioData.nameEnglish}). All rights reserved.
          </div>
        </footer>

      </div>
    </section>
  );
}
