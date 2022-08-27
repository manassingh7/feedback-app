import loader from "../assets/loading.gif";

import React from "react";

function Loader() {
  return (
    <img
      src={loader}
      alt='Loading....'
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default Loader;
