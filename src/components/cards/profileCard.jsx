/* eslint-disable react/prop-types */
import "../../styles/cards.css";
import { useState } from "react";

export default function ProfileCard({
  setFullName,
  setEmail,
  setGithub,
  setAboutMe,
}) {
  const [profileToAdd, setProfileToAdd] = useState({
    fullName: "",
    email: "",
    github: "",
    aboutMe: "",
  });

  const addFullName = (e) =>
    setProfileToAdd({ ...profileToAdd, fullName: e.target.value });
  const addEmail = (e) =>
    setProfileToAdd({ ...profileToAdd, email: e.target.value });
  const addGithub = (e) =>
    setProfileToAdd({ ...profileToAdd, github: e.target.value });
  const addAboutMe = (e) =>
    setProfileToAdd({ ...profileToAdd, aboutMe: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setFullName(profileToAdd.fullName);
      setEmail(profileToAdd.email);
      setGithub(profileToAdd.github);
      setAboutMe(profileToAdd.aboutMe);
    } else {
      e.target.reportValidity();
    }
  };

  return (
    <form
      action=""
      method="post"
      className="profile card-container"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend>Profile</legend>
        <div className="card-header">
          <label htmlFor="full-name">Full name:</label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            required
            onChange={addFullName}
            value={profileToAdd.fullName}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={addEmail}
            value={profileToAdd.email}
          />
          <label htmlFor="github">Github:</label>
          <input
            type="text"
            name="github"
            id="github"
            required
            onChange={addGithub}
            value={profileToAdd.github}
          />
          <label htmlFor="about-me-text-area">About me:</label>
          <textarea
            id="about-me-text-area"
            placeholder="tell me about yourself"
            cols={30}
            rows={20}
            required
            onChange={addAboutMe}
            value={profileToAdd.aboutMe}
          ></textarea>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}
