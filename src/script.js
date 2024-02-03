import React from "react";
import ReactDOM from "react-dom/client"; 
import { Home } from "./Componets/Home"
import Contanct  from "./Componets/Contanct";
import  AboutUs  from "./Componets/AboutUs";
import Services  from "./Componets/Services"
import {Routes,Route ,HashRouter} from "react-router-dom";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import Sidenav from "./utlity/external/SideNav";
import Projectshow from "./Componets/Projectshow";


const AppLayout = () => {   
    return (
       
        <HashRouter>
            <div className="right-0 fixed sm:hidden ">{<Sidenav />}</div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contanct />} />
                <Route path="/about" element={<AboutUs />} />
                {/* <Route path="/HireMe" element={<HireMe />} /> */}
            </Routes>
            
           <Footer  />
        
        </HashRouter>
            
           
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
 