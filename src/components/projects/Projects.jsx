/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import * as React from "react";
import { Client, Databases } from "appwrite";

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);


  const [images, setImages] = React.useState([]);

  const client = new Client()
    .setEndpoint(import.meta.env.VITE_PUBLIC_APPWRITE_URL)
    .setProject(import.meta.env.VITE_PUBLIC_APPWRITE_PROJECT_ID);

  const databases = new Databases(client);

  async function init() {
    const response = await databases.listDocuments(
      import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE,
      import.meta.env.VITE_PUBLIC_APPWRITE_PRODUCTSIMG_COLLECTION
      // import.meta.env.VITE_PUBLIC_APPWRITE_PRODUCTSVEDIOS_COLLECTION
    );
    setImages(response.documents);
    console.log(response.documents);
  }

  React.useEffect(() => {
    init();
  }, []);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <section id="projects" className="w-full py-20 relative min-h-[70vh]">
      <h1></h1>
      <h1 className="text-[48px] text-center relative px-2 expText mb-10 max-w-screen-xl mx-auto">
        Our Products
      </h1>
      <div className="flex overflow-x-auto gap-3 py-2 max-h-[400px]">
        {images?.map((item, index) => (
          <div key={index} className="w-[500px] h-[300px]">
              <img
                className="border-[#fa9db7] pImg border-[3px] p-2 flex-1 cursor-pointer rounded-[10px] object-contain w-full h-full"
                src={item.imageUrl}
                onClick={() => openImageViewer(index)}
                width="300"
                key={index}
                style={{ margin: "2px" }}
                alt=""
              />
      </div>
            ))}
    
       
      </div>

            <div>
              {isViewerOpen && (
                <div className="images absolute top-[30%]">
                  <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    disableScroll={true}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                  />
                </div>
              )}
            </div>
      <div className="flex mt-8 overflow-y-auto">
        <video
          className="w-[400px]"
          src="https://res.cloudinary.com/cautious/video/upload/v1696333747/video_720p_1_ebuvfu.mp4"
          autoPlay="true"
          width="600"
          height="300"
          controls="controls"
          playsInline
          loop
          muted
        />
        <video
          className="w-[400px]"
          src="https://res.cloudinary.com/cautious/video/upload/v1696333747/video_720p_1_ebuvfu.mp4"
          autoPlay="true"
          width="600"
          height="300"
          controls="controls"
          playsInline
          loop
          muted
        />
        <video
          className="w-[400px]"
          src="https://res.cloudinary.com/cautious/video/upload/v1696333747/video_720p_1_ebuvfu.mp4"
          autoPlay="true"
          width="600"
          height="300"
          controls="controls"
          playsInline
          loop
          muted
        />
        <video
          className="w-[400px]"
          src="https://res.cloudinary.com/cautious/video/upload/v1696333747/video_720p_1_ebuvfu.mp4"
          autoPlay="true"
          width="600"
          height="300"
          controls="controls"
          playsInline
          loop
          muted
        />
      </div>
    </section>
  );
};

export default Projects;
