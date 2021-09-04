import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <p>
        <em>{props.content}</em>
      </p>
      <ul>
        <li> ‣ {props.date}</li>
      </ul>
    </div>
  );
}

export default ResumeContent;
