import logo from './logo.svg';
import './App.css';
import LoginButton from './Components/LoginButton/index.js';
import LogoutButton from './Components/LogoutButton';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
     <LoginButton />
     <Profile />
     <LogoutButton />
    </div>
  );
}

export default App;
