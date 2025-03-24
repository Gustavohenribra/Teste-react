import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProgressBar from './components/ProgressBar';
import ServiceOrderForm from './components/ServiceOrderForm';

function App() {
  return (
    <div className="min-h-screen bg-neutral-600">
      <Header />
      <Sidebar />
      <main className="pl-16 pt-4" id="main-content" aria-label="Conteúdo principal">
        <article className="px-6">
          <header>
            <h1 className="text-2xl text-white font-light pl-20">Ordem de Serviço</h1>
            <div className="flex -ml-6">
              <div className="h-[2px] w-72 bg-neutral-500 mt-1" role="separator"></div>
            </div>
          </header>
          <ProgressBar />
          <ServiceOrderForm />
        </article>
      </main>
    </div>
  );
}

export default App;