/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Client, Databases } from "appwrite";

const Projects = () => {
  const [vedios, setVedios] = React.useState([])




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
    console.log(response.documents);
  }

  React.useEffect(() => {
    init();
  }, []);

 

  return (
    <section id="projects" className="w-full py-20 relative min-h-[70vh]">
      <h1></h1>
      <h1 className="text-[48px] text-center relative px-2 expText mb-10 max-w-screen-xl mx-auto">
        Our Products
      </h1>


      <div className="flex mt-8 overflow-y-auto">
      {vedios?.map((vedio) => (
        <video key={vedio.$id}
          className="w-[400px]"
          src={vedio.vedio}
          autoPlay="true"
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



