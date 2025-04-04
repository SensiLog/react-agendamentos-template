import React, { useState } from "react";
import { BsBarChartFill, BsAmazon, BsBezier2 } from "react-icons/bs";
import './servicos.css';
import { motion } from "framer-motion";

function Servicos() {
    const [selectedCard, setSelectedCard] = useState(null); // Estado para armazenar o card selecionado

    // Textos para cada card
    const cardTexts = {
        pitocagem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        bucetagem: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
        cuzagem: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    };

    return (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center p-4">
            <h3 className="text-black font-weight-bold mb-4">Conheça nossos serviços</h3>
            <p>Clique em cada serviço para ler detalhes!</p>
            <div className="d-flex gap-4 flex-wrap justify-content-center mb-3">
                {/* Card 1 */}
                <div
                    className="card-servico d-flex flex-column align-items-center justify-content-center bg-primary text-white rounded p-3"
                    style={{ width: "150px", height: "150px" }}
                    onClick={() => setSelectedCard("pitocagem")} // Define o card selecionado
                >
                    <BsBarChartFill size={40} className="mb-2" /> {/* Icon */}
                    <span>Analise</span>
                </div>
                {/* Card 2 */}
                <div
                    className="card-servico d-flex flex-column align-items-center justify-content-center bg-primary text-white rounded p-3"
                    style={{ width: "150px", height: "150px" }}
                    onClick={() => setSelectedCard("bucetagem")} // Define o card selecionado
                >
                    <BsAmazon size={40} className="mb-2" /> {/* Icon */}
                    <span>Hospedagem</span>
                </div>
                {/* Card 3 */}
                <div
                    className="card-servico d-flex flex-column align-items-center justify-content-center bg-primary text-white rounded p-3"
                    style={{ width: "150px", height: "150px" }}
                    onClick={() => setSelectedCard("cuzagem")} // Define o card selecionado
                >
                    <BsBezier2 size={40} className="mb-2" /> {/* Icon */}
                    <span>Organização</span>
                </div>
            </div>
            {/* Texto exibido abaixo dos cards */}
            {selectedCard && (
                <motion.div
                className="mt-4 mx-5 text-center"
                initial={{ opacity: 0, y: 20 }} // Estado inicial (invisível e deslocado para baixo)
                animate={{ opacity: 1, y: 0 }} // Estado final (visível e na posição original)
                exit={{ opacity: 0, y: -20 }} // Estado ao sair (invisível e deslocado para cima)
                transition={{ duration: 0.5 }} // Duração da animação
            >
                <p className="text-black">{cardTexts[selectedCard]}</p>
            </motion.div>
            )}
        </div>
    );
}

export default Servicos;