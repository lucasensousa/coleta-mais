import type { CollectionPoint } from '@/types'

export const COLLECTION_POINTS_MOCK: CollectionPoint[] = [
  {
    id: 'point-1',
    name: 'Ponto de Coleta 1 - Central Lavras',
    address: 'Rua Dr. Álvaro Botelho, Centro',
    neighborhood: 'Centro',
    city: 'Lavras',
    state: 'MG',
    status: 'active',
    materials: [
      { code: 'computers', label: 'Computadores' },
      { code: 'phones', label: 'Celulares' },
      { code: 'peripherals', label: 'Periféricos (teclados, mouses)' },
      { code: 'cables_chargers', label: 'Cabos e Carregadores' },
    ],
    schedules: ['Segunda a sexta, das 08h às 17h'],
    conditions: [
      'Equipamentos devem ser entregues preferencialmente desligados e sem pilhas avulsas.',
    ],
    contact: '(35) 3821-0000',
  },
  {
    id: 'point-2',
    name: 'Ponto de Coleta 2 - Campus UFLA',
    address: 'Universidade Federal de Lavras - Trevo Rotatória Sul',
    neighborhood: 'Campus Universitário',
    city: 'Lavras',
    state: 'MG',
    status: 'active',
    materials: [
      { code: 'batteries_aa', label: 'Pilhas' },
      { code: 'batteries_rechargeable', label: 'Baterias' },
      { code: 'small_electronics', label: 'Pequenos eletrônicos' },
      { code: 'circuit_boards', label: 'Placas de circuito' },
    ],
    schedules: ['Segunda a sábado, das 09h às 18h'],
    conditions: [
      'Baterias e pilhas devem estar devidamente separadas dos demais equipamentos.',
    ],
    contact: 'coleta@ufla.br',
  },
  {
    id: 'point-3',
    name: 'Ponto de Coleta 3 - Ecoponto Norte',
    address: 'Av. Ernesto Matiolli, 450',
    neighborhood: 'Santa Efigênia',
    city: 'Lavras',
    state: 'MG',
    status: 'active',
    materials: [
      { code: 'small_appliances', label: 'Eletrodomésticos de pequeno porte' },
      { code: 'microwaves', label: 'Micro-ondas' },
      { code: 'monitors_tvs', label: 'Monitores e TVs' },
      { code: 'printers', label: 'Impressoras' },
    ],
    schedules: ['Segunda a sexta, das 07h30 às 16h30'],
    conditions: [
      'Não descartar lâmpadas fluorescentes neste ponto sem aviso prévio.',
    ],
    contact: '(35) 3822-1122',
  },
]
