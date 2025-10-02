import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function GameControls() {
  const [joystickPosition, setJoystickPosition] = useState({ x: 0, y: 0 });
  const [actionsActive, setActionsActive] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <div className="relative w-full h-full">
        <div className="absolute bottom-24 left-6 w-32 h-32 pointer-events-auto">
          <div className="relative w-full h-full bg-card/30 rounded-full border-2 border-primary neon-border backdrop-blur-sm">
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full neon-glow transition-transform"
              style={{ transform: `translate(calc(-50% + ${joystickPosition.x}px), calc(-50% + ${joystickPosition.y}px))` }}
            />
          </div>
          <div className="text-center mt-2 text-xs text-primary/70 font-orbitron">MOVE</div>
        </div>

        <div className="absolute bottom-24 right-6 flex flex-col gap-3 pointer-events-auto">
          <button 
            className="w-16 h-16 rounded-full bg-secondary/20 border-2 border-secondary neon-border-pink backdrop-blur-sm flex items-center justify-center hover:bg-secondary/40 transition-all active:scale-95"
            onTouchStart={() => setActionsActive('jump')}
            onTouchEnd={() => setActionsActive(null)}
          >
            <Icon name="ArrowUp" className="text-secondary" size={24} />
          </button>
          <button 
            className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent neon-border backdrop-blur-sm flex items-center justify-center hover:bg-accent/40 transition-all active:scale-95"
            onTouchStart={() => setActionsActive('action')}
            onTouchEnd={() => setActionsActive(null)}
          >
            <Icon name="Zap" className="text-accent" size={24} />
          </button>
        </div>

        <div className="absolute top-6 right-6 flex gap-2 pointer-events-auto">
          <button className="w-12 h-12 rounded-lg bg-card/50 border border-primary/50 backdrop-blur-sm flex items-center justify-center hover:bg-card/70 transition-all">
            <Icon name="Target" className="text-primary" size={20} />
          </button>
          <button className="w-12 h-12 rounded-lg bg-card/50 border border-primary/50 backdrop-blur-sm flex items-center justify-center hover:bg-card/70 transition-all">
            <Icon name="Crosshair" className="text-primary" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
