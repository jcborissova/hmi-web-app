import TankNode from './components/nodes/TankNode';
import ValveNode from './components/nodes/ValveNode';
import MachineNode from './components/nodes/MachineNode';
import MotorNode from './components/nodes/MotorNode';
import SensorDeNivelNode from './components/nodes/SensorDeNivelNode';
import { PipeEdge } from './components/edges/PipeEdge';

export const nodeTypes = {
  tank: TankNode,
  valve: ValveNode,
  machine: MachineNode,
  motor: MotorNode,
  sensor: SensorDeNivelNode,
};

export const edgeTypes = {
  pipe: PipeEdge,
};

export const nodes = [
  {
    id: 'tank1',
    type: 'tank',
    position: { x: 50, y: 0 },
    data: { label: 'Tanque A', level: 55 },
  },
  {
    id: 'tank2',
    type: 'tank',
    position: { x: 400, y: 0 },
    data: { label: 'Tanque B', level: 80 },
  },
  {
    id: 'valve1',
    type: 'valve',
    position: { x: 230, y: 200 },
    data: { open: true },
  },
  {
    id: 'machine1',
    type: 'machine',
    position: { x: 230, y: 380 },
    data: {
      name: 'Mezcladora',
      status: 'active',
      temperature: '63°C',
      speed: '1320 RPM',
    },
  },
  {
    id: 'motor1',
    type: 'motor',
    position: { x: 100, y: 550 },
    data: {
      name: 'Motor Principal',
      status: 'on',
      power: '4.5 kW',
    },
  },
  {
    id: 'sensor1',
    type: 'sensor',
    position: { x: 400, y: 550 },
    data: {
      name: 'Sensor de Nivel',
      value: 'Altura 1.3 m',
      status: 'ok',
    },
  },
];

export const edges = [
  {
    id: 'e1',
    source: 'tank1',
    sourceHandle: 'out',
    target: 'valve1',
    targetHandle: 'top',
    type: 'pipe',
    animated: true,
  },
  {
    id: 'e2',
    source: 'tank2',
    sourceHandle: 'out',
    target: 'valve1',
    targetHandle: 'top',
    type: 'pipe',
    animated: true,
  },
  {
    id: 'e3',
    source: 'valve1',
    sourceHandle: 'bottom',
    target: 'machine1',
    targetHandle: 'top',
    type: 'pipe',
    animated: true,
  },
  {
    id: 'e4',
    source: 'machine1',
    sourceHandle: 'bottom',
    target: 'motor1',
    targetHandle: 'top',
    type: 'pipe',
    animated: true,
  },
  {
    id: 'e5',
    source: 'machine1',
    sourceHandle: 'bottom',
    target: 'sensor1',
    targetHandle: 'top',
    type: 'pipe',
    animated: true,
  },
];
