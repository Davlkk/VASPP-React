import { motion } from "framer-motion";

function Background({ children }: { children: React.ReactNode }) {
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

      {/* Conteúdo (filhos) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Background;
