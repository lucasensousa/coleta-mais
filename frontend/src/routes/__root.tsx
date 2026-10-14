import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Sidebar } from '../components/layout/Sidebar'

const RootLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <main className="p-6 md:p-10 max-w-6xl mx-auto w-full">
          <Outlet />
        </main>
      </div>
      {import.meta.env.DEV && (
        <TanStackRouterDevtools position="bottom-right" />
      )}
    </div>
  )
}

export const Route = createRootRoute({ component: RootLayout })
