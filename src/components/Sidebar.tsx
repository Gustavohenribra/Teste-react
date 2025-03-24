import { User, Building2, FileText, LayoutGrid, Coins, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <nav 
      className="fixed left-0 ml-4 top-[72px] h-[calc(100vh-72px)] w-16 bg-neutral-300 flex flex-col items-center py-6 rounded-lg"
      aria-label="Barra lateral de navegação"
    >
      <div className="flex flex-col flex-1 items-center w-full space-y-8">
        <a
          href="#"
          className="w-full py-3 hover:bg-orange-400 flex justify-center group transition-colors"
          aria-label="Perfil do usuário"
        >
          <User size={24} className="text-gray-500 group-hover:text-white transition-colors" />
        </a>

        <a
          href="#"
          className="w-full py-3 hover:bg-orange-400 flex justify-center group transition-colors"
          aria-label="Empresas"
        >
          <Building2 size={24} className="text-gray-500 group-hover:text-white transition-colors" />
        </a>

        <a
          href="#"
          className="w-full py-3 hover:bg-orange-400 flex justify-center group transition-colors"
          aria-label="Documentos"
        >
          <FileText size={24} className="text-gray-500 group-hover:text-white transition-colors" />
        </a>

        <a
          href="#"
          className="w-full py-3 hover:bg-orange-400 flex justify-center group transition-colors"
          aria-label="Dashboard"
        >
          <LayoutGrid size={24} className="text-gray-500 group-hover:text-white transition-colors" />
        </a>

        <a
          href="#"
          className="w-full py-3 hover:bg-orange-400 flex justify-center group transition-colors"
          aria-label="Finanças"
        >
          <Coins size={24} className="text-gray-500 group-hover:text-white transition-colors" />
        </a>

        <a
          href="#"
          className="w-full py-3 mt-auto hover:bg-orange-400 flex justify-center group transition-colors"
          aria-label="Configurações"
        >
          <Settings size={24} className="text-gray-500 group-hover:text-white transition-colors" />
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
