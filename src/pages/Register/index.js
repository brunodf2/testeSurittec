import React from 'react'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'


import './styles.css'

export default function Register() {
  return (
    <div className="register-container">
    <div className="content">
      <section>
   
        <h1>Cadastro</h1>
        <p>Faça seu cadastro, entre na plataforma.</p>

        <Link className="back-link" to="/">
          <FiArrowLeft size={16} color="#ffa039" />
          Voltar para o logon
        </Link>
      </section>

      <form onSubmit={() => {}}>
        <input
          placeholder="Nome"
        />
        <input
          type="email"
          placeholder="E-mail"
        />
        <input
          placeholder="Senha"
          type="password"

        />

        <button className="button" type="submit">Cadastrar </button>
      </form>
    </div>
  </div>

  )
}
