import React, { useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import {
  Home,
  MapPin,
  History,
  BarChart3,
  Info,
  Menu,
  X,
  Recycle,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'

export const Sidebar: React.FC = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  const navItems = [
    {
      to: '/',
      label: t('nav.home'),
      icon: Home,
    },
    {
      to: '/pontos',
      label: t('nav.collectionPoints'),
      icon: MapPin,
    },
    {
      to: '/historico',
      label: t('nav.history'),
      icon: History,
      badge: t('nav.soon'),
    },
    {
      to: '/relatorios',
      label: t('nav.reports'),
      icon: BarChart3,
      badge: t('nav.soon'),
    },
    {
      to: '/about',
      label: t('nav.about'),
      icon: Info,
    },
  ]

  return (
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
            <Recycle className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg text-emerald-400">
            {t('brand.name')}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 h-screen w-68 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 flex flex-col border-r border-slate-800/80 transition-transform duration-200 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 flex items-center gap-3 border-b border-slate-800/80 bg-emerald-500/5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <Recycle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              {t('brand.name')}
            </h2>
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
              {t('brand.subtitle')}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <p className="px-3 mb-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            {t('nav.sectionTitle')}
          </p>
          <ul className="space-y-1.5 list-none p-0 m-0">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive =
                item.to === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.to)

              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-400 font-semibold border-l-2 border-emerald-500'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className="bg-slate-800 text-slate-400 border-none text-[10px] py-0 px-2"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer info card */}
        <div className="p-4 border-t border-slate-800/80">
          <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800 text-xs">
            <p className="font-semibold text-emerald-400 mb-1">
              {t('brand.sustainableFooterTitle')}
            </p>
            <p className="text-slate-400 leading-relaxed">
              {t('brand.sustainableFooterDesc')}
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
