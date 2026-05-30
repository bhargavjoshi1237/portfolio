import SectionHeading from "@/components/home/SectionHeading";

const HEADING_WRAPPER = "w-[100%] flex items-center mb-5";
const TITLE2_CLASS = "w-full objr text-white text-xl md:text-2xl";

export default function CapabilitiesSection() {
  return (
    <div className="w-full md:w-[54%] ml-auto mr-auto border-l border-r border-[#e7e7e715] h-[1200px] md:h-[800px]">
      <div className="w-full ml-auto mr-auto  h-[600px] md:h-[400px] border-[#e7e7e715] border-b flex md:flex-row flex-col">
        <div className="w-[100%] md:w-[60%] items-center justify-center ml-auto mr-auto border-r border-[#e7e7e715]  h-[600px] md:h-[400px] flex">
          <div className="ml-auto mr-auto w-[80%] items-center -mt-5 justify-center">
            <SectionHeading title1="Design" wrapperClassName={HEADING_WRAPPER} title2ClassName={TITLE2_CLASS} />
            <p className="fon text-md">Crafting interfaces that resonate, adapt, and perform flawlessly across all devices.</p>
            <p className="mt-2 fon text-md">Custom components built from scratch, ensuring designs are not only aesthetically pleasing but also technically feasible and perfectly aligned with project goals.</p>
          </div>
        </div>
        <div className="w-[100%] md:w-[40%] ml-auto mr-auto h-[600px] md:h-[400px] flex items-center justify-center">
          <div className="ml-auto mr-auto w-[80%] items-center justify-center">
            <div className="w-[100%] flex items-center mb-5">
              <p className="objr text-white text-xl md:text-2xl"> Tailored User Experiences</p>
            </div>
            <p className="fon text-md">Translating Figma designs into responsive, accessible interfaces with React, Next.js, and Tailwind — pixel-perfect on every screen.</p>
            <p className="mt-2 fon text-md">A focus on consistent, maintainable component systems that keep the experience polished as a product grows.</p>
          </div>
        </div>
      </div>
      <div className="w-full ml-auto mr-auto h-[600px] md:h-[400px] flex md:flex-row flex-col">
        <div className="w-[100%] border-b md:w-[60%] items-center justify-center ml-auto mr-auto border-r border-[#e7e7e715] h-[600px] md:h-[400px] flex">
          <div className="ml-auto mr-auto w-[80%] items-center justify-center">
            <SectionHeading title1="Architecture" wrapperClassName={HEADING_WRAPPER} title2ClassName={TITLE2_CLASS} />
            <p className="fon text-md">Engineering robust, scalable, and cost-effective systems from backend logic to cloud deployment.</p>
            <p className="mt-2 fon text-md">Adept at designing application architectures for new projects or integrating seamlessly with existing systems, always considering specific requirements and budget constraints.</p>
          </div>
        </div>
        <div className="w-[100%] md:w-[40%] ml-auto mr-auto h-[600px] md:h-[400px] flex items-center justify-center">
          <div className="ml-auto mr-auto w-[80%] items-center justify-center">
            <div className="w-[100%] flex items-center mb-5">
              <p className="objr text-white text-xl md:text-2xl"> End-to-End Optimized Solutions</p>
            </div>
            <p className="fon text-md">Proficient with core AWS and GCP services to leverage the cloud for maximum organizational advantage in terms of both development time and financial efficiency.</p>
            <p className="mt-2 fon text-md">Expertise covers building and consuming APIs deployment.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
