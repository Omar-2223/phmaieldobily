'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from './LanguageProvider';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-end pb-16 md:pb-28">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 bg-background">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1cc77b8a6-1768683532632.png"
          alt="Modern pharmacy interior with clean organized medicine shelves, professional clinical lighting, premium medical environment"
          fill
          priority
          className="w-full h-full object-cover animate-cinematic opacity-0"
          sizes="100vw"
          unoptimized />

        {/* Scrim layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/50 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D1A]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#060D1A]/20" />
      </div>
      {/* Live status badge */}
      <div className="absolute top-28 right-6 md:right-12 z-20 animate-slide-up opacity-0 [animation-delay:2.2s]">
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0B1A30]/80 backdrop-blur-md border border-white/10">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="text-xs font-mono tracking-wider text-foreground/90 uppercase">
            {lang === 'ar' ? 'مباشر: أبوكبير' : 'Live: Abu Kabir'}
          </span>
        </div>
      </div>
      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

          {/* Left: Headline (spans 7 cols) */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="animate-slide-up opacity-0 [animation-delay:1.0s] mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-primary/70" />
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[11px] font-semibold tracking-widest text-primary uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t('hero.badge')}
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-bold leading-[0.88] tracking-tight text-foreground ${
              lang === 'ar' ? 'font-arabic' : ''}`
              }>

              <span className="block text-[clamp(3.5rem,10vw,8rem)] animate-slide-up opacity-0 [animation-delay:1.2s] text-foreground drop-shadow-2xl">
                {t('hero.headline1')}
              </span>
              <span className="block text-[clamp(3.5rem,10vw,8rem)] animate-slide-up opacity-0 [animation-delay:1.4s] text-primary drop-shadow-2xl">
                {t('hero.headline2')}
              </span>
            </h1>
          </div>

          {/* Right: Glass card (spans 4 cols, starts at col 9) */}
          <div className="lg:col-span-4 lg:col-start-9 animate-slide-up opacity-0 [animation-delay:1.6s]">
            <div
              className="relative overflow-hidden rounded-2xl border border-white/10 p-7 md:p-8 shadow-2xl bg-white/10 dark:bg-[#0B1A30]/70 backdrop-blur-2xl"
              style={{
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)'
             }}>

              {/* Shimmer */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none animate-shimmer-effect" />

              <div className="relative z-10">
                <p
                  className={`text-base md:text-lg text-foreground/80 font-light leading-relaxed mb-7 ${
                  lang === 'ar' ? 'font-arabic text-right' : ''}`
                  }>

                  {t('hero.description')}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6 mb-7">
                  {[
                  { val: t('hero.stat1.value'), lbl: t('hero.stat1.label') },
                  { val: t('hero.stat2.value'), lbl: t('hero.stat2.label') },
                  { val: t('hero.stat3.value'), lbl: t('hero.stat3.label') }]?.
                  map((stat) =>
                  <div key={stat?.lbl} className={lang === 'ar' ? 'text-right' : ''}>
                      <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-medium">
                        {stat?.lbl}
                      </span>
                      <span
                      className={`text-2xl font-bold text-foreground ${
                      lang === 'ar' ? 'font-arabic' : ''}`
                      }>

                        {stat?.val}
                      </span>
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/download"
                    className="group relative flex-1 flex items-center justify-center gap-2 rounded-xl py-3 px-5 font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #00C9A7 0%, #00A88A 60%, #3D8BFF 100%)',
                      boxShadow: '0 8px 28px -6px rgba(0,201,167,0.55)'
                    }}>

                    <span className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Icon name="ArrowDownTrayIcon" size={16} className="relative z-10" />
                    <span className="relative z-10">{t('hero.cta.download')}</span>
                  </Link>

                  <a
                    href="#features"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 px-5 font-medium text-sm text-foreground/80 border border-border bg-background/40 hover:bg-background/70 hover:text-foreground transition-all duration-300"

                    {t('hero.cta.learn')}
                    <Icon name="ChevronDownIcon" size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-slide-up opacity-0 [animation-delay:2.5s]">
        <span className="text-[10px] uppercase tracking-widest text-foreground/30">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>);

}