/* eslint-disable react-hooks/exhaustive-deps */
// Features Data
import { Client, Databases } from "appwrite";
import Modal from "./Modal";
import React from "react";
import Slides from "./Slides";

const About = () => {
  const [about, setAbout] = React.useState([]);

  const client = new Client()
    .setEndpoint(import.meta.env.VITE_PUBLIC_APPWRITE_URL)
    .setProject(import.meta.env.VITE_PUBLIC_APPWRITE_PROJECT_ID);

  const databases = new Databases(client);

  async function init() {
    const response = await databases.listDocuments(
      import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE,
      import.meta.env.VITE_PUBLIC_APPWRITE_ABOUT_COLLECTION
    );
    setAbout(response.documents);
    // console.log(response.documents);
  }

  React.useEffect(() => {
    init();
  }, []);

  return (
    <section id="features" className="w-full bg-[#f2f6ff] py-9">
      {about?.map((item) => (
        <div key={item.$id} >
          <div className=" h-auto aboutContent mdl:px-[15rem] mdl:py-6">
              <div className=" relative flex flex-col justify-center ImgC">
                <div className="about-container absolute left-[-10px] top-0 w-full h-full"></div>
                <img
                  className="aboutImg"
                  src={item.image}
                  alt=""
                />
            </div>
            <div className="aboutC h-full ">
              <h1 className="text-[48px] relative px-2 topText">
                {item.Heading}
              </h1>
              {/* <h1 className="text-[48px] sm:text-[28px] relative px-2  botText mb-10">
                {item.subheading}
              </h1> */}
              <p className="aboutP mb-10">
               {item.aboutDesc}
              </p>
              <Modal />
              {/* <Divider/> */}
            </div>
          </div>
         {/* <List/> */}
          <Slides />
        
          </div>
 
      ))}
    </section>
  );
};

export default About;
