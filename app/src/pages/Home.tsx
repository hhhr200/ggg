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
    <div dir="rtl" className="min-h-screen bg-[#05080f] text-slate-100 antialiased">
      {/* ===== Header ===== */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#05080f]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/images/hero.jpg"
              alt="Phone First Class — לוגו"
              className="h-10 w-10 rounded-lg border border-white/10 object-cover"
            />
            <div className="leading-tight">
              <span className="block text-sm font-extrabold tracking-wide text-white">
                phone<span className="text-sky-400">first</span>class
              </span>
              <span className="block text-[11px] text-slate-400">מעבדת תיקון פלאפונים</span>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-sky-400">שירותים</a>
            <a href="#how" className="transition hover:text-sky-400">איך זה עובד</a>
            <a href="#reviews" className="transition hover:text-sky-400">המלצות</a>
          </nav>
          <a
            href="#lead-form"
            className="rounded-full bg-sky-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
          >
            השאירו מספר
          </a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="top" className="relative overflow-hidden pt-28 pb-36 sm:pt-32">
        {/* הילות רקע */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-sky-600/20 blur-[140px]" />
        <div className="pointer-events-none absolute top-40 right-[-150px] h-[350px] w-[350px] rounded-full bg-blue-800/25 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          {/* טקסט */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-sm font-semibold text-sky-300">
              <ShieldCheck className="h-4 w-4" />
              אבחון חינם · אחריות שנה · חלקים מקוריים
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.15] text-white sm:text-5xl lg:text-[3.4rem]">
              הפלאפון נשבר?
              <br />
              <span className="bg-gradient-to-l from-sky-400 via-blue-400 to-slate-200 bg-clip-text text-transparent">
                אנחנו חוזרים אליכם תוך 15 דקות
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-400">
              מעבדת התיקונים <strong className="text-slate-200">Phone First Class</strong> מתמחה
              בתיקוני חומרה ותוכנה לכל המכשירים — עם שליח עד הבית, מחיר מסודר מראש ואחריות מלאה
              על כל תיקון.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                'שליח אוסף את המכשיר — בלי לצאת מהבית',
                'הצעת מחיר מדויקת לפני תחילת העבודה',
                'רוב התיקונים מסתיימים באותו היום',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* לוגו / תמונה */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-sky-500/25 blur-[90px]" />
            <img
              src="/images/hero.jpg"
              alt="Phone First Class — מעבדת תיקון פלאפונים"
              className="w-full rounded-3xl border border-white/10 shadow-2xl shadow-sky-900/40"
            />
            {/* תגיות צפות */}
            <div className="absolute -right-3 top-8 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0a1120]/90 px-3.5 py-2.5 shadow-xl backdrop-blur-sm sm:-right-6">
              <Clock className="h-5 w-5 text-sky-400" />
              <div className="text-xs leading-tight">
                <span className="block font-bold text-white">תיקון באותו יום</span>
                <span className="text-slate-400">ברוב התקלות</span>
              </div>
            </div>
            <div className="absolute -left-3 bottom-10 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0a1120]/90 px-3.5 py-2.5 shadow-xl backdrop-blur-sm sm:-left-6">
              <Truck className="h-5 w-5 text-sky-400" />
              <div className="text-xs leading-tight">
                <span className="block font-bold text-white">איסוף עד הבית</span>
                <span className="text-slate-400">באזור המרכז</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== טופס לידים (מציץ מעל הגבול) ===== */}
      <section id="lead-form" className="relative z-10 -mt-24 scroll-mt-24 px-4 sm:px-6">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1424] to-[#070d18] p-2 shadow-2xl shadow-sky-950/50">
          <LeadForm />
        </div>
      </section>

      {/* ===== סטטיסטיקות ===== */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-7 text-center"
            >
              <div className="text-3xl font-black text-sky-400 sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== שירותים ===== */}
      <section id="services" className="mx-auto mt-24 max-w-6xl scroll-mt-24 px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">מה אנחנו מתקנים?</h2>
          <p className="mt-3 text-slate-400">כל מותג, כל דגם, כל תקלה — iPhone, Samsung, Xiaomi ועוד</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/5 bg-white/[0.03] p-7 transition hover:border-sky-400/40 hover:bg-sky-400/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 transition group-hover:bg-sky-400 group-hover:text-slate-950">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== איך זה עובד ===== */}
      <section id="how" className="mx-auto mt-24 max-w-6xl scroll-mt-24 px-4 sm:px-6">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white sm:text-4xl">איך זה עובד?</h2>
            <p className="mt-3 text-slate-400">שלושה צעדים פשוטים — ואתם חוזרים לשגרה</p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative text-center">
                {i < STEPS.length - 1 && (
                  <div className="absolute right-[15%] top-8 hidden h-px w-[70%] bg-gradient-to-l from-sky-400/50 to-transparent md:block" />
                )}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-400/10 text-2xl font-black text-sky-400">
                  {step.num}
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-8 py-3.5 text-lg font-extrabold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              <PhoneCall className="h-5 w-5" />
              מתחילים עכשיו — זה חינם
            </a>
          </div>
        </div>
      </section>

      {/* ===== המלצות ===== */}
      <section id="reviews" className="mx-auto mt-24 max-w-6xl scroll-mt-24 px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">לקוחות מספרים</h2>
          <div className="mt-3 flex items-center justify-center gap-1 text-sky-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="mr-2 text-sm text-slate-400">4.9 מתוך 800+ ביקורות</span>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] p-7"
            >
              <Quote className="h-7 w-7 text-sky-400/50" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-slate-300">{t.text}</blockquote>
              <figcaption className="mt-5 border-t border-white/5 pt-4">
                <span className="block font-bold text-white">{t.name}</span>
                <span className="text-sm text-slate-500">{t.device}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ===== CTA אחרון ===== */}
      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-l from-sky-600/20 via-[#0a1428] to-[#070d18] p-10 text-center sm:p-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-sky-500/20 blur-[100px]" />
          <h2 className="relative text-3xl font-black text-white sm:text-4xl">
            התקלה לא מחכה — <span className="text-sky-400">גם אנחנו לא</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-slate-300">
            השאירו מספר עכשיו וקבלו הצעת מחיר מדויקת תוך 15 דקות, בלי התחייבות ובלי אותיות קטנות.
          </p>
          <a
            href="#lead-form"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-sky-500 px-9 py-4 text-lg font-extrabold text-white shadow-xl shadow-sky-500/30 transition hover:bg-sky-400"
          >
            <PhoneCall className="h-5 w-5" />
            להשארת מספר
          </a>
        </div>
      </section>

      {/* ===== פוטר ===== */}
      <footer className="mt-24 border-t border-white/5 bg-[#04060b]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/hero.jpg"
              alt="Phone First Class"
              className="h-12 w-12 rounded-xl border border-white/10 object-cover"
            />
            <div className="leading-tight">
              <span className="block font-extrabold text-white">
                phone<span className="text-sky-400">first</span>class
              </span>
              <span className="block text-xs text-slate-500">מעבדת תיקון פלאפונים</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-slate-400 md:items-start">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-400" />
              שירות איסוף באזור המרכז והשרון
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-sky-400" />
              א׳–ה׳ 09:00–19:00 · ו׳ 09:00–13:00
            </span>
          </div>
          <p className="text-xs text-slate-600">© 2026 Phone First Class. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  )
}
