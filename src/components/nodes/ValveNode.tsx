/* eslint-disable @typescript-eslint/no-explicit-any */
import { Handle, Position } from 'reactflow';

export default function ValveNode({ data }: any) {
  const isOpen = data.open;
  const status = isOpen ? 'Abierta' : 'Cerrada';
  const valveColor = isOpen ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className="w-20 h-20 flex flex-col items-center justify-center relative">
      {/* Círculo de válvula */}
      <div
        className={`w-14 h-14 ${valveColor} rounded-full border-2 border-gray-800 shadow-md flex items-center justify-center text-white font-semibold text-[10px]`}
      >
        {status}
      </div>

      {/* Paleta de válvula (decoración estilo llave) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-6 bg-gray-700 rounded"
        style={{ transform: isOpen ? 'rotate(45deg) translateX(-50%)' : 'rotate(0deg) translateX(-50%)', transition: 'transform 0.3s ease' }}
      />

      {/* Base inferior decorativa */}
      <div className="w-6 h-2 bg-gray-700 mt-1 rounded-sm" />

      {/* Handles */}
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
    </div>
  );
}
