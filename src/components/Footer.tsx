'use client';

import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { useLanguage } from '@/app/components/LanguageProvider';

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="relative border-t border-white/[0.04] py-16 px-6 md:px-12 lg:px-24">
      {/* Top highlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-80"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,201,167,0.4), transparent)' }}
      />
      <div className="max-w-[1440px] mx-auto">
        {/* Address in footer */}
        <div
          className="mb-8 p-4 rounded-xl text-center"
          style={{ background: 'rgba(0,201,167,0.05)', border: '1px solid rgba(0,201,167,0.12)' }}
        >
          <p
            className="font-arabic text-sm font-semibold"
            style={{ color: 'rgba(0,201,167,0.8)', textAlign: 'center' }}
            dir="rtl"
            lang="ar"
          >
            📍 أبوكبير : ش السكة الحديد أمام مستشفى أبوكبير المركزي
          </p>
        </div>

        {/* Single row footer */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-4 ${
            lang === 'ar' ? 'flex-col md:flex-row-reverse' : ''
          }`}
        >
          {/* Logo + brand */}
          <div className="flex items-center gap-2.5">
            <AppLogo size={28} onClick={() => {}} />
            <span
              className={`text-sm font-semibold text-muted-foreground ${
                lang === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {lang === 'ar' ? 'صيدلية مي الضبيلي' : 'Ph - Mai Eldobily'}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { href: '#features', label: t('nav.features') },
              { href: '#location', label: t('nav.location') },
              { href: '/download', label: t('nav.download') },
              { href: '#', label: t('footer.privacy') },
              { href: '#', label: t('footer.terms') },
            ]?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className={`text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 ${
                  lang === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
            <span
              className={`text-xs text-muted-foreground ${lang === 'ar' ? 'font-arabic' : ''}`}
            >
              {t('footer.rights')}
            </span>
          </div>
        </div>

        {/* Creator Signature */}
        <div
          className="mt-8 pt-5 border-t flex flex-col items-center gap-1"
          style={{ borderColor: 'rgba(255,255,255,0.04)' }}
        >
          <p className="text-[11px] text-muted-foreground opacity-60 tracking-wide">
            Creator: Omar Mohamed
          </p>
          <p className="text-[11px] text-muted-foreground opacity-60 tracking-wide">
            For contact: +201001246641
          </p>
        </div>
      </div>
    </footer>
  );
}