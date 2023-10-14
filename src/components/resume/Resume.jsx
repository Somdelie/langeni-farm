import React from "react";
import { Client, Databases } from "appwrite";
import { Divider } from "@mui/material";

const Resume = () => {
  const [projects, setAbout] = React.useState([]);

  const client = new Client()
    .setEndpoint(import.meta.env.VITE_PUBLIC_APPWRITE_URL)
    .setProject(import.meta.env.VITE_PUBLIC_APPWRITE_PROJECT_ID);

  const databases = new Databases(client);

  async function init() {
    const response = await databases.listDocuments(
      import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE,
      import.meta.env.VITE_PUBLIC_APPWRITE_PROJECT_CARD_COLLECTION
    );
    setAbout(response.documents);
    // console.log(response.documents);
  }

  React.useEffect(() => {
    init();
  }, []);

  return (
    <section id="resume" className="w-full relative py-[30px]">
      {projects?.map((project) => (
        <div key={project.$id}>
          <h1 className="mdl:text-[38px] text-[34px] text-center relative px-2 expText mb-10 max-w-screen-xl mx-auto">
            {project.heading}
          </h1>

          <div className="grid gap-4 ourProducts ">
            <div className="flex gap-14 text-gray-600 p-[16px] pcard">
              <div className="item-image flex-1">
                <img
                  src={project.imageUrl}
                  className="w-full h-full"
                  alt={project.title}
                />
              </div>
              <div className="card-box flex-1">
                <h3 className="text-gray-600 mdl:text-[28px] text-[18px]">
                  {project.subHeading}
                </h3>
                <p className="paragraph2 text-[16px]">{project.description}</p>
              </div>
            </div>
          </div>

          {/* <div className=" div mt-10">
            <svg
              className="svg-2 bg-[#88d4f2]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1428 94.61"
              fill="white"
            >
              <g id="Layer_3" data-name="Layer 3">
                <path
                  className="cls-1"
                  d="M-83,10"
                  transform="translate(83 33)"
                ></path>
                <path
                  className="cls-2"
                  d="M986.33,46.5s132.5-37,318,0C1304.33,46.5,1200.83,80.5,986.33,46.5Z"
                  transform="translate(83 33)"
                ></path>
              </g>
              <g id="Layer_4" data-name="Layer 4">
                <path
                  className="cls-2"
                  d="M-83,10S127,65.11,394,30.06,986.33,46.5,986.33,46.5,1218,83,1345,38V-33H-83Z"
                  transform="translate(83 33)"
                ></path>
              </g>
            </svg>
            <div className="container-fluid">
              <div className="">
                <div className="bg-[#88d4f2] content-fluid text-white text-[24px] h-[200px]">
                  <div className="fluid-card">
                    <div className=" p-3">
                      <div className="card-text">
                        <h5 className="count text-[48px]">284</h5>
                        <span className="text-[28px]">Months</span>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className=" p-3">
                      <div className="card-text">
                        <h5 className="count text-[48px]">163</h5>
                        <span className=" text-[28px]">Ideas</span>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className=" p-3">
                      <div className="card-text">
                        <h5 className="count text-[48px]">853</h5>
                        <span className="text-[28px]">Hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className=" p-3">
                      <div className="card-text">
                        <h5 className="count text-[48px]">734</h5>
                        <span className=" text-[28px]">Programs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="svg-1 bg-[#88d4f2] h-[]"
              id="curve"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1428 130.87"
              fill="white "
            >
              <path
                className="cls-1"
                d="M-83,345V288s158-27,262-22l104,5,138,8,300,21s245,4,281-5c0,0-9-39,33-45,0,0,8-51,58-25,0,0,48-36,61,23,0,0,27,2,28,24,0,0,163-22,163-17v90Z"
                transform="translate(83 -214.13)"
              ></path>
            </svg>
          </div> */}
        </div>
      ))}
      <Divider sx={{marginTop: '30px'}}/>
    </section>
  );
};

export default Resume;
