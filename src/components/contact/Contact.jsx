import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../lib/AuthContext";
import { databasses } from "../../appwrite/config";
import { ID } from "appwrite";



const Contact = () => {

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { user } = useAuth();


  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Please give your Email!");
    } else if (!emailValidation(email)) {
      toast.error("Give a valid Email!");
    } else if (phone === "") {
      toast.error(" Plese enter your phone!");
    } else if (subject === "") {
      toast.error("Plese give your Subject!");
    } else if (message === "") {
      toast.error("Message is required!");
    } else {
      let payload = {
        username: user.name,
        email,
        subject,
        message,
      };

      let promise = await databasses.createDocument(
        import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE,
        import.meta.env.VITE_PUBLIC_APPWRITE_MESSAGES_COLLECTION,
        ID.unique(),
        payload
      );

      toast.success(
        `Thank you dear ${user.name}, Your Messages has been sent Successfully!`
      );
      setEmail("");
      setSubject("");
      setMessage("");
      setPhone("");
      console.log(promise);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();

    toast.error("Please login to continue!");
  };
  return (
    <section id="contact" className="w-full ">
      <h1 className="text-[48px] text-center relative px-2 expText mb-10 max-w-screen-xl mx-auto">
        CONTACT US
      </h1>

      <div className="flex w-full items-center contactUs">
        <div className="flex-1 map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.314317516562!2d28.098627376135592!3d-26.121292677127737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950d5d54425af1%3A0x5331da76173dc62f!2s50%20Jolex%20Rd%2C%20Bramley%20View%2C%20Johannesburg%2C%202090!5e0!3m2!1sen!2sza!4v1696304146333!5m2!1sen!2sza"
            width="650"
            height="680"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-1 map1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.314317516562!2d28.098627376135592!3d-26.121292677127737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950d5d54425af1%3A0x5331da76173dc62f!2s50%20Jolex%20Rd%2C%20Bramley%20View%2C%20Johannesburg%2C%202090!5e0!3m2!1sen!2sza!4v1696304146333!5m2!1sen!2sza"
            width="350"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex justify-center items-center text-center"></div>
        <ToastContainer />

        <div className="flex-1 ">
          <form className="">
            {/* <p className=" text-gray-600 uppercase tracking-wide">Your name</p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
            /> */}

            <div className="">
              <p className=" text-gray-600 uppercase tracking-wide">Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
              />
            </div>

            <div className="">
              <p className=" text-gray-600 uppercase tracking-wide">
                Phone Number
              </p>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="number"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 uppercase tracking-wide">Subject</p>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 uppercase tracking-wide">Message</p>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <div className="w-full">
              {!user ? (
                <button
                  onClick={handleLogin}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-[#fa9db7] border-transparent"
                >
                  Login to send message
                </button>
              ) : (
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-[#fa9db7] border-transparent"
                >
                  Send Message
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
