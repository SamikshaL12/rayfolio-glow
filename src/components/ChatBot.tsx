import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot = ({ isOpen, onClose }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m here to help you learn more about my background and experience. Feel free to ask me anything!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('experience') || input.includes('work')) {
      return 'I have 5+ years of experience in data science, including roles at TechCorp Analytics, DataFlow Solutions, and AI Innovations Lab. I specialize in machine learning, predictive analytics, and building scalable data solutions.';
    }
    
    if (input.includes('skill') || input.includes('technology')) {
      return 'My technical skills include Python, R, SQL, Machine Learning, Deep Learning, TensorFlow, PyTorch, and various data visualization tools like Tableau and Power BI. I also have experience with cloud platforms like AWS.';
    }
    
    if (input.includes('education') || input.includes('degree')) {
      return 'I hold a Master of Science in Data Science from Stanford University (2019) and a Bachelor of Science in Computer Science from UC Berkeley (2017). I also have several professional certifications.';
    }
    
    if (input.includes('project')) {
      return 'Some of my notable projects include a Predictive Analytics Dashboard with 94% accuracy, Real-time Data Processing architecture handling 1M+ events per hour, and a Computer Vision Pipeline for medical diagnostics.';
    }
    
    if (input.includes('contact') || input.includes('reach')) {
      return 'You can connect with me through the social links in the contact section - GitHub, LinkedIn, and Instagram. I\'m always open to discussing data science opportunities!';
    }
    
    return 'That\'s an interesting question! I\'m here to help you learn about my background in data science. You can ask me about my experience, skills, education, projects, or how to get in touch.';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 right-4 z-50 w-80 h-96"
        >
          <Card className="w-full h-full bg-card/95 backdrop-blur-sm border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Bot className="w-4 h-4 text-primary" />
                Data Science Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-0 flex flex-col h-full">
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.sender === 'bot' && (
                      <Bot className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    )}
                    <div
                      className={`max-w-[70%] p-2 rounded-lg text-sm ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                    {message.sender === 'user' && (
                      <User className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1"
                  />
                  <Button size="icon" onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;