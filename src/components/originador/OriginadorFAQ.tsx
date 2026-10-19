
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const OriginadorFAQ = () => {
  const faqs = [
    {
      question: "Como é calculada a comissão de um Originador?",
      answer: "A comissão é calculada com base no valor total do financiamento aprovado, variando entre 10% e 20%. O percentual exato depende da complexidade do projeto, do volume da operação e do histórico do Originador na plataforma. Quanto mais qualificado for o projeto e maior o histórico positivo do Originador, maior será o percentual de comissão."
    },
    {
      question: "Quando recebo minha comissão?",
      answer: "A comissão é paga em até 10 dias úteis após a assinatura do contrato de financiamento entre a incorporadora e o investidor. Existe também a possibilidade de adiantamento parcial de comissão para Originadores com bom histórico na plataforma, mediante análise prévia."
    },
    {
      question: "Quais tipos de projetos são aceitos na plataforma?",
      answer: "A NextStone trabalha com diversos tipos de empreendimentos imobiliários, incluindo incorporações residenciais, comerciais, loteamentos e projetos de retrofit. O valor mínimo para projetos é de R$ 5 milhões, sem limite máximo estabelecido."
    },
    {
      question: "Existe exclusividade? Posso cadastrar o mesmo projeto em outras plataformas?",
      answer: "Ao cadastrar um projeto na NextStone, você concede um período de exclusividade de 45 dias para que possamos trabalhar na captação do investimento. Após esse período, se não houver avanço significativo, você poderá ofertar o projeto em outras plataformas, mediante comunicação prévia."
    },
    {
      question: "É necessário ter formação em alguma área específica para ser um Originador?",
      answer: "Não é exigida formação específica, mas é valorizada experiência no mercado imobiliário ou financeiro. O mais importante é ter bons relacionamentos com incorporadoras e entender as necessidades básicas de um projeto imobiliário."
    },
    {
      question: "Como funciona o processo de análise dos projetos?",
      answer: "Após o cadastro inicial, nossa equipe técnica realiza uma análise preliminar em até 7 dias úteis. Se aprovado nesta fase, solicitamos documentação complementar e realizamos uma análise detalhada, que pode incluir visitas ao local do empreendimento. Ao final, definimos os parâmetros para apresentação aos investidores."
    },
    {
      question: "Posso acompanhar todo o processo de análise e aprovação?",
      answer: "Sim! Você terá acesso a um dashboard exclusivo onde poderá acompanhar em tempo real o status de todos os seus projetos cadastrados, desde a análise inicial até o momento do pagamento da comissão."
    },
    {
      question: "Quais documentos são necessários para cadastrar um projeto?",
      answer: "Inicialmente, precisamos de informações básicas como localização, tipo e tamanho do empreendimento, valor estimado e dados de contato da incorporadora. Após a análise preliminar, solicitaremos documentos mais específicos como matrículas, projetos preliminares e estudos de viabilidade."
    },
    {
      question: "A incorporadora sabe que estou recebendo comissão?",
      answer: "Sim, trabalhamos com total transparência. A incorporadora é informada que há um Originador no processo e que este receberá uma comissão pela intermediação. O valor exato da comissão é acordado entre a NextStone e o Originador, não sendo necessariamente divulgado à incorporadora."
    },
    {
      question: "Posso cadastrar projetos de incorporadoras de qualquer região do Brasil?",
      answer: "Sim, operamos em todo o território nacional. No entanto, para algumas regiões mais específicas, o processo de análise pode demandar um pouco mais de tempo devido à necessidade de parcerias locais para vistorias e avaliações."
    }
  ];

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="mt-8 text-center text-gray-600">
        Não encontrou o que procura? {" "}
        <Link to="#" className="text-coral font-medium">
          Entre em contato com nossa equipe
        </Link>
      </p>
    </div>
  );
};

export default OriginadorFAQ;
