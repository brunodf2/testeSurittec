import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import './styles.css';

import logoImg from '../../assets/logo.png'

export default function SignIn() {
  const [login, setLogin] = useState('')

  function handleLogin(e) {
    e.preventDefault();

    localStorage.setItem('loginId', login)
  }
  console.log(handleLogin)

	return (
    <div className="logon-container">
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input type="email" placeholder="Seu E-mail" value={login} onChange={e => setLogin(e.target.value)}/>
          <input type="password" placeholder="Sua Senha"/>

          <Link to="/dashboard">
          <button className="button" type="submit">Entrar</button>
          </Link>

          <Link to="/register">Cadastrar-se</Link>
        </form>
      </section>
      <img src={logoImg} alt="signin"/>
    </div>
  );
}
