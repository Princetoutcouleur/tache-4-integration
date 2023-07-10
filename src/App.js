import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import NavBar from './components/navbar';
import Banner from './components/banner';
import Content from './components/content';

function App() {
  return (
    <div>
      <div id="home" className="vh-100">
        <NavBar />
        <Banner />
      </div>

      <Content />
    </div>
  );
}

export default App;
