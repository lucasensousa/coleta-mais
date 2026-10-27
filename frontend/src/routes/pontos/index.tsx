import { createFileRoute } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import { Search, X, Inbox } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { COLLECTION_POINTS_MOCK } from '@/data/collectionPointsMock'
import {
  type CollectionPoint,
  type CollectionPointFilters,
  type MaterialCode,
  type MaterialOption,
} from '@/types'
import { CollectionPointCard } from '@/components/pontos/CollectionPointCard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  filterCollectionPoints,
} from '@/strategies/collectionPointFilterStrategies'

export const Route = createFileRoute('/pontos/')({
  component: CollectionPointsComponent,
})

const INITIAL_FILTERS: CollectionPointFilters = {
  searchQuery: '',
  materialCode: undefined,
}

function CollectionPointsComponent() {
  const { t } = useTranslation()
  const [filters, setFilters] = useState<CollectionPointFilters>(INITIAL_FILTERS)

  const availableMaterials = useMemo(() => {
    const materialsMap = new Map<string, MaterialOption>()
    COLLECTION_POINTS_MOCK.flatMap((p) => p.materials).forEach((mat) => {
      materialsMap.set(mat.code, mat)
    })
    return Array.from(materialsMap.values())
  }, [])

  const filteredPoints = useMemo(
    () => filterCollectionPoints(COLLECTION_POINTS_MOCK, filters),
    [filters]
  )
    return COLLECTION_POINTS_MOCK.filter((point: CollectionPoint) => {
      if (point.status !== 'active') return false

      const matchesSearch =
        !query ||
        point.name.toLowerCase().includes(query) ||
        point.address.toLowerCase().includes(query)

      const matchesMaterial =
        !filters.materialCode ||
        point.materials.some((m) => m.code === filters.materialCode)

      return matchesSearch && matchesMaterial
    })
  }, [filters])

  const updateFilter = <K extends keyof CollectionPointFilters>(
    field: K,
    value: CollectionPointFilters[K]
  ) => {
    setFilters((prev) => ({ ...prev, [field]: value }))
  }

  const clearFilters = () => {
    setFilters(INITIAL_FILTERS)
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <Badge
          variant="default"
          className="text-emerald-700 bg-emerald-50 border-emerald-200"
        >
          {t('points.categoryBadge')}
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          {t('points.title')}
        </h1>
        <p className="text-slate-600 max-w-2xl">{t('points.description')}</p>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <Input
            type="text"
            placeholder={t('points.searchPlaceholder')}
            value={filters.searchQuery ?? ''}
            onChange={(e) => updateFilter('searchQuery', e.target.value)}
            className="pl-10 pr-9"
          />
          {filters.searchQuery && (
            <button
              type="button"
              onClick={() => updateFilter('searchQuery', '')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="material-filter"
            className="text-xs font-semibold text-slate-600 shrink-0 hidden lg:block"
          >
            {t('points.filterMaterialLabel')}
          </label>
          <select
            id="material-filter"
            value={filters.materialCode ?? ''}
            onChange={(e) =>
              updateFilter(
                'materialCode',
                (e.target.value || undefined) as MaterialCode | undefined
              )
            }
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="">{t('points.allMaterials')}</option>
            {availableMaterials.map((mat) => (
              <option key={mat.code} value={mat.code}>
                {mat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-xs font-medium text-slate-500">
        {t('points.activePointsCount', { count: filteredPoints.length })}
      </div>

      {filteredPoints.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center flex flex-col items-center justify-center space-y-3">
          <Inbox className="w-12 h-12 text-slate-300" />
          <h3 className="text-lg font-bold text-slate-800">
            {t('points.emptyTitle')}
          </h3>
          <p className="text-sm text-slate-500 max-w-sm">
            {t('points.emptyDesc')}
          </p>
          <Button variant="secondary" onClick={clearFilters}>
            {t('points.clearFilters')}
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPoints.map((point) => (
            <CollectionPointCard key={point.id} point={point} />
          ))}
        </div>
      )}
    </div>
  )
}
