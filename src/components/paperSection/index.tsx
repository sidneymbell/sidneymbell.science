import { papers } from "../../data/paperProjects";
import PaperProject from "./paperProject";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

type PaperSectionProps = {
  contentWidth?: number;
  contentHeight?: number;
};

export const PaperSection = (props: PaperSectionProps) => {
  let { contentWidth, contentHeight } = props;
  contentWidth ??= 1000;
  contentHeight ??= 400;

  return (
    <div
      style={{
        width: contentWidth,
        margin: "auto",
        // border: "1px solid blue",
      }}
    >
      <Grid container rowSpacing={1}>
        {papers.map((paper, index) => (
          <Grid
            xs={12}
            sm={4}
            xl={4}
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="start"
          >
            <PaperProject paper={paper} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default PaperSection;
