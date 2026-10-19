import { ArrowRight, BadgeCheck } from "lucide-react";

interface Developer {
  id: string;
  name: string;
  rating: string;
  ratingClass: string;
  unitsSold: string;
  regions: string[];
  yearsActive: number;
  creditScore: number;
  fundingNeeded: string;
}

const developers: Developer[] = [
  {
    id: "1",
    name: "Inc******** A",
    rating: "A+",
    ratingClass: "bg-green-100 text-green-800",
    unitsSold: "582",
    regions: ["SP", "RJ", "MG"],
    yearsActive: 15,
    creditScore: 92,
    fundingNeeded: "R$120M"
  },
  {
    id: "2",
    name: "Inc******** B",
    rating: "A",
    ratingClass: "bg-green-100 text-green-800",
    unitsSold: "423",
    regions: ["SP", "PR", "SC"],
    yearsActive: 12,
    creditScore: 89,
    fundingNeeded: "R$85M"
  },
  {
    id: "3",
    name: "Inc******** C",
    rating: "B+",
    ratingClass: "bg-blue-100 text-blue-800",
    unitsSold: "350",
    regions: ["SP", "DF"],
    yearsActive: 8,
    creditScore: 81,
    fundingNeeded: "R$65M"
  },
  {
    id: "4",
    name: "Inc******** D",
    rating: "A-",
    ratingClass: "bg-green-100 text-green-800",
    unitsSold: "405",
    regions: ["RJ", "ES", "BA"],
    yearsActive: 10,
    creditScore: 85,
    fundingNeeded: "R$90M"
  },
  {
    id: "5",
    name: "Inc******** E",
    rating: "B",
    ratingClass: "bg-blue-100 text-blue-800",
    unitsSold: "280",
    regions: ["MG", "GO"],
    yearsActive: 7,
    creditScore: 78,
    fundingNeeded: "R$45M"
  },
  {
    id: "6",
    name: "Inc******** F",
    rating: "C+",
    ratingClass: "bg-yellow-100 text-yellow-800",
    unitsSold: "190",
    regions: ["SP"],
    yearsActive: 5,
    creditScore: 70,
    fundingNeeded: "R$30M"
  }
];

const DevelopersList = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-blackrock-800">Lista de Incorporadoras</h3>
          <p className="text-gray-600">Incorporadoras verificadas disponíveis para financiamento</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Incorporadora</th>
              <th className="py-3 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th className="py-3 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unid. Vendidas (12m)</th>
              <th className="py-3 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Regiões</th>
              <th className="py-3 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Anos Ativos</th>
              <th className="py-3 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
              <th className="py-3 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Financiamento</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {developers.map((developer) => (
              <tr key={developer.id} className="hover:bg-gray-50">
                <td className="py-4 px-2 whitespace-nowrap">
                  <div className="font-medium text-blackrock-800">{developer.name}</div>
                </td>
                <td className="py-4 px-2 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${developer.ratingClass}`}>
                    {developer.rating}
                  </span>
                </td>
                <td className="py-4 px-2 whitespace-nowrap text-sm text-gray-700">{developer.unitsSold}</td>
                <td className="py-4 px-2 whitespace-nowrap">
                  <div className="flex space-x-1">
                    {developer.regions.map((region, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-gray-100 rounded-md">{region}</span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-2 whitespace-nowrap text-sm text-gray-700">{developer.yearsActive}</td>
                <td className="py-4 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-1.5 mr-2">
                      <div className={`${developer.creditScore >= 85 ? 'bg-green-500' : developer.creditScore >= 75 ? 'bg-blue-500' : 'bg-yellow-500'} h-1.5 rounded-full`} style={{ width: `${developer.creditScore}%` }}></div>
                    </div>
                    <span className="text-xs text-gray-700">{developer.creditScore}</span>
                  </div>
                </td>
                <td className="py-4 px-2 whitespace-nowrap text-sm font-semibold text-blackrock-800">{developer.fundingNeeded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button className="mt-6 text-black font-medium text-sm flex items-center hover:text-black/90">
        Ver lista completa <ArrowRight className="ml-1 h-4 w-4" />
      </button>
    </div>
  );
};

export default DevelopersList;
