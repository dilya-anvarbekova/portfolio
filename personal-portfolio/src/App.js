import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from './components/Banner';
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Resume />
    </div>
  );
}

export default App;
