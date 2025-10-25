import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import vaspplogo from "../assets/vaspplogo.png";
import {
  Brain,
  TrendingUp,
  Shield,
  BarChart3,
  Users,
  Star,
  Check,
  ArrowRight,
  Target,
  Database,
  Zap,
  Eye,
  Activity,
  Cpu,
  Globe,
  Trophy,
  ChevronDown,
} from "lucide-react";

// Animated Section Component
const AnimatedSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Floating Animation Component
const FloatingElement = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Glowing Button Component
const GlowButton = ({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)",
      }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg overflow-hidden group transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

function LandingPage() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#020074] text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#020074] to-[#04004b]"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-white/20 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className="text-center max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-white/80 to-white bg-clip-text text-transparent">
              DESCUBRA O
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              FUTURO DOS
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">RESULTADOS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl md:text-3xl text-white/80 mb-12 font-light"
          >
            Previsões inteligentes baseadas em dados reais
            <br />
            <span className="text-lg text-white/60">
              Powered by IA • Futebol Brasileiro
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <GlowButton className="text-xl px-12 py-6">
              VER PREVISÕES
              <ArrowRight className="inline ml-3 w-6 h-6" />
            </GlowButton>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-white/80 hover:text-white transition-colors text-lg font-medium"
            >
              Teste Grátis por 7 Dias
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          ></motion.div>
        </div>
      </section>

      {/* About Platform Section */}
      <AnimatedSection className="py-32 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-black mb-8 leading-tight"
              >
                <span className="text-white">VASPP</span>
                <br />
                <span className="text-white/60">INTELLIGENCE</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-white/80 mb-8 leading-relaxed"
              >
                Nossa plataforma utiliza inteligência artificial avançada
                integrada aos maiores bancos de dados do futebol brasileiro.
                Analisamos dados do Transfermarkt, Sofascore e OneFootball para
                gerar previsões precisas.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                {[
                  "Machine Learning Avançado",
                  "Análise de Big Data",
                  "Previsões em Tempo Real",
                  "Cobertura Completa do Brasileirão",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="relative">
              <FloatingElement delay={0.5}>
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Database className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white">100+</div>
                      <div className="text-white/60">Jogos/Dia</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white">85%</div>
                      <div className="text-white/60">Precisão</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white">10K+</div>
                      <div className="text-white/60">Usuários</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white">4</div>
                      <div className="text-white/60">Séries</div>
                    </div>
                  </div>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection className="py-32 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              COMO FUNCIONA
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Processo automatizado que combina dados, análise e previsão para
              maximizar sua precisão
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "COLETA",
                description: "Dados em tempo real de fontes confiáveis",
                step: "01",
              },
              {
                icon: Cpu,
                title: "PROCESSAMENTO",
                description: "IA analisa padrões e estatísticas",
                step: "02",
              },
              {
                icon: Brain,
                title: "PREVISÃO",
                description: "Algoritmos geram probabilidades",
                step: "03",
              },
              {
                icon: Eye,
                title: "RESULTADO",
                description: "Análises prontas para decisão",
                step: "04",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="absolute top-0 right-0 text-6xl font-black text-white/10">
                  {item.step}
                </div>
                <FloatingElement delay={index * 0.3}>
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                </FloatingElement>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Visual Examples Section */}
      <AnimatedSection className="py-32 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              PREVISÕES EM AÇÃO
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Veja como nossas análises transformam dados em insights valiosos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                match: "Flamengo vs Palmeiras",
                prediction: "Vitória Flamengo",
                confidence: "78%",
                stats: { goals: "2.3", shots: "14", possession: "58%" },
              },
              {
                match: "São Paulo vs Corinthians",
                prediction: "Empate",
                confidence: "65%",
                stats: { goals: "1.8", shots: "11", possession: "52%" },
              },
              {
                match: "Grêmio vs Internacional",
                prediction: "Vitória Internacional",
                confidence: "71%",
                stats: { goals: "2.1", shots: "13", possession: "55%" },
              },
            ].map((match, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 cursor-pointer"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {match.match}
                  </h3>
                  <div className="text-2xl font-black text-white mb-2">
                    {match.prediction}
                  </div>
                  <div className="text-white/60">
                    Confiança: {match.confidence}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Gols Esperados</span>
                    <span className="text-white font-bold">
                      {match.stats.goals}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Finalizações</span>
                    <span className="text-white font-bold">
                      {match.stats.shots}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Posse de Bola</span>
                    <span className="text-white font-bold">
                      {match.stats.possession}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection className="py-32 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              ESCOLHA SEU PLANO
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Planos flexíveis para diferentes necessidades de apostadores
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "BÁSICO",
                price: "29,90",
                features: [
                  "Previsões gerais de resultados",
                  "Séries A, B, C e D",
                  "Suporte por email",
                  "Análises básicas",
                ],
                popular: false,
              },
              {
                name: "PROFISSIONAL",
                price: "69,90",
                features: [
                  "Tudo do plano Básico",
                  "Análises detalhadas por equipe",
                  "Estatísticas individuais",
                  "Gols esperados e finalizações",
                  "Relatórios avançados",
                ],
                popular: true,
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
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: plan.popular
                    ? "0 0 50px rgba(255, 255, 255, 0.2)"
                    : "0 0 30px rgba(255, 255, 255, 0.1)",
                }}
                className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular ? "border-white/40" : "border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-[#020074] px-4 py-1 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black text-white mb-4">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-black text-white mb-2">
                    R$ {plan.price}
                    <span className="text-lg text-white/60 font-normal">
                      /mês
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <GlowButton className="w-full">COMEÇAR AGORA</GlowButton>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-32 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              O QUE DIZEM
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Feedback de apostadores que já melhoraram seus resultados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                role: "Apostador Profissional",
                text: "Minha precisão aumentou 40% desde que comecei a usar o VASPP. As análises são incríveis!",
                rating: 5,
              },
              {
                name: "Ana Santos",
                role: "Analista Esportiva",
                text: "A plataforma mais completa para análise do futebol brasileiro. Dados precisos e interface intuitiva.",
                rating: 5,
              },
              {
                name: "Roberto Lima",
                role: "Investidor Esportivo",
                text: "ROI consistente mês após mês. O VASPP transformou minha abordagem nas apostas esportivas.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">
                      {testimonial.name}
                    </div>
                    <div className="text-white/60 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection className="py-32 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-white leading-tight">
              PRONTO PARA
              <br />
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                PREVER O FUTURO?
              </span>
            </h2>
            <p className="text-2xl text-white/80 mb-12">
              Junte-se a milhares de apostadores que já melhoraram seus
              resultados
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <GlowButton className="text-2xl px-16 py-8">
                COMEÇAR AGORA
                <ArrowRight className="inline ml-4 w-8 h-8" />
              </GlowButton>
            </div>

            <div className="text-white/60 text-lg">
              ✨ 7 dias grátis • ⚡ Sem compromisso • 🔒 Dados seguros
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black text-white">VASPP</span>
            </div>
            <p className="text-white/60 mb-4">
              Previsões de futebol powered by IA
            </p>
            <p className="text-white/40 text-sm">
              © 2025 VASPP. Todos os direitos reservados. • Pindamonhangaba, SP
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
