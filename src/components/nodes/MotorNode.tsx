/* eslint-disable @typescript-eslint/no-explicit-any */
import { Handle, Position } from 'reactflow'
import { RotateCw } from 'lucide-react'

export default function MotorNode({ data }: any) {
  const isRunning = data.status === 'on'

  return (
    <div className="w-36 h-40 relative flex flex-col items-center justify-between bg-white border-2 border-gray-800 rounded-xl shadow-md px-2 pt-2 pb-3 text-center">
      {/* Título */}
      <div className="text-xs font-bold bg-black text-white px-2 py-0.5 rounded">
        {data.name || 'Motor'}
      </div>

      {/* Motor visual */}
      <div className="w-14 h-14 mt-2 rounded-full border-4 border-gray-500 flex items-center justify-center bg-gray-50 shadow-inner">
        <RotateCw className={`w-6 h-6 ${isRunning ? 'animate-spin-slow text-green-500' : 'text-gray-400'}`} />
      </div>

      {/* Estado */}
      <div className="text-xs mt-1 text-gray-700">
        Estado:{' '}
        <span className={isRunning ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
          {isRunning ? 'Encendido' : 'Apagado'}
        </span>
      </div>

      {/* Consumo */}
      <div className="text-xs text-gray-600">
        Potencia:{' '}
        <span className="font-bold text-gray-800">{data.power || '4.5 kW'}</span>
      </div>

      {/* Conexiones */}
      <Handle type="target" position={Position.Top} id="entrada" />
      <Handle type="source" position={Position.Bottom} id="salida" />
    </div>
  )
}
