import { useState } from 'react'
import { CheckCircle2, Loader2, PhoneCall, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ISSUE_OPTIONS = [
  'מסך שבור / סדוק',
  'סוללה לא מחזיקה',
  'נזק מנוזלים',
  'לא נטען / שקע טעינה',
  'בעיית תוכנה',
  'אחר / לא בטוח',
]

interface Lead {
  name: string
  phone: string
  issue: string
  createdAt: string
}

function normalizePhone(raw: string) {
  return raw.replace(/[^\d]/g, '')
}

function isValidIsraeliPhone(raw: string) {
  const digits = normalizePhone(raw)
  // נייד: 05X-XXXXXXX (10 ספרות) | קווי: 0X-XXXXXXX (9 ספרות)
  return /^0(5\d{8}|[2-4789]\d{7})$/.test(digits)
}

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [issue, setIssue] = useState(ISSUE_OPTIONS[0])
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (name.trim().length < 2) {
      setError('נא להזין שם מלא')
      return
    }
    if (!isValidIsraeliPhone(phone)) {
      setError('נא להזין מספר טלפון ישראלי תקין, למשל 050-1234567')
      return
    }

    setSending(true)
    // שמירה מקומית של הליד (הדמיה — בפרודקשן יישלח לשרת/CRM)
    setTimeout(() => {
      const lead: Lead = {
        name: name.trim(),
        phone: normalizePhone(phone),
        issue,
        createdAt: new Date().toISOString(),
      }
      try {
        const existing = JSON.parse(localStorage.getItem('phonefix-leads') ?? '[]') as Lead[]
        localStorage.setItem('phonefix-leads', JSON.stringify([...existing, lead]))
      } catch {
        localStorage.setItem('phonefix-leads', JSON.stringify([lead]))
      }
      setSending(false)
      setSent(true)
    }, 700)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-emerald-400" />
        <h3 className="text-2xl font-bold text-white">הפרטים התקבלו!</h3>
        <p className="text-slate-300">
          תודה {name.trim()} — נציג שלנו יחזור אליך למספר{' '}
          <span dir="ltr" className="font-semibold text-white">
            {phone}
          </span>{' '}
          תוך 15 דקות בשעות הפעילות.
        </p>
        <button
          onClick={() => {
            setSent(false)
            setName('')
            setPhone('')
          }}
          className="text-sm text-sky-400 underline-offset-4 hover:underline"
        >
          שליחת בקשה נוספת
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-8"
      noValidate
    >
      {!compact && (
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-extrabold text-white">השאירו מספר — אנחנו חוזרים אליכם</h2>
          <p className="mt-1 text-sm text-slate-400">בלי התחייבות, בלי תורים, בלי להמתין בחנות</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="lead-name" className="text-slate-200">
            שם מלא
          </Label>
          <Input
            id="lead-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ישראל ישראלי"
            autoComplete="name"
            className="h-12 border-white/15 bg-white/10 text-white placeholder:text-slate-500 focus-visible:ring-sky-400"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="lead-phone" className="text-slate-200">
            מספר טלפון
          </Label>
          <Input
            id="lead-phone"
            type="tel"
            inputMode="tel"
            dir="ltr"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="050-1234567"
            autoComplete="tel"
            className="h-12 border-white/15 bg-white/10 text-right text-white placeholder:text-slate-500 focus-visible:ring-sky-400"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="lead-issue" className="text-slate-200">
            מה קרה לפלאפון?
          </Label>
          <select
            id="lead-issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="h-12 w-full rounded-md border border-white/15 bg-white/10 px-3 text-white outline-none focus:ring-2 focus:ring-sky-400 [&>option]:bg-slate-900"
          >
            {ISSUE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p role="alert" className="rounded-lg bg-red-500/15 px-3 py-2 text-sm font-medium text-red-300">
            {error}
          </p>
        )}

        <Button
          type="submit"
          disabled={sending}
          className="h-13 w-full gap-2 bg-sky-400 py-6 text-lg font-extrabold text-slate-950 shadow-lg shadow-sky-400/25 transition hover:bg-sky-300"
        >
          {sending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <PhoneCall className="h-5 w-5" />
          )}
          {sending ? 'שולח...' : 'תחזרו אליי עכשיו'}
        </Button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          המספר משמש אך ורק לחזרה אליכם — ללא ספאם, ללא רשימות תפוצה
        </p>
      </div>
    </form>
  )
}
