import { useState } from "react";
import "../styles/App.css";
import Sidebar from "./sidebar";
import CVApplication from "./cvApplication";

function App() {
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [github, setGithub] = useState(null);
  const [aboutMe, setAboutMe] = useState(null);
  const [skills, setSkills] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="container">
        <Sidebar
          showSidebar={showSidebar}
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          github={github}
          setGithub={setGithub}
          aboutMe={aboutMe}
          setAboutMe={setAboutMe}
          skills={skills}
          setSkills={setSkills}
          educations={educations}
          setEducations={setEducations}
          experiences={experiences}
          setExperiences={setExperiences}
        />
        <CVApplication
          cvData={{
            fullName: fullName,
            email: email,
            github: github,
            aboutMe: aboutMe,
            skills: skills,
            educations: educations,
            experiences: experiences,
          }}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </>
  );
}

export default App;
