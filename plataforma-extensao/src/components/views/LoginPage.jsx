import React, { useState } from "react";
import Card from '../ui/Card';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../services/firebase';

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // login e cadastro

  const auth = getAuth(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      if (isRegistering) {
        // Lógica para CADASTRAR novo usuário
        await createUserWithEmailAndPassword(auth, email, password);
        setStatus("Cadastro realizado com sucesso! Redirecionando...");
      } else {
        // Lógica para FAZER LOGIN com usuário existente
        await signInWithEmailAndPassword(auth, email, password);
        setStatus("Login bem-sucedido! Redirecionando...");
      }
      setTimeout(() => {
        onLoginSuccess();
      }, 1000);

    } catch (error) {
      console.error("Erro na autenticação:", error);
      if (isRegistering) {
        if (error.code === 'auth/email-already-in-use') {
          setStatus("Erro: E-mail já cadastrado.");
        } else if (error.code === 'auth/weak-password') {
          setStatus("Erro: A senha deve ter no mínimo 6 caracteres.");
        } else {
          setStatus("Erro no cadastro. Tente novamente.");
        }
      } else {
        if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          setStatus("Erro: E-mail ou senha incorretos.");
        } else {
          setStatus("Erro no login. Tente novamente.");
        }
      }
    }
  };

  return (
    <main className="container-style">
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">{isRegistering ? "Cadastre-se" : "Login"}</h2>
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-style"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-style"
                required
              />
            </div>
            <button type="submit" className="btn-primary w-full" >
              {isRegistering ? "Cadastrar" : "Entrar"}
            </button>
            {status && <p className={`mt-4 text-center ${status.includes("Erro") ? "text-red-600" : "text-green-600"}`}>{status}</p>}
          </form>
          <div className="text-center mt-4">
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-indigo-600 hover:underline"
            >
              {isRegistering ? "Já tem uma conta? Faça login" : "Não tem uma conta? Cadastre-se"}
            </button>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default LoginPage;