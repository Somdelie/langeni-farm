/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { Client, Databases } from "appwrite";

const LeftBanner = () => {
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
    console.log(response.documents);
  }

  React.useEffect(() => {
    init();
  }, []);

  return (
    <div className="w-full gap-20b">
      {banner?.map((item) => (
        <div className="flex flex-col gap-5" key={item.$id}>
          <h3 className="mb-4">
            {" "}
            <span id="sub-text" className=" bg-[#79C8E8]">
              {item.subheading}
            </span>
          </h3>
          <h1 className="">{item.Heading}</h1>
          <h2 className="text-4xl font-bold text-green-600"></h2>
          <p className="paragraph">{item.description}.</p>
        </div>
      ))}
    </div>
  );
};

export default LeftBanner;
