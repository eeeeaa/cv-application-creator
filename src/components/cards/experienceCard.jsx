/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../styles/cards.css";

export default function ExperienceCard({ experiences, setExperiences }) {
  const [expToAdd, setExpToAdd] = useState({
    key: "",
    companyName: "",
    position: "",
    responsibility: "",
    startDate: "",
    endDate: "",
  });
  return (
    <form action="#">
      <fieldset>
        <legend>Experience</legend>
      </fieldset>
    </form>
  );
}
