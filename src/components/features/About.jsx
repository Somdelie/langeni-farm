// Features Data

import Modal from "./Modal";

const About = () => {
  return (
    <section id="features" className="w-full">
      <div className="bg-[#f2f6ff] flex items-center justify-center py-[8rem] sm:flex-wrap lg:flex-nowrap px-[28rem] gap-[80px]">
        <div className="w-1/2 h-full">
          <div className="w-[600px] relative flex flex-col justify-center">
            <div className="about-container absolute left-[-10px] top-0 w-full h-full"></div>
            <img
              className="aboutImg"
              src="https://mobirise.com/extensions/kidsm4/assets/images/children.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-[48px] relative px-2 topText">
            About Happy Kids
          </h1>
          <h1 className="text-[48px] relative px-2  botText mb-10">
            Entertainment
          </h1>
          <p className="paragraph mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui
            enim, pharetra at auctor vitae.
          </p>
          <Modal/>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 mt-[5rem]">
          <div className="w-full xl:px-12 bg-[#fa9db7] h-auto rounded-[40px]  flex flex-col bg-gradient-to-r group transition-colors duration-1000">
            <div className="w-full h-[60%] overflow-hidden rounded-lg">
              <img
                className="w-full h-60 object-contain group-hover:scale-110 duration-300 cursor-pointer"
                src="https://th.bing.com/th/id/R.62b9625e0b02295f0cb121877c0c21a3?rik=CKhhQJjRrO9NeA&riu=http%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f6%2fFarmer-Agriculture-Transparent-PNG.png&ehk=nvVZIdEGpwmInz5WZRsX1kYWE3VLb13YPk7cf%2fSb%2bFs%3d&risl=&pid=ImgRaw&r=0"
                alt="src"
              />
            </div>
            <div className="w-full mt-5 flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-[28px] font-[800] text-white ">
                    Lorem ipsun
                  </h4>
                </div>
                <p className="paragraph mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  dui enim, pharetra at auctor vitae.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full xl:px-12 bg-[#45b3df] h-auto rounded-[40px] flex flex-col bg-gradient-to-r group transition-colors duration-1000">
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
              <img
                className="w-full h-60 object-contain group-hover:scale-110 duration-300 cursor-pointer"
                src="https://th.bing.com/th/id/R.27e5c288eee23f568675ad29a72012aa?rik=KAPvOzGu7GmKeA&pid=ImgRaw&r=0&sres=1&sresct=1"
                alt="src"
              />
            </div>
            <div className="w-full mt-5 flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-[28px] font-[800] text-white ">
                    Lorem ipsun
                  </h4>
                </div>
                <p className="paragraph mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  dui enim, pharetra at auctor vitae.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full xl:px-12 bg-[#ffc85b] h-auto rounded-[40px] flex flex-col bg-gradient-to-r group transition-colors duration-1000">
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
              <img
                className="w-full h-60 object-contain mt-4 group-hover:scale-110 duration-300 cursor-pointer"
                src="https://th.bing.com/th/id/R.12a3af97b988975f54e6f7b94a2545d5?rik=MS24lSACtGZioQ&pid=ImgRaw&r=0"
                alt="src"
              />
            </div>
            <div className="w-full mt-5 flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-[28px] font-[800] text-white ">
                    Lorem ipsun
                  </h4>
                </div>
                <p className="paragraph mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  dui enim, pharetra at auctor vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
