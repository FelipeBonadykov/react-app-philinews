import logo from './logo.svg';
import './App.css';
import {Head, 
    Sections, 
    Carousel, 
    MainField
} from "./modules/Modules";


function App() {
 return (
    <div className="App">
        <Head/>
        <Sections/>
        <Carousel/>
        <MainField/>
    </div>
  );
}

export default App;
