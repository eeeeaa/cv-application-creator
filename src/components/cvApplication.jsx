/* eslint-disable react/prop-types */
import "../styles/cvApplication.css";

function Navbar({ toggleSidebar }) {
  return (
    <div className="content-nav-bar">
      <button className="openbtn" onClick={toggleSidebar}>
        ☰ Open Sidebar
      </button>
    </div>
  );
}

export default function CVApplication({ cvData = null, toggleSidebar }) {
  return (
    <div className="cv-container">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="cv-content">
        <div>{cvData.fullName}</div>
        <div>{cvData.email}</div>
        <div>{cvData.github}</div>
        <ul>
          {cvData.skills.map((skill) => {
            return <li key={skill.key}>{skill.title}</li>;
          })}
        </ul>
        <ul>
          {cvData.educations.map((education) => {
            return (
              <li
                key={education.key}
              >{`${education.edName}, ${education.edTitle}, ${education.edDate}`}</li>
            );
          })}
        </ul>
        <ul>
          {cvData.experiences.map((experience) => {
            return (
              <li key={experience.key}>
                {`${experience.companyName}, ${experience.position}, ${experience.responsibility}, ${experience.startDate} - ${experience.endDate}`}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
