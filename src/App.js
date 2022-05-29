import { Routes, Route } from "react-router-dom";
import NavBar from "./components/routes/navigation/navigation-bar-component";
import Home from "./components/routes/home/home-route";

// import Shop from
// import Contact from
// import SignIn from

import "./App-Styles/App.css"

const Shop = () => {
  return <h1>Hello</h1>
  };

const App = () => {
  return (
    <Routes>
      <Route path="/" element = { <NavBar/> } >
        <Route index element = { <Home/> }/>
        <Route path="shop" element = { <Shop/> }/>
      </Route>
    </Routes>
    );
}

export default App;