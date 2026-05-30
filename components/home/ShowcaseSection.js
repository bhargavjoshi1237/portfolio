import SectionHeading from "@/components/home/SectionHeading";
import ClientSpline from "@/components/ClientSpline";

export default function ShowcaseSection() {
  return (
    <div className="w-full md:w-[54%] ml-auto mr-auto h-[400px] md:h-[550px]">
      <div className="border-l border-[#e7e7e715] h-[400px] md:h-[550px] w-full flex">
        <div className="w-full md:w-[60%] h-full flex items-center">
          <div className="w-[100%] flex">
            <div className="w-[85%] flex ml-auto mr-auto items-center justify-center">
              <div className="ml-auto mr-auto w-full items-center justify-center">
                <SectionHeading
                  title1="Showcase"
                  title2="From Concept to Application"
                  wrapperClassName="w-[100%] flex items-center mb-9"
                />
                <p className="fon text-md">Exploring different facets of web development through tangible projects. </p>
                <p className="mt-2 fon text-md">Selected works illustrating the development journey. These projects represent dedicated effort in design, architecture, coding, and optimization, leveraging modern day tools.</p>
                <p className="mt-2 fon text-md">Click on project below for more details.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[40%] border-l border-r border-[#e7e7e715] md:block hidden">
          <ClientSpline className="-mt-7" scene="/cube.splinecode" />
        </div>
      </div>
    </div>
  );
}
