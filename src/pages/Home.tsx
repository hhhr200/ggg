import {
  BatteryCharging,
  CheckCircle2,
  Clock,
  Cpu,
  Droplets,
  MapPin,
  PhoneCall,
  PlugZap,
  Quote,
  ShieldCheck,
  Smartphone,
  Star,
  Truck,
  Wrench,
} from 'lucide-react'
import LeadForm from '@/components/LeadForm'
import '../App.css'

const SERVICES = [
  { icon: Smartphone, title: 'החלפת מסך', desc: 'מסכים מקוריים בלבד, התקנה במקום תוך 30 דקות' },
  { icon: BatteryCharging, title: 'החלפת סוללה', desc: 'סוללות באיכות מקור עם אחריות מלאה' },
  { icon: Droplets, title: 'נזקי נוזלים', desc: 'טיפול מעבדה מקצועי בהרטבות וטבילות' },
  { icon: PlugZap, title: 'שקעי טעינה', desc: 'תיקון והחלפת שקעים, כבלים ומעגלים' },
  { icon: Cpu, title: 'תיקוני לוח אם', desc: 'הלחמות ורכיבים ברמת שבב — גם תקלות מורכבות' },
  { icon: Wrench, title: 'תוכנה ושחזור', desc: 'הסרת נעילות, שחזור מידע ועדכוני מערכת' },
]

const STEPS = [
  { num: '01', title: 'משאירים מספר', desc: 'ממלאים את הטופס — זה לוקח 20 שניות' },
  { num: '02', title: 'אנחנו חוזרים אליכם', desc: 'נציג מתקשר תוך 15 דקות עם הצעת מחיר מדויקת' },
  { num: '03', title: 'הפלאפון מתוקן', desc: 'שליח אוסף או שהגעה למעבדה — וקבלה עם אחריות' },
]

const TESTIMONIALS = [
  {
    name: 'דנה ל.',
    text: 'המסך נשבר בבוקר, בצהריים כבר היה פלאפון חדש ביד. שירות ברמה אחרת לגמרי.',
    device: 'iPhone 14 Pro',
  },
  {
    name: 'אבי מ.',
    text: 'חשבתי שהמידע אבוד אחרי שהפלאפון נפל למים. שחזרו הכל, כולל תמונות מהחתונה.',
    device: 'Galaxy S23',
  },
  {
    name: 'מיכל ר.',
    text: 'מחיר הוגן, הסבר ברור על כל שלב, ואחריות בכתב. סוף סוף מעבדה שאפשר לסמוך עליה.',
    device: 'iPhone 12',
  },
]

