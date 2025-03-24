import { User, LogOut, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4">
      <nav className="flex items-center space-x-4" aria-label="Navegação principal">
        <button className="text-white cursor-pointer" aria-label="Abrir menu">
          <Menu size={24} />
        </button>
        <img
          src="/logo-branca.png"
          alt="Logo Flexograv"
          className="h-8 pl-10"
        />
      </nav>
      <div className="flex items-center space-x-6" role="toolbar" aria-label="Ações do usuário">
        <button className="text-white cursor-pointer" aria-label="Perfil do usuário">
          <User size={24} />
        </button>
        <button className="text-white cursor-pointer" aria-label="Sair do sistema">
          <LogOut size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
