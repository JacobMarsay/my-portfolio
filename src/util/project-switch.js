import { useParams } from "react-router-dom";
import CaptureSite from "../projects/capture-website/CaptureSiteApp";
import MusicApp from "../projects/Wave Music App/MusicApp";

// Note: This is a helper function that is used to switch between projects depending on what project a user selects.
// When adding projects in the future it is important nto note that a new case will need to be added in this File.

const ProjectSwitch = () => {
  const { id } = useParams();
  const projectId = Number(id);
  let projectComponent;

  switch (projectId) {
    case 1:
      projectComponent = <MusicApp />;
      break;
    case 2:
      projectComponent = <CaptureSite />;
      break;
    default:
      projectComponent = null;
  }

  return projectComponent;
};

export default ProjectSwitch;
