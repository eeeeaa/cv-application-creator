/* eslint-disable react/prop-types */
export default function CVApplication({ cvData = null }) {
  return (
    <div className="cv-content">
      <div>{cvData.fullName}</div>
      <div>{cvData.email}</div>
      <div>{cvData.github}</div>
      <div>{cvData.skills}</div>
      <div>{cvData.educations}</div>
      <div>{cvData.experiences}</div>
    </div>
  );
}
