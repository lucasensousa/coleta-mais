import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { MapPin, ArrowRight, ShieldCheck, Users, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/10 via-emerald-50/50 to-white border border-emerald-500/20 p-8 md:p-12 shadow-xs">
        <div className="relative z-10 max-w-2xl space-y-5">
          <Badge variant="default" className="gap-2 bg-emerald-100 text-emerald-800 border-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            {t('home.badge')}
          </Badge>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {t('home.title')}
          </h1>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {t('home.description')}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link to="/pontos">
              <Button size="lg" className="gap-2">
                <MapPin className="w-4 h-4" />
                {t('home.ctaPoints')}
              </Button>
            </Link>

            <Link to="/about">
              <Button variant="secondary" size="lg">
                {t('home.ctaAbout')}
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute -top-12 -right-12 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow flex flex-col border-emerald-200/70 bg-gradient-to-b from-white to-emerald-50/20">
          <CardHeader>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
              <MapPin className="w-6 h-6" />
            </div>
            <CardTitle>{t('home.cards.find.title')}</CardTitle>
            <CardDescription>{t('home.cards.find.description')}</CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Link
              to="/pontos"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors group"
            >
              {t('home.cards.find.link')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow flex flex-col">
          <CardHeader>
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-2">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <CardTitle>{t('home.cards.safe.title')}</CardTitle>
            <CardDescription>{t('home.cards.safe.description')}</CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-md transition-shadow flex flex-col">
          <CardHeader>
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-2">
              <Users className="w-6 h-6" />
            </div>
            <CardTitle>{t('home.cards.community.title')}</CardTitle>
            <CardDescription>{t('home.cards.community.description')}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
