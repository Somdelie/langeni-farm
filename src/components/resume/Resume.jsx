
const ourProducts = [
  {
    id: '1',
    title: 'Lorem ipsum',
    disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitdo ',
    imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-tomato-in-bowlvegetables-tomato-941524727356xeyyh.png'
  },
  {
    id: '2',
    title: 'Lorem ipsum',
    disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitdo ',
    imgUrl: 'https://th.bing.com/th/id/R.e48756d6964b83d48de0ce89c048bb73?rik=hqTMPqmGnThjTg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fspinach%2fspinach_PNG11.png&ehk=nGJuv09g8VeJp3uIFEdqJCJmIWx5USi3CfxHs90d4CI%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: '3',
    title: 'Lorem ipsum',
    disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitdo ',
    imgUrl: 'https://myfamousmeats.com/wp-content/uploads/2021/07/LIve-450x450.png?x87150'
  },
]


const Resume = () => {


  return (
    <section id="resume" className="w-full py-20 relative min-h-[70vh]">
      <h1 className="text-[48px] text-center relative px-2 expText mb-10 max-w-screen-xl mx-auto">
        Our Projects
      </h1>

      <div className="grid mt-[8rem] gap-4 ourProducts ">

{ourProducts?.map((item)=>(
  <div className="flex gap-14 text-gray-600 p-[16px] pcard" key={item.id} >
                <div className="item-image flex-1">
                  <img src={item.imgUrl} className="w-full h-full" alt={item.title}/>
                </div>
                <div className="card-box flex-1">
                    <h3 className="text-[#12265a] text-[28px]">
                      Lorem ipsum
                    </h3>
                    <p className="paragraph2 text-[16px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elitdo </p>
                </div>
            </div>
))}
           

         


   

     

        </div>

      <div className=" div mt-10">
      <svg
        className="svg-2 bg-[#88d4f2]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1428 94.61"
        fill='white'
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
                  <h5 className="count text-[48px]">
                    284
                  </h5>
                  <span className="text-[28px]">
                    Months
                  </span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className=" p-3">
                <div className="card-text">
                  <h5 className="count text-[48px]">
                    163
                  </h5>
                  <span className=" text-[28px]">
                    Ideas
                  </span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className=" p-3">
                <div className="card-text">
                  <h5 className="count text-[48px]">
                    853
                  </h5>
                  <span className="text-[28px]">
                    Hours
                  </span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className=" p-3">
                <div className="card-text">
                  <h5 className="count text-[48px]">
                    734
                  </h5>
                  <span className=" text-[28px]">
                    Programs
                  </span>
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
        fill='white '
      >
        <path
          className="cls-1"
          d="M-83,345V288s158-27,262-22l104,5,138,8,300,21s245,4,281-5c0,0-9-39,33-45,0,0,8-51,58-25,0,0,48-36,61,23,0,0,27,2,28,24,0,0,163-22,163-17v90Z"
          transform="translate(83 -214.13)"
        ></path>
      </svg>
      </div>
    </section>
  );
}

export default Resume