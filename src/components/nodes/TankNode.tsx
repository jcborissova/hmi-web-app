/* eslint-disable @typescript-eslint/no-explicit-any */
import { Handle, Position } from 'reactflow';

export default function TankNode({ data }: any) {
  const level = data.level || 0;

  return (
    <div className="w-30 h-48 relative flex flex-col items-center">
      {/* Parte superior del tanque (semicírculo) */}
      <div className="w-full h-4 bg-gray-700 rounded-t-full shadow-inner" />

      {/* Cuerpo del tanque */}
      <div className="w-full h-full border-x-4 border-b-4 border-gray-700 bg-gradient-to-b from-gray-100 to-gray-200 relative overflow-hidden rounded-b-md shadow-md">
        {/* Título */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-black text-white px-2 py-0.5 rounded shadow z-20">
          {data.label}
        </div>

        {/* Agua animada */}
        <div
          className="absolute bottom-0 left-0 w-full bg-[url('/wave.svg')] bg-repeat-x bg-[length:200%_100%] wave-animated transition-all duration-500"
          style={{
            height: `${level}%`,
            backgroundPositionY: 'bottom',
          }}
        />

        {/* Porcentaje */}
        <div className="absolute bottom-1 left-0 w-full text-center text-xs font-bold text-white z-20">
          {level}%
        </div>
      </div>

      {/* Handles */}
      <Handle type="source" position={Position.Bottom} id="out" />
      <Handle type="target" position={Position.Top} id="in" />
    </div>
  );
}
