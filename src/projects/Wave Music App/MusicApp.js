import React from "react";
import { useParams } from "react-router-dom";

const MusicApp = () => {
  const { id } = useParams();
  return (
    <div className="test">
      <h1>Hello {id}</h1>
    </div>
  );
};

export default MusicApp;
