import Button from "@mui/material/Button/Button";
import { ProjectData } from "../d";

type ProjectProps = {
  contentWidth?: number;
  contentHeight?: number;
  project: ProjectData;
};

export const Project = (props: ProjectProps) => {
  let { contentWidth, contentHeight, project } = props;
  const { title, imageSource, subtitle, description, link, linkText } = project;
  contentWidth ??= 400;
  contentHeight ??= 400;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: contentWidth,
        height: contentHeight,
        margin: "auto",
        paddingTop: 200,
        paddingBottom: 200,
        paddingLeft: 50,
        paddingRight: 50,
        position: "relative",
      }}
    >
      <h4 style={{ display: "inline-block", verticalAlign: "top" }}>{title}</h4>
      <img className="imageLargeRound" src={imageSource} />
      <h5>{subtitle}</h5>
      <p className="projectDescription">{description}</p>
      <a
        href={link}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{ marginTop: 2 }}
        >
          {linkText}
        </Button>
      </a>
    </div>
  );
};
export default Project;
