import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = () => {
  return (
    // END OF LINE 14 - IF THE LIBRARY STATUS IS ACTIVE, SHOW 'active__library'. OTHERWISE SHOW NOTHING
    <div>
      <h2>Library</h2>
      <div className="library__songs">
        <LibrarySongs />
      </div>
    </div>
  );
};
export default Library;
