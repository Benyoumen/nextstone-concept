
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkGray text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">
              NextStone
            </h2>
            <p className="text-lightGray mb-6">
              Plataforma que conecta empreendimentos imobiliários a fontes de financiamento estratégicas, otimizada por nosso sistema inteligente de análise e correspondência de oportunidades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center hover:bg-black/50 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center hover:bg-black/50 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center hover:bg-black/50 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center hover:bg-black/50 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Geral</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-lightGray hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#how-it-works" className="text-lightGray hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#for-developers" className="text-lightGray hover:text-white transition-colors">Para Incorporadoras</a></li>
              <li><a href="#for-funds" className="text-lightGray hover:text-white transition-colors">Para Investidores</a></li>
              <li><a href="#" className="text-lightGray hover:text-white transition-colors">Casos de Sucesso</a></li>
              <li><a href="#" className="text-lightGray hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Recursos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-lightGray hover:text-white transition-colors">Manual do Incorporador</a></li>
              <li><a href="#" className="text-lightGray hover:text-white transition-colors">Guia dos Fundos</a></li>
              <li><a href="#" className="text-lightGray hover:text-white transition-colors">Estudos de Mercados</a></li>
              <li><a href="#" className="text-lightGray hover:text-white transition-colors">Webnarios</a></li>
              <li><a href="#" className="text-lightGray hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="text-lightGray hover:text-white transition-colors">Carreiras</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-lightGray">
                  Av. Brig. Faria Lima, 3732<br />
                  São Paulo, SP - 04538-132
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3" />
                <a href="tel:+12125551234" className="text-lightGray hover:text-white transition-colors">
                  (11) 3058-9100
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3" />
                <a href="mailto:info@fundflow.com" className="text-lightGray hover:text-white transition-colors">
                  info@nextstone.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-lightGray text-sm mb-4 md:mb-0">
            &copy; {currentYear} NextStone. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-lightGray text-sm hover:text-white transition-colors">Politica de Privacidade</a>
            <a href="#" className="text-lightGray text-sm hover:text-white transition-colors">Termo de Serviço</a>
            <a href="#" className="text-lightGray text-sm hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
