// local imports
import { referenceTitle, referenceSubtitle } from "../data";

import imageOne from "../assets/image-one.svg";
import imageTwo from "../assets/image-two.svg";
import imageThree from "../assets/image-three.svg";

import FadeIn from "../components/FadeIn";

const Reference = () => {
  return <div id="reference" className="mb-[120px] px-[20px] sm:px-[120px] mx-auto max-w-[1490px]">
    <FadeIn delay={0.2} direction='down' >
      <h1 className="text-4xl lg:text-[52px] font-medium text-fontBlack mb-6 text-center">{referenceTitle}</h1>
    </FadeIn>
    <FadeIn delay={0.4} direction='down' >
      <h5 className="text-[#4F4F4F] text-lg sm:text-xl mb-12 text-center">{referenceSubtitle}</h5>
    </FadeIn>
    <div className="flex flex-col md:flex-row w-full gap-8">     
      <FadeIn delay={0.8} direction={"right"} >        
        <div className="flex flex-col gap-8 justify-between">
          <img src={imageOne} alt="plant-image" />      
          <img src={imageTwo} alt="plant-image" />
        </div>
      </FadeIn>
      <FadeIn delay={0.8} direction={"left"}>
        <img src={imageThree} alt="plant-image" loading="lazy"/>
      </FadeIn>
    </div>
  </div>;
};

export default Reference;
