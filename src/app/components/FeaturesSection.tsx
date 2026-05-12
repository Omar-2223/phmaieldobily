'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import Icon from '@/components/ui/AppIcon';

const featureKeys = [
  { key: 'f1', icon: 'MagnifyingGlassIcon', color: '#00C9A7' },
  { key: 'f2', icon: 'SparklesIcon', color: '#3D8BFF' },
  { key: 'f3', icon: 'ChatBubbleLeftRightIcon', color: '#A78BFA' },
  { key: 'f4', icon: 'ClockIcon', color: '#F59E0B' },
  { key: 'f5', icon: 'TruckIcon', color: '#34D399' },
  { key: 'f6', icon: 'ShieldCheckIcon', color: '#60A5FA' },
];

export default function FeaturesSection() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="features"
      className="relative py-24 md:py-32 border-t border-white/[0.04]"
    >
      {/* Section number watermark */}
      <div className="absolute top-12 right-6 md:right-12 opacity-[0.04] font-bold text-[8rem] md:text-[11rem] leading-none text-white pointer-events-none select-none tracking-tighter">
        02
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div
          className={`mb-16 animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.2s_both] ${
            lang === 'ar' ? 'text-right' : ''
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[11px] font-semibold tracking-widest text-primary uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t('features.badge')}
          </span>
          <h2
            className={`text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight text-foreground ${
              lang === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {t('features.headline')}
          </h2>
          <p
            className={`mt-4 text-lg text-muted-foreground max-w-xl font-light ${
              lang === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {t('features.sub')}
          </p>
        </div>

        {/* Features Grid — spotlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featureKeys.map((feat, i) => (
            <div
              key={feat.key}
              className="spotlight-card group rounded-2xl p-8 lg:p-10 animate-on-scroll opacity-100 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--bg-card, rgba(11, 26, 48, 0.6))',
                border: '1px solid var(--bg-card-border, rgba(26,48,80,0.8))',
                animationDelay: `${0.2 + i * 0.1}s`,
                animationDuration: '0.8s',
                animationName: 'animationIn',
                animationFillMode: 'forwards',
              }}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-[11px] font-mono text-white/15">
                0{i + 1}
              </span>

              <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: `${feat.color}14`,
                    borderColor: `${feat.color}30`,
                  }}
                >
                  <Icon
                    name={feat.icon as Parameters<typeof Icon>[0]['name']}
                    size={24}
                    className="transition-colors"
                    style={{ color: feat.color } as React.CSSProperties}
                  />
                </div>

                {/* Content */}
                <div className={lang === 'ar' ? 'text-right' : ''}>
                  <h3
                    className={`text-xl font-semibold text-foreground mb-3 ${
                      lang === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {t(`features.${feat.key}.title`)}
                  </h3>
                  <p
                    className={`text-sm text-muted-foreground leading-relaxed ${
                      lang === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {t(`features.${feat.key}.desc`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}