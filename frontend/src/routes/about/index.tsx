import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { GraduationCap, Leaf } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/about/')({
  component: AboutComponent,
})

function AboutComponent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <Badge variant="default" className="text-emerald-700 bg-emerald-50 border-emerald-200">
          {t('about.categoryBadge')}
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          {t('about.title')}
        </h1>
        <p className="text-slate-600 max-w-2xl">
          {t('about.description')}
        </p>
      </header>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl">{t('about.missionTitle')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-600 leading-relaxed">
          <p>{t('about.missionP1')}</p>
          <p>{t('about.missionP2')}</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-slate-200">
          <CardHeader>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
              <GraduationCap className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg">
              {t('about.uflaCardTitle')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('about.uflaCardDesc')}
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
              <Leaf className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg">
              {t('about.sustainabilityCardTitle')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('about.sustainabilityCardDesc')}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
