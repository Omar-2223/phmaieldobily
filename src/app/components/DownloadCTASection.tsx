'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import Icon from '@/components/ui/AppIcon';

const socialLinks = [
  {
    name: 'WhatsApp',
    nameAr: 'واتساب',
    icon: 'ChatBubbleLeftEllipsisIcon',
    href: 'https://wa.me/',
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.12)',
    border: 'rgba(34,197,94,0.3)',
  },
  {
    name: 'Facebook',
    nameAr: 'فيسبوك',
    icon: 'GlobeAltIcon',
    href: 'https://facebook.com/',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.3)',
  },
  {
    name: 'Instagram',
    nameAr: 'إنستغرام',
    icon: 'CameraIcon',
    href: 'https://instagram.com/',
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.12)',
    border: 'rgba(225,48,108,0.3)',
  },
];

export default function DownloadCTASection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative py-20 md:py-28 border-t border-white/[0.04]">
      {/* Section number watermark */}
      <div className="absolute top-12 left-6 md:left-12 opacity-[0.04] font-bold text-[8rem] md:text-[11rem] leading-none text-white pointer-events-none select-none tracking-tighter">
        05
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left: CTA */}
          <div
            className={`lg:col-span-7 animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.2s_both] ${
              lang === 'ar' ? 'text-right' : ''
            }`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[11px] font-semibold tracking-widest text-primary uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {t('download.badge')}
            </span>
            <h2
              className={`text-4xl md:text-6xl font-bold leading-[0.9] tracking-tight text-foreground mb-5 ${
                lang === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {t('download.headline')}
            </h2>
            <p
              className={`text-lg text-muted-foreground font-light max-w-lg mb-8 ${
                lang === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {t('download.sub')}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 ${lang === 'ar' ? 'justify-end' : ''}`}>
              {/* Primary download button */}
              <Link
                href="/download"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl px-8 py-4 font-bold text-base text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #00C9A7 0%, #00A88A 50%, #3D8BFF 100%)',
                  boxShadow: '0 12px 40px -10px rgba(0,201,167,0.6)',
                }}
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
                <Icon name="ArrowDownTrayIcon" size={20} className="relative z-10" />
                <span className={`relative z-10 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                  {t('download.cta')}
                </span>
              </Link>

              {/* Secondary */}
              <a
                href="#features"
                className="group inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-semibold text-base transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--bg-card, rgba(11,26,48,0.6))',
                  border: '1px solid var(--bg-card-border, rgba(26,48,80,0.8))',
                  color: 'var(--foreground)',
                }}
              >
                <Icon name="InformationCircleIcon" size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className={lang === 'ar' ? 'font-arabic' : ''}>{t('download.learn')}</span>
              </a>
            </div>
          </div>

          {/* Right: Social Links */}
          <div
            className={`lg:col-span-5 animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.4s_both]`}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'var(--bg-card, rgba(11,26,48,0.6))',
                border: '1px solid var(--bg-card-border, rgba(26,48,80,0.8))',
                backdropFilter: 'blur(16px)',
              }}
            >
              <h3
                className={`text-xl font-bold text-foreground mb-6 ${
                  lang === 'ar' ? 'font-arabic text-right' : ''
                }`}
              >
                {t('social.headline')}
              </h3>

              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: social.bg,
                      border: `1px solid ${social.border}`,
                    }}
                  >
                    <div className={`flex items-center gap-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${social.color}20`, border: `1px solid ${social.color}40` }}
                      >
                        <Icon
                          name={social.icon as Parameters<typeof Icon>[0]['name']}
                          size={18}
                          style={{ color: social.color } as React.CSSProperties}
                        />
                      </div>
                      <span
                        className={`font-semibold text-sm ${lang === 'ar' ? 'font-arabic' : ''}`}
                        style={{ color: social.color }}
                      >
                        {lang === 'ar' ? social.nameAr : social.name}
                      </span>
                    </div>
                    <Icon
                      name="ArrowTopRightOnSquareIcon"
                      size={14}
                      className="text-muted-foreground group-hover:text-foreground transition-colors"
                    />
                  </a>
                ))}
              </div>

              {/* Address reminder */}
              <div
                className="mt-5 p-4 rounded-xl"
                style={{ background: 'var(--bg-card, rgba(11,26,48,0.4))', border: '1px solid rgba(0,201,167,0.15)' }}
              >
                <p
                  className="font-arabic text-sm leading-relaxed"
                  style={{ color: 'rgba(240,244,255,0.7)', textAlign: 'right', fontWeight: 500 }}
                  dir="rtl"
                  lang="ar"
                >
                  📍 أبوكبير : ش السكة الحديد أمام مستشفى أبوكبير المركزي
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}