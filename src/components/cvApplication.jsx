/* eslint-disable react/prop-types */
import "../styles/cvApplication.css";
export default function CVApplication({ cvData = null }) {
  return (
    <div className="cv-container">
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
        <div>{cvData.experiences}</div>
      </div>
    </div>
  );
}
