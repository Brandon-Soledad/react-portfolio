
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header"; 
import About from "./pages/about";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
      <div> 
        <Header/>
          <Routes>
            <Route exact strict  path="/" component={Home}/>
            <Route exact strict  path="/About" component={About}/>
            <Route exact strict path="/Work" component={Portfolio}/>
            <Route exact path="*" component={Home} />
          </Routes>
        <Footer/>
      </div> 
    </Router>
  );
}

export default App;