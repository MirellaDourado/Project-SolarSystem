import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import missions from './data/missions';

class App extends React.Component {
  render() {
    return (
      <>
        <main>
          <Header />
          <SolarSystem />
        </main>
        <Missions slides={ missions } />
        <Footer />
      </>
    );
  }
}

export default App;
