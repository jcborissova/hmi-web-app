import { type ReactNode, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { cn } from '../utils/cn'

export default function Layout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      {/* Header fijo */}
      <Header />

      <div className="flex flex-1 pt-16 relative">
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Main content */}
        <main
          className={cn(
            'flex-1 transition-all duration-300 ease-in-out',
            collapsed ? 'ml-16' : 'ml-64'
          )}
        >
          <div className="p-4 sm:p-6 md:p-8 w-full max-w-full">{children}</div>
        </main>
      </div>
    </div>
  )
}
