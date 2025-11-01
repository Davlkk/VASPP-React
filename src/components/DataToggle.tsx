interface DataToggleProps {
  isAI: boolean;
  onToggle: (isAI: boolean) => void;
}

function DataToggle({ isAI, onToggle }: DataToggleProps) {
  return (
    <div className="flex items-center gap-4 bg-[#000E6B]/30 border border-white/20 rounded-lg p-1">
      <button
        onClick={() => onToggle(true)}
        className={`flex-1 px-6 py-2 rounded-md font-medium transition-all ${
          isAI
            ? 'bg-white/20 text-white'
            : 'text-white/60 hover:text-white'
        }`}
      >
        Previsão AI
      </button>
      <button
        onClick={() => onToggle(false)}
        className={`flex-1 px-6 py-2 rounded-md font-medium transition-all ${
          !isAI
            ? 'bg-white/20 text-white'
            : 'text-white/60 hover:text-white'
        }`}
      >
        Real
      </button>
    </div>
  );
}

export default DataToggle;