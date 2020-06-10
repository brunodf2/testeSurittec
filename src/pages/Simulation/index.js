import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import DefaultValues from '../../utils/DefaultValues'

import './styles.css';

export default function Register() {
  const [ativo, setAtivo ] = useState(false);
  const [valor, setValor] = useState(0);
  const [valorSolicitado, setValorSolicitado] = useState()
  const [valorSolicitadoApp, setValorSolicitadoApp] = useState()
  const [parcela, setParcela] = useState()

  const [periodo, setPeriodo] = useState()
  const [poupanca, setPoupanca] = useState(0)
  const [cdb, setCdb] = useState(0)
  const [selic, setSelic] = useState(0)

  function handleCountLoan(e) {
    e.preventDefault();
    setValor(valorSolicitado / parcela * 1.25)

    setValorSolicitado('')
    setValorSolicitadoApp('')
    setPeriodo('')
    setParcela('')
    setPoupanca('')
    setCdb('')
    setSelic('')
  }

  function handleCountApplication(e) {
    e.preventDefault();
    setPoupanca(valorSolicitado / periodo * 0.0617)
    setCdb(valorSolicitado / periodo * 0.0767)
    setSelic(valorSolicitado / periodo * 0.065)

    setValorSolicitado('')
    setValorSolicitadoApp('')
    setParcela('')
    setPoupanca('')
    setPeriodo('')
    setCdb('')
    setSelic('')
  
    
  }

	function handleActive() {
		setAtivo(true);
	}

	function handleDisable() {
		setAtivo(false);
	}

	return (
		<div className="simulation-container">

			<div className="content">
      <div className="silumation-button">
				<button onClick={handleDisable} className="button">
					Empréstimo
				</button>
        <button onClick={handleActive} className="button">
					Aplicações
				</button>
			</div>
				{ativo === false ? (
          <>
					<section>
						<h1>SIMULADOR DE EMPRÉSTIMO</h1>
						<p>
							{DefaultValues.VALUES.EMPRESTIMO}
						</p>

						<Link className="back-link" to="/dashboard">
							<FiArrowLeft size={16} color="#ffa039" />
							Voltar para ao Dashboard
						</Link>
					</section>
    
          <form onSubmitCapture={handleCountLoan}>
          <input 
            type="number"
            placeholder="DE QUANTO VOCÊ PRECISA ?"
            value={valorSolicitado}
            onChange={e => setValorSolicitado(e.target.value)} />
          <input 
            type="number" 
            placeholder="PARCELAS EM ATÉ 60x" 
            value={parcela}
            max={60} 
            onChange={e => setParcela(e.target.value)}
          />
					<h1> {Intl
                .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                .format(valor)}</h1>
          <button className="button" type="submit">SIMULAR</button>
				</form>
          </>
				) : (
          <>
					<section>
						<h1>SIMULADOR DE APLICAÇÃ0</h1>
						<p>
							{DefaultValues.VALUES.APLICACAO}
						</p>

						<Link className="back-link" to="/dashboard">
							<FiArrowLeft size={16} color="#ffa039" />
							Voltar para ao Dashboard
						</Link>
					</section>

				<form onSubmit={handleCountApplication}>
          <input
           type="number"
           placeholder="VALOR DA APLICAÇÃO"
           value={valorSolicitadoApp}
            onChange={e => setValorSolicitadoApp(e.target.value)} />
           
          <input
           type="number"
           placeholder="PERIODO"
           value={periodo}
            onChange={e => setPeriodo(e.target.value)} />
          

          <div className="input-group-title">
           <p>Poupança</p> 
          <p>CDB</p> 
          <p>Tesouro celic</p> 

          </div>
          <div className="input-group">
          <input
           type="button" 
           value={Intl
                .NumberFormat('pt-BR',
                 { style: 'currency', currency: 'BRL' })
                .format(poupanca)}
            className="button" disabled />
          <input
            type="button"
            value={Intl
                .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                .format(cdb)}
            className="button"
            disabled />
					<input
            type="button"
            value={Intl
                .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                .format(selic)}
            className="button"
            disabled />

          </div>

					<button className="button" type="submit">
						SIMULAR{' '}
					</button>
				</form>
          </>
				)}

			</div>
		</div>
	);
}
