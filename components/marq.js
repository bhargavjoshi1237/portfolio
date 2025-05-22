"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/1.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/2.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/3.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/4.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/5.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/6.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/7.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/8.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/9.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/10.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/11.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/12.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/13.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/14.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/15.png?raw=true",
    "https://github.com/bhargavjoshi1237/portfolio/blob/master/imgs/16.png?raw=true",
  ];
  return (
    <div className="   h-full w-full overflow-hidden      ">
      <ThreeDMarquee images={Array.isArray(images) ? images : []} />
    </div>
  );
}
