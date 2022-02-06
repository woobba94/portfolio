import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';
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
        <button onClick={() => clickHandler(0)}>기본정보</button>
        <button onClick={() => clickHandler(1)}>교육</button>
        <button onClick={() => clickHandler(2)}>자격증</button>
      </ul>
      <div className="contents">{obj[activeId]}</div>
    </div>
  );
}

export default Tab;
