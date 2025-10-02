import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ChatMessage {
  id: number;
  username: string;
  message: string;
  timestamp: string;
  type: 'system' | 'player' | 'team';
}

const initialMessages: ChatMessage[] = [
  { id: 1, username: 'NeonRunner', message: 'Кто хочет в рейд?', timestamp: '14:32', type: 'player' },
  { id: 2, username: 'CyberNinja', message: 'Я готов, давайте!', timestamp: '14:33', type: 'player' },
  { id: 3, username: 'Система', message: 'Игрок PhantomX получил легендарное оружие!', timestamp: '14:35', type: 'system' },
  { id: 4, username: 'GlitchMaster', message: 'Где найти квантовую винтовку?', timestamp: '14:36', type: 'player' },
];

export default function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: ChatMessage = {
        id: messages.length + 1,
        username: 'Вы',
        message: inputValue,
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        type: 'player',
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className="p-6 flex flex-col h-screen">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-orbitron font-bold text-primary neon-glow">ЧАТ</h2>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
          <span className="text-sm text-muted-foreground">256 онлайн</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((msg) => (
          <Card 
            key={msg.id} 
            className={`p-3 ${
              msg.type === 'system' 
                ? 'bg-accent/10 border-accent/30' 
                : msg.username === 'Вы'
                ? 'bg-primary/10 border-primary/30'
                : 'bg-card/50 border-border/50'
            }`}
          >
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                {msg.type === 'system' ? (
                  <Icon name="Info" size={16} className="text-white" />
                ) : (
                  <span className="text-xs font-bold text-white">
                    {msg.username.charAt(0)}
                  </span>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-orbitron font-semibold text-sm ${
                    msg.type === 'system' ? 'text-accent' : 
                    msg.username === 'Вы' ? 'text-primary' : 
                    'text-foreground'
                  }`}>
                    {msg.username}
                  </span>
                  <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                  {msg.type === 'team' && (
                    <Badge className="bg-secondary/20 text-secondary border-secondary text-xs">
                      Команда
                    </Badge>
                  )}
                </div>
                <p className="text-sm break-words">{msg.message}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Написать сообщение..."
          className="flex-1 bg-card/50 border-primary/50 focus:border-primary"
        />
        <Button 
          onClick={handleSend}
          className="bg-primary/20 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Icon name="Send" size={20} />
        </Button>
      </div>
    </div>
  );
}
