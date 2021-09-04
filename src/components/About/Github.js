import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffff",
    grade4: "gray",
    grade3: "gray",
    grade2: "gray",
    grade1: "gray",
    grade0: "#ecd9fc",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="pallav1998"
        blockMargin={5}
        blockRadius={7}
        blockSize={20}
        weekStart={0}
        theme={colourTheme}
        fontSize={16}
        showWeekdayLabels
      />
    </Row>
  );
}

export default Github;
