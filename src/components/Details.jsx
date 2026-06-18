import React from "react";
function Details() {
  return (
    <>
      <div className="self-details">
        <button className="btn">
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built for Digital Heroes
          </a>
        </button>
        <p>Made by Ashutosh prajapati</p>
        <p>
          Email:{" "}
          <a
            className="text-decoration-none"
            href="mailto:prajapatiashutosh422@gmail.com"
          >
            prajapatiashutosh422@gmail.com
          </a>
        </p>
      </div>
    </>
  );
}

export default Details;
