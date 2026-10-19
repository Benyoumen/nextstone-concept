
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "NextStone nós ajudou a encontrar o parceiro financeiro ideal para nosso projeto Residencial Horizonte, com a melhor taxa do mercado.",
    author: "Ariel Cohen",
    role: "CEO, Horizon Development Group",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    type: "developer"
  },
  {
    id: 2,
    quote: "O sistema de conexão e avaliação dos projetos imobiliário, com historico da incorporadora trouxe muita transparência para nosso fundo e acionistas.",
    author: "Sarah Levy",
    role: "Managing Director, Apex Capital Partners",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "fund"
  },
  {
    id: 3,
    quote: "Como incorporadora de pequeno porte, o acesso a rede de invstidores AAA nos permitiu alavancar nosso crescimento dentro de um mercado muito competitivo, trazendo visibilidade e seriedade para os investidores.",
    author: "David Rodriguez",
    role: "Principal, Urbania Properties",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    type: "developer"
  },
  {
    id: 4,
    quote: "O detalhamento das ofertas, segmentação regional, e avaliação do track record das incorporadoras nos trouxe uma visão clara das oportunidades alinhadas aos nossos objetivos. Acelerou nosso processo de busca de oportunidades.",
    author: "Emily Zhang",
    role: "Investment Director, BlueRock Investments",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    type: "fund"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredTestimonials = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.type === activeTab);
  
  const currentTestimonial = filteredTestimonials[currentIndex];
  
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? filteredTestimonials.length - 1 : currentIndex - 1);
  };
  
  const goToNext = () => {
    setCurrentIndex(currentIndex === filteredTestimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="testimonials" className="section bg-sand">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">O que nossos clientes falam</h2>
          <p className="text-lg text-darkGray">
            Entenda como incorporadoras e fundos transformaram seu visão de financiamento e identificação de oportunidades atraves da nossa plataforma.
          </p>
          
          <div className="mt-8 inline-flex bg-white p-1 rounded-full shadow-sm border border-lightGray">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'all' ? 'bg-black text-white' : 'text-darkGray hover:bg-lightGray'}`}
              onClick={() => {setActiveTab('all'); setCurrentIndex(0)}}
            >
              All
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'developer' ? 'bg-black text-white' : 'text-darkGray hover:bg-lightGray'}`}
              onClick={() => {setActiveTab('developer'); setCurrentIndex(0)}}
            >
              Developers
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'fund' ? 'bg-black text-white' : 'text-darkGray hover:bg-lightGray'}`}
              onClick={() => {setActiveTab('fund'); setCurrentIndex(0)}}
            >
              Funds
            </button>
          </div>
        </div>
        
        {currentTestimonial && (
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto animate-fade-in">
            <div className="absolute top-8 left-8 text-lightGray">
              <Quote className="h-16 w-16" />
            </div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-darkGray mb-8 italic">
                "{currentTestimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.author} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-black">{currentTestimonial.author}</h4>
                  <p className="text-darkGray">{currentTestimonial.role}</p>
                </div>
                <div className="ml-auto flex space-x-2">
                  <button 
                    onClick={goToPrevious}
                    className="w-10 h-10 rounded-full border border-lightGray flex items-center justify-center text-darkGray hover:bg-lightGray transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={goToNext}
                    className="w-10 h-10 rounded-full border border-lightGray flex items-center justify-center text-darkGray hover:bg-lightGray transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                {filteredTestimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full mx-1 ${currentIndex === index ? 'bg-coral' : 'bg-lightGray'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
