import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import About from "./components/features/About";

import Projects from "./components/projects/Projects";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import { AuthProvider } from "./lib/AuthContext";


function App() {
  return (
    <AuthProvider>
    <div className="w-full h-auto bg-bodyColor text-lightText">
  
        <Navbar />
        <Banner />
        <About />
      <div className="  max-w-screen-xl mx-auto">

        <Projects />
      </div>
        <Resume />
        <Testimonial />
      <div className="  max-w-screen-xl mx-auto">
        <Contact />
      </div>
 
        <FooterBottom />

    </div>
    </AuthProvider>
  );
}

export default App;
