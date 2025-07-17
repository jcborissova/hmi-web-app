import React from 'react'
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
} from 'reactflow'
import 'reactflow/dist/style.css'
import {
  nodes,
  edges,
  nodeTypes,
  edgeTypes
} from '../flowConfig'
import {
  Flame,
  Droplets,
  Cpu,
  SlidersHorizontal,
  GaugeCircle,
  CircleDot
} from 'lucide-react'

export default function DiagramaHMI() {
  return (
    <div className="flex flex-col gap-6 w-full px-2 md:px-6 py-4">
      {/* Header descriptivo */}
      <div className="bg-white border shadow-md rounded-xl p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-left">
          Simulación HMI - Sistema de Control de Fluidos
        </h1>
        <p className="text-gray-600 mt-2 text-center md:text-left text-sm md:text-base">
          Interfaz interactiva del sistema industrial: tanques, bombas, válvulas, motores y sensores.
        </p>

        {/* Leyenda de íconos */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-sm text-gray-700">
          <LegendItem icon={<Flame className="text-red-500 w-4 h-4" />} label="Proceso Térmico Activo" />
          <LegendItem icon={<Droplets className="text-blue-500 w-4 h-4" />} label="Flujo de Agua" />
          <LegendItem icon={<Cpu className="text-gray-800 w-4 h-4" />} label="PLC Siemens S7-1200" />
          <LegendItem icon={<SlidersHorizontal className="text-green-600 w-4 h-4" />} label="Control Automático" />
          <LegendItem icon={<GaugeCircle className="text-yellow-600 w-4 h-4" />} label="Motor Industrial" />
          <LegendItem icon={<CircleDot className="text-cyan-600 w-4 h-4" />} label="Sensor de Nivel" />
        </div>
      </div>

      {/* Diagrama HMI */}
      <div className="w-full h-[calc(100vh-240px)] min-h-[400px] rounded-xl overflow-hidden shadow border bg-white">
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
            proOptions={{ hideAttribution: true }}
          >
            <MiniMap nodeStrokeColor="#2563eb" nodeColor="#93c5fd" />
            <Controls />
            <Background gap={20} size={1} color="#d1d5db" />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </div>
  )
}

// Componente auxiliar para íconos de leyenda
function LegendItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 justify-center sm:justify-start">
      {icon}
      <span>{label}</span>
    </div>
  )
}
