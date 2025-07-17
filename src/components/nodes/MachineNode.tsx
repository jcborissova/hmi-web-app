/* eslint-disable @typescript-eslint/no-explicit-any */
import { Handle, Position } from 'reactflow';

export default function MachineNode({ data }: any) {
  const isActive = data.status === 'active';

  return (
    <div className="w-40 h-32 border-2 border-gray-800 rounded-b-xl rounded-t-md bg-gradient-to-b from-gray-200 to-gray-100 shadow-xl relative overflow-hidden text-[11px]">
      {/* Título estilo panel superior */}
      <div className="bg-gray-900 text-white text-center py-1 font-bold text-xs shadow">
        {data.name || 'Mezcladora'}
      </div>

      {/* Indicador de estado */}
      <div
        className={`absolute top-1.5 left-1.5 w-3.5 h-3.5 rounded-full border border-black shadow`}
        style={{
          backgroundColor: isActive ? '#22c55e' : '#ef4444',
        }}
        title={isActive ? 'Activa' : 'Apagada'}
      />

      {/* Cuerpo con controles simulados */}
      <div className="flex flex-col justify-center h-full px-3 pt-1 space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Estado:</span>
          <span className={isActive ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
            {isActive ? 'Activa' : 'Apagada'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Temperatura:</span>
          <span>{data.temperature || '58°C'}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Velocidad:</span>
          <span>{data.speed || '1200 RPM'}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Carga:</span>
          <span>{data.load || '65%'}</span>
        </div>
      </div>

      {/* Parte inferior tipo base */}
      <div className="absolute bottom-0 w-full h-3 bg-gray-600 rounded-t-md shadow-inner" />

      {/* Handles */}
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
    </div>
  );
}
