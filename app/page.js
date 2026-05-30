"use client";
import TiltedLines from "@/components/extra/tiltedlines";
import HeroSection from "@/components/home/HeroSection";
import ApproachSection from "@/components/home/ApproachSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import CustomComponentSection from "@/components/home/CustomComponentSection";
import DesignGallery from "@/components/home/DesignGallery";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import EcosystemSection from "@/components/home/EcosystemSection";
import FaqSection from "@/components/home/FaqSection";
import SiteFooter from "@/components/home/SiteFooter";

export default function Home() {
  return (
    <div className="relative w-full h-full min-h-screen bg-[#161616] overflow-x-hidden">
      <HeroSection />

      <TiltedLines height={100} borderL={true} borderR={true} />
      <ApproachSection />

      <TiltedLines height={100} borderL={true} borderR={true} />
      <ShowcaseSection />

      <div className="w-full md:w-[54%] ml-auto mr-auto">
        <TiltedLines width={100} showIcons={true} height={50} widthx={100} />
      </div>
      <ProjectsSection />

      <TiltedLines borderL={true} borderR={true} />
      <CapabilitiesSection />

      <TiltedLines borderL={true} borderR={true} />
      <MarqueeSection />

      <TiltedLines borderL={true} borderR={true} />
      <CustomComponentSection />

      <TiltedLines borderL={true} borderR={true} />
      <DesignGallery />

      <TiltedLines borderL={true} borderR={true} />
      <IntegrationsSection />
      <EcosystemSection />

      <TiltedLines borderL={true} borderR={true} />
      <FaqSection />

      <TiltedLines borderL={true} borderR={true} />
      <SiteFooter />
    </div>
  );
}
