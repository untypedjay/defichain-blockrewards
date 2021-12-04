import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { BlockView } from "./components/BlockView";
import { Overview } from "./components/Overview";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blocks/:blockNr" element={<BlockView />} />
        <Route path="*" element={<Overview />} />
      </Routes>
    </Router>
  );
}
