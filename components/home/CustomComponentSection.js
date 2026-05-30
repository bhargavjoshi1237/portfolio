import SectionHeading from "@/components/home/SectionHeading";

export default function CustomComponentSection() {
  return (
    <div className="h-[500px] md:h-[300px] border-l border-r border-[#e7e7e715] w-full md:w-[54%] ml-auto mr-auto">
      <div className="w-[100%] h-full justify-center flex items-center">
        <div className="w-[90%] h-[60%]">
          <SectionHeading
            title1="Custom"
            title2="Component & Design"
            title2ClassName="w-full objr text-white text-xl md:text-2xl"
          />
          <p className="fon text-md mt-6">Custom Component Design for Unique Experiences.</p>
          <p className="fon text-md mt-2">
            I specialize in building reusable, scalable UI components from scratch—tailored to project requirements and brand identity. Each component is engineered for accessibility, responsiveness, and seamless integration, ensuring a consistent and maintainable codebase while delivering a polished user experience.
          </p>
        </div>
      </div>
    </div>
  );
}
