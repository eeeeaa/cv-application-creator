import "../styles/sidebar.css";
import { SkillCard } from "./common/cards";

export default function Sidebar({
  fullName,
  setFullName,
  email,
  setEmail,
  github,
  setGithub,
  skills,
  setSkills,
  educations,
  setEducations,
  experiences,
  setExperiences,
}) {
  return (
    <div className="side-bar-nav">
      <form action="" method="post">
        <fieldset>
          <legend>Profile</legend>
          <label htmlFor="full-name">Full name:</label>
          <input type="text" name="full-name" id="full-name" />
          <label htmlFor="nick-name">Nickname:</label>
          <input type="text" name="nick-name" id="nick-name" />
        </fieldset>
        <fieldset>
          <legend>Skills</legend>
          <SkillCard skills={skills} setSkills={setSkills} />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
        </fieldset>
        <fieldset>
          <legend>Experience</legend>
        </fieldset>
      </form>
    </div>
  );
}
