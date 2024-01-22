import "./App.css";
import { About } from "./components/pages/about/About";
import { LandingPage } from "./components/pages/landing/LandingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
