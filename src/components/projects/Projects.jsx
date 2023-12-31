/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Client, Databases } from "appwrite";

const Projects = () => {
  const [vedios, setVedios] = React.useState([])
  const [heading, setHeading] = React.useState([])




  const client = new Client()
    .setEndpoint(import.meta.env.VITE_PUBLIC_APPWRITE_URL)
    .setProject(import.meta.env.VITE_PUBLIC_APPWRITE_PROJECT_ID);

  const databases = new Databases(client);

  async function init() {
    const response = await databases.listDocuments(
      import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE,
      // import.meta.env.VITE_PUBLIC_APPWRITE_PRODUCTSIMG_COLLECTION
      import.meta.env.VITE_PUBLIC_APPWRITE_PRODUCTSVEDIOS_COLLECTION
    );
    setVedios(response.documents);

  }

  React.useEffect(() => {
    init();
  }, []);

  async function header() {
    const response = await databases.listDocuments(
      import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE,
      // import.meta.env.VITE_PUBLIC_APPWRITE_PRODUCTSIMG_COLLECTION
      import.meta.env.VITE_PUBLIC_APPWRITE_PRODUCTS_COLLECTION
    );
    setHeading(response.documents);

  }

  React.useEffect(() => {
    header();
  }, []);

 

  return (
    <section id="projects" className="w-full relative ">
      {heading?.map((title) =>(
        <h1 className="mdl:text-[38px] text-[34px]  text-center relative px-2 mb-10 max-w-screen-xl mx-auto" key={title.$id}>
        {title.title}
      </h1>
      ))}
    


      <div className="flex mt-8 overflow-y-auto">
      {vedios?.map((vedio) => (
        <video key={vedio.$id}
          className="w-[400px]"
          src={vedio.vedio}
          autoPlay={true}
          width="600"
          height="300"
          controls="controls"
          playsInline
          loop
          muted
        />
  ))}

      </div>
    </section>
  );
};

export default Projects;



