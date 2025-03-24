import { User, FileText, Wrench, Target } from 'lucide-react';

const ProgressBar = () => {
  return (
    <nav aria-label="Progresso do formulário">
      <div className="relative flex justify-center items-center w-full mt-8 mb-12">
        <div className="absolute w-3/4 h-[2px] bg-white" role="presentation"></div>

        <div className="absolute h-[2px] bg-orange-400 w-[25%] left-[12.5%]" role="presentation"></div>

        <ol className="flex justify-between w-3/4 relative z-10 list-none">
          <li className="flex flex-col items-center" aria-current="step">
            <div
              className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center"
              role="img"
              aria-label="Etapa 1: Informações do usuário"
            >
              <User className="text-white" size={20} />
            </div>
          </li>
          <li className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center"
              role="img"
              aria-label="Etapa 2: Documentação"
            >
              <FileText className="text-white" size={20} />
            </div>
          </li>
          <li className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
              role="img"
              aria-label="Etapa 3: Configurações"
            >
              <Wrench className="text-gray-600" size={20} />
            </div>
          </li>
          <li className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
              role="img"
              aria-label="Etapa 4: Revisão final"
            >
              <Target className="text-gray-600" size={20} />
            </div>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default ProgressBar;
