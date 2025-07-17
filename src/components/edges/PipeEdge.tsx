// edges/PipeEdge.tsx
import { type EdgeProps, getSmoothStepPath } from 'reactflow';

export function PipeEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <path
      id={id}
      d={edgePath}
      style={{
        stroke: '#2563eb', // azul tipo tubería
        strokeWidth: 8,
        fill: 'none',
      }}
    />
  );
}
