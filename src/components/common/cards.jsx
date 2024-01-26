/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../styles/cards.css";

function SkillItem({ skill, skills, setSkills }) {
  return (
    <div className="skill-item">
      <div className="skill-text">{skill}</div>
      <button
        type="button"
        className="substract-button"
        onClick={() => {
          setSkills(skills.filter((element) => element != skill));
        }}
      >
        Substract
      </button>
    </div>
  );
}

function SkillList({ skills, setSkills }) {
  if (skills === null || skills.length <= 0) return null;

  return (
    <div className="skill-list">
      {skills.map((skill) => {
        return (
          <SkillItem
            key={skill}
            skill={skill}
            skills={skills}
            setSkills={setSkills}
          />
        );
      })}
    </div>
  );
}

export function SkillCard({ skills, setSkills }) {
  const [skillToAdd, setSkillToAdd] = useState("");
  return (
    <div className="skill-card">
      <div className="skill-header">
        <label htmlFor="skill">Skill:</label>
        <input
          type="text"
          name="skill"
          id="skill"
          onChange={(e) => setSkillToAdd(e.target.value)}
          value={skillToAdd}
        />
        <button
          type="button"
          className="add-button"
          onClick={() => {
            if (skillToAdd != null) {
              setSkills([...skills, skillToAdd]);
            }
          }}
        >
          Add
        </button>
      </div>
      <SkillList skills={skills} setSkills={setSkills} />
    </div>
  );
}

export function EducationCard() {}

export function ExperienceCard() {}
