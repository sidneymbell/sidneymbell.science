import Button from "@mui/material/Button";

type IntroProps = {
  contentWidth?: number;
  contentHeight?: number;
};

export const Intro = (props: IntroProps) => {
  let { contentWidth, contentHeight } = props;
  contentWidth ??= 800;
  contentHeight ??= 400;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: contentWidth,
        height: contentHeight,
        position: "relative",
        margin: "auto",
        marginTop: 50,
      }}
    >
      <img className="imageSmallRound" src="src/images/sidney.jpeg" />
      <p style={{ fontSize: 18, width: contentWidth - 200 }}>
        Hello! I’m a computational biologist excited about empowering fellow
        scientists to explore and understand their data through software.
        Expertise in information design, data viz, virology and genomic
        epidemiology. Committed to open science & capacity building.
        <br />
        <a
          href="mailto:sidneymbell+hello@gmail.com"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginTop: 2 }}
          >
            Get in Touch
          </Button>
        </a>
      </p>
    </div>
  );
};

export default Intro;
