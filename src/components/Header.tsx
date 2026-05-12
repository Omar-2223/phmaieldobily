'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { useLanguage } from '@/app/components/LanguageProvider';
import { useTheme } from '@/app/components/ThemeProvider';

export default function Header() {
  const { t, lang, toggleLang, dir } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const handleScroll = () => setMenuOpen(false);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [menuOpen]);

  const navLinks = [
    { href: '#features', label: t('nav.features') },
    { href: '#location', label: t('nav.location') },
    { href: '/download', label: t('nav.download') },
  ];

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'bg-[#060D1A]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
            : 'bg-white/90 backdrop-blur-xl border-b border-[#00C9A7]/15 shadow-[0_4px_24px_rgba(0,0,0,0.08)]' :'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <AppLogo
            size={36}
            onClick={() => {}}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className={`font-semibold text-lg tracking-tight hidden sm:block ${
              lang === 'ar' ? 'font-arabic' : ''
            } ${isDark ? 'text-foreground' : 'text-slate-800'}`}
          >
            {lang === 'ar' ? 'صيدلية مي الضبيلي' : 'Ph - Mai Eldobily'}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              className={`text-[13px] font-medium transition-colors duration-200 ${
                isDark
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {link?.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 ${
              isDark
                ? 'border-border/60 bg-white/[0.03] text-muted-foreground hover:text-foreground hover:border-primary/40'
                : 'border-slate-200 bg-white text-slate-500 hover:text-slate-800 hover:border-[#00C9A7]/40'
            }`}
            aria-label="Toggle theme"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              /* Sun icon */
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
              /* Moon icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[12px] font-semibold transition-all duration-200 ${
              isDark
                ? 'border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 bg-white/[0.03]'
                : 'border-slate-200 text-slate-500 hover:text-slate-800 hover:border-[#00C9A7]/40 bg-white'
            }`}
            aria-label="Toggle language"
          >
            <span className="w-2 h-2 rounded-full bg-primary/60" />
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>

          {/* Download CTA */}
          <Link
            href="/download"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2 text-[13px] font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #00C9A7 0%, #00A88A 60%, #3D8BFF 100%)',
              boxShadow: '0 8px 24px -6px rgba(0,201,167,0.5)',
            }}
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">{t('nav.downloadApp')}</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center rounded-full border ${
              isDark ? 'border-border/40 bg-white/[0.03]' : 'border-slate-200 bg-white'
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 transition-all duration-300 ${
                isDark ? 'bg-foreground' : 'bg-slate-700'
              } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-300 ${
                isDark ? 'bg-foreground' : 'bg-slate-700'
              } ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-300 ${
                isDark ? 'bg-foreground' : 'bg-slate-700'
              } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b py-6 px-6 ${
            isDark
              ? 'bg-[#060D1A]/95 border-white/[0.06]'
              : 'bg-white/95 border-slate-100'
          }`}
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium transition-colors py-2 border-b ${
                  isDark
                    ? 'text-muted-foreground hover:text-primary border-border/30'
                    : 'text-slate-500 hover:text-[#00C9A7] border-slate-100'
                }`}
              >
                {link?.label}
              </Link>
            ))}
            <Link
              href="/download"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center rounded-full py-3 font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #00C9A7 0%, #3D8BFF 100%)',
              }}
            >
              {t('nav.downloadApp')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}