import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiPlus } from 'react-icons/fi';

import SideBar from '../../components/SideBar';

import logoImg from '../../assets/logo.png';
import card from '../../assets/Card.png';


import './styles.css';

export default function Dashboard() {

	const history = useHistory();

	function handleLogout() {
		history.push('/')
	}

	return (
    <div className="dashboard-container">
    <SideBar />
    <div className="content">
			<header>
				<img src={logoImg} alt="Be The Hero" />

				<span>Bem vindo</span>

				<Link className="button" to="/simulation">
					Simulação
				</Link>
				
				<button onClick={handleLogout} type="button">
					<FiPower size={18} color="#ffa039" />
				</button>
			
			</header>

			<ul>
				<li>
				<strong>Nome Cliente:</strong>
					<p>Osvaldo da Cruz</p>

					<strong>Endereco</strong>
					<p>Brasília</p>

					<strong>TIPO CLIENTE</strong>
					<p>Invest</p>

					<button type="button">
						<FiPlus size={27} color="#a8a8b3" />
					</button>
				</li>

				<li>
				<strong>Todas as transações:</strong>
					<p>Osvaldo da Cruz</p>

					<strong>Endereco</strong>
					<p>Brasília</p>

					<strong>TIPO CLIENTE</strong>
					<p>Invest</p>

					<button type="button">
						<FiPlus size={27} color="#a8a8b3" />
					</button>
				</li>

				<li>
				<strong>Cartão de Credito:</strong>
					<img src={card} alt="card"/>

					<button type="button">
						<FiPlus size={27} color="#a8a8b3" />
					</button>
				</li>
			</ul>
      </div>
		</div>
	);
}


