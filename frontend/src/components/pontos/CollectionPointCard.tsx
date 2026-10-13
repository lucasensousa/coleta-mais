import React from 'react'
import { MapPin, Clock, Phone, AlertCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { CollectionPoint } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface CollectionPointCardProps {
  point: CollectionPoint
}

export const CollectionPointCard: React.FC<CollectionPointCardProps> = ({
  point,
}) => {
  const { t } = useTranslation()

  return (
    <Card className="hover:shadow-md transition-all flex flex-col border-slate-200">
      <CardHeader className="space-y-3 pb-4">
        <div className="flex items-center justify-between">
          <Badge variant="success" className="gap-1.5 py-0.5 px-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {t('points.statusActive')}
          </Badge>
        </div>
        <CardTitle className="text-lg font-bold">{point.name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3 text-sm">
          {/* Location */}
          <div className="flex items-start gap-2.5 text-slate-600">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800">
                {t('points.location')}:{' '}
              </span>
              <span>
                {point.address}
                {point.neighborhood ? ` - ${point.neighborhood}` : ''},{' '}
                {point.city} - {point.state}
              </span>
            </div>
          </div>

          {/* Schedules */}
          <div className="flex items-start gap-2.5 text-slate-600">
            <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800">
                {t('points.hours')}:{' '}
              </span>
              <span>{point.schedules.join(' | ')}</span>
            </div>
          </div>

          {/* Contact */}
          {point.contact && (
            <div className="flex items-start gap-2.5 text-slate-600">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-800">
                  {t('points.contact')}:{' '}
                </span>
                <span>{point.contact}</span>
              </div>
            </div>
          )}
        </div>

        {/* Accepted Materials */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            {t('points.acceptedMaterials')}:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {point.materials.map((mat) => (
              <Badge
                key={mat.code}
                variant="secondary"
                className="bg-slate-100 text-slate-700 font-medium text-xs rounded-md px-2 py-0.5"
              >
                {mat.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Conditions */}
        <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2 text-xs text-amber-900 mt-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>{t('points.conditions')}: </strong>
            {point.conditions.join(' ')}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
