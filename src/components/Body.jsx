import Section from './Section/Section';

function Body() {
  return (
    <div className="Body">
      <Section name="Intro" />
      <Section name="About" />
      <Section name="TechStack" />
      <Section name="Experience" />
      <Section name="Projects" />
      <Section name="Contact" />
    </div>
  );
}

export default Body;
