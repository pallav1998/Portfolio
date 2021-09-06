import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffff",
    level0: "#F0F0F0",
    level1: "#C4EDDE",
    level2: "#7AC7C4",
    level3: "#F73859",
    level4: "#384259",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="pallav1998"
        blockMargin={5}
        blockRadius={5}
        blockSize={15}
        weekStart={0}
        theme={colourTheme}
        fontSize={16}
        showWeekdayLabels
      />
    </Row>
  );
}

export default Github;
