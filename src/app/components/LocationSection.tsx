'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import Icon from '@/components/ui/AppIcon';

export default function LocationSection() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="location"
      className="relative py-20 md:py-28 border-t border-white/[0.04]"
    >
      {/* Section number watermark */}
      <div className="absolute top-12 right-6 md:right-12 opacity-[0.04] font-bold text-[8rem] md:text-[11rem] leading-none text-white pointer-events-none select-none tracking-tighter">
        04
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div
          className={`mb-14 animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.2s_both] ${
            lang === 'ar' ? 'text-right' : ''
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[11px] font-semibold tracking-widest text-primary uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t('location.badge')}
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight text-foreground ${
              lang === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {t('location.headline')}
          </h2>
        </div>

        {/* Location Card */}
        <div
          className="animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.3s_both] rounded-3xl overflow-hidden"
          style={{
            background: 'var(--bg-card, rgba(11,26,48,0.7))',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(0,201,167,0.2)',
            boxShadow: '0 0 60px -20px rgba(0,201,167,0.15), 0 25px 50px -15px rgba(0,0,0,0.5)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Map placeholder / visual */}
            <div
              className="relative h-64 lg:h-auto min-h-[280px] overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0B1A30 0%, #0D2040 50%, #091525 100%)' }}
            >
              {/* Decorative grid map */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0,201,167,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,167,0.15) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Pulsing location dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Outer pulse rings */}
                  <div
                    className="absolute -inset-8 rounded-full animate-ping opacity-20"
                    style={{ background: 'rgba(0,201,167,0.3)' }}
                  />
                  <div
                    className="absolute -inset-5 rounded-full animate-ping opacity-30"
                    style={{ background: 'rgba(0,201,167,0.4)', animationDelay: '0.5s' }}
                  />
                  {/* Center dot */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #00C9A7, #3D8BFF)',
                      boxShadow: '0 0 40px rgba(0,201,167,0.6)',
                    }}
                  >
                    <Icon name="MapPinIcon" size={22} className="text-white" />
                  </div>
                </div>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B1A30]/60 lg:to-[#0B1A30]/80" />
              {/* Coords label */}
              <div className="absolute bottom-4 left-4 text-[10px] font-mono text-primary/60 tracking-widest">
                30.7254° N, 31.6659° E
              </div>
            </div>

            {/* Right: Address info */}
            <div className={`p-8 md:p-10 flex flex-col justify-between gap-8 ${lang === 'ar' ? 'text-right' : ''}`}>
              {/* Address */}
              <div>
                <div className="flex items-center gap-2 mb-5" style={{ justifyContent: lang === 'ar' ? 'flex-end' : 'flex-start' }}>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(0,201,167,0.15)', border: '1px solid rgba(0,201,167,0.3)' }}
                  >
                    <Icon name="MapPinIcon" size={16} style={{ color: '#00C9A7' } as React.CSSProperties} />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {lang === 'ar' ? 'العنوان' : 'Address'}
                  </span>
                </div>

                {/* Arabic address — prominent */}
                <p
                  className="font-arabic text-foreground leading-relaxed"
                  style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 600 }}
                  dir="rtl"
                  lang="ar"
                >
                  📍 {t('location.address')}
                </p>

                <p
                  className={`mt-3 text-muted-foreground text-sm ${lang === 'ar' ? 'font-arabic' : ''}`}
                >
                  {t('location.city')}
                </p>
              </div>

              {/* Info pills */}
              <div className={`flex flex-wrap gap-3 ${lang === 'ar' ? 'justify-end' : ''}`}>
                {[
                  { icon: 'ClockIcon', textEn: 'Open 24/7', textAr: 'مفتوح ٢٤/٧', color: '#00C9A7' },
                  { icon: 'PhoneIcon', textEn: 'Call Us', textAr: 'اتصل بنا', color: '#3D8BFF' },
                  { icon: 'ChatBubbleLeftEllipsisIcon', textEn: 'WhatsApp', textAr: 'واتساب', color: '#22C55E' },
                ].map((pill) => (
                  <div
                    key={pill.textEn}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: `${pill.color}14`, border: `1px solid ${pill.color}30` }}
                  >
                    <Icon
                      name={pill.icon as Parameters<typeof Icon>[0]['name']}
                      size={14}
                      style={{ color: pill.color } as React.CSSProperties}
                    />
                    <span
                      className={`text-xs font-semibold ${lang === 'ar' ? 'font-arabic' : ''}`}
                      style={{ color: pill.color }}
                    >
                      {lang === 'ar' ? pill.textAr : pill.textEn}
                    </span>
                  </div>
                ))}
              </div>

              {/* Directions button — updated URL */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=صيدلية+مي+الضبيلي"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 w-fit rounded-xl px-6 py-3 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #00C9A7, #3D8BFF)',
                  boxShadow: '0 8px 24px -6px rgba(0,201,167,0.4)',
                  color: '#fff',
                  marginLeft: lang === 'ar' ? 'auto' : undefined,
                }}
              >
                <Icon name="ArrowTopRightOnSquareIcon" size={16} className="text-white" />
                <span className={lang === 'ar' ? 'font-arabic' : ''}>{t('location.directions')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Update Strategy Note */}
        <div
          className="mt-8 rounded-2xl p-6 animate-on-scroll opacity-100 [animation:animationIn_0.8s_ease-out_0.5s_both]"
          style={{
            background: 'var(--bg-card, rgba(11,26,48,0.5))',
            border: '1px solid var(--bg-card-border, rgba(26,48,80,0.6))',
          }}
        >
          <div className={`flex items-start gap-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div
              className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
              style={{ background: 'rgba(61,139,255,0.15)', border: '1px solid rgba(61,139,255,0.3)' }}
            >
              <Icon name="BellAlertIcon" size={18} style={{ color: '#3D8BFF' } as React.CSSProperties} />
            </div>
            <div className={lang === 'ar' ? 'text-right' : ''}>
              <h4
                className={`text-sm font-semibold text-foreground mb-1 ${lang === 'ar' ? 'font-arabic' : ''}`}
              >
                {lang === 'ar' ? 'استراتيجية التحديث' : 'Update Strategy'}
              </h4>
              <p
                className={`text-sm text-muted-foreground leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`}
              >
                {lang === 'ar' ? 'نوصي دائماً بتنزيل أحدث إصدار من موقعنا الرسمي. سجل الدخول للحصول على تنبيهات تلقائية عبر البريد الإلكتروني أو الرسائل القصيرة عند توفر تحديثات جديدة.' : 'We recommend always downloading the latest version from our official website. Subscribe to receive automatic alerts via email or SMS when new updates are available.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
