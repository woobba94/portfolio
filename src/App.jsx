import './App.css';
import { Body } from './components/index';
import GreetingsLine from './components/GreetingsLine';
import CenterLine from './components/CenterLine';
import React, { useState, useEffect } from 'react';
import { ScrollContext } from './context/ScrollContext';
import NavBar from './components/NavBar';

function App() {
  console.log('App 렌더링');
  // 스크롤 퍼센트 (0 ~ 1)
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercentage(
        window.pageYOffset /
          (document.documentElement.scrollHeight - document.documentElement.clientHeight)
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPercentage]);

  return (
    <ScrollContext.Provider value={scrollPercentage}>
      <div className="App">
        <NavBar />
        <CenterLine />
        <GreetingsLine />
        <Body />
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
