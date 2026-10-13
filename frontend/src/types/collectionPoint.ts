export type CollectionPointStatus = 'active' | 'inactive'

export interface MaterialOption {
  code: string
  label: string
}

export const ACCEPTED_MATERIALS = [
  { code: 'computers', label: 'Computadores' },
  { code: 'phones', label: 'Celulares' },
  { code: 'peripherals', label: 'Periféricos (teclados, mouses)' },
  { code: 'cables_chargers', label: 'Cabos e Carregadores' },
  { code: 'batteries_aa', label: 'Pilhas' },
  { code: 'batteries_rechargeable', label: 'Baterias' },
  { code: 'small_electronics', label: 'Pequenos eletrônicos' },
  { code: 'circuit_boards', label: 'Placas de circuito' },
  { code: 'small_appliances', label: 'Eletrodomésticos de pequeno porte' },
  { code: 'microwaves', label: 'Micro-ondas' },
  { code: 'monitors_tvs', label: 'Monitores e TVs' },
  { code: 'printers', label: 'Impressoras' },
] as const satisfies readonly MaterialOption[]

export type MaterialCode = (typeof ACCEPTED_MATERIALS)[number]['code']

export interface CollectionPoint {
  id: string
  name: string
  address: string
  neighborhood?: string
  city: string
  state: string
  status: CollectionPointStatus
  materials: MaterialOption[]
  schedules: string[]
  conditions: string[]
  contact?: string
}

export interface CollectionPointFilters {
  searchQuery?: string
  materialCode?: MaterialCode
}
