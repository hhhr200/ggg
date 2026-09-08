import { useState } from 'react'
import { CheckCircle2, Loader2, PhoneCall, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// הגדרות טלגרם — מלאו כאן את הפרטים שלכם
const TELEGRAM_BOT_TOKEN = '8546467679:AAGs3bIq_r779Gx6UtKW8-YHsoUv-1dD1PQ'
const TELEGRAM_CHAT_ID = '569116915'

const ISSUE_OPTIONS = [
  'מסך שבור / סדוק',
  'סוללה לא מחזיקה',
  'נזק מנוזלים',
  'לא נטען / שקע טעינה',
  'בעיית תוכנה',
  'אחר / לא בטוח',
]

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

  const handleSubmit = async (e: React.FormEvent) => {
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

    const message =
      `📱 ליד חדש — Phone First Class\n` +
      `שם: ${name.trim()}\n` +
      `טלפון: ${normalizePhone(phone)}\n` +
      `תקלה: ${issue}\n` +
      `נשלח: ${new Date().toLocaleString('he-IL')}`

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
          }),
        }
      )
      const data = await res.json()
      if (!data.ok) {
        throw new Error(data.description || 'שליחה נכשלה')
      }
      setSending(false)
      setSent(true)
    } catch (err) {
      setSending(false)
      setError('לא הצלחנו לשלוח את הפרטים. נסו שוב או התקשרו אלינו ישירות.')
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-300 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-emerald-600" />
        <h3 className="text-2xl font-bold text-slate-900">הפרטים התקבלו!</h3>
        <p className="text-slate-700">
          תודה {name.trim()} — נציג שלנו יחזור אליך למספר{' '}
          <span dir="ltr" className="font-semibold text-slate-900">
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
          className="text-sm text-blue-600 underline-offset-4 hover:underline"
        >
          שליחת בקשה נוספת
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
      noValidate
    >
      {!compact && (
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900">השאירו מספר — אנחנו חוזרים אליכם</h2>
          <p className="mt-1 text-sm text-slate-600">בלי התחייבות, בלי תורים, בלי להמתין בחנות</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="lead-name" className="text-slate-800">
            שם מלא
          </Label>
          <Input
            id="lead-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ישראל ישראלי"
            autoComplete="name"
            className="h-12 border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-500"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="lead-phone" className="text-slate-800">
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
            className="h-12 border-slate-300 bg-white text-right text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-500"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="lead-issue" className="text-slate-800">
            מה קרה לפלאפון?
          </Label>
          <select
            id="lead-issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
          >
            {ISSUE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
            {error}
          </p>
        )}

        <Button
          type="submit"
          disabled={sending}
          className="h-13 w-full gap-2 bg-blue-600 py-6 text-lg font-extrabold text-white shadow-md transition hover:bg-blue-700"
        >
          {sending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <PhoneCall className="h-5 w-5" />
          )}
          {sending ? 'שולח...' : 'תחזרו אליי עכשיו'}
        </Button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          המספר משמש אך ורק לחזרה אליכם — ללא ספאם, ללא רשימות תפוצה
        </p>
      </div>
    </form>
  )
}
