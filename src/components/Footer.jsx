import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { background: `linear-gradient(157deg,#4484ce, #1ad7c0)` };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center text-light">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/RutvikJ77"
          aria-label="My GitHub"
        >
          Rutvik J
        </a>{" "}
        using <i className="fab fa-react" />
        {/* <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p> */}
      </Container>
    </footer>
  );
};

export default Footer;
