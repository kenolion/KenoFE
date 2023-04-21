import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import NftGen from "./pages/NftGen";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { DFKHome } from "./pages/DFK/DFKHome";
import AddPostComponent from "./pages/component/AddPostComponent";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home info="info" />} />
        <Route path="/addPost" element={<AddPostComponent />} />
        <Route path="/About" element={<About />} />
        <Route path="/nft-gen" element={<NftGen />} />
        <Route path="/dfk" element={<DFKHome />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
