/* eslint-disable react/prop-types */
import "../styles/cvApplication.css";

function Navbar({ toggleSidebar }) {
  return (
    <div className="content-nav-bar">
      <button className="openbtn" onClick={toggleSidebar}>
        ☰ Open Sidebar
      </button>
      <h1 className="nav-logo">CV APPLICATION CREATOR</h1>
    </div>
  );
}

function IntroSection({ cvData }) {
  return (
    <div className="intro-section">
      <div className="cv-header">
        <h1 className="section-title">
          {cvData.fullName != null
            ? cvData.fullName.toUpperCase()
            : "YOUR NAME HERE"}
        </h1>
        <div className="contacts">
          <div className="contacts-title">Get in touch:</div>
          <div className="contact-item">{cvData.email}</div>
          <div
            className="contact-item contact-link"
            onClick={() => {
              if (cvData.github != null) {
                window.open(cvData.github);
              }
            }}
          >
            {cvData.github != null ? "Github" : ""}
          </div>
        </div>
      </div>
      <div className="about-me-description">{cvData.aboutMe}</div>
    </div>
  );
}

function SkillSection({ cvData }) {
  return (
    <div className="skills-section">
      <div className="cv-header">
        <h1 className="section-title">SKILLS</h1>
      </div>
      <ul className="cv-skill-list">
        {cvData.skills.map((skill) => {
          return (
            <li key={skill.key}>
              <div className="cv-skill-item">
                <p>{skill.title}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function EducationSection({ cvData }) {
  return (
    <div className="education-section">
      <div className="cv-header">
        <h1 className="section-title">EDUCATION</h1>
      </div>
      <ul className="cv-education-list">
        {cvData.educations.map((education) => {
          return (
            <li key={education.key} className="cv-education-item">
              <div className="cv-edu-institution-name">{education.edName}</div>
              <div className="cv-edu-graduation-date">
                <div>GRADUATION:</div>{" "}
                <div>
                  {new Date(education.edDate).toDateString().toUpperCase()}
                </div>
              </div>
              <div className="cv-edu-title">{education.edTitle}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ExperienceSection({ cvData }) {
  return (
    <div className="experience-section">
      <div className="cv-header">
        <h1 className="section-title">WORK EXPERIENCE</h1>
      </div>
      <ul className="cv-experience-list">
        {cvData.experiences.map((experience) => {
          return (
            <li key={experience.key} className="cv-experience-item">
              <div className="cv-exp-item-header">
                <div className="cv-exp-company-name">
                  {experience.companyName}
                </div>
                <div className="cv-exp-position">{experience.position}</div>
                <div className="cv-exp-date">
                  <div className="cv-exp-date-title">WORK DURATION:</div>
                  <div>{`${new Date(experience.startDate)
                    .toDateString()
                    .toUpperCase()} - ${new Date(experience.endDate)
                    .toDateString()
                    .toUpperCase()}`}</div>
                </div>
              </div>
              <div className="cv-exp-responsibilities">
                {experience.responsibility}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
function CvContent({ cvData = null }) {
  if (cvData == null) return null;
  return (
    <div className="cv-content">
      <IntroSection cvData={cvData} />
      <SkillSection cvData={cvData} />
      <EducationSection cvData={cvData} />
      <ExperienceSection cvData={cvData} />
    </div>
  );
}

export default function CVApplication({ cvData = null, toggleSidebar }) {
  return (
    <div className="cv-container">
      <Navbar toggleSidebar={toggleSidebar} />
      <CvContent cvData={cvData} />
    </div>
  );
}
