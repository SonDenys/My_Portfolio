import ScrollToGrow from "../../components/Scrolling/ScrollToGrow";
import Backend from "../../components/SkillsComponents/Backend";
import Frontend from "../../components/SkillsComponents/Frontend";

const Skills = () => {
  return (
    <ScrollToGrow threshold={2000}>
      <div className="flex justify-between">
        <Frontend />
        <Backend />
      </div>
    </ScrollToGrow>
  );
};

export default Skills;
