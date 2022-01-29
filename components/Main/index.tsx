import React from "react";
import About from "./About/About";
import Experiences from "./Experiences";
import Home from "./Homepage/Home";
import MyTitle from "./MyTitle";
import ProjectReact from "./ProjectsPage/ProjectReact";
import ProjectWP from "./ProjectsPage/ProjectWP";
import Services from "./ServicesPage/Services";
import Skills from "./SkillsPage/Skills";

import { Element } from "react-scroll";

const Main = () => {
  return (
    <React.Fragment>
      <Element>
        <Home />
        <About />
        <Services />
        <ProjectReact />
        <ProjectWP />
        <MyTitle title="Mes compétences" id="skills" />
        <Skills />
        <Experiences />
      </Element>
    </React.Fragment>
  );
};

export default Main;
