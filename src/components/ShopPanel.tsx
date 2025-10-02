import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ShopItem {
  id: number;
  name: string;
  price: number;
  category: 'weapon' | 'vehicle';
  rarity: 'common' | 'rare' | 'legendary';
  stats: { label: string; value: number }[];
}

const shopItems: ShopItem[] = [
  {
    id: 1,
    name: 'Плазменный бластер',
    price: 12500,
    category: 'weapon',
    rarity: 'rare',
    stats: [
      { label: 'Урон', value: 85 },
      { label: 'Скорострельность', value: 70 },
      { label: 'Точность', value: 90 },
    ],
  },
  {
    id: 2,
    name: 'Квантовый винтовка',
    price: 25000,
    category: 'weapon',
    rarity: 'legendary',
    stats: [
      { label: 'Урон', value: 95 },
      { label: 'Скорострельность', value: 60 },
      { label: 'Точность', value: 98 },
    ],
  },
  {
    id: 3,
    name: 'Aero Speedster 3000',
    price: 50000,
    category: 'vehicle',
    rarity: 'rare',
    stats: [
      { label: 'Скорость', value: 92 },
      { label: 'Управление', value: 85 },
      { label: 'Броня', value: 65 },
    ],
  },
  {
    id: 4,
    name: 'Cyber Tank X99',
    price: 85000,
    category: 'vehicle',
    rarity: 'legendary',
    stats: [
      { label: 'Скорость', value: 75 },
      { label: 'Управление', value: 70 },
      { label: 'Броня', value: 98 },
    ],
  },
];

export default function ShopPanel() {
  const [selectedTab, setSelectedTab] = useState('weapon');

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'text-secondary';
      case 'rare': return 'text-accent';
      default: return 'text-primary';
    }
  };

  const filteredItems = shopItems.filter(item => item.category === selectedTab);

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-orbitron font-bold text-primary neon-glow">МАГАЗИН</h2>
        <div className="flex items-center gap-2 text-secondary">
          <Icon name="DollarSign" size={20} />
          <span className="font-orbitron font-bold text-xl">78,500</span>
        </div>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-card/50">
          <TabsTrigger value="weapon" className="font-orbitron">
            <Icon name="Swords" size={18} className="mr-2" />
            Оружие
          </TabsTrigger>
          <TabsTrigger value="vehicle" className="font-orbitron">
            <Icon name="Car" size={18} className="mr-2" />
            Транспорт
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="space-y-4 mt-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="cyber-gradient-border group hover:scale-[1.02] transition-all">
              <div className="relative z-10 p-4 bg-card rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary flex items-center justify-center flex-shrink-0">
                    <Icon 
                      name={item.category === 'weapon' ? 'Zap' : 'Car'} 
                      className={getRarityColor(item.rarity)} 
                      size={32} 
                    />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-orbitron font-semibold text-lg">{item.name}</h3>
                        <Badge 
                          variant="outline" 
                          className={`${getRarityColor(item.rarity)} border-current text-xs`}
                        >
                          {item.rarity === 'legendary' ? 'Легендарное' : item.rarity === 'rare' ? 'Редкое' : 'Обычное'}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="DollarSign" className="text-secondary" size={16} />
                        <span className="text-secondary font-bold font-orbitron">{item.price.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {item.stats.map((stat, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">{stat.label}</span>
                            <span className="text-primary font-semibold">{stat.value}</span>
                          </div>
                          <div className="h-1 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-accent"
                              style={{ width: `${stat.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-primary/20 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-orbitron">
                      Купить
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
