import { portfolioData } from '../data/portfolioData';

export function generateStandaloneHtml(): string {
  const {
    name,
    nameEnglish,
    role,
    affiliation,
    email,
    heroCatchphrase,
    heroHeadline,
    heroIntro,
    aboutHeadline,
    aboutPhilosophy,
    coreValues,
    researchAreas,
    socialLinks
  } = portfolioData;

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} - ${role} 포트폴리오</title>
  <meta name="description" content="${heroHeadline}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700&family=Noto+Serif+KR:wght@500;700&display=swap" rel="stylesheet">
  
  <style>
    /* ==========================================================
       CSS Variables & Reset
       Color Palette: Deep Navy, Warm Gray, Off-White, Soft Gold
       ========================================================== */
    :root {
      --primary-navy: #13273D;
      --navy-light: #1E3A5F;
      --navy-subtle: #EDF3F8;
      --navy-dark: #0D1B2A;
      
      --accent-warm: #D97706;
      --accent-warm-light: #FEF3C7;
      --accent-teal: #0D9488;
      
      --bg-main: #FBFBFA;
      --bg-card: #FFFFFF;
      --bg-subtle: #F4F5F6;
      
      --text-main: #1E293B;
      --text-muted: #64748B;
      --text-light: #94A3B8;
      
      --border-color: #E2E8F0;
      --border-focus: #CBD5E1;
      
      --font-sans: 'Pretendard', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --font-serif: 'Noto Serif KR', Georgia, serif;
      
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04);
      --radius-sm: 8px;
      --radius-md: 14px;
      --radius-lg: 20px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
    }

    body {
      font-family: var(--font-sans);
      background-color: var(--bg-main);
      color: var(--text-main);
      line-height: 1.7;
      word-break: keep-all;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    a {
      color: inherit;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    button {
      font-family: inherit;
      cursor: pointer;
      border: none;
      background: none;
    }

    /* Container Utility */
    .container {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* ==========================================================
       Navigation Bar
       ========================================================== */
    .site-nav {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(251, 251, 250, 0.92);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-color);
      transition: all 0.3s ease;
    }

    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .brand-avatar-mini {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: var(--primary-navy);
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.95rem;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--primary-navy);
      letter-spacing: -0.02em;
    }

    .brand-title {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 1.75rem;
      list-style: none;
    }

    .nav-link {
      font-size: 0.925rem;
      font-weight: 500;
      color: var(--text-muted);
      padding: 0.5rem 0.25rem;
      position: relative;
    }

    .nav-link:hover {
      color: var(--primary-navy);
    }

    .nav-contact-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.55rem 1.15rem;
      background: var(--primary-navy);
      color: #FFFFFF;
      border-radius: var(--radius-sm);
      font-size: 0.875rem;
      font-weight: 600;
      transition: background 0.2s ease, transform 0.15s ease;
    }

    .nav-contact-btn:hover {
      background: var(--navy-light);
      transform: translateY(-1px);
    }

    /* ==========================================================
       Hero Section
       ========================================================== */
    .hero-section {
      padding: 5rem 0 4.5rem;
      position: relative;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 3.5rem;
      align-items: center;
    }

    .hero-badge-wrap {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--navy-subtle);
      border: 1px solid rgba(19, 39, 61, 0.12);
      padding: 0.35rem 0.9rem;
      border-radius: 9999px;
      font-size: 0.825rem;
      font-weight: 600;
      color: var(--navy-light);
      margin-bottom: 1.25rem;
    }

    .hero-badge-dot {
      width: 7px;
      height: 7px;
      background-color: var(--accent-teal);
      border-radius: 50%;
      display: inline-block;
    }

    .hero-catchphrase {
      font-family: var(--font-serif);
      font-size: 1.2rem;
      color: var(--accent-warm);
      font-weight: 700;
      margin-bottom: 0.75rem;
      letter-spacing: -0.01em;
    }

    .hero-headline {
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1.3;
      color: var(--primary-navy);
      letter-spacing: -0.03em;
      margin-bottom: 1.25rem;
    }

    .hero-headline .highlight {
      color: var(--navy-light);
      border-bottom: 3px solid var(--accent-warm-light);
    }

    .hero-intro {
      font-size: 1.05rem;
      color: var(--text-muted);
      line-height: 1.8;
      margin-bottom: 2rem;
      max-width: 620px;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--primary-navy);
      color: #FFFFFF;
      padding: 0.85rem 1.6rem;
      border-radius: var(--radius-sm);
      font-weight: 600;
      font-size: 0.95rem;
      box-shadow: var(--shadow-sm);
      transition: all 0.2s ease;
    }

    .btn-primary:hover {
      background: var(--navy-light);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #FFFFFF;
      color: var(--primary-navy);
      border: 1px solid var(--border-color);
      padding: 0.85rem 1.6rem;
      border-radius: var(--radius-sm);
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.2s ease;
    }

    .btn-secondary:hover {
      background: var(--bg-subtle);
      border-color: var(--border-focus);
    }

    /* Hero Profile Card */
    .hero-profile-card {
      background: #FFFFFF;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 2rem 1.75rem;
      box-shadow: var(--shadow-md);
      text-align: center;
      position: relative;
    }

    .profile-avatar-circle {
      width: 104px;
      height: 104px;
      margin: 0 auto 1.25rem;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--navy-subtle) 0%, #D8E5F0 100%);
      border: 4px solid #FFFFFF;
      box-shadow: var(--shadow-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .profile-avatar-initials {
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--primary-navy);
      letter-spacing: -0.02em;
    }

    .profile-verified-badge {
      position: absolute;
      bottom: 2px;
      right: 2px;
      background: var(--accent-teal);
      color: #FFFFFF;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      border: 2px solid #FFFFFF;
    }

    .profile-name {
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--primary-navy);
      margin-bottom: 0.25rem;
    }

    .profile-eng-name {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
    }

    .profile-tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.4rem;
      margin-bottom: 1.25rem;
    }

    .tag-chip {
      background: var(--bg-subtle);
      color: var(--text-muted);
      font-size: 0.75rem;
      font-weight: 500;
      padding: 0.25rem 0.65rem;
      border-radius: 9999px;
      border: 1px solid var(--border-color);
    }

    .profile-quote-box {
      background: var(--navy-subtle);
      border-radius: var(--radius-sm);
      padding: 0.85rem 1rem;
      font-size: 0.85rem;
      color: var(--navy-light);
      font-weight: 500;
      line-height: 1.5;
    }

    /* ==========================================================
       Section Header Standards
       ========================================================== */
    .section-wrap {
      padding: 4.5rem 0;
    }

    .section-wrap.alt-bg {
      background-color: #FFFFFF;
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
    }

    .section-header {
      margin-bottom: 3rem;
    }

    .section-category {
      font-size: 0.825rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--accent-warm);
      margin-bottom: 0.5rem;
      display: block;
    }

    .section-title {
      font-size: 1.95rem;
      font-weight: 800;
      color: var(--primary-navy);
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
    }

    .section-desc {
      font-size: 1rem;
      color: var(--text-muted);
      max-width: 680px;
      line-height: 1.7;
    }

    /* ==========================================================
       About Me Section
       ========================================================== */
    .about-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .about-text-column p {
      font-size: 1.025rem;
      color: #334155;
      line-height: 1.85;
      margin-bottom: 1.25rem;
    }

    .about-text-column p:last-child {
      margin-bottom: 0;
    }

    .philosophy-card {
      background: var(--bg-main);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 1.75rem;
    }

    .philosophy-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--primary-navy);
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .values-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .value-item {
      padding-bottom: 1.25rem;
      border-bottom: 1px solid var(--border-color);
    }

    .value-item:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }

    .value-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 0.35rem;
    }

    .value-name {
      font-size: 1rem;
      font-weight: 700;
      color: var(--primary-navy);
    }

    .value-eng {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    .value-desc {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 0.4rem;
    }

    .value-quote {
      font-size: 0.825rem;
      font-family: var(--font-serif);
      color: var(--navy-light);
      font-style: italic;
    }

    /* ==========================================================
       Interests & Research Section
       ========================================================== */
    .research-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .research-card {
      background: #FFFFFF;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 1.75rem;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }

    .research-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
      border-color: #CBD5E1;
    }

    .research-card-top {
      margin-bottom: 1rem;
    }

    .research-number {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--navy-light);
      background: var(--navy-subtle);
      padding: 0.2rem 0.55rem;
      border-radius: 4px;
      margin-bottom: 0.75rem;
    }

    .research-card-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--primary-navy);
      line-height: 1.4;
      margin-bottom: 0.35rem;
    }

    .research-card-eng {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-bottom: 0.85rem;
      font-weight: 500;
    }

    .research-summary {
      font-size: 0.925rem;
      color: #334155;
      line-height: 1.7;
      margin-bottom: 1.25rem;
    }

    .research-keywords {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 1.25rem;
    }

    .keyword-badge {
      background: var(--bg-subtle);
      color: var(--text-muted);
      font-size: 0.775rem;
      font-weight: 500;
      padding: 0.2rem 0.55rem;
      border-radius: 4px;
    }

    .research-questions {
      border-top: 1px solid var(--border-color);
      padding-top: 0.85rem;
      margin-top: auto;
    }

    .questions-label {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 0.4rem;
      display: block;
    }

    .question-item {
      font-size: 0.825rem;
      color: #475569;
      line-height: 1.5;
      margin-bottom: 0.3rem;
      display: flex;
      align-items: flex-start;
      gap: 0.35rem;
    }

    .question-item::before {
      content: "•";
      color: var(--accent-warm);
      font-weight: bold;
    }

    /* ==========================================================
       Contact & Footer Section
       ========================================================== */
    .contact-card-main {
      background: var(--primary-navy);
      color: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 3rem;
      box-shadow: var(--shadow-lg);
      margin-bottom: 3.5rem;
      position: relative;
      overflow: hidden;
    }

    .contact-card-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 2.5rem;
      align-items: center;
    }

    .contact-left h3 {
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
      color: #FFFFFF;
    }

    .contact-left p {
      font-size: 0.975rem;
      color: #CBD5E1;
      line-height: 1.7;
      margin-bottom: 1.75rem;
    }

    .email-box {
      display: inline-flex;
      align-items: center;
      gap: 0.85rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 0.75rem 1.25rem;
      border-radius: var(--radius-sm);
      font-size: 1rem;
      color: #FFFFFF;
      font-weight: 600;
      transition: background 0.2s ease;
    }

    .email-box:hover {
      background: rgba(255, 255, 255, 0.16);
    }

    .copy-toast-btn {
      background: #FFFFFF;
      color: var(--primary-navy);
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: 700;
      transition: all 0.15s ease;
    }

    .copy-toast-btn:hover {
      background: var(--accent-warm-light);
    }

    .contact-right {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: var(--radius-md);
      padding: 1.5rem;
    }

    .contact-right-title {
      font-size: 0.875rem;
      font-weight: 700;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1rem;
    }

    .social-link-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.65rem 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      color: #E2E8F0;
      font-size: 0.9rem;
    }

    .social-link-item:last-child {
      border-bottom: none;
    }

    .social-link-item:hover {
      color: #FFFFFF;
      padding-left: 0.75rem;
    }

    .social-label-text {
      font-size: 0.8rem;
      color: #94A3B8;
    }

    /* Site Footer */
    .site-footer {
      border-top: 1px solid var(--border-color);
      padding: 2.5rem 0;
      font-size: 0.875rem;
      color: var(--text-muted);
    }

    .footer-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-motto {
      font-family: var(--font-serif);
      color: var(--navy-light);
      font-size: 0.875rem;
    }

    /* ==========================================================
       Responsive Media Queries
       ========================================================== */
    @media (max-width: 900px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
      
      .hero-profile-card {
        max-width: 420px;
        margin: 0 auto;
      }

      .about-layout {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .research-grid {
        grid-template-columns: 1fr;
      }

      .contact-card-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 640px) {
      .hero-headline {
        font-size: 1.9rem;
      }

      .section-title {
        font-size: 1.55rem;
      }

      .nav-links {
        display: none;
      }

      .hero-section {
        padding: 3rem 0 3.5rem;
      }

      .contact-card-main {
        padding: 2rem 1.5rem;
      }

      .footer-inner {
        flex-direction: column;
        text-align: center;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation Bar -->
  <nav class="site-nav" id="top-nav">
    <div class="container nav-inner">
      <a href="#hero" class="brand-logo" title="처음으로 이동">
        <div class="brand-avatar-mini">${name.charAt(0)}</div>
        <div class="brand-text">
          <span class="brand-name">${name}</span>
          <span class="brand-title">${role}</span>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="#about" class="nav-link">소개 및 교육관</a></li>
        <li><a href="#research" class="nav-link">관심 및 연구 분야</a></li>
        <li><a href="#contact" class="nav-link">연락처</a></li>
      </ul>
      <a href="#contact" class="nav-contact-btn">문의하기</a>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="hero-section" id="hero">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-badge-wrap">
          <span class="hero-badge-dot"></span>
          <span>${affiliation} · ${role}</span>
        </div>
        <div class="hero-catchphrase">${heroCatchphrase}</div>
        <h1 class="hero-headline">
          안녕하세요, 교육대학원생<br>
          <span class="highlight">${name}</span>입니다.
        </h1>
        <p class="hero-intro">
          ${heroIntro}
        </p>
        <div class="hero-actions">
          <a href="#about" class="btn-primary">
            교육 철학 알아보기
          </a>
          <a href="#research" class="btn-secondary">
            연구 관심 분야 보기
          </a>
        </div>
      </div>

      <!-- Hero Profile Card -->
      <aside class="hero-profile-card">
        <div class="profile-avatar-circle">
          <span class="profile-avatar-initials">${name}</span>
          <span class="profile-verified-badge" title="인증된 교육연구자">✓</span>
        </div>
        <h2 class="profile-name">${name}</h2>
        <div class="profile-eng-name">${nameEnglish} · ${role}</div>
        <div class="profile-tags">
          <span class="tag-chip">교육학 석사과정</span>
          <span class="tag-chip">교수학습설계</span>
          <span class="tag-chip">에듀테크</span>
          <span class="tag-chip">포용교육</span>
        </div>
        <div class="profile-quote-box">
          “배움의 주어는 학생이며,<br>교사는 성장을 밝히는 등대입니다.”
        </div>
      </aside>
    </div>
  </header>

  <!-- About Me Section -->
  <section class="section-wrap alt-bg" id="about">
    <div class="container">
      <div class="section-header">
        <span class="section-category">About Me</span>
        <h2 class="section-title">${aboutHeadline}</h2>
        <p class="section-desc">
          지식의 주입을 넘어 배움의 이유를 스스로 깨닫는 교실, 한 명의 학생도 뒤처지지 않는 따뜻한 교육 안전망을 지향합니다.
        </p>
      </div>

      <div class="about-layout">
        <!-- Story text column -->
        <div class="about-text-column">
          ${aboutPhilosophy.map((paragraph) => `<p>${paragraph}</p>`).join('\n          ')}
        </div>

        <!-- Philosophy Core Values Card -->
        <div class="philosophy-card">
          <h3 class="philosophy-title">
            <span>핵심 교육 가치관</span>
          </h3>
          <div class="values-list">
            ${coreValues
              .map(
                (v) => `
            <div class="value-item">
              <div class="value-header">
                <h4 class="value-name">${v.title}</h4>
                <span class="value-eng">${v.englishTitle}</span>
              </div>
              <p class="value-desc">${v.description}</p>
              <div class="value-quote">${v.quote}</div>
            </div>`
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Interests & Research Section -->
  <section class="section-wrap" id="research">
    <div class="container">
      <div class="section-header">
        <span class="section-category">Interests & Research</span>
        <h2 class="section-title">관심 및 연구 분야</h2>
        <p class="section-desc">
          변화하는 시대 속에서도 흔들리지 않는 교육의 가치를 위해, 현장 지향적이고 실천적인 교육학 연구 주제들을 탐색하고 있습니다.
        </p>
      </div>

      <div class="research-grid">
        ${researchAreas
          .map(
            (area) => `
        <article class="research-card">
          <div class="research-card-top">
            <span class="research-number">RESEARCH ${area.number}</span>
            <h3 class="research-card-title">${area.title}</h3>
            <div class="research-card-eng">${area.englishTitle}</div>
            <p class="research-summary">${area.summary}</p>
          </div>
          
          <div class="research-keywords">
            ${area.keywords.map((kw) => `<span class="keyword-badge">#${kw}</span>`).join('')}
          </div>

          <div class="research-questions">
            <span class="questions-label">주요 탐구 질문</span>
            ${area.keyQuestions.map((q) => `<div class="question-item">${q}</div>`).join('')}
          </div>
        </article>`
          )
          .join('')}
      </div>
    </div>
  </section>

  <!-- Contact & Footer Section -->
  <section class="section-wrap" id="contact">
    <div class="container">
      <div class="contact-card-main">
        <div class="contact-card-grid">
          <div class="contact-left">
            <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-warm); display: block; margin-bottom: 0.4rem;">Get in Touch</span>
            <h3>배움과 성장의 대화를 언제나 환영합니다</h3>
            <p>
              교육대학원 학업과 연구, 수업 설계 협업, 또는 교육적 가치에 대한 진솔한 이야기를 나누고 싶으신 분들은 언제든 편하게 연락해 주세요.
            </p>
            <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
              <a href="mailto:${email}" class="email-box">
                <span>✉</span>
                <span id="contact-email-val">${email}</span>
              </a>
              <button type="button" class="copy-toast-btn" onclick="copyEmailToClipboard('${email}')">
                이메일 주소 복사
              </button>
            </div>
          </div>

          <div class="contact-right">
            <div class="contact-right-title">학술 활동 & 네트워크</div>
            <div class="social-links-list">
              ${socialLinks
                .map(
                  (link) => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link-item">
                <span>${link.name}</span>
                <span class="social-label-text">${link.label} →</span>
              </a>`
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="site-footer">
        <div class="footer-inner">
          <div>
            <strong>${name}</strong> · ${affiliation} ${role}
          </div>
          <div class="footer-motto">
            “진실한 마음으로 교육의 내일을 밝힙니다.”
          </div>
          <div>
            &copy; 2026 ${name} (${nameEnglish}). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  </section>

  <script>
    function copyEmailToClipboard(emailText) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(emailText).then(function() {
          alert('이메일 주소가 클립보드에 복사되었습니다: ' + emailText);
        }).catch(function() {
          prompt('이메일 주소를 복사하세요:', emailText);
        });
      } else {
        prompt('이메일 주소를 복사하세요:', emailText);
      }
    }
  </script>
</body>
</html>`;
}
