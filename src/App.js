import React from 'react';
import ReactDOM from 'react-dom';

// css
import './reset.css';
import './App.css';
import './fonts/fonts.css';

// components
import Header from './components/Header';
import Home from './components/Home';
import WorkingProcess from './components/WorkingProcess';
import FeaturedWorks from './components/FeaturedWorks';
import Services from './components/Services';
import Team from './components/Team';
import Clients from './components/Clients';


function App() {
  return (
    <div>
      <Header />
      <Home />
      <WorkingProcess />
      <FeaturedWorks />
      <Services />
      <Team />
      <Clients />
    </div>
  );
}

export default App;
