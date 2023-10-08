/* eslint-disable react-hooks/exhaustive-deps */
import LeftBanner from "./LeftBanner";
import * as React from "react";
import { Client, Databases } from "appwrite";

const Banner = () => {
  const [banner, setBanner] = React.useState([]);

  const client = new Client()
    .setEndpoint(import.meta.env.VITE_PUBLIC_APPWRITE_URL)
    .setProject(import.meta.env.VITE_PUBLIC_APPWRITE_PROJECT_ID);

  const databases = new Databases(client);

  async function init() {
    const response = await databases.listDocuments(
      import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE,
      import.meta.env.VITE_PUBLIC_APPWRITE_BANNER_COLLECTION
    );
    setBanner(response.documents);
    // console.log(response.documents);
  }

  React.useEffect(() => {
    init();
  }, []);

  return (
    <section id="home" className="w-full relative font-titleFont ">
      {banner?.map((item) => (
        <div
          id="home"
          className="w-full relative font-titleFont "
          key={item.$id}
        >
          <img src={item.background} />
          <div className="px-[26rem] absolute top-[10rem]">
            <LeftBanner />
          </div>
          <svg
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1428.75 62.05"
            // style={{backgroundColor:'red'}}
            fill="white"
            className="w-full absolute  bottom-[-2px] left-0"
          >
            <path
              className="cls-1"
              d="M-114,132s185,44,434,18c0,0,304-41,551,0,0,0,290.5,57.25,443.75.13v43.69H-114Z"
              transform="translate(114 -131.78)"
            ></path>
          </svg>
        </div>
      ))}
    </section>
  );
};

export default Banner;
