import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slide from "@mui/material/Slide";
import Close from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import { useAuth } from "../../lib/AuthContext";




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


export default function Login() {
  const [open, setOpen] = React.useState(false);
  const { loginUser } = useAuth();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    toast.error(
        'Canceled!'
        );
  };

  const loginForm = React.useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value


    const userInfo = {email, password}
    loginUser(userInfo)
        setOpen(false);
  };

  

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="bg-[#141518] py-1 px-4 rounded-md hover:bg-[#1a1b20] text-[#9ca3af] text-[18px]"
      >
        Login
      </button>
      <ToastContainer />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="flex justify-between items-center p-5 ">
        <span className=" text-2xl font-bold  text-[#141518]">
                    Sign in to your account
                </span>
                <span className="bg-red-600 p-1 rounded-full cursor-pointer text-white shadow-lg">
          <Close onClick={handleClose}/>
          </span>
        </div>
        <Divider/>
        <DialogContent>
        <>
        <form ref={loginForm} onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
           
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2 ">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Enter Your Email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    required
                  />
                </div>
              </div>
              <div>
                <button
                // onClick={handleClose}
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-[#fa9db7] border-transparent"
              >
                Login
              </button>
              </div>
            </div>
          </form>
            </>
        </DialogContent>
      </Dialog>
    </div>
  );
}
