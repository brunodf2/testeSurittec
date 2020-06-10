import React from 'react';
import { Link } from 'react-router-dom';
import { FiList, FiCalendar, FiCreditCard, FiActivity } from 'react-icons/fi';
import { FaMoneyBillAlt, FaMoneyCheckAlt, FaPiggyBank } from 'react-icons/fa';

import './styles.css';

export default function SideBar() {
	return (
		<div className="sideBar-container">
			<button>
				<FiList size={16} color="#fff" />
				Dashboard
			</button>

			<a className="agenda" target="_blank" href="https://calendar.google.com/calendar/r?pli=1#h">
				<FiCalendar size={20} color="#000" />
				<p>Agenda</p>
			</a>

			<h2>Conta</h2>

			<div className="conta">
				<FaMoneyBillAlt size={18} />
				<p>Dinheiro</p>
				<p className="green">(R$9578)</p>
			</div>
			<div className="conta">
				<FaMoneyCheckAlt size={18} />
				<p>Empréstimos</p>
				<p className="red">(R$ 3546)</p>
			</div>
			<div className="conta">
				<FiCreditCard size={16} />
				<p>Cartao de Credito</p>
				<p className="green">(R$18k)</p>
			</div>
			<div className="conta">
				<FiActivity size={18} />
				<p>Ativos</p>
				<p className="green">(R$13k)</p>
			</div>
			<div className="conta">
				<FaPiggyBank size={18} />
				<p>Investimentos</p>
				<p className="green">(R$20k)</p>
			</div>
		</div>
	);
}
