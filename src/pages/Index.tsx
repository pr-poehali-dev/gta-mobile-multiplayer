import { useState } from 'react';
import MainMenu from '@/components/MainMenu';
import GameControls from '@/components/GameControls';
import MissionsPanel from '@/components/MissionsPanel';
import ShopPanel from '@/components/ShopPanel';
import InventoryPanel from '@/components/InventoryPanel';
import ChatPanel from '@/components/ChatPanel';
import MapPanel from '@/components/MapPanel';
import SettingsPanel from '@/components/SettingsPanel';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Index() {
  const [currentSection, setCurrentSection] = useState<string>('menu');

  const renderSection = () => {
    switch (currentSection) {
      case 'menu':
        return <MainMenu onNavigate={setCurrentSection} />;
      case 'game':
        return (
          <div className="min-h-screen bg-gradient-to-b from-background via-background to-card relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI0MCwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-orbitron font-bold text-primary neon-glow mb-2">
                  ИГРОВОЙ МИР
                </h2>
                <p className="text-muted-foreground">Исследуй ночной киберпанк город</p>
              </div>
              
              <div className="w-full max-w-4xl aspect-video relative overflow-hidden rounded-lg border-2 border-primary neon-border">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27]">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(to bottom, transparent 0%, rgba(0,240,255,0.03) 50%, transparent 100%),
                      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.05) 2px, rgba(0,240,255,0.05) 4px),
                      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,0,110,0.03) 2px, rgba(255,0,110,0.03) 4px)
                    `
                  }} />
                  
                  <div className="absolute bottom-0 left-0 right-0 h-2/3">
                    <div className="relative h-full flex items-end justify-center perspective-1000">
                      {[...Array(20)].map((_, i) => (
                        <div 
                          key={i}
                          className="absolute bottom-0 w-16 bg-gradient-to-t opacity-80"
                          style={{
                            height: `${Math.random() * 60 + 40}%`,
                            left: `${(i / 20) * 100}%`,
                            background: i % 3 === 0 
                              ? 'linear-gradient(to top, #00F0FF, transparent)' 
                              : i % 3 === 1 
                              ? 'linear-gradient(to top, #FF006E, transparent)'
                              : 'linear-gradient(to top, #8B5CF6, transparent)',
                            filter: 'blur(1px)',
                            transform: 'scaleY(0.7)',
                            animation: `pulse-neon ${2 + Math.random() * 2}s infinite`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0A0E27]" />
                  
                  <div className="absolute top-4 left-4 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-primary font-orbitron">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
                      <span>NIGHT CITY</span>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">23:47:32</div>
                  </div>

                  <div className="absolute top-4 right-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Icon name="Radar" className="text-secondary" size={14} />
                      <span className="text-secondary font-orbitron">256m</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-primary rounded-full opacity-50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-4 bg-primary" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-1 bg-primary" />
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 w-full max-w-md">
                <div className="p-3 bg-card/50 border border-primary/30 rounded-lg text-center">
                  <Icon name="Heart" className="text-destructive mx-auto mb-1" size={20} />
                  <p className="text-xs text-muted-foreground">HP</p>
                  <p className="text-sm font-orbitron font-bold text-destructive">95/100</p>
                </div>
                <div className="p-3 bg-card/50 border border-accent/30 rounded-lg text-center">
                  <Icon name="Shield" className="text-accent mx-auto mb-1" size={20} />
                  <p className="text-xs text-muted-foreground">Энергия</p>
                  <p className="text-sm font-orbitron font-bold text-accent">78/100</p>
                </div>
                <div className="p-3 bg-card/50 border border-secondary/30 rounded-lg text-center">
                  <Icon name="Zap" className="text-secondary mx-auto mb-1" size={20} />
                  <p className="text-xs text-muted-foreground">Стамина</p>
                  <p className="text-sm font-orbitron font-bold text-secondary">85/100</p>
                </div>
              </div>
            </div>
            
            <GameControls />
          </div>
        );
      case 'missions':
        return <MissionsPanel />;
      case 'shop':
        return <ShopPanel />;
      case 'inventory':
        return <InventoryPanel />;
      case 'chat':
        return <ChatPanel />;
      case 'map':
        return <MapPanel />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <MainMenu onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {currentSection !== 'menu' && (
        <div className="fixed top-4 left-4 z-50">
          <Button
            onClick={() => setCurrentSection('menu')}
            className="bg-card/80 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            size="icon"
          >
            <Icon name="ArrowLeft" size={20} />
          </Button>
        </div>
      )}
      
      {renderSection()}
    </div>
  );
}