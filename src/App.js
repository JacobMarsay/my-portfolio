import { Route, Routes, useParams } from "react-router";

import Dashboard from "./pages/Dashboard";
import ProjectSwitch from "./util/project-switch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects/:title/:id/*" element={<ProjectSwitch />} />
      </Routes>
    </div>
  );
}

export default App;
