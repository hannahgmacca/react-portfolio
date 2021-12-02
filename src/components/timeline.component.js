import "../main.css";
import { ReactComponent as ProjectIcon } from "../images/work.svg";
import { ReactComponent as SchoolIcon } from "../images/school.svg";
import {ReactComponent as JobIcon } from "../images/job.svg"
import GitHub from "../images/github.png";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function renderIcon(icon) {
    switch(icon) {
      case 'project':
        return <ProjectIcon />;
      case 'school':
        return <SchoolIcon />;
      default:
        return <JobIcon/>;
    }
  }

function styleIcon(icon) {
    switch(icon) {
        case 'project':
          return { background: "#06D6A0" };
        case 'school':
          return { background: "#f9c74f" };
        default:
          return {background: "skyblue"};
      }
}

function Timeline() {
//   let projectIconStyles = { background: "#06D6A0" };
//   let schoolIconStyles = { background: "#f9c74f" };
//   let jobStyles = {background: "blue"};

  return (
    <div>
      {/* <h1 className="title">Timeline</h1> */}
      <VerticalTimeline>
        {timelineElements.map((element) => {
        //   let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          let showDeployedLink =
            element.deployedLink !== undefined &&
            element.deployedLink !== null &&
            element.deployedLink !== "";
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={styleIcon(element.icon)}
              icon={renderIcon(element.icon)}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a href={element.buttonText}>
                    <img src={GitHub} width="30px" className="shrink"></img>
                </a>
              )}

            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
