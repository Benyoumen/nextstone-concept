
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import ProjectActionCTA from "./components/ProjectActionCTA";
import ProjectHeader from "./components/ProjectHeader";
import ProjectSummary from "./components/ProjectSummary";
import ProjectDescription from "./components/ProjectDescription";
import ExecutiveAnalysis from "./components/ExecutiveAnalysis";
import AdvancedMetrics from "./components/AdvancedMetrics";
import DualAssessmentCards from "./components/DualAssessmentCards";
import CashFlowAnalysis from "./components/CashFlowAnalysis";
import { 
  calculateNPV, 
  getTierMultiplier, 
  generateCashFlowData,
  getRiskLevel,
  getMarketTrend
} from "./utils/projectCalculations";

type ProjectDetailProps = {
  project: {
    name: string;
    company: string;
    location: string;
    type: string;
    rating: string;
    vgv: string;
    tir: string;
    units: string;
    fase: string;
    conclusao: string;
    vendido: string;
    description?: string;
  };
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  // Calculate additional metrics for detailed analysis
  const vgvValue = Number(project.vgv.replace('R$ ', '').replace('M', ''));
  const tirValue = Number(project.tir.replace('%', ''));
  const paybackYears = Number(project.conclusao) - 2023;
  const capexEstimated = vgvValue * 0.75;
  const rentabilidadePerSqMeter = Math.round(vgvValue * 1000000 / Number(project.units) / 100);
  
  // Advanced financial metrics calculation
  const wacc = 12.5; // Weighted Average Cost of Capital (%)
  const npvEstimated = calculateNPV(vgvValue, capexEstimated, tirValue, paybackYears);
  const irr = tirValue * 1.05; // Internal Rate of Return with premium
  const debtEquityRatio = 0.65; // Typical for real estate developments
  const equityMultiple = 1.8 + (tirValue / 15); // Based on TIR performance
  const cashOnCashReturn = tirValue * 0.8 / paybackYears; // Annual cash yield
  const breakEvenOccupancy = 65 - (tirValue / 2); // Lower for better projects
  
  // Risk-adjusted metrics
  const sharpeRatio = (tirValue - 4.5) / 8.5; // (Expected return - Risk-free rate) / Volatility
  const markToMarketPremium = vgvValue * (getTierMultiplier(project.rating) / 10);
  
  // Risk assessment based on project attributes
  const riskLevel = getRiskLevel(project.rating);
  
  // Market trend assessment
  const vendidoPercentage = Number(project.vendido.replace('%', ''));
  const marketTrend = getMarketTrend(vendidoPercentage);
  
  // Additional Expert-Level Insights
  const sectorBenchmarkTIR = 15.5;
  const sectorAverageEquityMultiple = 1.95;
  const sectorDrawdownThreshold = 12;
  const rareComplianceIssues = 0.2; // 20% of projects face this in market

  // Generate cash flow data
  const cashFlowData = generateCashFlowData(paybackYears, vgvValue, capexEstimated);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mt-8 w-full mx-auto animate-fade-in">
      {/* Project Header */}
      <ProjectHeader 
        name={project.name}
        company={project.company}
        location={project.location}
        type={project.type}
        rating={project.rating}
      />

      {/* Project Summary */}
      <ProjectSummary 
        vgv={project.vgv}
        tir={project.tir}
        units={project.units}
        fase={project.fase}
        conclusao={project.conclusao}
        vendido={project.vendido}
      />

      {/* Executive Analysis */}
      <ExecutiveAnalysis 
        debtEquityRatio={debtEquityRatio}
        irr={irr}
        sectorBenchmarkTIR={sectorBenchmarkTIR}
        equityMultiple={equityMultiple}
        sectorAverageEquityMultiple={sectorAverageEquityMultiple}
        sharpeRatio={sharpeRatio}
        breakEvenOccupancy={breakEvenOccupancy}
        cashOnCashReturn={cashOnCashReturn}
        location={project.location}
        rating={project.rating}
        markToMarketPremium={markToMarketPremium}
        vendido={project.vendido}
        rareComplianceIssues={rareComplianceIssues}
      />

      {/* Project Description */}
      <ProjectDescription description={project.description} />

      {/* Advanced Metrics */}
      <AdvancedMetrics 
        irr={irr}
        npvEstimated={npvEstimated}
        paybackYears={paybackYears}
        capexEstimated={capexEstimated}
        cashOnCashReturn={cashOnCashReturn}
        equityMultiple={equityMultiple}
        wacc={wacc}
        debtEquityRatio={debtEquityRatio}
        sharpeRatio={sharpeRatio}
        markToMarketPremium={markToMarketPremium}
        rentabilidadePerSqMeter={rentabilidadePerSqMeter}
        breakEvenOccupancy={breakEvenOccupancy}
      />

      {/* Risk and Market Dual Cards */}
      <DualAssessmentCards 
        riskLevel={riskLevel}
        tirValue={tirValue}
        location={project.location}
        company={project.company}
        type={project.type}
        vendidoPercentage={vendidoPercentage}
        marketTrend={marketTrend}
        vgvValue={vgvValue}
        units={project.units}
        rating={project.rating}
      />

      {/* Cash Flow Analysis */}
      <CashFlowAnalysis cashFlowData={cashFlowData} />

      {/* Call to Action */}
      <div className="mt-12 flex justify-center">
        <ProjectActionCTA />
      </div>
    </div>
  );
}
