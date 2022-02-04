import FirstTab from './tabs/FirstTab';
import SecondTab from './tabs/SecondTab';
import ThirdTab from './tabs/ThirdTab';
import { useState } from 'react';

const obj = {
  0: <FirstTab />,
  1: <SecondTab />,
  2: <ThirdTab />,
};

function Tab() {
  const [activeId, setActiveId] = useState(0);

  const clickHandler = (id) => {
    setActiveId(id);
  };

  return (
    <div className="Tab">
      <ul className="title">
        <button onClick={() => clickHandler(0)}>First</button>
        <button onClick={() => clickHandler(1)}>Second</button>
        <button onClick={() => clickHandler(2)}>Third</button>
      </ul>
      <div className="contents">{obj[activeId]}</div>
    </div>
  );
}

export default Tab;
