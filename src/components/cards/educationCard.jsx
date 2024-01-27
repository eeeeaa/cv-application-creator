/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../styles/cards.css";
import { getUUID } from "../../utils/uuidGenerator";

function EduItem({ education, educations, setEducations }) {
  const removeItem = () => {
    setEducations(educations.filter((element) => element.key != education.key));
  };
  return (
    <div className="card-item">
      <div className="edu-name">{education.edName}</div>
      <div className="edu-title">{education.edTitle}</div>
      <div className="edu-date">{education.edDate}</div>
      <button type="button" className="remove-button" onClick={removeItem}>
        Substract
      </button>
    </div>
  );
}

function EduList({ educations, setEducations }) {
  if (educations === null || educations.length <= 0) return null;

  return (
    <div className="card-list">
      {educations.map((education) => {
        return (
          <EduItem
            key={education.key}
            education={education}
            educations={educations}
            setEducations={setEducations}
          />
        );
      })}
    </div>
  );
}

export default function EducationCard({ educations, setEducations }) {
  const [eduToAdd, setEduToAdd] = useState({
    key: "",
    edName: "",
    edTitle: "",
    edDate: "",
  });

  const addName = (e) => setEduToAdd({ ...eduToAdd, edName: e.target.value });
  const addTitle = (e) => setEduToAdd({ ...eduToAdd, edTitle: e.target.value });
  const addDate = (e) => setEduToAdd({ ...eduToAdd, edDate: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setEducations([...educations, { ...eduToAdd, key: getUUID() }]);
    } else {
      e.target.reportValidity();
    }
  };
  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="education card-container"
    >
      <fieldset>
        <legend>Education</legend>
        <div className="card-content">
          <div className="card-header">
            <label htmlFor="edu-name">Name of Institution:</label>
            <input
              type="text"
              name="edu-name"
              id="edu-name"
              required
              onChange={addName}
              value={eduToAdd.edName}
            />
            <label htmlFor="edu-name">Title:</label>
            <input
              type="text"
              name="edu-title"
              id="edu-title"
              required
              onChange={addTitle}
              value={eduToAdd.edTitle}
            />
            <label htmlFor="edu-name">Graduation Date:</label>
            <input
              type="date"
              name="edu-date"
              id="edu-date"
              required
              onChange={addDate}
              value={eduToAdd.edDate}
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
          <EduList educations={educations} setEducations={setEducations} />
        </div>
      </fieldset>
    </form>
  );
}
