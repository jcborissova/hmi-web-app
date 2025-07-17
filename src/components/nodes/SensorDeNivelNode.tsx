/* eslint-disable @typescript-eslint/no-explicit-any */
import { Handle, Position } from 'reactflow'
import { Waves } from 'lucide-react'

export default function SensorDeNivelNode({ data }: any) {
  const nivel = data.level ?? 0

  return (
    <div className="w-28 h-44 flex flex-col items-center justify-between relative bg-white border-2 border-gray-800 rounded-lg shadow-md py-2 px-1">
      {/* Título */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-black text-white px-2 py-0.5 rounded z-10">
        {data.name || 'Sensor de Nivel'}
      </div>

      {/* Icono */}
      <div className="mt-6">
        <Waves className="w-6 h-6 text-blue-500" />
      </div>

      {/* Indicador visual */}
      <div className="relative flex-1 flex items-end justify-center w-full px-4 py-1">
        <div className="w-8 h-full bg-gray-200 rounded-full overflow-hidden border border-gray-400">
          <div
            className="bg-blue-500 w-full transition-all duration-500"
            style={{ height: `${nivel}%` }}
          />
        </div>
      </div>

      {/* Porcentaje */}
      <div className="mb-2 text-xs font-bold text-gray-800">{nivel}%</div>

      {/* Conexiones */}
      <Handle type="target" position={Position.Left} id="in" />
      <Handle type="source" position={Position.Right} id="out" />
    </div>
  )
}
