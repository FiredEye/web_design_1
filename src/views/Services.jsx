// local imports
import { services } from "../data";
import FadeIn from "../components/FadeIn";

const Services = () => {
  return (
    <div id="services" className="mt-[140px] max-w-[1490px] mx-auto px-[20px] flex flex-col sm:flex-row sm:px-[120px] gap-12 xs:gap-6 xs:justify-between w-full">      
      {services.map((service,i)=>(
        <FadeIn key={i} delay={0.2} direction='down'>
          <div className="flex flex-col lg:flex-row gap-4 w-full items-center">
            <img src={service.icon} className="max-h-[64px]" alt="service-icon" />
            <div className="flex flex-col gap-1.5">
              <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium">{service.title}</h3>
              <h6 className="text-center lg:text-start text-base lg:text-lg text-fontGray font-medium">{service.subtitle}</h6>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
  ;
};

export default Services;
