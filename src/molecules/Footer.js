import React from 'react'

const Footer = () => {
        return (
            <>
                <footer class="footer" >
                    <div class="grupo1">
                        <div class="logo">
                            <figure>
                                <a href="index.html"><img src="./Imagenes/Logo.png" alt="Logo Books.com" /></a>
                            </figure>
                        </div>
                        <div class="date">
                            <ul>
                                <li>Politica de Privacidad</li>
                                <li>Condiciones de Compra</li>
                                <li>Promociones Vigentes</li>
                            </ul>
                            <h1>Contáctanos</h1>
                            <ul>
                                <li>Books.tiendavirtual@gmail.com</li>
                                <li>Telefono: (601) 860 3226</li>
                                <li>Whatsapp: (57) 364 862 4356</li>
                            </ul>
                        </div>
                    </div>
                    <div class="grupo2">
                        <div>
                            <h2>Quienes Somos</h2>
                            <p>Books.com es una libreria virtual  la cual surgio de la necesidad
                                de encontrar todo en un mismo lugar,ofreciendo un excelente servicio,
                                donde podes encontar  desde libros,ebooks y audiolibros de diferentes categorias
                                como Best  Seller, ficcion, y clasicos.
                            </p>
                        </div>
                    </div>
                    <div class="grupo3">
                        <div class="Contacts">
                            <h2>Redes Sociales</h2>
                            <div class="red-social">
                                <a target="_blank" href="index.html">
                                    <img src="./Imagenes/instagram-logo.png" alt="Instagram" /></a>
                                <a target="_blank" href="index.html">
                                    <img src="./Imagenes/facebook.png" alt="logo-facebook" /></a>
                                <a target="_blank" href="index.html"></a>
                                <img src="./Imagenes/twitter-logo-.png" alt="Logo Twiter" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Medios de Pago</h2>
                        <div class="Payments">
                            <img src="./Imagenes/logo-PSE.png" alt="logo pse" />
                            <img src="./Imagenes/mastercard-logo.png" alt="logo-mastercad" />
                            <img src="./Imagenes/Visa_logo.png" alt="Logo Visa" />
                        </div>
                    </div>
                    <div class="grupo4">
                        <div>
                            <small>&copy; 2023 <b>Books.com</b> Todos los Derechos Reservados.</small>
                        </div>
                    </div>
                </footer>
    
                <style jsx>
                    {`
                    .footer {
                        width: 100%;
                    background-color: #49A1A5 ;
                    display: grid;
                    grid-template-areas: "grupo1 grupo2 grupo3"
                    "grupo1 grupo2 grupo3"
                    "grupo1 grupo2 grupo3"
                    "grupo4 grupo4 grupo4";
                    grid-template-rows: 3fr;
                                    grid-template-columns: 1fr;}
    
                    .footer img {
                        width: 50px;}
    
                    .logo img {
                        background - color: white;
                    width: 250px;
                    border-radius: 8px;
                    box-shadow: 1px 1px 5px black;
                                    transition: all 0.3s ease;}
    
                    .date ul li {
                        list - style: none;
                                    color: black(181, 236, 218);}
    
                    h1,h2, p {
                        color: black;
                                    text-align: center;}
                    .grupo1 {
                        padding - left: 30px;}
    
                    .grupo2 {
                        padding - left: 28%;
                    padding-right: 28%;
                                    padding-top: 10px; }
    
                    .grupo3 {
                        padding - right: 110px;}
    
                    .grupo4 {
                        width: 100%;
                    padding-left: 150%;
                                    margin-bottom: 10px;}
                    .red-social img{
                        transition: all;}
    
    
                    .red-social img:hover{
                        color: black;
                                    transform: scale(1.2);}
                                    `}
                </style>
            </>
        );
    };
    
export default Footer
