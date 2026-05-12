'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from './LanguageProvider';
import Icon from '@/components/ui/AppIcon';

// BENTO GRID AUDIT
// Array has 6 cards: [PharmacyImage, TrustHeader, SearchStat, OrderStat, ServiceStat, ScaleCard]
// Step 2 — Map (12-col grid, lg):
// Row 1: [col-1-4: PharmacyImage cs-4 rs-2] [col-5-12: TrustHeader cs-8]
// Row 2: [col-1-4: PharmacyImage(cont)]     [col-5-8: SearchStat cs-4] [col-9-12: OrderStat cs-4]
// Row 3: [col-1-4: ServiceStat cs-4]        [col-5-8: GrowthCard cs-4] [col-9-12: ScaleCard cs-4]
// Placed 6/6 cards ✓

const trustPoints = [
{ icon: 'CheckBadgeIcon', labelEn: 'Licensed Pharmacists', labelAr: 'صيادلة مرخصون', color: '#00C9A7' },
{ icon: 'BoltIcon', labelEn: 'Fast Dispensing', labelAr: 'صرف سريع', color: '#3D8BFF' },
{ icon: 'HeartIcon', labelEn: 'Patient-First Care', labelAr: 'رعاية المريض أولاً', color: '#F472B6' }];


export default function TrustMetricsSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative py-20 md:py-28 border-t border-white/[0.04]">
      {/* Section number watermark */}
      <div className="absolute top-12 left-6 md:left-12 opacity-[0.04] font-bold text-[8rem] md:text-[11rem] leading-none text-white pointer-events-none select-none tracking-tighter">
        03
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div
          className={`mb-14 animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.2s_both] ${
          lang === 'ar' ? 'text-right' : ''}`
          }>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-[11px] font-semibold tracking-widest text-accent uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t('trust.badge')}
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight text-foreground ${
            lang === 'ar' ? 'font-arabic' : ''}`
            }>

            {t('trust.headline')}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">

          {/* CARD 1: PharmacyImage — cs-4 rs-2 */}
          <div className="md:col-span-12 lg:col-span-4 lg:row-span-2 relative h-[280px] lg:h-auto overflow-hidden rounded-2xl group spotlight-card animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.3s_both]"
          style={{ background: '#0B1A30', minHeight: '280px' }}>

            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1cc77b8a6-1768683532632.png"
              alt="Professional pharmacy shelves with organized medicine bottles and pharmaceutical products in a clean clinical setting"
              fill
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized />

            <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-transparent to-transparent" />
            <div className="absolute top-5 left-5 text-[10px] font-mono text-primary/60 tracking-widest uppercase">(001)</div>
            <div className="absolute bottom-5 left-5 right-5">
              <div
                className="p-3 rounded-xl"
                style={{ background: 'rgba(6,13,26,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>

                <div className="text-[9px] text-white/40 uppercase tracking-widest mb-2 font-medium">
                  {lang === 'ar' ? 'نظام التحقق' : 'Verification System'}
                </div>
                <div className="h-1 w-full rounded-full overflow-hidden" style={{ background: '#1A3050' }}>
                  <div className="h-full w-[92%] rounded-full" style={{ background: 'linear-gradient(90deg, #00C9A7, #3D8BFF)' }} />
                </div>
                <div className="flex justify-between text-[9px] mt-2 font-mono text-primary/70">
                  <span>{lang === 'ar' ? 'موثوق' : 'Verified'}</span>
                  <span>92%</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: TrustHeader — cs-8 */}
          <div
            className="md:col-span-12 lg:col-span-8 rounded-2xl p-8 lg:p-10 flex flex-col justify-between min-h-[200px] spotlight-card animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.4s_both]"
            style={{ background: 'var(--bg-card, rgba(11,26,48,0.6))', border: '1px solid var(--bg-card-border, rgba(26,48,80,0.8))' }}>

            <div className={`flex justify-between items-start flex-wrap gap-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              <h3
                className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-foreground ${
                lang === 'ar' ? 'font-arabic text-right' : ''}`
                }>

                {lang === 'ar' ?
                <>صيدلية <span className="text-muted-foreground font-light">موثوقة</span> وسريعة</> :

                <>Trusted <span className="text-muted-foreground font-light">Pharmacy,</span> Fast Care</>
                }
              </h3>
              <span className="text-[10px] font-mono text-muted-foreground tracking-widest">[LIVE]</span>
            </div>
            <div className={`flex flex-wrap gap-3 mt-6 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              {trustPoints.map((pt) =>
              <div
                key={pt.labelEn}
                className="flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{ background: `${pt.color}12`, border: `1px solid ${pt.color}25` }}>

                  <Icon
                  name={pt.icon as Parameters<typeof Icon>[0]['name']}
                  size={14}
                  style={{ color: pt.color } as React.CSSProperties} />

                  <span
                  className={`text-xs font-medium ${lang === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: pt.color }}>

                    {lang === 'ar' ? pt.labelAr : pt.labelEn}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* CARD 3: SearchStat — cs-4 */}
          <div
            className="md:col-span-6 lg:col-span-4 rounded-2xl p-6 flex flex-col justify-between gap-5 spotlight-card animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.5s_both]"
            style={{ background: 'var(--bg-card, rgba(11,26,48,0.6))', border: '1px solid var(--bg-card-border, rgba(26,48,80,0.8))' }}>

            <div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-medium">
                {lang === 'ar' ? 'أدوية متوفرة' : 'Medicines Available'}
              </div>
              <div
                className={`text-4xl font-bold text-foreground ${lang === 'ar' ? 'font-arabic' : ''}`}
                style={{ fontVariantNumeric: 'tabular-nums' }}>

                5,000+
              </div>
            </div>
            {/* Skewed stat bars */}
            <div className="space-y-2">
              <div className="flex gap-0.5 h-2">
                {[80, 80, 80, 80, 80, 80, 20, 20].map((opacity, i) =>
                <div
                  key={i}
                  className="stat-bar-segment rounded-sm"
                  style={{ background: `rgba(0,201,167,${opacity / 100})` }} />

                )}
              </div>
              <div className="flex justify-between text-[9px] text-muted-foreground font-mono uppercase">
                <span>{lang === 'ar' ? 'بداية' : 'Low'}</span>
                <span>{lang === 'ar' ? 'ذروة' : 'Peak'}</span>
              </div>
            </div>
          </div>

          {/* CARD 4: OrderStat — cs-4 */}
          <div
            className="md:col-span-6 lg:col-span-4 rounded-2xl p-6 flex flex-col justify-between gap-5 spotlight-card animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.6s_both]"
            style={{ background: 'var(--bg-card, rgba(11,26,48,0.6))', border: '1px solid var(--bg-card-border, rgba(26,48,80,0.8))' }}>

            <div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-medium">
                {lang === 'ar' ? 'وقت الخدمة' : 'Service Uptime'}
              </div>
              <div
                className={`text-4xl font-bold text-foreground ${lang === 'ar' ? 'font-arabic' : ''}`}>

                99.9%
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-0.5 h-2">
                {[100, 100, 100, 100, 100, 100, 100, 100].map((_, i) =>
                <div
                  key={i}
                  className="stat-bar-segment rounded-sm"
                  style={{ background: 'rgba(61,139,255,0.8)' }} />

                )}
              </div>
              <div className="flex justify-between text-[9px] text-muted-foreground font-mono uppercase">
                <span>{lang === 'ar' ? 'منخفض' : 'Offline'}</span>
                <span>{lang === 'ar' ? 'مستقر' : 'Stable'}</span>
              </div>
            </div>
          </div>

          {/* CARD 5: ServiceStat — cs-4 */}
          <div
            className="md:col-span-6 lg:col-span-4 rounded-2xl p-6 flex flex-col justify-between gap-5 spotlight-card animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.5s_both]"
            style={{ background: 'var(--bg-card, rgba(11,26,48,0.6))', border: '1px solid var(--bg-card-border, rgba(26,48,80,0.8))' }}>

            <div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-medium">
                {lang === 'ar' ? 'وقت الاستجابة' : 'Avg. Response'}
              </div>
              <div className="text-4xl font-bold text-foreground">&lt;5 min</div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-0.5 h-2">
                {[80, 80, 80, 80, 80, 20, 20, 20].map((opacity, i) =>
                <div
                  key={i}
                  className="stat-bar-segment rounded-sm"
                  style={{ background: `rgba(167,139,250,${opacity / 100})` }} />

                )}
              </div>
              <div className="flex justify-between text-[9px] text-muted-foreground font-mono uppercase">
                <span>{lang === 'ar' ? 'بطيء' : 'Slow'}</span>
                <span>{lang === 'ar' ? 'سريع' : 'Fast'}</span>
              </div>
            </div>
          </div>

          {/* CARD 6: ScaleCard — cs-4 */}
          <div
            className="md:col-span-6 lg:col-span-4 rounded-2xl p-7 flex flex-col justify-between spotlight-card animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.6s_both]"
            style={{ background: 'var(--bg-card, rgba(11,26,48,0.6))', border: '1px solid var(--bg-card-border, rgba(26,48,80,0.8))' }}>

            <div className="flex justify-between items-start">
              <div className="text-[10px] font-mono text-muted-foreground tracking-widest">[005]</div>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(0,201,167,0.12)', border: '1px solid rgba(0,201,167,0.25)' }}>

                <Icon name="BeakerIcon" size={14} style={{ color: '#00C9A7' } as React.CSSProperties} />
              </div>
            </div>
            <div>
              <h3
                className={`text-2xl font-bold text-foreground tracking-tight leading-tight mb-4 ${
                lang === 'ar' ? 'font-arabic text-right' : ''}`
                }>

                {lang === 'ar' ?
                <>مصمم للنمو <span className="text-muted-foreground font-light">اللامحدود</span></> :

                <>Built for <span className="text-muted-foreground font-light">Infinite</span> Growth</>
                }
              </h3>
              <p
                className={`text-[11px] uppercase leading-relaxed font-medium text-muted-foreground tracking-wide border-t pt-4 mb-5 ${
                lang === 'ar' ? 'font-arabic text-right border-border' : 'border-border'}`
                }>

                {lang === 'ar' ? 'نظام ذكي يتطور مع كل طلب.' : 'Smart system that evolves with every request.'}
              </p>
              <div
                className="p-3 rounded-xl"
                style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.06)' }}>

                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Icon name="BoltIcon" size={12} style={{ color: '#00C9A7' } as React.CSSProperties} />
                    <span className="text-foreground text-sm font-bold font-mono">97.8%</span>
                  </div>
                  <span className="text-[9px] text-muted-foreground uppercase tracking-widest">
                    {lang === 'ar' ? 'كفاءة' : 'Efficiency'}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: '#1A3050' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: '97.8%', background: 'linear-gradient(90deg, #00C9A7, #3D8BFF)' }} />

                </div>
              </div>
            </div>
          </div>

          {/* CARD 7: GrowthCard — cs-4 */}
          <div
            className="md:col-span-6 lg:col-span-4 rounded-2xl p-7 flex flex-col justify-between spotlight-card animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.7s_both]"
            style={{ background: 'var(--bg-card, rgba(11,26,48,0.6))', border: '1px solid var(--bg-card-border, rgba(26,48,80,0.8))' }}>

            <div>
              <div className="text-[10px] text-muted-foreground font-mono tracking-widest mb-2">(004)</div>
              <h3
                className={`text-2xl font-bold tracking-tight mb-4 leading-tight text-foreground ${
                lang === 'ar' ? 'font-arabic text-right' : ''}`
                }>

                {lang === 'ar' ?
                <>رضا <span className="text-muted-foreground font-light">العملاء</span></> :

                <>Customer <span className="text-muted-foreground font-light">Satisfaction</span></>
                }
              </h3>
              <div
                className={`text-[10px] uppercase font-medium text-muted-foreground tracking-wide max-w-[180px] ${
                lang === 'ar' ? 'font-arabic text-right' : ''}`
                }>

                {lang === 'ar' ? 'تحويل ثقة العملاء إلى قيمة حقيقية.' : 'Turning patient trust into measurable value.'}
              </div>
            </div>
            {/* Mini bar chart */}
            <div className="mt-6">
              <div
                className="flex h-[100px] border-b pb-4 relative gap-2 items-end"
                style={{ borderColor: 'rgba(26,48,80,0.8)' }}>

                {[
                { h: '25%', bg: '#1A3050' },
                { h: '45%', bg: '#243856' },
                { h: '70%', bg: '#2D4870' },
                { h: '100%', bg: 'linear-gradient(to top, #00C9A7, #3D8BFF)' }].
                map((bar, i) =>
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all duration-300 hover:opacity-80"
                  style={{ height: bar.h, background: bar.bg }} />

                )}
              </div>
              <div className="flex justify-between items-center mt-2 text-[10px] font-mono">
                <span className="text-muted-foreground">2023</span>
                <span
                  className="font-semibold"
                  style={{ color: '#00C9A7' }}>

                  2026
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>);

}