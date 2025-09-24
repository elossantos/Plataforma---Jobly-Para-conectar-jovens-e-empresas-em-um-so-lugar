import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCX-sTyQ3y9UnmZ-N-SjNh8gHa1yOnMKg8",
  authDomain: "plataforma-jovem.firebaseapp.com",
  projectId: "plataforma-jovem",
  storageBucket: "plataforma-jovem.firebasestorage.app",
  messagingSenderId: "170578349200",
  appId: "1:170578349200:web:28b621204746d7d3a79c15",
};

// Inicializa o Firebase e os serviços de Autenticação e Firestore
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth, app };
