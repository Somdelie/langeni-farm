/* eslint-disable react-hooks/exhaustive-deps */
import { Client, Databases } from "appwrite";
import React from "react";


const Testimonial = () => {
  const [products, setProducts] = React.useState([]);
  const [productcard2, setProductCard2] = React.useState([]);
  const [productcard3, setProductCard3] = React.useState([]);
  const [productcard4, setProductCard4] = React.useState([]);

  const client = new Client()
    .setEndpoint(import.meta.env.VITE_PUBLIC_APPWRITE_URL)
    .setProject(import.meta.env.VITE_PUBLIC_APPWRITE_PROJECT_ID);

  const databases = new Databases(client);

  async function init() {
    const response = await databases.listDocuments(
      import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE,
      import.meta.env.VITE_PUBLIC_APPWRITE_PRODUCTS_CARD1_COLLECTION
    );
    setProducts(response.documents);
   
  }

  React.useEffect(() => {
    init();
  }, []);

  async function card2() {
    const response = await databases.listDocuments(
      import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE,
      import.meta.env.VITE_PUBLIC_APPWRITE_PRODUCTS_CARD2_COLLECTION
    );
    setProductCard2(response.documents);
   
  }

  React.useEffect(() => {
    card2();
  }, []);

  async function card3() {
    const response = await databases.listDocuments(
      import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE,
      import.meta.env.VITE_PUBLIC_APPWRITE_PRODUCTS_CARD3_COLLECTION
    );
    setProductCard3(response.documents);

  }

  React.useEffect(() => {
    card3();
  }, []);

  async function card4() {
    const response = await databases.listDocuments(
      import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE,
      import.meta.env.VITE_PUBLIC_APPWRITE_PRODUCTS_CARD4_COLLECTION
    );
    setProductCard4(response.documents);
    
  }

  React.useEffect(() => {
    card4();
  }, []);

  return (
    <section className=" w-full pt-10  min-h-[60vh] relative" id="testemonials">
     {products?.map((card) =>(
       <h1 className="mdl:text-[48px] text-[34px]  text-center  px-2 expText mb-10  mx-auto" key={card.$id}>
       {card.heading2}
      </h1>
      ))}
      <div className='relative w-full bg-[#f2f6ff] testemonials py-10 '>

      {products?.map((card) =>(
        <div className="text-right flex justify-between left mb-[7rem]" key={card.$id}>
        <div className="flex-1 ">
          <div className="pr-[7rem] productsContent">
            <h3>{card.year}</h3>
            <h4 className="text-[#12265a] text-[28px]">{card.heading2}</h4>
            <p className="paragraph">
             {card.description}
            </p>
          </div>
        </div>
        <div className="flex-1 h-[12rem] flex items-center relative">
          <div className="border-[#fa9db7] border-[4px] absolute top-auto left-[-15px] bg-white rounded-full w-[30px] h-[30px]"></div>
          <div className="circle1 absolute top-auto left-[-5px] bg-[#fa9db7] rounded-full w-[10px] h-[10px]"></div>
          <div className="bg-[#fa9db7] h-1 w-[5rem]"></div>
          <div className="h-[100%] w-[12rem] rounded-full border-[#fa9db7] border-[3px] tImg">
            <img
              src={card.imageUrl}
              className="h-[100%] rounded-full "
              alt="image"
            />
          </div>
        </div>
      </div>
      ))}

   
 {productcard2?.map((card) => (
  <div className="flex justify-center left" key={card.$id}>
        <div className=" flex items-center relative justify-end  right flex-1 ">
          <div className="h-[12rem] w-[12rem] rounded-full border-[#fa9db7] border-[3px] tImg">
            <img
              src={card.imageUrl}
              className="h-[100%] rounded-full "
              alt="image"
            />
          </div>
          <div className="bg-[#fa9db7] h-1 w-[5rem]"></div>
          <div className="border-[#fa9db7] border-[4px] absolute top-auto right-[-15px] bg-white rounded-full w-[30px] h-[30px]"></div>
          <div className="circle1 absolute top-auto right-[-5px] bg-[#fa9db7] rounded-full w-[10px] h-[10px]"></div>
        </div>
        <div className="flex-1">
          <div className="pl-[7rem] productsContent2">
            <h3>{card.year}</h3>{" "}
            <h4 className="text-[#12265a] text-[28px]">{card.heading2}</h4>
            <p className="paragraph">
            {card.description}
            </p>
          </div>
        </div>
      </div>
 ))}

   
 {productcard3?.map((card) => (
      <div className="text-right flex justify-between left mb-[7rem]" key={card.$id}>
        <div className="flex-1 ">
          <div className="pr-[7rem] productsContent">
            <h3>{card.year}</h3>
            <h4 className="text-[#12265a] text-[28px]">{card.heading2}</h4>
            <p className="paragraph">
            {card.description}
            </p>
          </div>
        </div>
        <div className="flex-1 h-[12rem] flex items-center relative">
          <div className="border-[#fa9db7] border-[4px] absolute top-auto left-[-15px] bg-white rounded-full w-[30px] h-[30px]"></div>
          <div className="circle1 absolute top-auto left-[-5px] bg-[#fa9db7] rounded-full w-[10px] h-[10px]"></div>
          <div className="bg-[#fa9db7] h-1 w-[5rem]"></div>
          <div className="h-[100%] w-[12rem] rounded-full border-[#fa9db7] border-[3px] tImg">
            <img
                src={card.imageUrl}
              className="h-[100%] rounded-full "
              alt="image"
            />
          </div>
        </div>
      </div>
      ))}

      {productcard4?.map((card) => (
      <div className="flex justify-center left" key={card.$id}>
        <div className=" flex items-center relative justify-end  right flex-1">
          <div className="h-[12rem] w-[12rem] rounded-full border-[#fa9db7] border-[3px] tImg">
            <img
              src={card.imageUrl}
              className="h-[100%] rounded-full "
              alt="image"
            />
          </div>
          <div className="bg-[#fa9db7] h-1 w-[5rem]"></div>
          <div className="border-[#fa9db7] border-[4px] absolute top-auto right-[-15px] bg-white rounded-full w-[30px] h-[30px]"></div>
          <div className="circle1 absolute top-auto right-[-5px] bg-[#fa9db7] rounded-full w-[10px] h-[10px]"></div>
        </div>
        <div className="flex-1">
          <div className="pl-[7rem] productsContent2">
            <h3>{card.year}</h3>{" "}
            <h4 className="text-[#12265a] text-[28px]">{card.heading2}</h4>
            <p className="paragraph">
            {card.description}
            </p>
          </div>
        </div>
      </div>

      ))}
        <div></div>
      </div>
      {/* <div className="text-left px-[60px]">
        <h3>2012</h3>
        <h3>Outdoor Activity</h3>
        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div> */}
    </section>
  );
};

export default Testimonial;
