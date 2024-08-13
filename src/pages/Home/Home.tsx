import React, { useContext } from 'react';

import { UserContext } from '../../Contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';




export default function Home() {
    const { nome, setNome } = useContext(UserContext);
  return (
      <>
      <div>
          <div style={{ display: 'flex justify-around gap-4', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <h1 style={{ paddingTop: '50px', paddingBottom: '50px', fontSize: '30px', fontWeight: 'bolder'}}>Olá usuário: {nome}</h1>
          </div>
          <Link to="/login" className="my-4 py-1 flex justify-center">
               

<button className='rounded hover:text-[#FEFCDD] bg-[#FCBBA3] text-[#592B36] py-2 px-4'>Voltar</button></Link>
</div>



 <div className="flex justify-center"> 
 <img src="https://i.imgur.com/azdJUuT.jpeg" alt="Paisagem Tela inicial" className='w-2/3' />

</div>

</>
);
}
          