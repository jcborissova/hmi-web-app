// src/pages/Dashboard.tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
  BarChart,
  Bar,
} from 'recharts'
import {
  BadgeCheck,
  AlertCircle,
  Droplet,
  Waves,
  Clock,
  Activity,
  Flame,
  ShieldCheck,
  BatteryCharging,
} from 'lucide-react'

const data = [
  { time: '10:00', tanqueA: 75, tanqueB: 60, presion: 3.1, consumo: 240 },
  { time: '10:30', tanqueA: 78, tanqueB: 62, presion: 3.5, consumo: 260 },
  { time: '11:00', tanqueA: 80, tanqueB: 64, presion: 4.2, consumo: 310 },
  { time: '11:30', tanqueA: 72, tanqueB: 59, presion: 2.9, consumo: 220 },
  { time: '12:00', tanqueA: 70, tanqueB: 58, presion: 2.5, consumo: 190 },
  { time: '12:30', tanqueA: 76, tanqueB: 63, presion: 3.4, consumo: 270 },
  { time: '13:00', tanqueA: 79, tanqueB: 65, presion: 3.7, consumo: 280 },
]

export default function Dashboard() {
  const lastUpdated = new Date().toLocaleString()

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-10">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Panel de Monitoreo de Planta</h1>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Clock className="w-4 h-4" />
          Última actualización: {lastUpdated}
        </div>
      </div>

      {/* Estado general */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard icon={<Droplet className="w-6 h-6" />} title="Tanque A" value="79%" status="normal" />
        <StatusCard icon={<Waves className="w-6 h-6" />} title="Tanque B" value="65%" status="normal" />
        <StatusCard icon={<AlertCircle className="w-6 h-6" />} title="Presión" value="Alta" status="alerta" />
        <StatusCard icon={<BadgeCheck className="w-6 h-6" />} title="Alarma" value="Sin alerta" status="ok" />
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <KPI title="Producción Total" value="5,240 L" icon={<Activity />} />
        <KPI title="Energía Consumida" value="1.320 kWh" icon={<BatteryCharging />} />
        <KPI title="Eficiencia" value="92%" icon={<ShieldCheck />} />
      </div>

      {/* Gráficas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Niveles de tanques */}
        <ChartCard title="Niveles de Tanques">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="tanqueA" stroke="#3b82f6" fillOpacity={1} fill="url(#colorA)" name="Tanque A" />
              <Area type="monotone" dataKey="tanqueB" stroke="#06b6d4" fillOpacity={0.3} fill="#06b6d4" name="Tanque B" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Presión */}
        <ChartCard title="Presión General">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="presion" stroke="#ef4444" name="Presión (Bar)" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Consumo */}
        <ChartCard title="Consumo Energético" fullWidth>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="consumo" fill="#f59e0b" name="Consumo (kWh)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Panel de alertas recientes */}
      <div className="bg-white rounded-xl border p-5 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Alertas recientes</h2>
        <ul className="text-sm space-y-2">
          <AlertItem icon={<Flame />} text="Temperatura excedida en Mezcladora" time="12:45" color="text-red-600" />
          <AlertItem icon={<AlertCircle />} text="Presión inestable en válvula 3" time="12:30" color="text-yellow-600" />
          <AlertItem icon={<BadgeCheck />} text="Todos los sensores están activos" time="Actual" color="text-green-600" />
        </ul>
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <LegendDot color="bg-blue-500" label="Normal" />
        <LegendDot color="bg-red-500" label="Alerta" />
        <LegendDot color="bg-green-600" label="Ok" />
      </div>
    </div>
  )
}

// Reutilizable: Tarjeta de KPI
function KPI({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 bg-white border rounded-xl p-4 shadow-sm w-full">
      <div className="text-indigo-500">{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-xl font-semibold text-gray-800">{value}</div>
      </div>
    </div>
  )
}

// Reutilizable: Tarjeta de estado
function StatusCard({
  title,
  value,
  status,
  icon,
}: {
  title: string
  value: string
  status: 'ok' | 'alerta' | 'normal'
  icon: React.ReactNode
}) {
  const color =
    status === 'alerta'
      ? 'bg-red-500'
      : status === 'ok'
      ? 'bg-green-600'
      : 'bg-blue-500'
  return (
    <div className={`rounded-xl p-4 text-white shadow-md flex items-center gap-4 ${color}`}>
      <div>{icon}</div>
      <div>
        <div className="text-sm">{title}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  )
}

// Reutilizable: Tarjeta de gráfico
function ChartCard({
  children,
  title,
  fullWidth = false,
}: {
  children: React.ReactNode
  title: string
  fullWidth?: boolean
}) {
  return (
    <div className={`bg-white p-5 rounded-xl border shadow-sm ${fullWidth ? 'col-span-full' : ''}`}>
      <h2 className="text-lg font-semibold mb-3 text-gray-700">{title}</h2>
      {children}
    </div>
  )
}

// Reutilizable: Leyenda visual
function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`inline-block w-3 h-3 rounded-full ${color}`} /> {label}
    </div>
  )
}

// Reutilizable: Item de alerta
function AlertItem({
  icon,
  text,
  time,
  color,
}: {
  icon: React.ReactNode
  text: string
  time: string
  color: string
}) {
  return (
    <li className="flex items-center justify-between border-b pb-2">
      <span className={`flex items-center gap-2 ${color}`}>{icon} {text}</span>
      <span className="text-gray-400">{time}</span>
    </li>
  )
}
