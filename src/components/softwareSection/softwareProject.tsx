import Button from "@mui/material/Button/Button";
import { SoftwareProjectType } from "../../d";

type SoftwareProjectProps = {
  contentWidth?: number;
  contentHeight?: number;
  project: SoftwareProjectType;
};

export const SoftwareProject = (props: SoftwareProjectProps) => {
  let { contentWidth, contentHeight, project } = props;
  const { title, imageSource, date, role, description, link } = project;
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
        paddingTop: 100,
        paddingBottom: 100,
        position: "relative",
        // border: "1px solid red",
      }}
    >
      <h4>{title}</h4>
      <img className="imageMedium" src={imageSource} />
      <h5>
        {date} {role}
      </h5>
      <p style={{ fontSize: 14, width: contentWidth - 50 }}>{description}</p>
      <a href={link} style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{ marginTop: 2 }}
        >
          Demo
        </Button>
      </a>
    </div>
  );
};
export default SoftwareProject;
