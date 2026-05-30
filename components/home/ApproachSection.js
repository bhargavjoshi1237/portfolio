import SectionHeading from "@/components/home/SectionHeading";

export default function ApproachSection() {
  return (
    <div className="h-[350px] md:h-[300px] w-full md:w-[54%] flex md:flex-row flex-col ml-auto mr-auto -mt-[1px] -mb-[1px] border-l border-[#373737]">
      <div className="w-full md:w-[60%] flex">
        <div className="w-[85%] flex ml-auto mr-auto items-center justify-center">
          <div className="h-[70%] ml-auto mr-auto w-full items-center justify-center">
            <SectionHeading
              title1="Approach"
              title2="Full-Spectrum Development"
              wrapperClassName="w-[100%] flex items-center mb-9"
            />
            <p className="fon text-md">Building cohesive web experiences from the ground up. </p>
            <p className="mt-2 fon text-md">Expertise spans pixel-perfect, responsive interfaces with React/Next.js through to robust backend logic, APIs, and databases — in both the Node.js and PHP / Laravel ecosystems — with hands-on work in RAG architecture, hosted LLM inference, and custom AI agents.</p>
          </div>
        </div>
      </div>
      <div className="w-[40%] bg-[#161616] border-l border-t border-b border-r border-[#e7e7e715] md:block hidden">
        <div className="w-[80%] h-full ml-auto mr-auto flex flex-col justify-center gap-2 ">
          <p className="fonc text-sm text-[#e7e7e780]">Overall Capabilities</p>
          <div className="flex flex-col">
            {[
              ["01", "Frontend & UI", "React · Next.js · Tailwind  · Figma"],
              ["02", "Backend & APIs", "Laravel · Node.js · Express"],
              ["03", "Data & Cache", "PostgreSQL · MySQL · Redis"],
              ["04", "AI / LLM Systems", "RAG · Inference · Agents"],
              ["05", "Cloud & Deploy", "AWS · GCP · Docker"],
            ].map(([num, title, stack], i) => (
              <div
                key={num}
                className={`flex items-start gap-3 py-1.5 ${i !== 0 ? "border-t border-[#e7e7e715]" : ""}`}
              >
                <span className="fonc text-xs text-[#e7e7e750] mt-0.5">{num}</span>
                <div>
                  <p className="fon text-sm text-[#e7e7e7]">{title}</p>
                  <p className="fonc text-xs text-[#e7e7e770]">{stack}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
