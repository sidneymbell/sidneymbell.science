import "./App.css";
import Header from "./components/header";
import { useWindowSize } from "@react-hook/window-size";
import Intro from "./components/intro";
import { Divider } from "@mui/material";
import { softwareProjects } from "./data/softwareProjects";
import { papers } from "./data/paperProjects";
import Gallery from "./components/gallery";
import { experience } from "./data/experience";

export const App = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  const contentWidth = Math.max(windowWidth * 0.66, 800);

  return (
    <div className="App">
      <Header sectionWidth={windowWidth - 100} sectionHeight={100} />
      <div
        style={{
          position: "relative",
          margin: "auto",
          width: contentWidth,
        }}
      >
        <Intro contentWidth={contentWidth} contentHeight={200} />
        <Divider variant="middle" />
        <h2 style={{ position: "absolute", left: 50 }}>
          Open-source software: data exploration & bioinformatics
        </h2>
        <Gallery contentWidth={contentWidth} projects={softwareProjects} />
        <Divider variant="middle" />
        <h2 style={{ position: "absolute", left: 50 }}>
          Selected publications
        </h2>
        <Gallery contentWidth={contentWidth} projects={papers} lg={4} />
        <Divider variant="middle" />
        <h2 style={{ position: "absolute", left: 50 }}>
          Experience & Training
        </h2>
        <Gallery
          contentWidth={contentWidth}
          projects={experience}
          imageClassName={"imageSmallRoundBorderless"}
          columns={5}
          xs={5}
          sm={1}
          md={1}
          lg={1}
          xl={1}
        />
      </div>
    </div>
  );
};

export default App;
