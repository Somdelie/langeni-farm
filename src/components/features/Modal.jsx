/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Divider } from "@mui/material";
import { Client, Databases } from "appwrite";
import { MdLocationOn } from "react-icons/md";
import EmailIcon from '@mui/icons-material/Email';
import { FiPhoneCall } from "react-icons/fi";
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
        className="bg-[#ffc85b] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 px-8 py-4 rounded-[40px] text-white hover:bg-blue-500 relative btn2"
      >
        Read More
      </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ backgroundColor: "gray", position: "fixed", width: '100%', padding:2 }}>
       
        
           <div className="aboutUs-container1">
         
             <h3 className="text tracking-[.5rem]">
              LANGENI <span className="text-[#fa9db7]">FARMING</span>
            </h3>
      
          
            <div className="flex items-center justify-center gap-4 aboutUs text-[20px]">
              <p className='flex items-center gap-1'><EmailIcon />email@gmail.com</p>
              <p className='flex items-center gap-1'><FiPhoneCall/>0727077541</p>
              <p className='flex items-center gap-1'><MdLocationOn/>57 jolex road kew jhb</p>
            </div>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                backgroundColor: "#fa9db7",
                width: '40px',
                height: '40px',
                 marginRight: '20px',
                 marginTop: '10px',
                "&:hover": {
                  backgroundColor: "#141518",
                 
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            </div>
           <div className="aboutUs-container">
           <div className="top flex items-center justify-between">
             <h3 className="text tracking-[.5rem]">
              LANGENI <span className="text-[#fa9db7] mr-4">FARMING</span>
            </h3>
           <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                backgroundColor: "#fa9db7",
                 marginRight: '20px',
                 marginTop: '10px',
                "&:hover": {
                  backgroundColor: "#141518",
                 
                },
              }}
            >
              <CloseIcon />
            </IconButton>
           </div>
          
            <div className="flex items-center w-full gap-4 aboutUs text-sm">
              <p>email@gmail.com</p>
              <p>0727077541</p>
              <p>57 jolex road kew jhb</p>
            </div>
        
            </div>
  
        </AppBar>
        <div className="py-[9rem]">
          {about?.map((item) => (
            <div key={item.$id}>
              <h4 className="text-center text-[28px] mb-4">{item.heading}</h4>

              <Divider />
              <div className="aboutDiv mt-6">
                <p className="paragraph aboutP">
                  <span className="text-[#fa9db7] text-[24px] font-bold">
                    Langeni Farm
                  </span>{" "}
                  {item.paragraph1}
                </p>

                <div className="flex items-center flex-wrap">
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
                  <p className="paragraph aboutP font-[700]">{item.paragraph2}</p>
                </div>
                <p className="paragraph aboutP">{item.paragraph2}</p>
              </div>
            </div>
          ))}
        </div>
      </Dialog>
    </div>
  );
}
