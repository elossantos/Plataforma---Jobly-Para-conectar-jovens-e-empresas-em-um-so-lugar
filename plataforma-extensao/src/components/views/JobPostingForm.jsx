import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import Card from "../ui/Card";

const JobPostingForm = ({ onPostSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      await addDoc(collection(db, "jobs"), {
        title,
        description,
        requirements,
        contactInfo,
        createdAt: serverTimestamp(),
      });
      setStatus("Vaga publicada com sucesso!");
      setTitle("");
      setDescription("");
      setRequirements("");
      setContactInfo("");
      onPostSuccess();
    } catch (error) {
      console.error("Erro ao publicar vaga:", error);
      setStatus("Erro ao publicar vaga. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container-style">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Publicar Nova Vaga</h2>
        <button onClick={onPostSuccess} className="btn-secondary">
          Voltar para Vagas
        </button>
      </div>
      <div className="max-w-xl mx-auto">
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Título da Vaga
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input-style"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Descrição
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input-style h-32"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Requisitos (Opcional)
              </label>
              <input
                type="text"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="input-style"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Informações de Contato
              </label>
              <input
                type="text"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                className="input-style"
                required
              />
            </div>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Publicando..." : "Publicar Vaga"}
            </button>
            {status && (
              <p
                className={`mt-4 text-center ${
                  status.includes("sucesso") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </Card>
      </div>
    </main>
  );
};

export default JobPostingForm;
