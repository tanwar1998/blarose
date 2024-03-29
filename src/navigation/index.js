import React from 'react';
import {
  BrowserRouter,
//   HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import AboutUs from "../pages/aboutUS/index.jsx";
import Client from "../pages/Client/index.jsx";
import Gallery from "../pages/Gallery/index.jsx";
import Navbar from '../specificComponents/navbar/index.jsx';
import FooterContainer from '../specificComponents/footer/index.jsx';
import ToastifyComponent from '../components/Toastify';

export default function App() {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="about-us" element={<AboutUs component = 'about-us'/>} />
                <Route path="our-team" element={<AboutUs component = 'our-team'/>} />
                <Route path="previous-shows" element={<AboutUs component = 'previous-shows'/>} />
                <Route path="contact-us" element={<AboutUs component = 'contact-us'/>} />
                <Route path="client" element={<Client/>} />
                <Route path="gallery" element={<Gallery/>} />
            </Routes>
            <ToastifyComponent/>
            <FooterContainer/>
        </BrowserRouter>
    )
};