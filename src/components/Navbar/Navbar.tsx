import React from "react";
import { Link, useNavigate } from "react-router-dom";
/*import icon from "./assets/image/icon.png"*/

export default function Navbar() {
  return (
    <>
      <div className="w-full bg-[#592B36] text-[#FCBBA3] flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">
            <Link
              to="/home"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Rainhore
            </Link>
          </div>

          <div style={{ paddingLeft: "115px" }}></div>

          <div className="flex gap-4">
            <Link
              to="/home"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Login
            </Link>
            {/* <Link
              to="/sobre"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              About
            </Link> */}
            <Link
              to="/postagens"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Postagens
            </Link>
            <Link
              to="/temas"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Temas
            </Link>
            <Link
              to="/cadastrarTema"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Cadastrar Tema
            </Link>
            <Link
              to="/perfil"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Perfil
            </Link>
            <Link
              to="/sair"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
