import React from 'react';

export default function PacmanBackground() {
  return (
    <div className="fixed inset-0 text-blue-500 opacity-20 font-mono text-xs overflow-hidden whitespace-pre z-[-1]">
      {`╔════════════════════════════╗
║ᗧ···························║
║·┌──┐·┌────────┐·┌──┐·······║
║·│  │·│        │·│  │·······║
║·└──┘·└────────┘·└──┘·······║
║·································║
║·┌──┐·┌┐·┌──────┐·┌┐·┌──┐···║
║·└──┘·││·└──┐┌──┘·││·└──┘···║
║······││····││····││········║
║·────·└┘·┌──┘└──┐·└┘·────···║
║······┌┐·└──────┘·┌┐········║
║······││··········││········║
║·┌──┐·││·┌──────┐·││·┌──┐···║
║·└──┘·└┘·└──────┘·└┘·└──┘···║
║·································║
║·┌────┐·┌────────┐·┌────┐···║
║·└────┘·└────────┘·└────┘···║
║·································║
╚════════════════════════════╝`.repeat(3)}
    </div>
  );
}