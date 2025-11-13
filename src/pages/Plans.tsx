import { useState } from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import FooterBG from "../components/FooterBG";
import PlanCard from "../components/PlanCard";

const plansData = [
  {
    name: "BÁSICO",
    price: "49,90",
    features: [
      "Previsões gerais de resultados",
      "Séries A, B, C e D",
      "Suporte por email",
      "Análises básicas",
    ],
    highlight: false,
  },
  {
    name: "PROFISSIONAL",
    price: "69,90",
    features: [
      "Tudo do plano Básico",
      "Análises detalhadas por equipe",
      "Estatísticas individuais",
      "Relatórios avançados",
    ],
    highlight: false,
  },
  {
    name: "PREMIUM",
    price: "129,90",
    features: [
      "Tudo do plano Profissional",
      "Dashboards personalizados",
      "Alertas em tempo real",
      "Suporte prioritário",
      "Relatórios comparativos",
      "API de acesso",
    ],
    highlight: false,
  },
];

function Plans() {
  const [activePlan, setActivePlan] = useState<string | null>("PROFISSIONAL");

  return (
    <Background>
      <Header />
      <div className="w-full">
        {/* Título */}
        <div className="text-center pb-[20vh] pt-24 px-6">
          <h1 className="text-6xl font-black text-white mb-4">
            ESCOLHA SEU PLANO
          </h1>
          <p className="text-xl text-white/70">
            Planos flexíveis para diferentes necessidades de apostadores
          </p>
        </div>

        {/* Container Flex dos Cards */}
        <div
          className="flex w-full h-[70vh] max-h-[700px] min-h-[600px]"
          onMouseLeave={() => setActivePlan(null)}
        >
          {plansData.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              activePlan={activePlan}
              onHover={() => setActivePlan(plan.name)}
            />
          ))}
        </div>
      </div>
      <FooterBG classname="mt-[10vh]" />
    </Background>
  );
}

export default Plans;
