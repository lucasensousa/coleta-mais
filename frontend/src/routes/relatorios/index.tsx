import { createFileRoute } from '@tanstack/react-router'
import { BarChart3 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/relatorios/')({
  component: RelatoriosComponent,
})

function RelatoriosComponent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <Badge variant="default" className="text-emerald-700 bg-emerald-50 border-emerald-200">
          {t('placeholders.futureModule')}
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          {t('placeholders.reportsTitle')}
        </h1>
        <p className="text-slate-600 max-w-2xl">
          {t('placeholders.reportsDesc')}
        </p>
      </header>

      <Card className="border-dashed border-2 border-slate-300 bg-white/70 py-12">
        <CardContent className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <BarChart3 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            {t('placeholders.comingSoon')}
          </h3>
          <p className="text-sm text-slate-500 max-w-md">
            {t('placeholders.reportsDetails')}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
