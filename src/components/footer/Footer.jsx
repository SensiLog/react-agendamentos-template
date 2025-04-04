import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-dark text-white py-5 mt-auto">
            <div className="container">
                <div className="row">
                    {/* Contato */}
                    <div className="col-12 col-md-4 mb-4 text-center text-md-start">
                        <h5 className="font-weight-bold mb-3">Contato</h5>
                        <a
                            className="d-flex align-items-center text-decoration-none text-white mb-2 justify-content-center justify-content-md-start"
                            href="#"
                        >
                            <FaInstagram size={30} className="me-2" />
                            <span>Instagram</span>
                        </a>
                        <a
                            className="d-flex align-items-center text-decoration-none text-white justify-content-center justify-content-md-start"
                            href="#"
                        >
                            <FaWhatsapp size={30} className="me-2" />
                            <span>WhatsApp</span>
                        </a>
                    </div>

                    {/* Veja mais sobre */}
                    <div className="col-12 col-md-4 mb-4 text-center text-md-start">
                        <h5 className="mb-3">Veja mais sobre</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-decoration-none text-primary">
                                    Exemplo 1
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-decoration-none text-primary">
                                    Exemplo 2
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Lista 3 */}
                    <div className="col-12 col-md-4 mb-4 text-center text-md-start">
                        <h5 className="mb-3">Lista 3</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-decoration-none text-white">
                                    Exemplo 1
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-decoration-none text-white">
                                    Exemplo 2
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center mt-4">
                        <span>Todos os direitos reservados a SensiLog Tecnologia LTDA.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;