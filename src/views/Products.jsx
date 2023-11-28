// local imports
import { productsTitle, productsBtnText, products } from "../data";

import arrowIcon from "../assets/arrow-icon.svg";
import starsIcon from "../assets/stars-icon.svg";
import plusIcon from "../assets/plus-icon.svg";

import FadeIn from "../components/FadeIn";

const Products = () => {
  return <div id="products" className="flex flex-col 2xl:flex-row gap-[128px] 2xl:gap-2 2xl:justify-between mt-[100px] 2xl:mt-[100px] 2xl:pt-[120px] mb-[140px] max-w-[1490px] mx-auto px-[20px] sm:px-[120px] w-full">
    <FadeIn delay={0.2} direction="right">
      <div className="flex flex-col">
          <h1 className="text-center 2xl:text-start text-fontBlack text-4xl lg:text-[54px] font-medium mb-6">{productsTitle}</h1>
        <button className="flex items-center gap-2 bg-transparent text-fontBlack border-transparent font-bold py-2 px-4 rounded-lg w-fit border hover:border-black outline-none focus:outline-none ease-linear transition-all duration-350 mx-auto 2xl:mx-0 mb-10 2xl:mb-0">
          <h5 className="text-lg  lg:text-xl text-[#4F4F4F] font-medium">{productsBtnText}</h5><img src={arrowIcon} alt="arrow icon" />
        </button>
      </div>
    </FadeIn>
    <div className="w-full flex flex-col lg:flex-row gap-[180px] lg:gap-6">
      {products.map((product,i)=>(
        <FadeIn key={i} delay={(i+1)*0.2} direction="left" fullWidth>
          <div className="h-[330px] lg:h-[350px] relative flex-1 bg-[#C1D0E4] rounded-[50px] max-w-[500px]">
            <img src={product.img} className="absolute -top-[160px] 2xl:-top-[100px] left-1/2 -translate-x-1/2" alt="product image" />
            <div className="absolute bottom-0 w-full bg-white h-[180px] lg:h-[200px] rounded-[50px] shadow-md px-8 py-[26px] flex flex-col justify-between">
              <div>
                <h2 className="mb-2 text-fontBlack text-xl lg:text-2xl font-medium">{product.title}</h2>
                <img src={starsIcon}  alt="rating stars" />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-fontBlack text-xl lg:text-2xl font-medium">{product.price}</h3>
                <img src={plusIcon} alt="Add icon" className="cursor-pointer h-10 xs:h-12 w-10 xs:w-12"/>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>

  </div>;
};

export default Products;
