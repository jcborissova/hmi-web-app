export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-200 shadow z-50 px-6 flex items-center justify-between">
      {/* Branding */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-gray-800 tracking-tight">
          Control Industrial
        </span>
        <span className="text-xs text-gray-500 hidden sm:inline">v1.0</span>
      </div>

      {/* Acciones (espacio futuro para iconos, usuario, etc.) */}
      <div className="flex items-center gap-4">
        {/* Placeholder para acciones futuras */}
        {/* Ejemplo: Notificaciones, usuario, menú de configuración */}
        <div className="w-8 h-8 bg-gray-100 rounded-full animate-pulse" />
      </div>
    </header>
  )
}
