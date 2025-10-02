import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface MapMarker {
  id: number;
  type: 'mission' | 'shop' | 'player' | 'enemy';
  name: string;
  x: number;
  y: number;
}

const markers: MapMarker[] = [
  { id: 1, type: 'mission', name: 'Первая кровь', x: 30, y: 25 },
  { id: 2, type: 'mission', name: 'Король дорог', x: 65, y: 40 },
  { id: 3, type: 'shop', name: 'Магазин оружия', x: 50, y: 60 },
  { id: 4, type: 'player', name: 'Вы', x: 45, y: 55 },
  { id: 5, type: 'enemy', name: 'Враг', x: 70, y: 30 },
];

export default function MapPanel() {
  const getMarkerIcon = (type: string) => {
    switch (type) {
      case 'mission': return 'Target';
      case 'shop': return 'ShoppingCart';
      case 'player': return 'User';
      case 'enemy': return 'Skull';
      default: return 'MapPin';
    }
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'mission': return 'text-secondary';
      case 'shop': return 'text-accent';
      case 'player': return 'text-primary';
      case 'enemy': return 'text-destructive';
      default: return 'text-foreground';
    }
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-orbitron font-bold text-primary neon-glow">КАРТА</h2>
        <Badge className="bg-primary/20 text-primary border-primary">
          Ночной город
        </Badge>
      </div>

      <Card className="cyber-gradient-border overflow-hidden">
        <div className="relative z-10 bg-card rounded-lg">
          <div 
            className="relative w-full aspect-square bg-gradient-to-br from-background via-card to-muted/30"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 20px, hsl(var(--primary) / 0.1) 20px, hsl(var(--primary) / 0.1) 21px),
                repeating-linear-gradient(90deg, transparent, transparent 20px, hsl(var(--primary) / 0.1) 20px, hsl(var(--primary) / 0.1) 21px)
              `
            }}
          >
            {markers.map((marker) => (
              <div
                key={marker.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              >
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                  marker.type === 'player' 
                    ? 'bg-primary/30 border-primary animate-pulse-neon' 
                    : marker.type === 'mission'
                    ? 'bg-secondary/30 border-secondary'
                    : marker.type === 'shop'
                    ? 'bg-accent/30 border-accent'
                    : 'bg-destructive/30 border-destructive'
                }`}>
                  <Icon 
                    name={getMarkerIcon(marker.type) as any} 
                    className={getMarkerColor(marker.type)} 
                    size={16} 
                  />
                </div>
                
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <div className="bg-card/90 backdrop-blur-sm border border-primary/50 rounded px-2 py-1">
                    <p className="text-xs font-orbitron">{marker.name}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-4 bg-card/80 backdrop-blur-sm border border-primary/50 rounded-lg p-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-primary/30 border border-primary" />
                  <span>Игрок</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-secondary/30 border border-secondary" />
                  <span>Миссия</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-accent/30 border border-accent" />
                  <span>Магазин</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-destructive/30 border border-destructive" />
                  <span>Враг</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <button className="p-3 bg-card/50 border border-primary/50 rounded-lg hover:bg-card/70 transition-all">
          <Icon name="ZoomIn" className="text-primary mx-auto mb-1" size={20} />
          <p className="text-xs font-orbitron">Приблизить</p>
        </button>
        <button className="p-3 bg-card/50 border border-primary/50 rounded-lg hover:bg-card/70 transition-all">
          <Icon name="ZoomOut" className="text-primary mx-auto mb-1" size={20} />
          <p className="text-xs font-orbitron">Отдалить</p>
        </button>
      </div>
    </div>
  );
}
