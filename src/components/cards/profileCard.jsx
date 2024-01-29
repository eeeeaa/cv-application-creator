/* eslint-disable react/prop-types */
import "../../styles/cards.css";

export default function ProfileCard({
  fullName,
  setFullName,
  email,
  setEmail,
  github,
  setGithub,
  aboutMe,
  setAboutMe,
}) {
  return (
    <form action="" method="post" className="profile card-container">
      <fieldset>
        <legend>Profile</legend>
        <div className="card-header">
          <label htmlFor="full-name">Full name:</label>
          <input type="text" name="full-name" id="full-name" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="github">Github:</label>
          <input type="text" name="github" id="github" />
          <label htmlFor="about-me-text-area">About me:</label>
          <textarea
            id="about-me-text-area"
            placeholder="tell me about yourself"
            cols={30}
            rows={20}
          ></textarea>
        </div>
      </fieldset>
    </form>
  );
}
