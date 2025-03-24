import { ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { useState } from "react";
const ServiceOrderForm = () => {
    const [date, setDate] = useState("2025-03-24");
    return (
        <form
            className="w-full max-w-4xl mx-auto px-6"
            aria-label="Formulário de ordem de serviço"
        >
            <fieldset className="space-y-6">
                <legend className="sr-only">Campos da ordem de serviço</legend>

                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label htmlFor="osType" className="sr-only">
                            Tipo de OS
                        </label>
                        <select
                            id="osType"
                            className="w-full bg-neutral-500 text-white px-4 py-2 rounded"
                            aria-label="Selecione o tipo de ordem de serviço"
                        >
                            <option>Tipo de OS</option>
                            <option>Windows</option>
                            <option>Linux</option>
                        </select>
                    </div>

                    <div className="flex-1 flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="osDate" className="sr-only">
                                Data
                            </label>
                            <input
                                id="osDate"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-neutral-500 text-white px-2 py-2 rounded w-full"
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="delivery" className="sr-only">
                                Entrega
                            </label>
                            <select
                                id="delivery"
                                className="w-full bg-neutral-500 text-white px-4 py-2 rounded"
                                aria-label="Selecione a opção de entrega"
                            >
                                <option>Entrega</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                    </div>

                    <div
                        role="button"
                        tabIndex={0}
                        className="flex-1 flex space-x-2 bg-neutral-500 px-4 py-2 rounded cursor-pointer"
                        aria-label="Enviar arquivo"
                    >
                        <span className="text-orange-400">Arquivo:</span>
                        <span className="text-orange-400" aria-live="polite">
                            Nome do arquivo.pdf
                        </span>
                        <Upload
                            className="text-white ml-auto"
                            size={20}
                            aria-hidden="true"
                        />
                    </div>
                </div>

                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label htmlFor="title" className="sr-only">
                            Título
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Título"
                            className="w-full bg-neutral-500 text-white px-4 py-2 rounded"
                            aria-required="true"
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="subtitle" className="sr-only">
                            Subtítulo
                        </label>
                        <input
                            id="subtitle"
                            type="text"
                            placeholder="Subtítulo"
                            className="w-full bg-neutral-500 text-white px-4 py-2 rounded"
                        />
                    </div>
                </div>

                <fieldset className="flex space-x-4 items-center">
                    <legend className="sr-only">Opções de produção</legend>

                    <div className="flex flex-wrap gap-4">
                        {[
                            "Clichê",
                            "Prova ICC",
                            "Arte-final",
                            "Tratamento de Imagem",
                        ].map((option) => (
                            <label
                                key={option}
                                className="inline-flex items-center space-x-2"
                            >
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    aria-label={option}
                                />
                                <span className="text-white">{option}</span>
                            </label>
                        ))}

                        <label className="inline-flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="custom-checkbox"
                                aria-label="easyflow"
                            />
                            <span className="text-white">
                                easy
                                <span className="text-orange-400">flow</span>
                            </span>
                        </label>

                        <label htmlFor="unit" className="sr-only">
                            Unidade
                        </label>
                        <select
                            id="unit"
                            className="bg-neutral-500 text-white px-4 py-2 rounded"
                            aria-label="Selecione a unidade"
                        >
                            <option>unitário</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                </fieldset>

                <nav
                    className="flex justify-between items-center mt-8"
                    aria-label="Navegação do formulário"
                >
                    <button
                        type="button"
                        className="flex items-center space-x-2 px-6 py-2 bg-orange-400 text-white rounded"
                        aria-label="Voltar para etapa anterior"
                    >
                        <ChevronLeft size={20} aria-hidden="true" />
                        <span>anterior</span>
                    </button>

                    <div className="flex items-center space-x-4">
                        <label htmlFor="utilization" className="text-white">
                            Aproveitamento:
                        </label>
                        <select
                            id="utilization"
                            className="bg-neutral-500 text-white px-4 py-2 rounded"
                            aria-label="Selecione o aproveitamento"
                        >
                            <option>OS 147859</option>
                            <option>OS 147860</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="flex items-center space-x-2 px-6 py-2 bg-orange-400 text-white rounded"
                        aria-label="Avançar para próxima etapa"
                    >
                        <span>próximo</span>
                        <ChevronRight size={20} aria-hidden="true" />
                    </button>
                </nav>
            </fieldset>
        </form>
    );
};

export default ServiceOrderForm;
