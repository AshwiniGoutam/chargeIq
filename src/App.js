import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/page";

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
