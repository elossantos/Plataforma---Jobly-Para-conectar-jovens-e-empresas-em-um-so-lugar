import React from "react";
import Card from "../ui/Card";

const Homepage = ({ onNavigate }) => {
  return (
    <main className="container-style">
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-5xl font-extrabold text-indigo-800 mb-4">
          Bem-vindo à Jobly!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Sua ponte para oportunidades de emprego e cursos de capacitação.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={() => onNavigate("vagas")} className="btn-primary">
            Ver Vagas Atuais
          </button>
          <button
            onClick={() => onNavigate("cursos")}
            className="btn-secondary"
          >
            Acessar Cursos
          </button>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          O que oferecemos:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-2xl font-semibold mb-3">Para Alunos</h3>
            <p className="text-gray-600">
              Oferecemos às empresas a oportunidade de publicar vagas e cursos
              de forma 100% gratuita, encontrando a próxima geração de
              profissionais de maneira eficiente.
            </p>
          </Card>
          <Card>
            <h3 className="text-2xl font-semibold mb-3">Para Empresas</h3>
            <p className="text-gray-600">
              Oferecemos às empresas a oportunidade de publicar vagas e cursos
              de forma 100% gratuita, encontrando a próxima geração de
              profissionais de maneira eficiente.
            </p>
          </Card>
          <Card>
            <h3 className="text-2xl font-semibold mb-3">Totalmente Gratuito</h3>
            <p className="text-gray-600">
              É uma iniciativa totalmente gratuita, concebida inicilamente para
              a comunidade de Serra Dourada - Bahia.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
