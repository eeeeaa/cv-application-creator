/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../styles/cards.css";
import { getUUID } from "../../utils/uuidGenerator";

function SkillItem({ skill, skills, setSkills }) {
  const removeItem = () => {
    setSkills(skills.filter((element) => element.key != skill.key));
  };
  return (
    <div className="card-item">
      <div className="skill-title">{skill.title}</div>
      <button type="button" className="remove-button" onClick={removeItem}>
        Substract
      </button>
    </div>
  );
}

function SkillList({ skills, setSkills }) {
  if (skills === null || skills.length <= 0) return null;

  return (
    <div className="card-list">
      {skills.map((skill) => {
        return (
          <SkillItem
            key={skill.key}
            skill={skill}
            skills={skills}
            setSkills={setSkills}
          />
        );
      })}
    </div>
  );
}

export default function SkillCard({ skills, setSkills }) {
  const [skillToAdd, setSkillToAdd] = useState({ key: "", title: "" });

  const addSkill = (e) => setSkillToAdd({ title: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setSkills([...skills, { ...skillToAdd, key: getUUID() }]);
    } else {
      e.target.reportValidity();
    }
  };
  return (
    <form action="#" onSubmit={handleSubmit} className="skill card-container">
      <fieldset>
        <legend>Skills</legend>
        <div className="card-content">
          <div className="card-header">
            <label htmlFor="skill">Skill:</label>
            <input
              type="text"
              name="skill"
              id="skill"
              required
              onChange={addSkill}
              value={skillToAdd.title}
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
          <SkillList skills={skills} setSkills={setSkills} />
        </div>
      </fieldset>
    </form>
  );
}
