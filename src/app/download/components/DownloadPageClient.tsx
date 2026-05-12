'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

// APK_DOWNLOAD_URL: Replace with actual APK link when available
const APK_DOWNLOAD_URL = '#'; // TODO: Replace with actual APK URL

export default function DownloadPageClient() {
  const [checking, setChecking] = useState(false);
  const [updateStatus, setUpdateStatus] = useState<'idle' | 'latest' | 'checking'>('idle');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const handleCheckUpdates = () => {
    setChecking(true);
    setUpdateStatus('checking');
    setTimeout(() => {
      setChecking(false);
      setUpdateStatus('latest');
    }, 2000);
  };

  const isDark = theme === 'dark';

  const bgColor = isDark ? '#060D1A' : '#f8fafc';
  const textColor = isDark ? '#F0F4FF' : '#0f172a';
  const mutedColor = isDark ? 'rgba(139,163,199,0.8)' : '#64748b';
  const cardBg = isDark ? 'rgba(11,26,48,0.7)' : 'rgba(255,255,255,0.95)';
  const cardBorder = isDark ? 'rgba(0,201,167,0.2)' : 'rgba(0,201,167,0.2)';
  const headerBg = isDark ? 'rgba(6,13,26,0.9)' : 'rgba(248,250,252,0.95)';
  const headerBorder = isDark ? 'rgba(26,48,80,0.6)' : 'rgba(0,201,167,0.15)';
  const infoBg = isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,201,167,0.05)';
  const infoBorder = isDark ? 'rgba(26,48,80,0.6)' : 'rgba(0, 0, 0, 0.77)';
  const subCardBg = isDark ? 'rgba(11,26,48,0.5)' : 'rgba(255,255,255,0.8)';
  const subCardBorder = isDark ? 'rgba(26,48,80,0.6)' : 'rgba(15, 17, 17, 0.7)';
  const inputBg = isDark ? 'rgba(6,13,26,0.8)' : '#ffffff';
  const inputBorder = isDark ? 'rgba(26,48,80,0.8)' : 'rgba(2, 2, 2, 0.76)';
  const checkBtnBg = isDark ? 'rgba(11,26,48,0.8)' : '#ffffff';
  const checkBtnBorder = isDark ? 'rgba(26,48,80,0.8)' : 'rgba(0,201,167,0.15)';

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: bgColor, color: textColor, fontFamily: 'var(--font-dm-sans, sans-serif)' }}
    >
      {/* Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(${isDark ? 'rgba(0,201,167,0.03)' : 'rgba(0,201,167,0.04)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(0,201,167,0.03)' : 'rgba(0,201,167,0.04)'} 1px, transparent 1px)`,
          backgroundSize: '10rem 20rem',
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${isDark ? 'rgba(0,201,167,0.08)' : 'rgba(0,201,167,0.06)'} 0%, transparent 70%)` }}
      />

      {/* Header */}
      <header
        className="relative z-50 border-b px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between"
        style={{ borderColor: headerBorder, background: headerBg, backdropFilter: 'blur(16px)' }}
      >
        <Link href="/" className="flex items-center gap-2.5 group">
          <AppLogo size={34} onClick={() => {}} />
          <span className="font-semibold text-base tracking-tight hidden sm:block" style={{ color: textColor }}>
            {lang === 'ar' ? 'صيدلية مي الضبيلي' : 'Ph - Mai Eldobily'}
          </span>
        </Link>
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200"
            style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,201,167,0.2)', background: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff', color: mutedColor }}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[12px] font-semibold transition-all duration-200"
            style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,201,167,0.2)', background: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff', color: mutedColor }}
            aria-label="Toggle language"
          >
            <span className="w-2 h-2 rounded-full" style={{ background: '#00C9A7' }} />
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: mutedColor }}
          >
            <Icon name="ArrowLeftIcon" size={16} />
            {lang === 'ar' ? 'الرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 py-20">

        {/* Hero card */}
        <div
          className="w-full max-w-2xl rounded-3xl p-10 md:p-14 text-center"
          style={{
            background: cardBg,
            backdropFilter: 'blur(32px)',
            border: `1px solid ${cardBorder}`,
            boxShadow: isDark
              ? '0 0 80px -30px rgba(0,201,167,0.2), 0 40px 80px -20px rgba(0,0,0,0.6)'
              : '0 4px 40px rgba(0,0,0,0.08)',
          }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center animate-float"
              style={{
                background: 'linear-gradient(135deg, rgba(0,201,167,0.2), rgba(61,139,255,0.2))',
                border: '1px solid rgba(0,201,167,0.3)',
                boxShadow: '0 0 40px rgba(0,201,167,0.2)',
              }}
            >
              <Icon name="ArrowDownTrayIcon" size={36} style={{ color: '#00C9A7' } as React.CSSProperties} />
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-5">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(0,201,167,0.12)', border: '1px solid rgba(0,201,167,0.3)', color: '#00C9A7' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C9A7] animate-pulse" />
              {lang === 'ar' ? 'أحدث إصدار متاح' : 'Latest Version Available'}
            </span>
          </div>

          <h1
            className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 ${lang === 'ar' ? 'font-arabic' : ''}`}
            style={{ color: textColor, lineHeight: '1.05' }}
          >
            {lang === 'ar' ? 'تحميل أحدث إصدار' : 'Download Latest Version'}
          </h1>

          <p className={`text-base md:text-lg font-light leading-relaxed mb-10 ${lang === 'ar' ? 'font-arabic' : ''}`} style={{ color: mutedColor }}>
            {lang === 'ar' ?'احصل دائماً على أحدث إصدار من تطبيق الصيدلية للحصول على أفضل تجربة وأحدث قاعدة بيانات للأدوية.' :'Always get the newest version of our pharmacy app for the best experience, latest medicines database, and improved performance.'}
          </p>

          {/* Version info */}
          <div
            className="flex items-center justify-center gap-6 mb-10 p-4 rounded-2xl"
            style={{ background: infoBg, border: `1px solid ${infoBorder}` }}
          >
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-widest mb-1 font-medium" style={{ color: mutedColor }}>
                {lang === 'ar' ? 'الإصدار' : 'Version'}
              </div>
              <div className="text-xl font-bold font-mono" style={{ color: '#00C9A7' }}>v2.4.1</div>
            </div>
            <div className="w-px h-10" style={{ background: isDark ? 'rgba(26,48,80,0.8)' : 'rgba(0,201,167,0.15)' }} />
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-widest mb-1 font-medium" style={{ color: mutedColor }}>
                {lang === 'ar' ? 'تاريخ الإصدار' : 'Released'}
              </div>
              <div className="text-base font-semibold" style={{ color: textColor }}>Apr 2026</div>
            </div>
            <div className="w-px h-10" style={{ background: isDark ? 'rgba(26,48,80,0.8)' : 'rgba(0,201,167,0.15)' }} />
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-widest mb-1 font-medium" style={{ color: mutedColor }}>
                {lang === 'ar' ? 'الحجم' : 'Size'}
              </div>
              <div className="text-base font-semibold" style={{ color: textColor }}>24.6 MB</div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* Primary APK Download */}
            <a
              href={APK_DOWNLOAD_URL}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-4 font-bold text-base text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #00C9A7 0%, #00A88A 50%, #3D8BFF 100%)',
                boxShadow: '0 12px 40px -10px rgba(0,201,167,0.6)',
              }}
              download
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Icon name="ArrowDownTrayIcon" size={20} className="relative z-10" />
              <span className={`relative z-10 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {lang === 'ar' ? 'تحميل أحدث إصدار' : 'Download Latest Version'}
              </span>
            </a>

            {/* Check for updates */}
            <button
              onClick={handleCheckUpdates}
              disabled={checking}
              className="group inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: checkBtnBg,
                border: `1px solid ${checkBtnBorder}`,
                color: textColor,
              }}
            >
              <Icon
                name="ArrowPathIcon"
                size={18}
                className={`transition-colors group-hover:text-primary ${checking ? 'animate-spin' : ''}`}
                style={{ color: mutedColor } as React.CSSProperties}
              />
              <span className={lang === 'ar' ? 'font-arabic' : ''}>
                {checking
                  ? (lang === 'ar' ? 'جاري التحقق...' : 'Checking...')
                  : (lang === 'ar' ? 'التحقق من التحديثات' : 'Check for Updates')}
              </span>
            </button>
          </div>

          {/* Update status message */}
          {updateStatus === 'latest' && (
            <div
              className="flex items-center justify-center gap-2 text-sm font-medium mb-8"
              style={{ color: '#22C55E' }}
            >
              <Icon name="CheckCircleIcon" size={16} style={{ color: '#22C55E' } as React.CSSProperties} />
              <span className={lang === 'ar' ? 'font-arabic' : ''}>
                {lang === 'ar' ? 'لديك أحدث إصدار!' : 'You have the latest version!'}
              </span>
            </div>
          )}

          {/* Update strategy note */}
          <div
            className="rounded-xl p-5 text-left"
            style={{ background: 'rgba(61,139,255,0.08)', border: '1px solid rgba(61,139,255,0.2)' }}
          >
            <div className={`flex items-start gap-3 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
              <Icon name="InformationCircleIcon" size={18} style={{ color: '#3D8BFF', flexShrink: 0, marginTop: '2px' } as React.CSSProperties} />
              <div>
                <h3 className={`text-sm font-semibold mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`} style={{ color: textColor }}>
                  {lang === 'ar' ? 'ابقَ محدثاً' : 'Stay Updated'}
                </h3>
                <p className={`text-sm leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`} style={{ color: mutedColor }}>
                  {lang === 'ar' ?'قم دائماً بتنزيل أحدث إصدار من هذه الصفحة للحصول على أدوية جديدة وإصلاحات وتحسينات أمنية.' :'Always download the latest version from this page for new medicines, bug fixes, and security improvements. Subscribe for email or SMS alerts when updates are available.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email subscription */}
        <div
          className="mt-8 w-full max-w-2xl rounded-2xl p-7"
          style={{
            background: subCardBg,
            border: `1px solid ${subCardBorder}`,
          }}
        >
          <h3 className={`text-lg font-bold mb-2 ${lang === 'ar' ? 'font-arabic text-right' : ''}`} style={{ color: textColor }}>
            {lang === 'ar' ? 'احصل على إشعارات التحديثات' : 'Get Update Notifications'}
          </h3>
          <p className={`text-sm mb-5 ${lang === 'ar' ? 'font-arabic text-right' : ''}`} style={{ color: mutedColor }}>
            {lang === 'ar' ?'أدخل بريدك الإلكتروني لتلقي تنبيهات تلقائية عند إصدار نسخة جديدة.' :'Enter your email to receive automatic alerts when a new version is released.'}
          </p>
          <div className={`flex flex-col sm:flex-row gap-3 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
            <input
              type="email"
              placeholder={lang === 'ar' ? 'بريدك@الإلكتروني.com' : 'your@email.com'}
              className="flex-1 rounded-xl px-5 py-3 text-sm font-medium outline-none transition-colors"
              style={{
                background: inputBg,
                border: `1px solid ${inputBorder}`,
                color: textColor,
              }}
              aria-label="Email for update notifications"
            />
            <button
              className="rounded-xl px-6 py-3 font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #00C9A7, #3D8BFF)',
                boxShadow: '0 6px 20px -6px rgba(0,201,167,0.5)',
              }}
              type="button"
            >
              <span className={lang === 'ar' ? 'font-arabic' : ''}>
                {lang === 'ar' ? 'اشترك' : 'Subscribe'}
              </span>
            </button>
          </div>
        </div>

        {/* Address */}
        <p
          className="mt-8 font-arabic text-sm font-semibold text-center"
          style={{ color: 'rgba(0,201,167,0.6)' }}
          dir="rtl"
          lang="ar"
        >
          📍 أبوكبير : ش السكة الحديد أمام مستشفى أبوكبير المركزي
        </p>

        {/* Creator Signature */}
        <div className="mt-6 flex flex-col items-center gap-1">
          <p className="text-[11px] opacity-50 tracking-wide" style={{ color: mutedColor }}>
            Creator: Omar Mohamed
          </p>
          <p className="text-[11px] opacity-50 tracking-wide" style={{ color: mutedColor }}>
            For contact: +201001246641
          </p>
        </div>
      </main>
    </div>
  );
}