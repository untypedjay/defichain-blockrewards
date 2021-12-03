import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { TokenRewardLaunch } from "./components/TokenRewardLaunch";
import { Overview } from "./components/Overview";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="token-reward-launch" element={<TokenRewardLaunch />} />
        <Route path="*" element={<Overview />} />
      </Routes>
    </Router>
  );
}
