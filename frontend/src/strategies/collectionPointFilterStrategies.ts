import type {
  CollectionPoint,
  CollectionPointFilters,
} from '@/types'

export interface CollectionPointFilterStrategy {
  matches(
    point: CollectionPoint,
    filters: CollectionPointFilters
  ): boolean
}

export class ActivePointStrategy
  implements CollectionPointFilterStrategy {
  matches(point: CollectionPoint): boolean {
    return point.status === 'active'
  }
}

export class TextSearchStrategy
  implements CollectionPointFilterStrategy {
  matches(
    point: CollectionPoint,
    filters: CollectionPointFilters
  ): boolean {
    const query = filters.searchQuery?.toLowerCase().trim() ?? ''

    if (!query) return true

    return (
      point.name.toLowerCase().includes(query) ||
      point.address.toLowerCase().includes(query)
    )
  }
}

export class MaterialFilterStrategy
  implements CollectionPointFilterStrategy {
  matches(
    point: CollectionPoint,
    filters: CollectionPointFilters
  ): boolean {
    if (!filters.materialCode) return true

    return point.materials.some(
      material => material.code === filters.materialCode
    )
  }
}

const strategies: CollectionPointFilterStrategy[] = [
  new ActivePointStrategy(),
  new TextSearchStrategy(),
  new MaterialFilterStrategy(),
]

export function filterCollectionPoints(
  points: CollectionPoint[],
  filters: CollectionPointFilters
): CollectionPoint[] {
  return points.filter(point =>
    strategies.every(strategy => strategy.matches(point, filters))
  )
}
