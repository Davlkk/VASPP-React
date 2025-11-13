interface SeriesFilterProps {
  series: string[];
  selected: string;
  onSelect: (serie: string) => void;
}

function SeriesFilter({ series, selected, onSelect }: SeriesFilterProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {series.map((serie) => (
        <button
          key={serie}
          onClick={() => onSelect(serie)}
          className={`px-6 py-2 rounded-lg whitespace-nowrap font-medium transition-all ${
            selected === serie
              ? 'bg-white/20 text-white'
              : 'bg-transparent text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          {serie}
        </button>
      ))}
    </div>
  );
}

export default SeriesFilter;