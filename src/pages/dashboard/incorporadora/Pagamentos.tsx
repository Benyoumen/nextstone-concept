import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search, Calendar as CalendarIcon, Receipt, DollarSign, Filter, Info } from "lucide-react";
import { format, isToday, isSameMonth, parseISO } from "date-fns";
import clsx from "clsx";

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const statusColors: Record<string, string> = {
  Pago: "bg-green-100 text-green-700",
  "A Vencer": "bg-blue-100 text-blue-700",
  Vencido: "bg-red-100 text-red-700",
  "Inadimplente": "bg-red-950 text-white",
  "Em processamento": "bg-yellow-100 text-yellow-700"
};

// Simulated data, now including the "project" field
const ALL_PAYMENTS = [
  { id: 1,  buyer: "Alexandre Gomes",  parcela: 1,  date: "2025-04-12", valor: 52000, cobranca: "Boleto", status: "Pago", project: "Residencial Sol" },
  { id: 2,  buyer: "Joana Lara",      parcela: 1,  date: "2025-04-17", valor: 99000, cobranca: "Pix",    status: "Pago", project: "Residencial Sol" },
  { id: 3,  buyer: "Vinícius Souza",  parcela: 2,  date: "2025-04-22", valor: 88000, cobranca: "Boleto", status: "A Vencer", project: "Residencial Sol" },
  { id: 4,  buyer: "Patrícia Lima",   parcela: 1,  date: "2025-04-24", valor: 54000, cobranca: "Boleto", status: "Em processamento", project: "Residencial Sol" },
  { id: 5,  buyer: "Luiz Gonzaga",    parcela: 2,  date: "2025-05-03", valor: 61500, cobranca: "Pix",    status: "A Vencer", project: "Residencial Sol" },
  { id: 6,  buyer: "Tatiane Morais",  parcela: 2,  date: "2025-03-22", valor: 50000, cobranca: "Pix",    status: "Pago", project: "Residencial Sol" },
  // ----- PROJECT 2 -----
  { id: 7,  buyer: "Fernando Silva",  parcela: 3,  date: "2025-04-01", valor: 100000, cobranca: "Pix",   status: "Pago", project: "Golden Towers" },
  { id: 8,  buyer: "Renata Vasconcelos", parcela: 1, date: "2025-04-04", valor: 75000, cobranca: "Boleto", status: "A Vencer", project: "Golden Towers" },
  { id: 9,  buyer: "Carlos Mendes",  parcela: 1,  date: "2025-04-06", valor: 60000, cobranca: "TED",    status: "Pago", project: "Golden Towers" },
  { id: 10, buyer: "Adriana Teixeira",parcela: 3,  date: "2025-04-28", valor: 52000, cobranca: "Pix",    status: "Vencido", project: "Golden Towers" },
  { id: 11, buyer: "Lucas Santana",   parcela: 2,  date: "2025-04-15", valor: 71000, cobranca: "Boleto", status: "Em processamento", project: "Golden Towers" },
  // ----- PROJECT 3 -----
  { id: 12, buyer: "Juliana Paes",    parcela: 2,  date: "2025-04-12", valor: 85000, cobranca: "Boleto", status: "Pago", project: "Jardins Urbano" },
  { id: 13, buyer: "Paulo Ricardo",   parcela: 2,  date: "2025-05-12", valor: 62000, cobranca: "Pix",    status: "A Vencer", project: "Jardins Urbano" },
  { id: 14, buyer: "Cristiane P.",    parcela: 2,  date: "2025-05-14", valor: 53000, cobranca: "Boleto", status: "Pago", project: "Jardins Urbano" },
  { id: 15, buyer: "Fabrício Monteiro", parcela: 1, date: "2025-04-10", valor: 56000, cobranca: "Boleto", status: "Em processamento", project: "Jardins Urbano" },
  { id: 16, buyer: "Carla Fernanda",  parcela: 3,  date: "2025-05-02", valor: 74000, cobranca: "TED",    status: "Pago", project: "Golden Towers" },
  { id: 17, buyer: "Ricardo Souza",   parcela: 1,  date: "2025-04-18", valor: 77000, cobranca: "Pix",    status: "Pago", project: "Residencial Sol" },
  { id: 18, buyer: "Lucas Pascoal",   parcela: 2,  date: "2025-04-26", valor: 96000, cobranca: "Boleto", status: "A Vencer", project: "Jardins Urbano" },
  { id: 19, buyer: "Bruna Martins",   parcela: 2,  date: "2025-05-22", valor: 88000, cobranca: "Pix",    status: "Pago", project: "Golden Towers" },
  { id: 20, buyer: "Henrique Lins",   parcela: 2,  date: "2025-05-22", valor: 54000, cobranca: "Boleto", status: "A Vencer", project: "Jardins Urbano" },
  { id: 21, buyer: "Camila Souza",    parcela: 1,  date: "2025-04-21", valor: 67000, cobranca: "TED",    status: "Pago", project: "Mirante Plaza" },
  { id: 22, buyer: "Mário Sérgio",    parcela: 1,  date: "2025-04-14", valor: 59000, cobranca: "Pix",    status: "Pago", project: "Mirante Plaza" },
  { id: 23, buyer: "Priscila Franco", parcela: 1,  date: "2025-04-11", valor: 78000, cobranca: "Boleto", status: "Pago", project: "Residencial Sol" },
  { id: 24, buyer: "Julio Moura",     parcela: 3,  date: "2025-05-12", valor: 62000, cobranca: "Pix",    status: "Pago", project: "Residencial Sol" },
  { id: 25, buyer: "Isabela Reis",    parcela: 1,  date: "2025-04-29", valor: 70000, cobranca: "TED",    status: "Inadimplente", project: "Mirante Plaza" },
  { id: 26, buyer: "Marcos Alves",    parcela: 2,  date: "2025-03-20", valor: 58000, cobranca: "Pix",    status: "Pago", project: "Mirante Plaza" },
  { id: 27, buyer: "Ana Souza",       parcela: 1,  date: "2025-05-11", valor: 60000, cobranca: "Boleto", status: "A Vencer", project: "Jardins Urbano" },
  { id: 28, buyer: "João Pedro Lopes", parcela: 1, date: "2025-04-13", valor: 52000, cobranca: "Pix",    status: "Pago", project: "Residencial Sol" },
  { id: 29, buyer: "Bruno Clemente",  parcela: 1,  date: "2025-05-07", valor: 57000, cobranca: "TED",    status: "Pago", project: "Golden Towers" },
  { id: 30, buyer: "Sílvia Duarte",   parcela: 2,  date: "2025-04-20", valor: 82000, cobranca: "Boleto", status: "Pago", project: "Mirante Plaza" },
];

