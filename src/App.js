import { Routes, Route } from "react-router-dom";
import NavBar from "./components/routes/navigation/navigation-bar-component";
import Home from "./components/routes/home/home-route";
import SignIn from "./components/routes/sign-in/sign-in-component";

// import Shop from
// import Contact from
// import SignIn from

import "./App-Styles/index.css"

const Shop = () => {
  return <h1>Hello</h1>
  };

const App = () => {
  return (
    <Routes>
      <Route path="/" element = { <NavBar/> } >
        <Route index element = { <Home/> }/>
        <Route path="shop" element = { <Shop/> }/>
        <Route path="sign-in" element = { <SignIn/> }/>
      </Route>
    </Routes>
    );
}

export default App;