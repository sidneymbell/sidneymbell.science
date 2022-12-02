import Grid from "@mui/material/Unstable_Grid2";
import { ProjectData } from "../d";
import Project from "./project";

type GalleryProps = {
  projects: ProjectData[];
  contentWidth?: number;
  contentHeight?: number;
  imageClassName?: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  columns?: number;
};

export const Gallery = (props: GalleryProps) => {
  // uses MUI Grid to display projects using Project subcomponent

  let {
    contentWidth,
    contentHeight,
    projects,
    xs,
    sm,
    md,
    lg,
    xl,
    imageClassName,
    columns,
  } = props;

  xs ??= 12;
  sm ??= 6;
  md ??= 6;
  lg ??= 6;
  xl ??= 3;
  columns ??= 12;
  contentWidth ??= 1000;
  contentHeight ??= 400;
  imageClassName ??= "imageLargeRound";

  return (
    <div
      style={{
        width: contentWidth,
        margin: "auto",
        paddingTop: 100,
        paddingBottom: 150,
        // border: "1px solid blue",
      }}
    >
      <Grid container columns={columns} rowSpacing={20}>
        {projects.map((project, index) => (
          <Grid
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="start"
          >
            <Project project={project} imageClassName={imageClassName} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Gallery;
