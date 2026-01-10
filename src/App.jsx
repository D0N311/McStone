import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import WhyChooseUs from "./pages/WhyChooseUs";
import FabricationServices from "./pages/FabricationServices";
import Galleries from "./pages/Galleries";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route
            path="/fabrication-services"
            element={<FabricationServices />}
          />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
