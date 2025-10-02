import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface MainMenuProps {
  onNavigate: (section: string) => void;
}

export default function MainMenu({ onNavigate }: MainMenuProps) {
  const menuItems = [
    { id: 'game', label: 'Играть', icon: 'Gamepad2', color: 'primary' },
    { id: 'missions', label: 'Миссии', icon: 'Target', color: 'secondary' },
    { id: 'map', label: 'Карта', icon: 'Map', color: 'accent' },
    { id: 'inventory', label: 'Инвентарь', icon: 'Package', color: 'primary' },
    { id: 'shop', label: 'Магазин', icon: 'ShoppingCart', color: 'secondary' },
    { id: 'chat', label: 'Чат', icon: 'MessageSquare', color: 'accent' },
    { id: 'settings', label: 'Настройки', icon: 'Settings', color: 'primary' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12 animate-float">
        <h1 className="text-6xl md:text-8xl font-black text-primary neon-glow mb-4 font-orbitron tracking-wider">
          CYBER<span className="text-secondary">WORLD</span>
        </h1>
        <p className="text-lg text-muted-foreground">Открытый мир · Мультиплеер · Неон</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full">
        {menuItems.map((item) => (
          <Card
            key={item.id}
            className="cyber-gradient-border group cursor-pointer transition-all hover:scale-105 active:scale-95"
            onClick={() => onNavigate(item.id)}
          >
            <div className="relative z-10 p-6 flex flex-col items-center gap-3 bg-card rounded-lg">
              <div className={`w-16 h-16 rounded-full bg-${item.color}/20 border-2 border-${item.color} flex items-center justify-center group-hover:animate-pulse-neon`}>
                <Icon name={item.icon as any} className={`text-${item.color}`} size={28} />
              </div>
              <span className="font-orbitron font-semibold text-foreground">{item.label}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex gap-4">
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
          <span>1,234 игроков онлайн</span>
        </div>
      </div>
    </div>
  );
}
