import React from "react";
import { Spin } from "antd";

const Spinner = () => {
  return (
    <div
      data-testid="spinny-thingy"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default Spinner;
