import React from "react";
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';

import heroesImg from '../../assets/imagem.svg';
import logoImg from '../../assets/Logo.svg';
export default function Logon() {
return (
<div className="logon-container">
    <section className="form">
    <img src={logoImg} alt="Logo" />
    <form action="">
        <h1>Faça seu logon</h1>
        <input placeholder="Sua ID" />
        <button className="button" type="submit">Entrar</button>
        <Link className="back-link" to="/register">
            <FiLogIn size = {16} color="#E02041"></FiLogIn>
            Não tenho cadastro
        </Link>
    </form>
    </section>
    <img src={heroesImg} alt="Heroes" />
</div>

);

}
