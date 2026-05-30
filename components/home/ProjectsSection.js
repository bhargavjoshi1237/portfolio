import ProjectDialog from "@/components/home/ProjectDialog";
import ProjectTechRow from "@/components/home/ProjectTechRow";
import { ProjectsTechBandOne } from "@/components/home/ProjectsTechBands";
import { FULL_PROJECTS } from "@/components/home/data";

export default function ProjectsSection() {
  const [animeAlley, mangaFusion, zeroMs, upcoming] = FULL_PROJECTS;

  return (
    <>
      <div className=" absolute z-1 left-1/2 -mt-13 flex items-center justify-center ml-8 h-[100%] max-w-none w-[120%] -translate-y-1/2 -translate-x-1/2">
        <img
          className=" fill-[#e7e7e715] h-[135%] ml-auto mr-auto -z-50 mt-29"
          src="/sq2.svg"
          alt="sq2"
          style={{ pointerEvents: "none" }}
        />
      </div>

      <div className="h-[1000px] md:flex-row flex-col md:h-[300px] w-full md:w-[54%] ml-auto mr-auto flex">
        <ProjectDialog {...animeAlley} />
        <ProjectTechRow />
        <ProjectDialog {...mangaFusion} />
        <ProjectTechRow />
        <ProjectDialog {...zeroMs} />
        <ProjectTechRow />
      </div>

      <ProjectsTechBandOne />

      <div className="h-[300px] md:h-[300px] w-full md:w-[54%] ml-auto mr-auto flex md:flex-row flex-col">
        <ProjectDialog {...upcoming} />
      </div>
    </>
  );
}
