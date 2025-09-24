import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../services/firebase";
import Card from "../ui/Card";
import JobPostingForm from "./JobPostingForm";

const JobCard = ({ job }) => (
  <Card>
    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
    <p className="text-gray-600 mt-2">{job.description}</p>
    <p className="text-sm text-gray-500 mt-4">
      <span className="font-semibold">Requisitos:</span>{" "}
      {job.requirements || "Não especificado"}
    </p>
    <p className="text-sm text-gray-500">
      <span className="font-semibold">Contato:</span> {job.contactInfo}
    </p>
  </Card>
);

const JobListingPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "jobs"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const jobList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobs(jobList);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handlePostSuccess = () => {
    setIsPosting(false);
  };

  if (isPosting) {
    return <JobPostingForm onPostSuccess={handlePostSuccess} />;
  }

  if (loading) {
    return (
      <main className="container-style text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Carregando vagas...</p>
      </main>
    );
  }

  return (
    <main className="container-style">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Vagas de Emprego Disponíveis
        </h2>
        <button onClick={() => setIsPosting(true)} className="btn-primary">
          Publicar Nova Vaga
        </button>
      </div>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">
          Nenhuma vaga publicada ainda.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </main>
  );
};

export default JobListingPage;
