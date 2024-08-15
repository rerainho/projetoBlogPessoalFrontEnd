// Elemento JSX/TSX => Função que retorna HTML
//import Flex from "./components/Flex/Flex";
// import UserProvider from './Contexts/UserContext';
import React, { useEffect, useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import { AuthProvider } from './Contexts/AuthContext';
import ListaTemas from './components/Temas/ListaTemas/ListaTemas';
import FormularioTema from './components/Temas/FormularioTema/FormularioTema';
import axios from 'axios';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import DeletarTema from './components/Temas/DeletarTema/DeletarTema.tsx';
import ListaPostagens from './components/Postagens/ListaPostagens/ListaPostagens.tsx';
import FormularioPostagem from './components/Postagens/FormularioPostagem/FormularioPostagem.tsx';
import DeletarPostagem from './components/Postagens/DeletarPostagem/DeletarPostagem.tsx';


interface User {
id: number;
name: string;

}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
              setUsers(response.data);
            }).catch(error => {console.log(error);

            })
  },[])

  return (
    <>
    <AuthProvider>
     <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh] bg-[#592B36] text-[#FCBBA3]">  
        <Routes>
           <Route path="/" element={<Login />} /> 
           <Route path="/Login" element={<Login />} />
           <Route path="/Cadastro" element={<Cadastro />} />
           <Route path="/Home" element={<Home />} />
           <Route path="/About" element={<About />} />
           <Route path="/Contact" element={<Contact />} />
           <Route path="/Temas" element={<ListaTemas />} />
           <Route path="/CadastrarTema/" element={<FormularioTema />} />
          <Route path="/EditarTema/:id" element={<FormularioTema />} />
          <Route path="/DeletarTema/:id" element={<DeletarTema />} /> 
          <Route path="/Postagens" element={<ListaPostagens />} /> 
          <Route path="/CadastroPostagem" element={<FormularioPostagem />} />
          <Route path="/EditarPostagem/:id" element={<FormularioPostagem />} />
          <Route path="/DeletarPostagem/:id" element={<DeletarPostagem />} />
        </Routes>
       {/* { <body>
        <h1 style={{ paddingTop: '80px', paddingBottom: '50px', fontSize: '30px', fontWeight: 'bolder'}}>Lista de usuários:</h1>
      <ul>
    {users.map(user =>(
      <li key={user.id}>{user.name} </li>
    ))}
      </ul>
        </body> } */}
      </div>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
    
    </>
  );
}

