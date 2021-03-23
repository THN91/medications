import React from "react";
import "./config/theme.config.scss";
import { Header } from "./components/Header";

const App: React.FC = () => {
  // const [theme, setTheme] = useState("light");

  return (
    <div data-component="App" className="light">
      <Header />
    </div>
  );
};

export default App;
