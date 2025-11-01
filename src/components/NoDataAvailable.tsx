import { AlertCircle } from 'lucide-react';

interface NoDataAvailableProps {
  message?: string;
}

function NoDataAvailable({ message = "Dados ainda não disponíveis para esta partida" }: NoDataAvailableProps) {
  return (
    <div className="bg-[#000E6B]/30 border border-white/20 rounded-2xl p-12 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
          <AlertCircle className="w-8 h-8 text-white/60" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">
        Sem dados disponíveis
      </h3>
      
      <p className="text-white/60">
        {message}
      </p>
    </div>
  );
}

export default NoDataAvailable;