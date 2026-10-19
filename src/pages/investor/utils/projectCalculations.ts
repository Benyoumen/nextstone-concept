
// Helper utility functions for project calculations

/**
 * Calculate Net Present Value (NPV) based on project parameters
 */
export function calculateNPV(vgv: number, capex: number, tir: number, years: number): number {
  let npv = -capex * 1000000 * 0.6; // Initial investment (60% upfront)
  const discountRate = 0.15; // 15% discount rate
  
  // Simplified NPV calculation for the cash inflows
  for (let i = 1; i <= years; i++) {
    let cashFlow = 0;
    
    if (i < years) {
      // Construction phase has negative cash flow
      cashFlow = -capex * 1000000 * 0.4 / (years - 1);
    } else {
      // Final year has positive cash flow from sales
      cashFlow = vgv * 1000000;
    }
    
    npv += cashFlow / Math.pow(1 + discountRate, i);
  }
  
  return Math.round(npv / 1000000 * 10) / 10; // Round to 1 decimal place in millions
}

/**
 * Get multiplier based on project tier/rating
 */
export function getTierMultiplier(rating: string): number {
  switch (rating) {
    case "A+": return 1.5;
    case "A": return 1.3;
    case "B+": return 1.1;
    default: return 1.0;
  }
}

/**
 * Generate cash flow projection data for a project
 */
export function generateCashFlowData(years: number, vgv: number, capex: number) {
  const data = [];
  for (let i = 0; i <= years; i++) {
    const year = 2023 + i;
    const isConstructionYear = i < years - 1;
    const isCompletionYear = i === years - 1;
    const isSalesYear = i >= years - 1;
    
    let investment = 0;
    let revenue = 0;
    
    if (isConstructionYear) {
      investment = (capex * 1000000) * (0.3 / (years - 1));
    }
    
    if (isCompletionYear) {
      investment = (capex * 1000000) * 0.2;
    }
    
    if (isSalesYear) {
      const totalRevenue = vgv * 1000000;
      const salesYears = years > 1 ? 2 : 1;
      const salesDistribution = i === years ? 0.7 : 0.3;
      revenue = totalRevenue * (salesDistribution / salesYears);
    }
    
    const netFlow = revenue - investment;
    
    data.push({
      year,
      investment: -investment / 1000000,
      revenue: revenue / 1000000,
      netFlow: netFlow / 1000000
    });
  }
  return data;
}

/**
 * Determine risk level based on project rating
 */
export function getRiskLevel(rating: string): string {
  if (rating === "A+" || rating === "A") return "Baixo";
  if (rating === "B+") return "Médio";
  return "Alto";
}

/**
 * Assess market trend based on sold percentage
 */
export function getMarketTrend(soldPercentage: number): string {
  if (soldPercentage > 70) return "Alta demanda";
  if (soldPercentage > 40) return "Demanda estável";
  return "Demanda moderada";
}
