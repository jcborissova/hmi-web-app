/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight, LayoutDashboard, ChartArea } from 'lucide-react'
import { cn } from '../utils/cn'

const links = [
  /*{ label: 'Vista Aérea', path: '/', icon: <Map size={20} /> },*/
  { label: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
  { label: 'Diagrama HMI', path: '/diagrama', icon: <ChartArea size={20} /> },
]

interface SidebarProps {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const { pathname } = useLocation()

  return (
    <>
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-40 h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out shadow-lg pt-16',
          collapsed ? 'w-16' : 'w-64'
        )}
      >
        <div className="flex flex-col items-center h-full py-6 space-y-8">

          <nav className="flex flex-col gap-3 w-full items-center">
            {links.map(link => {
              const isActive = pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'flex items-center w-11/12 px-3 py-2 rounded-md hover:bg-gray-800 transition-all',
                    isActive && 'bg-gray-800'
                  )}
                >
                  <span>{link.icon}</span>
                  {!collapsed && <span className="ml-3 text-sm">{link.label}</span>}
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Botón centrado verticalmente */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={cn(
          'fixed z-50 bg-white text-gray-800 shadow-md border border-gray-300 transition-all duration-300 ease-in-out',
          'w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100'
        )}
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          left: collapsed ? '4.5rem' : '16rem'
        }}
        aria-label="Toggle Sidebar"
      >
        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>
    </>
  )
}
