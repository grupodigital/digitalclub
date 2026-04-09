"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "O que é o Digital Club?",
    answer:
      "O Digital Club é um ecossistema exclusivo de experiências para CEOs, Fundadores e Donos de negócios no Amazonas, Brasil. Fundado em 2023, reúne mais de 100 membros com acesso aos maiores eventos de negócios, imersões técnicas, networking ativo e educação contínua. É o clube de quem constrói o Amazonas.",
  },
  {
    question: "Para quem é o Digital Club?",
    answer:
      "O Digital Club é exclusivo para CEOs, Fundadores e Donos de negócios que querem crescimento real através de acesso, contexto e conexões certas. É para líderes que já entenderam que o networking estratégico e a formação contínua são essenciais para escalar os seus negócios no Amazonas, Brasil.",
  },
  {
    question: "O que está incluído na adesão ao Digital Club?",
    answer:
      "A adesão inclui 9 ingressos VIP para eventos (3 para o DSX — Digital Summit Experience, 3 para o Amazon IA e 3 para o Leaders AI Conference), 12 ingressos para 4 imersões técnicas em Negócios, Gestão, Marketing e Vendas, jantar exclusivo com líderes do mercado, acesso à plataforma Digital Educa com conteúdos e aulas, grupo de networking com todos os membros, acesso a pré-eventos de lançamento, e ainda a possibilidade de levar +1 da sua empresa sem custo adicional.",
  },
  {
    question: "Quais eventos fazem parte do Digital Club?",
    answer:
      "Os membros têm acesso VIP a três grandes eventos: o DSX (Digital Summit Experience), focado em Transformação Digital; o Amazon IA, sobre Inteligência Artificial aplicada a negócios; e o Leaders AI Conference, sobre Liderança e Tecnologia. Todos os eventos acontecem no Amazonas, Brasil, e contam com os maiores nomes do mercado.",
  },
  {
    question: "O que são as imersões do Digital Club?",
    answer:
      "São 4 imersões técnicas aprofundadas nas áreas de Negócios, Gestão, Marketing e Vendas. Cada membro recebe 3 ingressos por imersão (12 no total), podendo levar membros da sua equipe. As imersões são práticas e aplicáveis, com conteúdo de especialistas reconhecidos no mercado.",
  },
  {
    question: "O que é a plataforma Digital Educa?",
    answer:
      "O Digital Educa é a plataforma exclusiva de educação contínua do Digital Club. Inclui conteúdos gravados dos eventos, aulas exclusivas de especialistas, e material de formação para todo o time da empresa. É possível rever aulas, aprender ao seu ritmo e implementar o conhecimento imediatamente no negócio.",
  },
  {
    question: "Como posso fazer parte do Digital Club?",
    answer:
      "Para se candidatar ao Digital Club, preencha o formulário com os seus dados (nome, email, WhatsApp, empresa e cargo). A equipe fará uma avaliação e entrará em contato em até 48 horas. A candidatura é sem compromisso e os dados são tratados com total segurança.",
  },
];

export default function FAQ() {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="relative bg-[#080f13]">
      <div className="section-divider" />

      <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-40">
        {/* Header */}
        <div data-reveal-left className="flex items-center gap-6 mb-16">
          <span className="font-display font-bold text-[80px] md:text-[120px] leading-none text-white/[0.06]">
            05
          </span>
          <div className="flex-1">
            <div data-line-grow className="h-px bg-white/[0.06]" />
          </div>
          <span className="text-accent/80 text-[11px] uppercase tracking-[0.4em]">
            Perguntas Frequentes
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left — Title */}
          <div>
            <h2
              data-reveal
              className="font-display font-bold text-fluid-xl text-white uppercase leading-[0.95]"
            >
              Tudo sobre
              <br />
              o <span className="text-gradient">Digital Club</span>
            </h2>
            <p data-reveal-blur className="text-white/55 text-base leading-[2] mt-12 max-w-md">
              Encontre respostas para as perguntas mais comuns sobre o nosso ecossistema de
              experiências, eventos e benefícios para membros.
            </p>
          </div>

          {/* Right — Accordion */}
          <div data-stagger className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-7 text-left group"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-white text-[15px] font-medium pr-8 group-hover:text-accent transition-colors duration-500">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-accent/60 flex-shrink-0 transition-transform duration-500 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    openIndex === i ? "max-h-[500px] pb-7" : "max-h-0"
                  }`}
                >
                  <p className="text-white/50 text-sm leading-[1.9] max-w-lg">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
