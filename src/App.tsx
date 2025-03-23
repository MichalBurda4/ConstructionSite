import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import AdminPanelHome from "./AdminPages/AdminPanelHome";
import AdminPanelAboutMe from "./AdminPages/AdminPanelAboutMe";
import AdminPanelContact from "./AdminPages/AdminPanelContact";
import AdminPanelServices from "./AdminPages/AdminPanelServices";
import Login from "./AdminPages/Login"

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/AboutMe" element={<AboutMe />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Admin Panel Routes */}
                        <Route path="/admin" element={<Login />} />
                        <Route path="/admin/home" element={<AdminPanelHome />} />
                        <Route path="/admin/aboutme" element={<AdminPanelAboutMe />} />
                        <Route path="/admin/contact" element={<AdminPanelContact />} />
                        <Route path="/admin/services" element={<AdminPanelServices />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
