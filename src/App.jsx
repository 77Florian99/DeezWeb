import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Favoris from './components/Favoris';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container">
						<span className="navbar-brand mb-0 h1">
							<img src={logo} alt="React Logo" width="42" /> Deezweb
						</span>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item active">
									<Link to="/" className="nav-link">
										<i className="fas fa-search" /> Rechercher un titre
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/favorites" className="nav-link">
										<i className="fas fa-heartbeat" /> Mes favoris
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<Route path="/" component={Home} exact />
				<Route path="/favorites" component={Favoris} />
			</div>
		</Router>
	);
}

export default App;
