import { useState } from "react";
import "../styles/App.css";
import Sidebar from "./sidebar";
import CVApplication from "./cvApplication";

function App() {
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [github, setGithub] = useState(null);
  const [skills, setSkills] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  return (
    <>
      <div className="container">
        <Sidebar
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          github={github}
          setGithub={setGithub}
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
            skills: skills,
            educations: educations,
            experiences: experiences,
          }}
        />
      </div>
    </>
  );
}

export default App;
