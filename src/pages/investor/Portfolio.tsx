
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PortfolioSummaryCards } from "./components/PortfolioSummaryCards";
import { PortfolioSearchBar } from "./components/PortfolioSearchBar";
import { PortfolioActiveInvestments } from "./components/PortfolioActiveInvestments";
import { PortfolioCompletedInvestments } from "./components/PortfolioCompletedInvestments";
import { PortfolioOpportunities } from "./components/PortfolioOpportunities";
import { RecommendedProjects } from "./components/RecommendedProjects";
import { PortfolioNegotiationSummary } from "./components/PortfolioNegotiationSummary";

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTab, setCurrentTab] = useState("active");

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">Meu Portfólio</h1>
      </div>
      <PortfolioSummaryCards />
      <PortfolioSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Tabs defaultValue="active" onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="active">Investimentos Ativos</TabsTrigger>
          <TabsTrigger value="completed">Concluídos</TabsTrigger>
          <TabsTrigger value="negotiation">Em Negociação</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-6">
          <PortfolioActiveInvestments searchQuery={searchQuery} />
        </TabsContent>
        <TabsContent value="completed">
          <PortfolioCompletedInvestments searchQuery={searchQuery} />
        </TabsContent>
        <TabsContent value="negotiation" className="space-y-6">
          <PortfolioNegotiationSummary searchQuery={searchQuery} />
        </TabsContent>
      </Tabs>
      <RecommendedProjects />
    </div>
  );
}
