/* eslint-disable react/prop-types */
import "../styles/sidebar.css";
import SkillCard from "./cards/skillCard";
import EducationCard from "./cards/educationCard";
import ExperienceCard from "./cards/experienceCard";
import ProfileCard from "./cards/profileCard";

export default function Sidebar({
  showSidebar,
  fullName,
  setFullName,
  email,
  setEmail,
  github,
  setGithub,
  aboutMe,
  setAboutMe,
  skills,
  setSkills,
  educations,
  setEducations,
  experiences,
  setExperiences,
}) {
  return (
    <div
      className={`side-bar-nav ${
        showSidebar ? "side-bar-open" : "side-bar-close"
      }`}
    >
      <div className="side-bar-content">
        <ProfileCard
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          github={github}
          setGithub={setGithub}
          aboutMe={aboutMe}
          setAboutMe={setAboutMe}
        />
        <SkillCard skills={skills} setSkills={setSkills} />
        <EducationCard educations={educations} setEducations={setEducations} />
        <ExperienceCard
          experiences={experiences}
          setExperiences={setExperiences}
        />
      </div>
    </div>
  );
}
