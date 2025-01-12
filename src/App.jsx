import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { NavBar } from "./pages/NavBar";
import { SCarProvider } from "./context/SCarProvider";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";

function App() {

  return (
    <>
      <SCarProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </SCarProvider>
    </>
  )
}

export default App
