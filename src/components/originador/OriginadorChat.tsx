
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X, Send, User, Bot, ChevronDown, ChevronUp, Minimize, Maximize2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { toast } from "@/hooks/use-toast";

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai' | 'human';
  timestamp: Date;
};

type OriginadorChatProps = {
  onClose: () => void;
};

const OriginadorChat = ({ onClose }: OriginadorChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou o assistente da NextStone. Como posso ajudar você hoje? Se sua dúvida for específica sobre comissões ou processos internos, posso chamar um de nossos gerentes para te atender.",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [humanTransfer, setHumanTransfer] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI/human response
    setTimeout(() => {
      let response: Message;
      
      if (humanTransfer || input.toLowerCase().includes("comissão") || input.toLowerCase().includes("gerente") || input.toLowerCase().includes("falar com humano")) {
        if (!humanTransfer) {
          // First human transfer notification
          response = {
            id: messages.length + 2,
            text: "Entendi que você precisa de ajuda mais específica. Estou transferindo para Ana Silva, nossa gerente de originadores.",
            sender: 'ai',
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, response]);
          setHumanTransfer(true);
          setIsTyping(true);
          
          // Simulate human joining after a delay
          setTimeout(() => {
            const humanJoinMessage: Message = {
              id: messages.length + 3,
              text: "Olá, sou Ana Silva, gerente de originadores na NextStone. Li sua mensagem e estou aqui para ajudar. Como posso auxiliá-lo sobre esse assunto?",
              sender: 'human',
              timestamp: new Date()
            };
            
            setMessages(prev => [...prev, humanJoinMessage]);
            setIsTyping(false);
          }, 2000);
        } else {
          // Human already in the conversation
          response = {
            id: messages.length + 2,
            text: generateHumanResponse(input),
            sender: 'human',
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, response]);
          setIsTyping(false);
        }
      } else {
        // AI response
        response = {
          id: messages.length + 2,
          text: generateAIResponse(input),
          sender: 'ai',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, response]);
        setIsTyping(false);
      }
    }, 1500);
  };

  const generateAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("projeto") || lowerQuery.includes("cadastrar")) {
      return "Para cadastrar um projeto, você pode preencher o formulário em nossa página principal. Precisamos de informações básicas como localização, tipo de empreendimento e dados da incorporadora. Se precisar de ajuda durante o preenchimento, estou à disposição!";
    }
    
    if (lowerQuery.includes("prazo") || lowerQuery.includes("análise") || lowerQuery.includes("tempo")) {
      return "Nossa análise inicial leva em média 7 dias úteis. Projetos mais complexos podem demandar um pouco mais de tempo. Após a aprovação inicial, o processo completo até o financiamento dura em média 45 dias.";
    }
    
    if (lowerQuery.includes("documento") || lowerQuery.includes("documentação")) {
      return "Inicialmente precisamos apenas de informações básicas sobre o projeto e a incorporadora. Na etapa seguinte, solicitaremos documentos como matrículas, estudos de viabilidade e projetos preliminares. Temos uma checklist completa que podemos enviar por email!";
    }
    
    return "Obrigado por sua mensagem! Posso te ajudar com informações sobre o processo de cadastro, prazos de análise, documentação necessária e muito mais. Se sua dúvida for específica sobre comissões ou aspectos contratuais, posso transferir para um de nossos gerentes.";
  };

  const generateHumanResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("comissão") || lowerQuery.includes("pagamento")) {
      return "Sobre comissões, trabalhamos com percentuais entre 10% e 20% do valor do financiamento aprovado. O valor exato depende da complexidade do projeto e do seu histórico conosco. O pagamento é feito em até 10 dias úteis após a assinatura do contrato. Posso enviar nossa tabela detalhada por email se preferir!";
    }
    
    if (lowerQuery.includes("exclusividade") || lowerQuery.includes("outras plataformas")) {
      return "Quanto à exclusividade, solicitamos um período de 45 dias para trabalharmos o projeto. Durante esse tempo, mantemos comunicação constante sobre o andamento. Se após esse período não houver avanço significativo, você pode ofertar o projeto em outros canais sem qualquer penalidade.";
    }
    
    if (lowerQuery.includes("reunião") || lowerQuery.includes("conversar")) {
      return "Claro! Podemos agendar uma reunião para conversar mais detalhadamente. Estou disponível amanhã entre 10h e 16h, ou na quinta-feira no período da manhã. Qual horário seria melhor para você? Podemos fazer uma videoconferência ou, se preferir, um café presencial no nosso escritório.";
    }
    
    return "Obrigada pela sua mensagem. Como gerente de originadores, estou aqui para garantir que você tenha todo o suporte necessário. Posso esclarecer qualquer dúvida sobre comissões, contratos, ou o processo como um todo. Se preferir uma conversa mais detalhada, podemos agendar uma chamada ou reunião presencial.";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    toast({
      title: isMinimized ? "Chat expandido" : "Chat minimizado",
      duration: 1500,
    });
  };

  return (
    <Collapsible
      open={!isCollapsed}
      onOpenChange={(open) => setIsCollapsed(!open)}
      className={`fixed bottom-6 right-6 shadow-xl rounded-xl overflow-hidden z-40 ${
        isMinimized ? 'w-72' : 'w-96'
      }`}
    >
      <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-400"></div>
          <h3 className="font-semibold">Suporte NextStone</h3>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMinimize}
            className="hover:bg-slate-800"
          >
            {isMinimized ? (
              <Maximize2 className="h-4 w-4 text-white" />
            ) : (
              <Minimize className="h-4 w-4 text-white" />
            )}
          </Button>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-slate-800">
              {isCollapsed ? <ChevronUp className="h-4 w-4 text-white" /> : <ChevronDown className="h-4 w-4 text-white" />}
            </Button>
          </CollapsibleTrigger>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-slate-800">
            <X className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>

      <CollapsibleContent className="bg-white">
        <div className={`flex flex-col ${isMinimized ? 'h-[300px]' : 'h-[450px]'}`}>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`
                    max-w-[80%] rounded-xl p-3 relative
                    ${message.sender === 'user' 
                      ? 'bg-slate-700 text-white rounded-tr-none' 
                      : message.sender === 'ai' 
                        ? 'bg-gray-200 text-gray-800 rounded-tl-none' 
                        : 'bg-slate-900 text-white rounded-tl-none'}
                  `}
                >
                  {message.sender !== 'user' && (
                    <div className="absolute -left-8 top-0">
                      <div className={`
                        w-6 h-6 rounded-full flex items-center justify-center
                        ${message.sender === 'ai' ? 'bg-gray-300' : 'bg-slate-800'}
                      `}>
                        {message.sender === 'ai' ? (
                          <Bot className="h-4 w-4 text-gray-700" />
                        ) : (
                          <User className="h-4 w-4 text-white" />
                        )}
                      </div>
                    </div>
                  )}
                  
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 text-right mt-1">
                    {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex">
                <div className="bg-gray-200 rounded-xl p-3 rounded-tl-none max-w-[80%] flex gap-1 items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef}></div>
          </div>
          
          <div className="border-t p-4">
            <form 
              className="flex items-end gap-2" 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <Textarea 
                placeholder="Digite sua mensagem..." 
                className="resize-none min-h-[60px]"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button type="submit" size="icon" variant="default" className="bg-slate-900 hover:bg-slate-800">
                <Send className="h-5 w-5" />
              </Button>
            </form>
            <div className="text-xs text-gray-400 mt-2 text-center">
              {humanTransfer ? 'Você está conversando com Ana Silva, Gerente de Originadores' : 'Assistente virtual NextStone'}
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default OriginadorChat;
