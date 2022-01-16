import toFilename from "../../utils/toFileName";

const Skill = ({ name }) => {
  const img = toFilename(name);

  return (
    <div className="h-16 w-16">
      <img src={`/logos/${img}.svg`} alt=""></img>
      <span>{name}</span>
    </div>
  );
};

export default Skill;
