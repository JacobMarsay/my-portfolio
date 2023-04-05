
import { Routes, Route} from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import MusicPlayer from "./Pages/MusicPlayer";


const MusicApp = () => {
  console.log('music-app');
  return (
    <Routes>
        <Route path="/" element={<MusicPlayer />} />
    </Routes>

  );
};

export default MusicApp;
