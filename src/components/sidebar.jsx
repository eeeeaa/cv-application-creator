/* eslint-disable react/prop-types */
import "../styles/sidebar.css";
import SkillCard from "./cards/skillCard";
import EducationCard from "./cards/educationCard";
import ExperienceCard from "./cards/experienceCard";

function ProfileCard({
  fullName,
  setFullName,
  email,
  setEmail,
  github,
  setGithub,
}) {
  return (
    <form action="" method="post">
      <fieldset>
        <legend>Profile</legend>
        <label htmlFor="full-name">Full name:</label>
        <input type="text" name="full-name" id="full-name" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="github">Github:</label>
        <input type="text" name="github" id="github" />
      </fieldset>
    </form>
  );
}

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
      <ProfileCard
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        github={github}
        setGithub={setGithub}
      />
      <SkillCard skills={skills} setSkills={setSkills} />
      <EducationCard educations={educations} setEducations={setEducations} />
      <ExperienceCard
        experiences={experiences}
        setExperiences={setExperiences}
      />
    </div>
  );
}
