// Elemento JSX/TSX => Função que retorna HTML
//import Flex from "./components/Flex/Flex";
import React, {useState, useEffect} from "react";
import axios from "axios";
// import UserProvider from './Contexts/UserContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import "./App.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import { AuthProvider } from './Contexts/AuthContext';

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
           
          {/* <Route path="/Temas" element={<ListaTemas />} /> */}
         {/* <Route path="/CadastroTema" element={<FormularioTema />} />
          <Route path="/EditarTema" element={<FormularioTema />} />
          <Route path="/DeletarTema" element={<DeletarTema />} />  */}
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

