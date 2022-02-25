import Intro from './Intro/Intro';
import About from './About/About';
import TechStack from './TechStack/TechStack';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';

function Section(props) {
  let part;
  if (props.name === 'Intro') part = <Intro />;
  else if (props.name === 'About') part = <About />;
  else if (props.name === 'TechStack') part = <TechStack />;
  else if (props.name === 'Experience') part = <Experience />;
  else if (props.name === 'Projects') part = <Projects />;
  else if (props.name === 'Contact') part = <Contact />;
  else part = 'error';
  return <div className="Section">{part}</div>;
}
export default Section;
