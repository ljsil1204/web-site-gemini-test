import { useState } from 'react';
import { Check, Copy, Download, FileCode, X } from 'lucide-react';
import { generateStandaloneHtml } from '../utils/generateStandaloneHtml';

interface HtmlExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HtmlExportModal({ isOpen, onClose }: HtmlExportModalProps) {
  const [copied, setCopied] = useState(false);
  const htmlContent = generateStandaloneHtml();

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(htmlContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'lee_jinshil_portfolio.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="html-export-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="html-export-modal-dialog"
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#13273D] text-white flex items-center justify-center">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                단일 HTML/CSS 파일 코드 (Standalone HTML)
              </h3>
              <p className="text-xs text-slate-500">
                CSS가 &lt;style&gt; 태그 내에 모두 포함되어 있어 하나의 .html 파일만으로 즉시 작동합니다.
              </p>
            </div>
          </div>
          <button
            id="modal-close-btn"
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            title="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="px-6 py-3 bg-slate-100/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>표준 HTML5 + 자체 내장 반응형 CSS (외부 라이브러리 설치 불필요)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              id="copy-html-btn"
              type="button"
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-semibold text-xs transition-all shadow-sm ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-[#13273D] hover:bg-slate-50 border border-slate-300'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? '전체 코드 복사 완료!' : '전체 코드 복사'}
            </button>
            <button
              id="download-html-btn"
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-semibold text-xs bg-[#13273D] text-white hover:bg-[#1E3A5F] transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              .html 파일 다운로드
            </button>
          </div>
        </div>

        {/* Code View Area */}
        <div className="flex-1 overflow-auto p-4 bg-slate-900 text-slate-200 font-mono text-xs leading-relaxed selection:bg-indigo-500 selection:text-white">
          <pre className="whitespace-pre">
            <code>{htmlContent}</code>
          </pre>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>파일명: <code className="font-mono text-slate-700 font-medium">lee_jinshil_portfolio.html</code></span>
          <span>브라우저에서 더블 클릭만으로 바로 열 수 있습니다.</span>
        </div>
      </div>
    </div>
  );
}
