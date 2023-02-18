import React from "react";
import { useParams } from "react-router-dom";

const CaptureSite = () => {
  const { id } = useParams();
  return (
    <div className="test">
      <h1>Hello I am {id}</h1>
    </div>
  );
};

export default CaptureSite;
