import React, { useContext } from 'react';

import { UserContext } from '../../Contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import ListaPostagens from '../../components/Postagens/ListaPostagens/ListaPostagens';
import ModalPostagem from '../../components/Postagens/ModalPostagem/ModalPostagem';




export default function Home() {
    useContext(UserContext);
  return (
      <>
    <div className="bg-[#FCBBA3] flex justify-center">
          <div className='container grid grid-cols-2 text-[#592B36]'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Olá boas-vindas!</h2>
              <p className='text-xl'>Nos conte sobre suas opniões e estudos</p>
               
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <Link to={''}><button className='rounded hover:text-[#FEFCDD] bg-[#592B36] text-[#FCBBA3] py-2 px-4'>Ver postagens</button></Link>
            </div>
            </div>
  
            <div className="flex justify-center ">
            <img src="https://i.imgur.com/azdJUuT.jpeg" alt="Paisagem Tela inicial" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}      



