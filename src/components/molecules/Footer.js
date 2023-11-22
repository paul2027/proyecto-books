import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer" >
                <div className="grupo1">
                    <div className="logo">
                        <figure>
                            <a href="index.html"><img src="\logo-books.png" alt="Logo Books.com" /></a>
                        </figure>
                    </div>
                    <div className="date">
                        <ul>
                            <li>Politica de Privacidad</li>
                            <li>Condiciones de Compra</li>
                            <li>Promociones Vigentes</li>
                        </ul>
                        <h2 id="contacto"><strong>Contáctanos</strong></h2>
                        <ul>
                            <li>Books.tiendavirtual@gmail.com</li>
                            <li>Telefono: (601) 860 3226</li>
                            <li>Whatsapp: (57) 364 862 4356</li>
                        </ul>
                    </div>
                </div>
                <div className="grupo2">
                    <h2><strong>Quienes Somos</strong></h2>
                    <p>Books.com es una libreria virtual  la cual surgio de la necesidad
                        de encontrar todo en un mismo lugar,ofreciendo un excelente servicio,
                        donde podes encontar  desde libros,ebooks y audiolibros de diferentes categorias
                        como Best  Seller, ficcion, y clasicos.
                    </p>
                </div>

                <div className="grupo3">
                    <div className="Contacts">
                        <h2><strong>Redes Sociales</strong></h2>
                        <div className="red-social">
                            <a target="_blank" href="index.js">
                                <img src="\instagram-logo.png" alt="Instagram" /></a>
                            <a target="_blank" href="index.js">
                                <img src="\facebook.png" alt="logo-facebook" /></a>
                            <a target="_blank" href="index.js"></a>
                            <img src="\twitter-logo-.png" alt="Logo Twiter" />
                        </div>
                    </div>
                    <div>
                        <div className="Payments">
                            <h2><strong>Medios de Pago</strong></h2>
                            <img src="\logo-PSE.png" alt="logo pse" />
                            <img src="\mastercard-logo.png" alt="logo-mastercad" />
                            <img src="\visa_logo.png" alt="Logo Visa" />
                        </div>
                    </div>
                </div>

                <div className="grupo4">
                    <div>
                        <small>&copy; 2023 <b>Books.com</b> Todos los Derechos Reservados.</small>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer
