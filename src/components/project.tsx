import Button from "@mui/material/Button/Button";
import { ProjectData } from "../d";

type ProjectProps = {
  contentWidth?: number;
  contentHeight?: number;
  project: ProjectData;
  imageClassName?: string;
};

export const Project = (props: ProjectProps) => {
  let { contentWidth, contentHeight, project, imageClassName } = props;
  const { title, imageSource, subtitle, description, link, linkText } = project;
  contentWidth ??= 400;
  contentHeight ??= 400;
  imageClassName ??= "imageLargeRound";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-evenly",
        alignItems: "center",
        width: contentWidth,
        height: contentHeight,
        margin: "auto",
        paddingBottom: 200,
        paddingLeft: 50,
        paddingRight: 50,
        position: "relative",
      }}
    >
      <img className={imageClassName} src={imageSource} />
      <h3
        style={{
          marginBottom: 0,
        }}
      >
        {title}
      </h3>
      {subtitle && (
        <h5 style={{ marginTop: 20, marginBottom: 0 }}>{subtitle}</h5>
      )}
      {description && <p className="projectDescription">{description}</p>}
      {link && linkText && (
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
      )}
    </div>
  );
};
export default Project;
