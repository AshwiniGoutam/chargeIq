import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/page";
import PrivacyPolicy from "./pages/privacy-policy/page";
import TermsCondition from "./pages/terms-condition/page";
import MobileApp from "./pages/mobile-app/page";
import CsmsPlatform from "./pages/csms-platform/page";
import ScrollToTop from "./components/scroll";

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* This will render Home for the root path */}
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/csms-platform" element={<CsmsPlatform />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />

          {/* Catch-all route that renders Home for any invalid path */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
