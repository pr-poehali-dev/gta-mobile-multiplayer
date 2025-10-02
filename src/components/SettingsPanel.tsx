import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function SettingsPanel() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-orbitron font-bold text-primary neon-glow">НАСТРОЙКИ</h2>
      </div>

      <div className="space-y-4">
        <Card className="cyber-gradient-border">
          <div className="relative z-10 p-4 bg-card rounded-lg space-y-4">
            <h3 className="font-orbitron font-semibold text-lg mb-4 flex items-center gap-2">
              <Icon name="Volume2" className="text-primary" size={20} />
              Звук
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Общая громкость</span>
                  <span className="text-sm text-primary font-semibold">75%</span>
                </div>
                <Slider defaultValue={[75]} max={100} step={1} />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Музыка</span>
                  <span className="text-sm text-primary font-semibold">60%</span>
                </div>
                <Slider defaultValue={[60]} max={100} step={1} />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Эффекты</span>
                  <span className="text-sm text-primary font-semibold">80%</span>
                </div>
                <Slider defaultValue={[80]} max={100} step={1} />
              </div>
            </div>
          </div>
        </Card>

        <Card className="cyber-gradient-border">
          <div className="relative z-10 p-4 bg-card rounded-lg space-y-4">
            <h3 className="font-orbitron font-semibold text-lg mb-4 flex items-center gap-2">
              <Icon name="Monitor" className="text-primary" size={20} />
              Графика
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Неоновые эффекты</span>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Размытие движения</span>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Тени</span>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Частицы</span>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </Card>

        <Card className="cyber-gradient-border">
          <div className="relative z-10 p-4 bg-card rounded-lg space-y-4">
            <h3 className="font-orbitron font-semibold text-lg mb-4 flex items-center gap-2">
              <Icon name="Gamepad2" className="text-primary" size={20} />
              Управление
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Инвертировать Y-ось</span>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Вибрация</span>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Чувствительность</span>
                  <span className="text-sm text-primary font-semibold">70%</span>
                </div>
                <Slider defaultValue={[70]} max={100} step={1} />
              </div>
            </div>
          </div>
        </Card>

        <Card className="cyber-gradient-border">
          <div className="relative z-10 p-4 bg-card rounded-lg space-y-4">
            <h3 className="font-orbitron font-semibold text-lg mb-4 flex items-center gap-2">
              <Icon name="User" className="text-primary" size={20} />
              Профиль
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Показывать статус онлайн</span>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Разрешить приглашения</span>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Голосовой чат</span>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
