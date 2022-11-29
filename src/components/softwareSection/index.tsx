import { softwareProjects } from "../../data/softwareProjects";
import SoftwareProject from "./softwareProject";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

type SoftwareSectionProps = {
  contentWidth?: number;
  contentHeight?: number;
};

export const SoftwareSection = (props: SoftwareSectionProps) => {
  let { contentWidth, contentHeight } = props;
  contentWidth ??= 1000;
  contentHeight ??= 400;

  return (
    <div
      style={{
        width: contentWidth,
        margin: "auto",
        paddingTop: 50,
        // border: "1px solid blue",
      }}
    >
      <Grid container>
        {softwareProjects.map((project, index) => (
          <Grid
            xs={12}
            sm={6}
            xl={3}
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="start"
          >
            <SoftwareProject project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default SoftwareSection;
