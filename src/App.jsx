import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Landing from "./components/LandingPage";

const App = () => {
  const [renderHome, setRenderHome] = useState(false);

  return (
    <>
      {!renderHome ? (
        <Landing setRenderHome={setRenderHome} />
      ) : (
        <Dashboard setRenderHome={setRenderHome} />
      )}
    </>
  );
};

export default App;
