/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../styles/cards.css";
import { getUUID } from "../../utils/uuidGenerator";

function ExpItem({ experience, experiences, setExperiences }) {
  const removeItem = () => {
    setExperiences(
      experiences.filter((element) => element.key != experience.key)
    );
  };

  return (
    <div className="card-item">
      <div className="exp-company-name">{experience.companyName}</div>
      <div className="exp-position">{experience.position}</div>
      <div className="exp-responsibility">{experience.responsibility}</div>
      <div className="exp-start-date">{experience.startDate}</div>
      <div className="exp-end-date">{experience.endDate}</div>
      <button type="button" className="remove-button" onClick={removeItem}>
        Substract
      </button>
    </div>
  );
}

function ExpList({ experiences, setExperiences }) {
  if (experiences === null || experiences.length <= 0) return null;

  return (
    <div className="card-list">
      {experiences.map((experience) => {
        return (
          <ExpItem
            key={experience.key}
            experience={experience}
            experiences={experiences}
            setExperiences={setExperiences}
          />
        );
      })}
    </div>
  );
}

export default function ExperienceCard({ experiences, setExperiences }) {
  const [expToAdd, setExpToAdd] = useState({
    key: "",
    companyName: "",
    position: "",
    responsibility: "",
    startDate: "",
    endDate: "",
  });

  const addCompanyName = (e) =>
    setExpToAdd({ ...expToAdd, companyName: e.target.value });
  const addPostiton = (e) =>
    setExpToAdd({ ...expToAdd, position: e.target.value });
  const addResponsibility = (e) =>
    setExpToAdd({ ...expToAdd, responsibility: e.target.value });
  const addStartDate = (e) =>
    setExpToAdd({ ...expToAdd, startDate: e.target.value });
  const addEndDate = (e) =>
    setExpToAdd({ ...expToAdd, endDate: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setExperiences([...experiences, { ...expToAdd, key: getUUID() }]);
    } else {
      e.target.reportValidity();
    }
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Experience</legend>
        <div className="card-content">
          <div className="card-header">
            <label htmlFor="exp-company-name">Company:</label>
            <input
              type="text"
              name="exp-company-name"
              id="exp-company-name"
              required
              onChange={addCompanyName}
              value={expToAdd.companyName}
            />
            <label htmlFor="exp-position">Position:</label>
            <input
              type="text"
              name="exp-position"
              id="exp-position"
              required
              onChange={addPostiton}
              value={expToAdd.position}
            />
            <label htmlFor="exp-responsibility">Responsibilities:</label>
            <input
              type="text"
              name="exp-responsibility"
              id="exp-responsibility"
              required
              onChange={addResponsibility}
              value={expToAdd.responsibility}
            />
            <label htmlFor="exp-start-date">Start Date:</label>
            <input
              type="date"
              name="exp-start-date"
              id="exp-start-date"
              required
              onChange={addStartDate}
              value={expToAdd.startDate}
            />
            <label htmlFor="exp-end-date">End Date:</label>
            <input
              type="date"
              name="exp-end-date"
              id="exp-end-date"
              required
              onChange={addEndDate}
              value={expToAdd.endDate}
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
          <ExpList experiences={experiences} setExperiences={setExperiences} />
        </div>
      </fieldset>
    </form>
  );
}
