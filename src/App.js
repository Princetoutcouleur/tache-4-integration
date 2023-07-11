import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import NavBar from './components/navbar';
import Banner from './components/banner';
import Content from './components/content';
import Testimonials from './components/testimonials';
import Galery from './components/galery';

function App() {
  return (
    <div>
      <div className="home vh-100 mt-5">
        <NavBar />
        <Banner />
      </div>
      <Content />
      <Testimonials />
      <Galery />
    </div>
  );
}

export default App;