const STATS = [
  { value: '+12,000', label: 'תיקונים שבוצעו' },
  { value: '4.9★', label: 'דירוג לקוחות' },
  { value: '15 דק׳', label: 'זמן חזרה ממוצע' },
  { value: 'שנה', label: 'אחריות על תיקון' },
]

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-white text-slate-900 antialiased">
      {/* ===== Header ===== */}
      <header className="sticky inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/images/hero.jpg"
              alt="Phone First Class — לוגו"
              className="h-9 w-9 rounded-lg border border-slate-200 object-cover"
            />
            <div className="leading-tight">
              <span className="block text-sm font-extrabold tracking-wide text-slate-900">
                phone<span className="text-blue-600">first</span>class
              </span>
              <span className="block text-[11px] text-slate-500">מעבדת תיקון פלאפונים</span>
            </div>
          </a>
          <nav aria-label="ניווט ראשי" className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#services" className="transition hover:text-blue-600">שירותים</a>
            <a href="#how" className="transition hover:text-blue-600">איך זה עובד</a>
            <a href="#reviews" className="transition hover:text-blue-600">המלצות</a>
          </nav>
          <a
            href="#lead-form"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
          >
            השאירו מספר
          </a>
        </div>
      </header>

      {/* ===== Hero: תמונה → טופס → שאר התוכן ===== */}
      <section id="top" className="relative overflow-hidden pt-8 pb-16 sm:pt-10">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-[110px]" />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
          {/* לוגו / תמונה */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-blue-600/10" />
            <img
              src="/images/hero.jpg"
              alt="Phone First Class — מעבדת תיקון פלאפונים"
              className="relative w-full rounded-2xl border border-slate-200 shadow-xl"
            />
            {/* תגיות צפות */}
            <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-lg sm:-right-6">
              <Clock className="h-5 w-5 text-blue-600" />
              <div className="text-xs leading-tight">
                <span className="block font-bold text-slate-900">תיקון תוך שעה</span>
                <span className="text-slate-500">ברוב התקלות</span>
              </div>
            </div>
            <div className="absolute -left-3 bottom-8 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-lg sm:-left-6">
              <Truck className="h-5 w-5 text-blue-600" />
              <div className="text-xs leading-tight">
                <span className="block font-bold text-slate-900">איסוף עד הבית</span>
                <span className="text-slate-500">באזור באר שבע</span>
              </div>
            </div>
          </div>

          {/* טופס לידים */}
          <div id="lead-form" className="mt-10 scroll-mt-16">
            <LeadForm />
          </div>

          {/* טקסט */}
          <div className="mt-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
              <ShieldCheck className="h-4 w-4" />
              תיקון מהיר תוך שעה · אבחון חינם · אחריות שנה
            </span>
            <h1 className="mt-5 text-3xl font-black leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
              הפלאפון נשבר?
              <br />
              <span className="text-blue-600">אנחנו חוזרים אליכם תוך 15 דקות</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-slate-600">
              מעבדת התיקונים <strong className="text-slate-900">Phone First Class</strong> בבאר שבע
              מתמחה בתיקון מהיר לכל המכשירים — עם שליח עד הבית, מחיר מסודר מראש ואחריות מלאה
              על כל תיקון.
            </p>
            <ul className="mx-auto mt-5 inline-flex max-w-lg flex-col items-start space-y-2.5 text-right">
              {[
                'שליח אוסף את המכשיר — בלי לצאת מהבית',
                'הצעת מחיר מדויקת לפני תחילת העבודה',
                'רוב התיקונים מסתיימים תוך פחות משעה',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== סטטיסטיקות ===== */}
      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-5 text-center transition hover:border-blue-200 hover:bg-blue-50/60"
            >
              <div className="text-2xl font-black text-blue-600 sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== שירותים — שורה אחת ===== */}
      <section id="services" className="mx-auto mt-14 max-w-6xl scroll-mt-16 px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">מה אנחנו מתקנים?</h2>
          <p className="mt-2 text-slate-600">כל מותג, כל דגם, כל תקלה — iPhone, Samsung, Xiaomi ועוד</p>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              title={s.desc}
              className="group flex items-center gap-2.5 rounded-full border border-slate-200 bg-white py-2 pl-4 pr-2.5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <s.icon className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold text-slate-800">{s.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== איך זה עובד ===== */}
      <section id="how" className="mx-auto mt-14 max-w-6xl scroll-mt-16 px-4 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          <div className="text-center">
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">איך זה עובד?</h2>
            <p className="mt-2 text-slate-600">שלושה צעדים פשוטים — ואתם חוזרים לשגרה</p>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative text-center">
                {i < STEPS.length - 1 && (
                  <div className="absolute right-[15%] top-7 hidden h-px w-[70%] bg-blue-200 md:block" />
                )}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-blue-200 bg-white text-xl font-black text-blue-600 shadow-sm">
                  {step.num}
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-base font-extrabold text-white shadow-md transition hover:bg-blue-700"
            >
              <PhoneCall className="h-5 w-5" />
              מתחילים עכשיו — זה חינם
            </a>
          </div>
        </div>
      </section>

      {/* ===== המלצות ===== */}
      <section id="reviews" className="mx-auto mt-14 max-w-6xl scroll-mt-16 px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">לקוחות מספרים</h2>
          <div className="mt-2 flex items-center justify-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="mr-2 text-sm text-slate-600">4.9 מתוך 800+ ביקורות</span>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <Quote className="h-6 w-6 text-blue-300" />
              <blockquote className="mt-3 flex-1 leading-relaxed text-slate-700">{t.text}</blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <span className="block font-bold text-slate-900">{t.name}</span>
                  <span className="text-sm text-slate-500">{t.device}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ===== CTA אחרון ===== */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
            התקלה לא מחכה — <span className="text-blue-600">גם אנחנו לא</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            השאירו מספר עכשיו וקבלו הצעת מחיר מדויקת תוך 15 דקות, בלי התחייבות ובלי אותיות קטנות.
          </p>
          <a
            href="#lead-form"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-extrabold text-white shadow-md transition hover:bg-blue-700"
          >
            <PhoneCall className="h-5 w-5" />
            להשארת מספר
          </a>
        </div>
      </section>

      {/* ===== פוטר ===== */}
      <footer className="mt-14 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/hero.jpg"
              alt="Phone First Class"
              className="h-10 w-10 rounded-lg border border-slate-200 object-cover"
            />
            <div className="leading-tight">
              <span className="block font-extrabold text-slate-900">
                phone<span className="text-blue-600">first</span>class
              </span>
              <span className="block text-xs text-slate-500">מעבדת תיקון פלאפונים</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-sm text-slate-600 md:items-start">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              שירות איסוף באזור באר שבע והדרום
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              א׳–ה׳ 09:00–19:00 · ו׳ 09:00–13:00
            </span>
          </div>
          <p className="text-xs text-slate-500">© 2026 Phone First Class. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  )
}
