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
              
              <div className="w-full max-w-md aspect-video bg-card/30 border-2 border-primary neon-border rounded-lg backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-3">
                  <Icon name="Gamepad2" className="text-primary mx-auto animate-pulse-neon" size={64} />
                  <p className="text-lg font-orbitron">Игровой экран</p>
                  <p className="text-sm text-muted-foreground">Используй джойстики для управления</p>
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
