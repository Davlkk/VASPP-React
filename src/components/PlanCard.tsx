import { motion } from "framer-motion";

function PlanCard({ plan, activePlan, onHover }) {
  const contentVariants = {
    collapsed: { opacity: 0, height: 0, y: 20 },
    expanded: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { delay: 0.1, duration: 0.3 },
    },
  };

  let targetFlexBasis;
  let isContentVisible;
  const isThisCardActive = activePlan === plan.name;

  if (activePlan === null) {
    targetFlexBasis = "33.33%";
    isContentVisible = true;
  } else {
    targetFlexBasis = isThisCardActive ? "60%" : "20%";
    isContentVisible = isThisCardActive;
  }

  return (
    <motion.div
      animate={{ flexBasis: targetFlexBasis }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseEnter={onHover}
      className={`relative p-10 rounded-lg cursor-pointer ${
        isThisCardActive || (activePlan === null && plan.highlight)
          ? "bg-[#040954]"
          : "bg-transparent"
      }`}
      style={{
        overflow: "hidden",
        transition: "background-color 0.3s ease",
      }}
    >
      <motion.div
        className="flex items-start mb-12"
        animate={{
          justifyContent: isContentVisible ? "space-between" : "flex-start",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div>
          <h3 className="text-4xl font-black text-white mb-2">{plan.name}</h3>
        </div>

        <motion.div
          className="text-right flex-shrink-0"
          animate={{
            opacity: isContentVisible ? 1 : 0,
            width: isContentVisible ? "auto" : 0,
            transition: { delay: isContentVisible ? 0.2 : 0, duration: 0.2 },
          }}
          style={{ overflow: "hidden" }}
        >
          <span className="text-4xl font-bold text-white">R$ {plan.price}</span>
          <p className="text-white/60">mensalmente</p>
        </motion.div>
      </motion.div>

      {/* Container das Features (Animado) */}
      <motion.div
        variants={contentVariants}
        animate={isContentVisible ? "expanded" : "collapsed"}
      >
        <ul className="space-y-6 mb-24 h-72 overflow-y-auto pr-2">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center text-white/90 text-lg"
            >
              <span className="w-12 h-px bg-white/30 mr-6"></span>
              {feature}
            </li>
          ))}
        </ul>
        <button
          className="w-full text-center justify-end py-4 border-2 border-white/50 text-white font-medium rounded-lg
                     hover:bg-white hover:text-[#020074] transition-colors duration-300"
        >
          COMEÇAR AGORA
        </button>
      </motion.div>
    </motion.div>
  );
}

export default PlanCard;