import './App.css';
import React, { useState, useEffect } from 'react';
import { ScrollContext } from './context/ScrollContext';
import Body from './components/Body';
import CenterLine from './components/CenterLine';
import NavBar from './components/NavBar/NavBar';

function App() {
  // 스크롤 퍼센트 (0 ~ 1)
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercentage(
        window.pageYOffset /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)
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
        <Body />
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
