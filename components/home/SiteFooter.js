import { Fragment } from "react";
import { Separator } from "@/components/ui/separator";
import StatItem from "@/components/home/StatItem";
import { FOOTER_STATS } from "@/components/home/data";

export default function SiteFooter() {
  return (
    <>
      <div className="w-[100%] md:w-[54%] border-b bg-[#161616] border-[#e7e7e715] ml-auto mr-auto h-[150x]">
        <div className="border-b border-l border-r border-[#e7e7e715] h-[150px] w-full">
          <div className="w-[100%] h-full flex items-center justify-center">
            <div className="h-[70%] w-[95%] flex items-center md:items-start">
              <p className="text-sm fon ">© 2026 Designed & Developed By Bhargav Joshi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[54%] ml-auto mr-auto h-[50px]">
        <br />
        <div className="w-[95%] ml-auto mr-auto h-full items-center justify-between hidden md:flex">
          {FOOTER_STATS.map((stat, i) => (
            <Fragment key={i}>
              <StatItem label={stat.label} value={stat.value} />
              {i < FOOTER_STATS.length - 1 && (
                <Separator orientation="vertical" className={"bg-[#e7e7e715]"} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="w-[100%] md:w-[54%] ml-auto mr-auto h-[50px]"></div>
    </>
  );
}
