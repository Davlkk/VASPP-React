import { Clock, Sparkles } from 'lucide-react';

interface MatchNotStartedProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
}

function MatchNotStarted({ homeTeam, awayTeam, date, time }: MatchNotStartedProps) {
  return (
    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 rounded-2xl p-8 text-center backdrop-blur-sm">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
          <Clock className="w-8 h-8 text-blue-400" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2">
        Partida ainda não iniciada
      </h3>
      
      <p className="text-white/80 mb-6">
        {homeTeam} vs {awayTeam} • {date} às {time}
      </p>

      <div className="bg-white/10 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold">Previsão gerada por IA</span>
        </div>
        <p className="text-white/70 text-sm">
          As informações exibidas são baseadas em análises preditivas da nossa inteligência artificial. 
          Dados reais estarão disponíveis após o início da partida.
        </p>
      </div>

      <p className="text-white/60 text-sm">
        Alterne para a aba "Real" para verificar quando os dados ao vivo estiverem disponíveis
      </p>
    </div>
  );
}

export default MatchNotStarted;