export default function Pagamentos() {
  const today = new Date();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>();
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // Tabs (projects)
  const projects = useMemo(
    () => Array.from(new Set(ALL_PAYMENTS.map(p => p.project))),
    []
  );
  const [selectedProject, setSelectedProject] = useState(projects[0] || "");

  // Now, all queries are filtered by selectedProject
  // Payments for visible table
  const payments = useMemo(() => {
    return ALL_PAYMENTS.filter(p => {
      if (p.project !== selectedProject) return false;
      const sameMonth = isSameMonth(parseISO(p.date), new Date(currentYear, currentMonth));
      if (!sameMonth) return false;
      if (selectedDay) {
        if (new Date(p.date).getDate() !== selectedDay) return false;
      }
      if (selectedStatus && p.status !== selectedStatus) return false;
      if (
        searchQuery &&
        ![p.buyer, p.status, String(p.parcela)]
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [currentMonth, currentYear, searchQuery, selectedDay, selectedStatus, selectedProject]);

  // All project payments for current month (for cards)
  const projectPaymentsInMonth = useMemo(() =>
    ALL_PAYMENTS.filter(
      p => isSameMonth(parseISO(p.date), new Date(currentYear, currentMonth)) && p.project === selectedProject
    ),
    [currentMonth, currentYear, selectedProject]
  );

  const monthlyTotal = useMemo(() => {
    return projectPaymentsInMonth.reduce((sum, p) => sum + p.valor, 0);
  }, [projectPaymentsInMonth]);
  const amortizado = useMemo(() => {
    return payments.filter(p=>p.status==="Pago").reduce((sum,p)=>sum+p.valor,0);
  }, [payments]);
  const vencidos = useMemo(() => {
    return payments.filter(p=>p.status==="Vencido" || p.status==="Inadimplente").reduce((sum,p)=>sum+p.valor,0);
  }, [payments]);
  const emProcesso = useMemo(() => {
    return payments.filter(p=>p.status==="Em processamento").reduce((sum,p)=>sum+p.valor,0);
  }, [payments]);

  const paymentDays = useMemo(() => {
    return projectPaymentsInMonth.map(p => new Date(p.date).getDate());
  }, [projectPaymentsInMonth]);

  // Calculate month details
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Calendar grid
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const handlePrevMonth = () => {
    if (currentMonth > 0) setCurrentMonth(currentMonth - 1);
    else {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    }
    setSelectedDay(null);
  };
  const handleNextMonth = () => {
    if (currentMonth < 11) setCurrentMonth(currentMonth + 1);
    else {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    }
    setSelectedDay(null);
  };

  // Render: insert tabs above payment table and filter all data/cards for selected project
  return (
    <div className="space-y-6 relative max-w-screen-xl mx-auto px-2 py-4">
      {/* TITLE AND FILTERS */}
      <div>
        <h1 className="text-3xl font-bold">Pagamentos</h1>
        <p className="text-muted-foreground text-sm mt-1 max-w-2xl">
          Acompanhe os pagamentos dos compradores, filtre facilmente por data ou status e visualize cobranças em tempo real.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between space-y-2 md:space-y-0">
        <div className="flex gap-2 flex-wrap">
          <Select value={selectedStatus} onValueChange={v => setSelectedStatus(v === "all" ? undefined : v)}>
            <SelectTrigger className="min-w-[140px] bg-white shadow-xs">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="z-20">
              <SelectItem value="all">Todos status</SelectItem>
              <SelectItem value="Pago">Pago</SelectItem>
              <SelectItem value="A Vencer">A Vencer</SelectItem>
              <SelectItem value="Vencido">Vencido</SelectItem>
              <SelectItem value="Inadimplente">Inadimplente</SelectItem>
              <SelectItem value="Em processamento">Em processamento</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por comprador, status ou parcela..."
              className="pl-10"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" onClick={()=>{
            setSearchQuery("");
            setSelectedStatus(undefined);
          }}>
            <Filter className="mr-1" size={16}/>Limpar filtros
          </Button>
        </div>
      </div>

      {/* PROJECT TABS */}
      <div className="mb-2">
        <div className="flex border-b border-gray-200">
          {projects.map((proj) => (
            <button
              key={proj}
              className={`px-4 py-2 font-medium text-sm transition-colors border-b-2 ${
                proj === selectedProject
                  ? "border-blue-600 text-blue-700 bg-white"
                  : "border-transparent text-gray-500 bg-gray-50 hover:bg-white"
              }`}
              onClick={() => {
                setSelectedProject(proj);
                setSelectedDay(null);
                setSearchQuery("");
                setSelectedStatus(undefined);
              }}
              type="button"
            >
              {proj}
            </button>
          ))}
        </div>
      </div>
      {/* MAIN CONTENT: TWO COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* LEFT: PAYMENT TABLE (2/3 width on large screens) */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <Card>
            <CardContent className="p-0 flex-1 flex flex-col">
              <div className="overflow-x-auto rounded-lg border border-gray-200 flex-1">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Comprador</TableHead>
                      <TableHead>Parcela</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Cobrança</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.length > 0 ? (
                      payments.map(p => (
                        <TableRow key={p.id}>
                          <TableCell>{p.buyer}</TableCell>
                          <TableCell>{p.parcela}</TableCell>
                          <TableCell>
                            <span className={clsx(
                              "inline-flex items-center gap-1",
                              isToday(parseISO(p.date)) && "font-semibold text-blue-600"
                            )}>
                              <CalendarIcon className="inline mr-1 w-4 h-4" />
                              {format(parseISO(p.date), "dd/MM/yyyy")}
                              {isToday(parseISO(p.date)) && <span className="ml-1 px-1 bg-blue-100 text-blue-600 rounded text-xs">Hoje</span>}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="font-semibold text-gray-700">
                              R$ {p.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-yellow-50 text-yellow-700">{p.cobranca}</Badge>
                          </TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 text-xs rounded ${statusColors[p.status] || "bg-gray-200 text-gray-700"}`}>{p.status}</span>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="h-72 text-center">
                          <div className="flex flex-col items-center justify-center">
                            <div className="p-3 bg-gray-100 rounded-full mb-3">
                              <Info className="w-7 h-7 text-gray-400" />
                            </div>
                            <p className="text-muted-foreground">
                              Nenhum pagamento encontrado neste filtro.
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* RIGHT: CALENDAR + CARDS (vertical stack) */}
        <div className="order-1 lg:order-2 space-y-6">
          {/* CALENDAR CARD */}
          <Card className="h-fit">
            <CardContent className="p-0 flex-1 flex flex-col">
              <div className="p-4 border-b bg-slate-50">
                <div className="flex items-center justify-between">
                  <button
                    className="p-1 rounded-full hover:bg-gray-100 group"
                    onClick={handlePrevMonth}
                  >
                    <ChevronLeft className="h-5 w-5 group-hover:text-primary transition" />
                  </button>
                  <h3 className="font-medium">{months[currentMonth]} {currentYear}</h3>
                  <button
                    className="p-1 rounded-full hover:bg-gray-100 group"
                    onClick={handleNextMonth}
                  >
                    <ChevronRight className="h-5 w-5 group-hover:text-primary transition" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-7 text-center mb-1">
                  <div className="text-xs font-medium text-muted-foreground">D</div>
                  <div className="text-xs font-medium text-muted-foreground">S</div>
                  <div className="text-xs font-medium text-muted-foreground">T</div>
                  <div className="text-xs font-medium text-muted-foreground">Q</div>
                  <div className="text-xs font-medium text-muted-foreground">Q</div>
                  <div className="text-xs font-medium text-muted-foreground">S</div>
                  <div className="text-xs font-medium text-muted-foreground">S</div>
                </div>
                <div className="grid grid-cols-7 gap-1 mt-2">
                  {calendarDays.map((day, index) =>
                    day ? (
                      <button
                        key={index}
                        onClick={() => setSelectedDay(day === selectedDay ? null : day)}
                        className={clsx(
                          "h-8 w-8 flex items-center justify-center text-sm rounded-full transition select-none outline-none font-medium relative",
                          day === selectedDay
                            ? "bg-blue-600 text-white ring-2 ring-blue-300"
                            : paymentDays.includes(day)
                              ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                              : "bg-white text-gray-700 hover:bg-gray-100",
                          isToday(new Date(currentYear, currentMonth, day))
                            ? "border border-blue-400"
                            : ""
                        )}
                        tabIndex={0}
                        aria-label={
                          paymentDays.includes(day)
                            ? "Possui pagamentos"
                            : ""
                        }
                      >
                        {day}
                        {paymentDays.includes(day) && (
                          <span className="absolute top-1 right-1 block w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        )}
                      </button>
                    ) : (
                      <div key={index}></div>
                    )
                  )}
                </div>
                {selectedDay && (
                  <p className="mt-3 text-xs text-blue-600">
                    {payments.length} pagamento(s) encontrado(s) para {String(selectedDay).padStart(2, "0")}/{String(currentMonth + 1).padStart(2, "0")}/{currentYear}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
          {/* FINANCIAL TOTALS CARD */}
          <Card>
            <CardContent className="p-4 flex flex-col space-y-3">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Receipt className="w-6 h-6 text-coral mr-1" />
                <DollarSign className="w-6 h-6 text-coral" /> Total do mês
              </h3>
              <div>
                <p className="text-sm text-muted-foreground mb-0">Total Previsto</p>
                <p className="text-2xl font-bold text-blue-900">R$ {monthlyTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-0">Total Pago</p>
                <p className="text-xl font-semibold text-green-700">R$ {amortizado.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 relative mt-1">
                <div className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: monthlyTotal > 0 ? `${Math.round(amortizado / monthlyTotal * 100)}%` : "0%" }}>
                </div>
                <span className="absolute left-2 top-[-18px] text-xs text-gray-500">0</span>
                <span className="absolute right-2 top-[-18px] text-xs text-gray-500">{monthlyTotal.toLocaleString("pt-BR")}</span>
              </div>
            </CardContent>
          </Card>
          {/* SUMMARY CARD */}
          <Card>
            <CardContent className="p-4 flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-green-700">Pagos</span>
                <span className="font-bold text-base">R$ {amortizado.toLocaleString("pt-BR", {minimumFractionDigits:2})}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-700">Em processamento</span>
                <span className="font-bold text-base">R$ {emProcesso.toLocaleString("pt-BR", {minimumFractionDigits:2})}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-red-600">Vencidos / Inadimplentes</span>
                <span className="font-bold text-base">R$ {vencidos.toLocaleString("pt-BR", {minimumFractionDigits:2})}</span>
              </div>
            </CardContent>
          </Card>
          {/* EFD-Reinf CARD */}
          <Card>
            <CardContent className="p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">EFD-Reinf</h3>
                <div className="rounded-full bg-gray-100 p-1">
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="data-inicial" className="flex text-sm">
                    Data Inicial
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <div className="relative">
                    <Input id="data-inicial" placeholder="Selecione a data" />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <CalendarIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="data-final" className="flex text-sm">
                    Data Final
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <div className="relative">
                    <Input id="data-final" placeholder="Selecione a data" />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <CalendarIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Helper Label component
const Label = ({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement> & { children: React.ReactNode }) => {
  return (
    <label className={`text-sm font-medium leading-none ${className || ''}`} {...props}>
      {children}
    </label>
  );
};
