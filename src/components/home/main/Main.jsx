import React from "react";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div
            className="p-5 w-100 d-flex flex-column justify-content-center align-items-center"
            style={{
                minHeight: "90vh",
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.65)), url('https://www.consultare.com.br/wp-content/uploads/2022/08/Imagem-09.png')",
                backgroundSize: "cover", // Faz a imagem cobrir toda a área
                backgroundPosition: "center", // Centraliza a imagem
                backgroundRepeat: "no-repeat", // Evita repetição da imagem
            }}
        >
            <h1 className="text-white font-weight-bold">Empresa teste</h1>
            <h5 className="text-white font-weight-bold">What is Lorem Ipsum?</h5>
            <span className="text-white">Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s</span>
            <span className="text-white">when an unknown printer took a galley of type and scrambled
                 it to make a type specimen book. It has survived not only five 
                 centuries, but also the leap int</span>
                <div className="p-4">
                    <Link to='/agendar'>
                    <button className="btn btn-primary btn-lg shadow-sm">Agendar</button>
                    </Link>
                
            </div>
        </div>
    );
}

export default Main;