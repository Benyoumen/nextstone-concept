
import React from 'react';

const PartnerLogos = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blackrock-800 leading-tight">
              Parceiro dos maiores fundos para garantir as melhores taxas de financiamento.
            </h2>
            <div className="w-20 h-1 bg-coral rounded-full"></div>
          </div>

          {/* Right Column - Logo Grid */}
          <div className="grid grid-cols-3 gap-8">
            {/* First Row */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
              <img 
                src={import.meta.env.BASE_URL + "lovable-uploads/ef9e4bb3-f4ec-4d9b-8dcf-bbfb0be73023.png"} 
                alt="Kinea" 
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
              <img 
                src={import.meta.env.BASE_URL + "lovable-uploads/b4342875-2878-428d-9f89-729e9cdf222d.png"} 
                alt="BTG Pactual" 
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
              <img 
                src={import.meta.env.BASE_URL + "lovable-uploads/8dd9d218-50d6-4b10-912e-31a11c318856.png"} 
                alt="Vinci Partners" 
                className="max-h-16 max-w-full object-contain"
              />
            </div>

            {/* Second Row */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
              <img 
                src={import.meta.env.BASE_URL + "lovable-uploads/2fee9844-0ba6-4bfb-93c6-3890443bb390.png"} 
                alt="Patria" 
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
              <img 
                src={import.meta.env.BASE_URL + "lovable-uploads/061a22cb-8cc0-4d0e-9925-3b11d516b111.png"} 
                alt="CY Capital" 
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
              <img 
                src={import.meta.env.BASE_URL + "lovable-uploads/b3dadd3f-c7c2-4db5-ac00-9adf1b79d3b7.png"} 
                alt="Patria" 
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;

