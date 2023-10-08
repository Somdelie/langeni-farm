/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Divider } from "@mui/material";
import { Client, Databases } from "appwrite";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const [about, setAbout] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    console.log(response.documents);
  }

  React.useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="bg-[#ffc85b] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 w-1/3 py-4 rounded-[40px] text-white hover:bg-blue-500 relative btn2"
      >
        Read More
      </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ backgroundColor: "gray", position: "fixed" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <h3 className="text tracking-[.5rem]">
              LANGENI <span className="text-[#fa9db7]">FARMING</span>
            </h3>
            <div className="flex items-center gap-4 ">
              <span className="text-[24px]">get in touch ||</span>
              <p>email@gmail.com</p>
              <p>0727077541</p>
              <p>57 jolex road kew jhb</p>
            </div>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                backgroundColor: "#fa9db7",
                "&:hover": {
                  backgroundColor: "#141518",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="py-[9rem]">
          {about?.map((item) => (
            <div key={item.$id}>
              <h4 className="text-center text-[28px] mb-4">{item.heading}</h4>

              <Divider />
              <div className="px-20 mt-6">
                <p className="paragraph ">
                  <span className="text-[#fa9db7] text-[24px] font-bold">
                    Langeni Farm
                  </span>{" "}
                  {item.paragraph1}
                </p>

                <div className="flex items-center">
                  <video
                    className="w-[400px]"
                    src={item.vedio}
                    autoPlay="true"
                    width="600"
                    height="300"
                    controls="controls"
                    playsInline
                    loop
                    muted
                  />
                  <p className="paragraph font-[700]">{item.paragraph2}</p>
                </div>
                <p className="paragraph">{item.paragraph2}</p>
              </div>
            </div>
          ))}
        </div>
      </Dialog>
    </div>
  );
}
