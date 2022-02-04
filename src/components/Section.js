import Intro from './sections/Intro';
import Greetings from './sections/Greetings';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function Section(props) {
  let part;
  if (props.name === 'Intro') part = <Intro />;
  else if (props.name === 'Greetings') part = <Greetings />;
  else if (props.name === 'Skills') part = <Skills />;
  else if (props.name === 'Projects') part = <Projects />;
  else if (props.name === 'Contact') part = <Contact />;
  else part = 'error';
  return <div className="Section">{part}</div>;
}
export default Section;
