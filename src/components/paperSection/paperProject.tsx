import Button from "@mui/material/Button/Button";
import { PaperProjectType } from "../../d";

type PaperProjectProps = {
  contentWidth?: number;
  contentHeight?: number;
  paper: PaperProjectType;
};

export const PaperProject = (props: PaperProjectProps) => {
  let { contentWidth, contentHeight, paper } = props;
  const { title, imageSource, date, authors, journal, link, description } =
    paper;
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
        position: "relative",
        paddingTop: 150,
        paddingBottom: 100,
        paddingLeft: 50,
        paddingRight: 50,
      }}
    >
      <h4>{description}</h4>
      <img className="imageMedium" src={imageSource} />
      <p className="projectDescription">
        <b>
          {authors}. {date}. <i>{journal}</i>.
        </b>
      </p>
      <p className="projectDescription">{title}</p>

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
          Full text
        </Button>
      </a>
    </div>
  );
};
export default PaperProject;
