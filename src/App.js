import './App.css';
import React from 'react';
import Contact from './components/Contact';
import Project from './components/Project';
import Skills from './components/Skills';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import Project from './components/Project/Project';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import { Helmet } from 'react-helmet';
import favi_icon_192 from './assets/favi_icon_192.png';
import GitStats from './components/GitStats';

// Everytime --> npm run deploy

function App() {
	return (
		<>
			<Helmet>
				<link rel="icon" type="image/x-icon" href={favi_icon_192} />
			</Helmet>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Project />
			<GitStats />
			<Contact />
			<Footer />
			<GoToTop />
		</>
	);
}

export default App;
