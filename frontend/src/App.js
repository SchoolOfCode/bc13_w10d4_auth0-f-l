import LoginButton from "./components/LoginButton";

import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";
import Profile from "./components/Profile";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated ? <LoginButton /> : <Profile />}
      </header>
    </div>
  );
}

export default App;
