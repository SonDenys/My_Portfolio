import ScrollToGrow from "../../components/Scrolling/ScrollToGrow";
import Backend from "../../components/SkillsComponents/Backend";
import Frontend from "../../components/SkillsComponents/Frontend";
import Skill from "../../components/SkillsComponents/Skill";
import Tools from "../../components/SkillsComponents/Tools";

const tools = ["Git", "GitHub"];

const services = ["Netlify", "Stripe"];

const frontend = [
  "JavaScript",
  "React.js",
  "React Native",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Html5",
  "Gatsby",
];

const backend = ["Node.js", "Mysql", "Mongodb"];

const allTools = tools.map((tool) => <Skill name={tool} key={tool} />);

const allServices = services.map((service) => (
  <Skill name={service} key={service} />
));

const allFrontend = frontend.map((tech) => <Skill name={tech} key={tech} />);

const allBackend = backend.map((tech) => <Skill name={tech} key={tech} />);

const Skills = () => {
  return (
    <ScrollToGrow threshold={2000}>
      <div className="">
        <Frontend
          allTools={allTools}
          allServices={allServices}
          allFrontend={allFrontend}
        />
        <Backend
          allTools={allTools}
          allServices={allServices}
          allBackend={allBackend}
        />
        <Tools allTools={allTools} allServices={allServices} />
      </div>
    </ScrollToGrow>
  );
};

export default Skills;
