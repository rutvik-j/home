import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-5 pb-3 text-center">👀 {heading}</h2>
      <p className="lead text-center pb-3">
        {message}<a href={`mailto:${email}`}  style={{ color: "white" , fontWeight:"bold"}}>{email}</a>
      </p>
    </>
  );
};

export default GetInTouch;
