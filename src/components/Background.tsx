function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020074] text-white overflow-x-hidden relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#020074] to-[#04004b]"></div>
      </div>

      {/* Conteúdo (filhos) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Background;
