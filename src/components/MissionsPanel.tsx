import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Mission {
  id: number;
  title: string;
  description: string;
  reward: number;
  progress: number;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'active' | 'completed' | 'locked';
}

const missions: Mission[] = [
  {
    id: 1,
    title: 'Первая кровь',
    description: 'Одержи первую победу в PvP бою',
    reward: 5000,
    progress: 60,
    difficulty: 'easy',
    status: 'active',
  },
  {
    id: 2,
    title: 'Король дорог',
    description: 'Укради 5 элитных автомобилей',
    reward: 15000,
    progress: 40,
    difficulty: 'medium',
    status: 'active',
  },
  {
    id: 3,
    title: 'Мастер взлома',
    description: 'Взломай 10 защищенных терминалов',
    reward: 25000,
    progress: 0,
    difficulty: 'hard',
    status: 'locked',
  },
];

export default function MissionsPanel() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-orbitron font-bold text-primary neon-glow">МИССИИ</h2>
        <Badge className="bg-accent/20 text-accent border-accent">
          {missions.filter(m => m.status === 'active').length} активных
        </Badge>
      </div>

      <div className="space-y-4">
        {missions.map((mission) => (
          <Card
            key={mission.id}
            className={`cyber-gradient-border ${mission.status === 'locked' ? 'opacity-50' : ''}`}
          >
            <div className="relative z-10 p-4 bg-card rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" className="text-primary" size={24} />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-orbitron font-semibold text-lg">{mission.title}</h3>
                    <Badge 
                      variant={mission.difficulty === 'hard' ? 'destructive' : 'default'}
                      className={mission.difficulty === 'easy' ? 'bg-primary/20 text-primary' : mission.difficulty === 'medium' ? 'bg-accent/20 text-accent' : ''}
                    >
                      {mission.difficulty === 'easy' ? 'Легко' : mission.difficulty === 'medium' ? 'Средне' : 'Сложно'}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{mission.description}</p>
                  
                  {mission.status !== 'locked' && (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Прогресс</span>
                        <span className="text-primary font-semibold">{mission.progress}%</span>
                      </div>
                      <Progress value={mission.progress} className="h-2" />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="DollarSign" className="text-secondary" size={16} />
                      <span className="text-secondary font-semibold">{mission.reward.toLocaleString()}</span>
                    </div>
                    
                    {mission.status === 'locked' && (
                      <Badge variant="outline" className="text-xs">
                        <Icon name="Lock" size={12} className="mr-1" />
                        Заблокировано
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
