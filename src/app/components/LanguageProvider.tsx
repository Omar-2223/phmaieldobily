'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'en' | 'ar';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    'nav.downloadApp': 'Download App',
    // Hero
    'hero.badge': 'Smart Pharmacy App',
    'hero.headline1': 'Your Health,',
    'hero.headline2': 'Delivered Smart.',
    'hero.description': 'Ph - Mai Eldobily brings the pharmacy to your fingertips. Search medicines, get smart suggestions, and order with confidence — 24/7.',
    'hero.cta.download': 'Download App',
    'hero.cta.learn': 'Learn More',
    'hero.stat1.value': '5,000+',
    'hero.stat1.label': 'Medicines',
    'hero.stat2.value': '24/7',
    'hero.stat2.label': 'Service',
    'hero.stat3.value': '99.9%',
    'hero.stat3.label': 'Uptime',
    // Features
    'features.badge': 'Core Features',
    'features.headline': 'Everything You Need',
    'features.sub': 'Designed for patients who expect more from their pharmacy.',
    'features.f1.title': 'Search Medicines',
    'features.f1.desc': 'Instantly find any medicine by name, category, or active ingredient with smart autocomplete.',
    'features.f2.title': 'Smart Suggestions',
    'features.f2.desc': 'AI-powered recommendations based on your history and common substitutes.',
    'features.f3.title': 'Fast Support',
    'features.f3.desc': 'Direct WhatsApp and phone support from our licensed pharmacists in minutes.',
    'features.f4.title': '24/7 Service',
    'features.f4.desc': 'Place orders, check availability, and get updates any time of day or night.',
    'features.f5.title': 'Order Tracking',
    'features.f5.desc': 'Real-time status updates from order placement to doorstep delivery.',
    'features.f6.title': 'Secure & Private',
    'features.f6.desc': 'Your health data is encrypted and never shared without your explicit consent.',
    // Trust
    'trust.badge': 'Why Trust Us',
    'trust.headline': 'Built on Reliability',
    // Location
    'location.badge': 'Find Us',
    'location.headline': 'Visit Our Pharmacy',
    'location.address': 'أبوكبير : ش السكة الحديد أمام مستشفى أبوكبير المركزي',
    'location.city': 'Abu Kabir, Sharqia, Egypt',
    'location.directions': 'Get Directions',
    // Download
    'download.badge': 'Get The App',
    'download.headline': 'Download Ph - Mai Eldobily',
    'download.sub': 'Always get the newest version directly from our official source.',
    'download.cta': 'Download App',
    'download.learn': 'Learn More',
    // Social
    'social.headline': 'Connect With Us',
    'social.whatsapp': 'WhatsApp',
    'social.facebook': 'Facebook',
    'social.instagram': 'Instagram',
    // Footer
    'footer.rights': '© 2026 Ph - Mai Eldobily. All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
  },
  ar: {
    // Nav
    'nav.features': 'المميزات',
    'nav.download': 'تحميل',
    'nav.location': 'الموقع',
    'nav.contact': 'تواصل',
    'nav.downloadApp': 'تحميل التطبيق',
    // Hero
    'hero.badge': 'تطبيق الصيدلية الذكي',
    'hero.headline1': 'صحتك،',
    'hero.headline2': 'بذكاء وسرعة.',
    'hero.description': 'صيدلية مي الضبيلي بتسهل عليك الاختيار بذكاء. ابحث عن الأدوية، احصل على اقتراحات ذكية، واطلب بثقة — على مدار الساعة.',
    'hero.cta.download': 'تحميل التطبيق',
    'hero.cta.learn': 'اعرف المزيد',
    'hero.stat1.value': '+٥٬٠٠٠',
    'hero.stat1.label': 'دواء',
    'hero.stat2.value': '24 ساعة',
    'hero.stat2.label': 'خدمة',
    'hero.stat3.value': '٩٩.٩٪',
    'hero.stat3.label': 'استمرارية',
    // Features
    'features.badge': 'المميزات الأساسية',
    'features.headline': 'كل ما تحتاجه',
    'features.sub': 'مصمم للمرضى الذين يتوقعون أكثر من صيدليتهم.',
    'features.f1.title': 'البحث عن الأدوية',
    'features.f1.desc': 'ابحث فوراً عن أي دواء بالاسم أو الفئة أو المادة الفعالة.',
    'features.f2.title': 'اقتراحات ذكية',
    'features.f2.desc': 'توصيات مدعومة بالذكاء الاصطناعي بناءً على تاريخك والبدائل الشائعة.',
    'features.f3.title': 'دعم سريع',
    'features.f3.desc': 'تواصل مباشر عبر واتساب والهاتف معنا.',
    'features.f4.title': 'خدمة 24 ساعة',
    'features.f4.desc': 'اطلب وتحقق من التوفر واحصل على تحديثات في أي وقت.',
    'features.f5.title': 'تتبع الطلب',
    'features.f5.desc': 'تحديثات فورية من لحظة الطلب حتى التسليم.',
    'features.f6.title': 'آمن وخاص',
    'features.f6.desc': 'بياناتك الصحية مشفرة ولا تُشارك دون موافقتك الصريحة.',
    // Trust
    'trust.badge': 'لماذا تثق بنا',
    'trust.headline': 'مبني على الموثوقية',
    // Location
    'location.badge': 'اعثر علينا',
    'location.headline': 'زيارة صيدليتنا',
    'location.address': 'أبوكبير : ش السكة الحديد أمام مستشفى أبوكبير المركزي',
    'location.city': 'أبوكبير، الشرقية، مصر',
    'location.directions': 'الحصول على الاتجاهات',
    // Download
    'download.badge': 'احصل على التطبيق',
    'download.headline': 'تحميل صيدلية مي الضبيلي',
    'download.sub': 'احصل دائماً على أحدث إصدار مباشرة من مصدرنا الرسمي.',
    'download.cta': 'تحميل التطبيق',
    'download.learn': 'اعرف المزيد',
    // Social
    'social.headline': 'تواصل معنا',
    'social.whatsapp': 'واتساب',
    'social.facebook': 'فيسبوك',
    'social.instagram': 'إنستغرام',
    // Footer
    'footer.rights': '© ٢٠٢٦ صيدلية مي الضبيلي. جميع الحقوق محفوظة.',
    'footer.privacy': 'الخصوصية',
    'footer.terms': 'الشروط',
  },
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLang: () => {},
  t: (k) => k,
  dir: 'ltr',
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const t = useCallback(
    (key: string) => translations[lang][key] ?? key,
    [lang]
  );

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, dir }}>
      <div dir={dir} lang={lang} className={lang === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}