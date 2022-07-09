import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./Views/MainMenu";
import GameBoard from "./Views/GameBoard";
import WinScreen from "./Views/WinScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />}></Route>
        <Route path="/game" element={<GameBoard />}></Route>
        <Route path="/win" element={<WinScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
