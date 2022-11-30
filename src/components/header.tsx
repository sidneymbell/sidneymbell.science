import { Helmet } from "react-helmet";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type HeaderProps = { sectionHeight?: number; sectionWidth?: number };

const Header = (props: HeaderProps) => {
  let { sectionHeight, sectionWidth } = props;
  sectionHeight ??= 100;
  sectionWidth ??= 1000;

  return (
    <div
      style={{
        width: sectionWidth,
        height: sectionHeight,
        position: "absolute",
        top: 0,
        left: 0,
        marginLeft: 50,
        marginRight: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1>Sidney M. Bell, PhD</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: 400,
            position: "relative",
            top: 20,
          }}
        >
          <a
            href="http://slides.com/sidneymbell"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <h3>talks</h3>
          </a>
          <a
            href="https://scholar.google.com/citations?hl=en&user=za4r4uQAAAAJ"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <h3>papers</h3>
          </a>
          <a
            href="https://github.com/sidneymbell"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <h3>code</h3>
          </a>
          <a
            href="https://twitter.com/sidneymbell"
            style={{ textDecoration: "none", position: "relative", top: 20 }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/sidneymbell/"
            style={{ textDecoration: "none", position: "relative", top: 20 }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`Sidney M. Bell, PhD`}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </div>
  );
};

export default Header;
