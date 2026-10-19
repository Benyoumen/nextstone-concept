
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import {
  MessageSquare,
  Send,
  Paperclip,
  User,
  Bot,
  Users
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import OriginadorChat from "@/components/originador/OriginadorChat";

type Message = {
  id: number;
  sender: 'user' | 'assistant' | 'manager';
  content: string;
  timestamp: string;
  read: boolean;
  senderName?: string;
  role?: string;
};

type Conversation = {
  id: number;
  title: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  messages: Message[];
  participantRole?: string;
  projectName?: string;
};

export default function Conversas() {
  const [activeTab, setActiveTab] = useState("ia");
  const [activeConversation, setActiveConversation] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  
  // Mock data
  const assistantConversations: Conversation[] = [
    {
      id: 1,
      title: "Assistente NextStone",
      lastMessage: "Como posso ajudar com o seu projeto Residencial Vista Mar?",
      timestamp: "10:30",
      unread: 2,
      messages: [
        {
          id: 1,
          sender: 'user',
          content: 'Olá! Tenho algumas dúvidas sobre o processo de cadastro de projetos.',
          timestamp: '10:25',
          read: true
        },
        {
          id: 2,
          sender: 'assistant',
          content: 'Olá! Claro, estou aqui para ajudar. O que você gostaria de saber especificamente sobre o cadastro?',
          timestamp: '10:27',
          read: true
        },
        {
          id: 3,
          sender: 'user',
          content: 'Quais documentos são necessários para cadastrar um projeto residencial vertical?',
          timestamp: '10:28',
          read: true
        },
        {
          id: 4,
          sender: 'assistant',
          content: 'Para projetos residenciais verticais, você precisará de: 1) Matrícula do terreno, 2) Projeto arquitetônico preliminar, 3) Estudo de viabilidade econômica, 4) Aprovações preliminares da prefeitura (se disponível), 5) Documentos societários da incorporadora. Há algo específico sobre algum desses itens que você gostaria de saber?',
          timestamp: '10:30',
          read: false
        }
      ]
    }
  ];
  
  const managerConversations: Conversation[] = [
    {
      id: 2,
      title: "Ricardo Mendes",
      participantRole: "Gerente de Relacionamento",
      projectName: "Residencial Vista Mar",
      lastMessage: "Acabei de revisar a documentação que você enviou. Parece estar tudo em ordem!",
      timestamp: "Ontem",
      unread: 1,
      messages: [
        {
          id: 1,
          sender: 'user',
          content: 'Bom dia Ricardo, enviei a documentação do Residencial Vista Mar ontem. Você já conseguiu dar uma olhada?',
          timestamp: '09:15 Ontem',
          read: true
        },
        {
          id: 2,
          sender: 'manager',
          senderName: 'Ricardo Mendes',
          role: 'Gerente de Relacionamento',
          content: 'Bom dia! Sim, acabei de revisar a documentação que você enviou. Parece estar tudo em ordem! Vou encaminhar para nossa equipe de análise ainda hoje.',
          timestamp: '11:30 Ontem',
          read: false
        }
      ]
    },
    {
      id: 3,
      title: "Ana Silva",
      participantRole: "Analista Financeira",
      projectName: "Edifício Comercial Central",
      lastMessage: "Precisamos de mais detalhes sobre o fluxo de caixa projetado.",
      timestamp: "23/04",
      unread: 0,
      messages: [
        {
          id: 1,
          sender: 'manager',
          senderName: 'Ana Silva',
          role: 'Analista Financeira',
          content: 'Olá! Estou analisando o projeto Edifício Comercial Central e precisamos de mais detalhes sobre o fluxo de caixa projetado para os próximos 36 meses.',
          timestamp: '14:22 23/04',
          read: true
        },
        {
          id: 2,
          sender: 'user',
          content: 'Olá Ana, vou solicitar esses dados para a incorporadora e te envio até amanhã.',
          timestamp: '15:45 23/04',
          read: true
        },
        {
          id: 3,
          sender: 'manager',
          senderName: 'Ana Silva',
          role: 'Analista Financeira',
          content: 'Perfeito! Assim que receber podemos avançar com a análise.',
          timestamp: '16:03 23/04',
          read: true
        }
      ]
    }
  ];
  
  const getConversations = () => {
    if (activeTab === "ia") {
      return assistantConversations;
    } else {
      return managerConversations;
    }
  };
  
  const getActiveConversation = () => {
    const allConversations = [...assistantConversations, ...managerConversations];
    return allConversations.find(conv => conv.id === activeConversation) || null;
  };
  
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    
    // Implementation would send this to backend
    console.log("Sending message:", newMessage);
    
    // Clear the input
    setNewMessage("");
  };

  const handleOpenChat = () => {
    setShowChat(true);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Conversas</h1>
          <p className="text-muted-foreground mt-1">
            Tire suas dúvidas com o assistente virtual ou converse com a equipe NextStone.
          </p>
        </div>
        
        <Button 
          onClick={handleOpenChat}
          className="flex items-center gap-2"
        >
          <MessageSquare className="h-4 w-4" />
          Novo chat
        </Button>
      </div>
      
      <div className="border rounded-md bg-white overflow-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="border-r">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b px-4 py-2">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="ia" className="flex items-center gap-2">
                  <Bot className="h-4 w-4" /> Assistente
                </TabsTrigger>
                <TabsTrigger value="equipe" className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> Equipe
                  {managerConversations.some(conv => conv.unread > 0) && (
                    <Badge variant="destructive" className="h-5 w-5 flex items-center justify-center p-0 rounded-full text-[10px]">
                      {managerConversations.reduce((acc, conv) => acc + conv.unread, 0)}
                    </Badge>
                  )}
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="ia" className="m-0">
              <div className="h-[calc(100vh-13.5rem)]">
                <ScrollArea className="h-full">
                  {assistantConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 border-b cursor-pointer hover:bg-slate-50 ${activeConversation === conversation.id ? 'bg-slate-50' : ''}`}
                      onClick={() => setActiveConversation(conversation.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                          <Bot className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm truncate">{conversation.title}</h4>
                            <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread > 0 && (
                          <Badge variant="destructive" className="h-5 w-5 flex items-center justify-center p-0 rounded-full text-[10px]">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </TabsContent>
            
            <TabsContent value="equipe" className="m-0">
              <div className="h-[calc(100vh-13.5rem)]">
                <ScrollArea className="h-full">
                  {managerConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 border-b cursor-pointer hover:bg-slate-50 ${activeConversation === conversation.id ? 'bg-slate-50' : ''}`}
                      onClick={() => setActiveConversation(conversation.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-coral text-white">
                            {conversation.title.split(' ').map(part => part[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm truncate">{conversation.title}</h4>
                            <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{conversation.participantRole}</p>
                          <p className="text-xs font-medium text-coral">{conversation.projectName}</p>
                          <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread > 0 && (
                          <Badge variant="destructive" className="h-5 w-5 flex items-center justify-center p-0 rounded-full text-[10px]">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col h-[calc(100vh-10.5rem)]">
          {activeConversation ? (
            <>
              <div className="border-b p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getActiveConversation()?.title === "Assistente NextStone" ? (
                    <div className="h-9 w-9 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <Bot className="h-5 w-5" />
                    </div>
                  ) : (
                    <Avatar>
                      <AvatarFallback className="bg-coral text-white">
                        {getActiveConversation()?.title.split(' ').map(part => part[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <h4 className="font-medium">{getActiveConversation()?.title}</h4>
                    {getActiveConversation()?.participantRole && (
                      <p className="text-xs text-muted-foreground">{getActiveConversation()?.participantRole}</p>
                    )}
                  </div>
                </div>
                {getActiveConversation()?.projectName && (
                  <Badge variant="outline" className="bg-coral/10 text-coral border-coral/20">
                    {getActiveConversation()?.projectName}
                  </Badge>
                )}
              </div>
              
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {getActiveConversation()?.messages.map((message) => (
                    <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] ${message.sender === 'user' ? 'bg-coral text-white' : 'bg-slate-100'} rounded-lg p-3`}>
                        {(message.sender === 'manager' && message.senderName) && (
                          <div className="mb-1">
                            <span className="font-medium text-sm">{message.senderName}</span>
                            {message.role && (
                              <span className="text-xs text-muted-foreground ml-2">({message.role})</span>
                            )}
                          </div>
                        )}
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="border-t p-4">
                <form 
                  className="flex items-end gap-2" 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <Textarea 
                    placeholder="Digite sua mensagem..." 
                    className="resize-none min-h-[60px]"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="ghost"
                  >
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button type="submit" size="icon">
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center p-6">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium">Selecione uma conversa</h3>
                <p className="text-muted-foreground">Escolha um contato para iniciar ou continuar uma conversa.</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {showChat && <OriginadorChat onClose={() => setShowChat(false)} />}
    </div>
  );
}
