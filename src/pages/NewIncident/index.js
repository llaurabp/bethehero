import React from 'react';
import './styles.css';
import logoImg from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
export default function NewIncident() {
    return (  
    <div className="new-incident-container">
    <div className="content">
        <section>
            <img src={logoImg} alt="Logo" />
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso bla bla bla</p>
            <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
                Voltar para home
            </Link>
        </section>
        <form>
            <input placeholder="Título do caso"/>
            <textarea  placeholder="Descrição"/>
            <input placeholder="Valor em reais"/>
       
        <button className="button" type="submit">Cadastrar</button>
        </form>
    </div>
</div>
)
}