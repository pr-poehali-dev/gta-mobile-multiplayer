import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  category: 'weapon' | 'vehicle' | 'consumable';
  equipped?: boolean;
}

const inventoryItems: InventoryItem[] = [
  { id: 1, name: 'Лазерный пистолет', quantity: 1, category: 'weapon', equipped: true },
  { id: 2, name: 'Энергощит', quantity: 3, category: 'consumable' },
  { id: 3, name: 'Hover Bike', quantity: 1, category: 'vehicle', equipped: true },
  { id: 4, name: 'Nano медпак', quantity: 15, category: 'consumable' },
  { id: 5, name: 'Штурмовая винтовка', quantity: 1, category: 'weapon' },
];

export default function InventoryPanel() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-orbitron font-bold text-primary neon-glow">ИНВЕНТАРЬ</h2>
        <Badge className="bg-accent/20 text-accent border-accent">
          {inventoryItems.length} предметов
        </Badge>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-card/50">
          <TabsTrigger value="all" className="font-orbitron text-xs">Всё</TabsTrigger>
          <TabsTrigger value="weapon" className="font-orbitron text-xs">Оружие</TabsTrigger>
          <TabsTrigger value="vehicle" className="font-orbitron text-xs">Транспорт</TabsTrigger>
          <TabsTrigger value="consumable" className="font-orbitron text-xs">Расходники</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-3 mt-6">
          {inventoryItems.map((item) => (
            <Card key={item.id} className="cyber-gradient-border">
              <div className="relative z-10 p-3 bg-card rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 border border-primary flex items-center justify-center flex-shrink-0">
                    <Icon 
                      name={
                        item.category === 'weapon' ? 'Sword' : 
                        item.category === 'vehicle' ? 'Car' : 
                        'Package'
                      } 
                      className="text-primary" 
                      size={24} 
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-orbitron font-semibold">{item.name}</h3>
                      {item.equipped && (
                        <Badge className="bg-secondary/20 text-secondary border-secondary text-xs">
                          <Icon name="Check" size={12} className="mr-1" />
                          Экипировано
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Количество: {item.quantity}</p>
                  </div>
                  
                  <button className="w-10 h-10 rounded-lg bg-accent/20 border border-accent flex items-center justify-center hover:bg-accent/40 transition-all">
                    <Icon name="MoreVertical" className="text-accent" size={20} />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {['weapon', 'vehicle', 'consumable'].map((category) => (
          <TabsContent key={category} value={category} className="space-y-3 mt-6">
            {inventoryItems.filter(item => item.category === category).map((item) => (
              <Card key={item.id} className="cyber-gradient-border">
                <div className="relative z-10 p-3 bg-card rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 border border-primary flex items-center justify-center flex-shrink-0">
                      <Icon 
                        name={
                          item.category === 'weapon' ? 'Sword' : 
                          item.category === 'vehicle' ? 'Car' : 
                          'Package'
                        } 
                        className="text-primary" 
                        size={24} 
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-orbitron font-semibold">{item.name}</h3>
                        {item.equipped && (
                          <Badge className="bg-secondary/20 text-secondary border-secondary text-xs">
                            <Icon name="Check" size={12} className="mr-1" />
                            Экипировано
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">Количество: {item.quantity}</p>
                    </div>
                    
                    <button className="w-10 h-10 rounded-lg bg-accent/20 border border-accent flex items-center justify-center hover:bg-accent/40 transition-all">
                      <Icon name="MoreVertical" className="text-accent" size={20} />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
