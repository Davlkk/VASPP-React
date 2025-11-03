type Period = "TODOS" | "1º" | "2º";

interface PeriodSelectorProps {
  selected: Period;
  onSelect: (period: Period) => void;
  disabled?: boolean;
}

function PeriodSelector({
  selected,
  onSelect,
  disabled = false,
}: PeriodSelectorProps) {
  const periods: Period[] = ["TODOS", "1º", "2º"];

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-2">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => onSelect(period)}
            disabled={disabled}
            className={`px-8 py-2 rounded-lg font-medium transition-all ${
              selected === period
                ? "bg-white/20 text-white"
                : "bg-transparent text-white/60 hover:text-white hover:bg-white/10"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PeriodSelector;
export type { Period };
