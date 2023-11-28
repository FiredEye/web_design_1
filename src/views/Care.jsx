// local imports
import { careTitle, careSubtitle, careList } from "../data";
import imageFour from "../assets/image-four.svg";
import FadeIn from "../components/FadeIn";

const Care = () => {
  
  return <div id="care" className="mb-[120px] px-[20px] sm:px-[120px] mx-auto max-w-[1490px]">
  <FadeIn delay={0.2} direction='down' >
    <h1 className="text-4xl lg:text-[52px] font-medium text-fontBlack mb-6 text-center">{careTitle}</h1>
  </FadeIn>
  <FadeIn delay={0.4} direction='down' >
    <h5 className="text-[#4F4F4F] text-lg sm:text-xl mb-12 text-center">{careSubtitle}</h5>
  </FadeIn>
  <div className="flex flex-col lg:flex-row gap-8">
    <div className="flex flex-col gap-8 items-start">
 
      {careList.map((item,i)=>(
        <FadeIn key={i} delay={(i+1)*0.2} direction={"left"}>
          <div className="flex flex-col xs:flex-row gap-6 items-center xs:items-start">
            <img src={item.img} alt={item.title} className="max-h-[64px]"/>
            <div>
              <h3 className="text-center xs:text-start mb-2 text-2xl lg:text-[28px] text-fontBlack font-medium">{item.title}</h3>
              <h6 className="text-center xs:text-start text-base lg:text-lg text-fontGray font-medium">{item.subtitle}</h6>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
    <FadeIn delay={0.6} direction={'right'}>
      <img src={imageFour} alt="plant image" />
    </FadeIn>
  </div>
  </div>;
};

export default Care;
