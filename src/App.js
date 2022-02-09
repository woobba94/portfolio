import './App.css';
import { CenterLine, Header, Body, Footer } from './components/index';
import GreetingsLine from './components/GreetingsLine';
// import { useState } from 'react';
// import Modal from './components/Modal';
function App() {
  return (
    <div className="App">
      <CenterLine />
      <GreetingsLine />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
