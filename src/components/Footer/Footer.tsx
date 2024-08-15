// import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  InstagramLogo,
  LinkedinLogo,
  At,
  GithubLogo,
} from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'

export default function Footer() {

  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
     <>
      <div className="flex justify-center bg-[#592B36] text-[#FCBBA3]">
        <div className="container flex flex-col items-center py-4">
          <Link
            to="/about"
            className="hover:text-[#FEFCDD] transition-colors duration-300"
          >
            Sobre mim
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#FEFCDD] transition-colors duration-300"
          >
            Contato
          </Link>

          <div>
            <p className="text-lg">Acesse as redes sociais:</p>
          </div>
          <div className="flex gap-2">
            <a
              className="hover:text-[#FEFCDD] transition-colors duration-300"
              href="https://linktr.ee/rainhore"
              target="_blank"
            >
              <At size={40} weight="bold" />
            </a>
            <a
              className="hover:text-[#FEFCDD] transition-colors duration-300"
              href="https://www.linkedin.com/in/renata-rainho/"
              target="_blank"
            >
              <LinkedinLogo size={40} weight="bold" />
            </a>
            <a
              className="hover:text-[#FEFCDD] transition-colors duration-300"
              href="https://www.instagram.com/rainhore/"
              target="_blank"
            >
            <InstagramLogo size={40} weight="bold" /></a>

            <a
              className="hover:text-[#FEFCDD] transition-colors duration-300"
              href="https://github.com/rerainho"
              target="_blank"
            >
            <GithubLogo size={40} weight="bold" /></a>
          </div>
          <div>
            <p className="text-xl font-light">
              Rainhore | Copyright: Renata Rainho{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
return (
  <>
      {footerComponent}
    </>
  )
}
