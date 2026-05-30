"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const VISIT_BUTTON_CLASS =
  "inline-flex items-center justify-center gap-2 h-[42px] px-5 bg-white text-black rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[#e5e5e5] active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/40";

function SectionLabel({ color = "bg-white", children }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`${color} h-2.5 w-2.5 rounded-full`} />
      <h3 className="fon text-xl text-white">{children}</h3>
    </div>
  );
}

function FeatureItem({ children }) {
  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-[#e7e7e715] bg-[#1c1c1c] px-3 py-2.5">
      <svg
        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.29 6.8-6.79a1 1 0 0 1 1.4 0Z"
          clipRule="evenodd"
        />
      </svg>
      <span className="fon text-sm leading-snug text-[#d4d4d4]">{children}</span>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 13L13 7M13 7H8M13 7V12" />
    </svg>
  );
}

function CreativeStudioContent({
  title,
  tagline,
  studioTagline,
  bannerColor,
  products = [],
  plans = [],
  clients = [],
  visitUrl,
}) {
  return (
    <DialogContent className="bg-[#161616] border border-[#e7e7e715] text-white p-0 gap-0 overflow-hidden sm:max-w-3xl">
      <DialogTitle className="sr-only">{title}</DialogTitle>
      <div className={`${bannerColor} h-1.5 w-full`} />
      <ScrollArea className="h-[78vh] max-h-[720px] w-full">
        <div className="px-6 pb-8 pt-5">
          {/* Intro */}
          <div className="flex items-center gap-3">
            <span className={`${bannerColor} h-2.5 w-2.5 rounded-full`} />
            <h2 className="fon text-2xl text-white">{title}</h2>
          </div>
          {studioTagline && (
            <p className="fon mt-1 text-sm font-medium text-[#ff8052]">
              {studioTagline}
            </p>
          )}
          <p className="fon mt-2 text-sm leading-relaxed text-[#a1a1a1]">
            {tagline}
          </p>

       

          {/* The suite */}
          <div className="mt-7">
            <SectionLabel color="bg-[#ee6b3b]">The Suite</SectionLabel>
          </div>
          <p className="fon mt-2 text-sm text-[#a1a1a1]">
            Five connected products — hover any one to see what it does.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {products.map((p, i) => (
              <div
                key={`${p.title}-${i}`}
                className="group relative h-44 overflow-hidden rounded-xl border border-[#e7e7e715] bg-[#1a1a1a]"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Resting label */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-3 transition-opacity duration-300 group-hover:opacity-0">
                  <span className="fon text-sm text-white">{p.title}</span>
                  <span className="fon rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-[#cfcfcf]">
                    {p.type}
                  </span>
                </div>
                {/* Hover detail */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-black/10 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="fon text-xs uppercase tracking-wide text-[#ff8052]">
                    {p.type}
                  </span>
                  <h4 className="fon mt-0.5 text-base text-white">{p.title}</h4>
                  <p className="fon mt-1 text-xs leading-snug text-[#cfcfcf]">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>



          {visitUrl && (
            <a
              href={visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex"
            >
              <button className={VISIT_BUTTON_CLASS}>
                Visit geiger.studio
                <ArrowIcon />
              </button>
            </a>
          )}
        </div>
      </ScrollArea>
    </DialogContent>
  );
}

function StandardContent({
  title,
  bannerColor,
  bodyImg,
  featuresTitle,
  featuresIntro,
  features = [],
  visitUrl,
}) {
  return (
    <DialogContent className="bg-[#161616] border border-[#e7e7e715] text-white p-0 gap-0 overflow-hidden sm:max-w-2xl">
      <DialogTitle className="sr-only">{title}</DialogTitle>
      <div className={`${bannerColor} h-1.5 w-full`} />
      <ScrollArea className="h-[70vh] max-h-[640px] w-full">
        <div className="px-6 pb-6 pt-5">
          <div className="overflow-hidden rounded-xl border border-[#e7e7e715] bg-[#1a1a1a]">
            <img
              src={bodyImg}
              className="h-48 w-full object-cover sm:h-56"
              alt={title}
            />
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-3">
              <span className={`${bannerColor} h-2.5 w-2.5 rounded-full`} />
              <h2 className="fon text-2xl text-white">{featuresTitle}</h2>
            </div>
            <p className="fon mt-2 text-sm leading-relaxed text-[#a1a1a1]">
              In this web-app we have implemented {featuresIntro}.
            </p>
          </div>

          {features.length > 0 && (
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {features.map((feature, i) => (
                <FeatureItem key={i}>{feature}</FeatureItem>
              ))}
            </div>
          )}

          {visitUrl && (
            <a
              href={visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex"
            >
              <button className={VISIT_BUTTON_CLASS}>
                Visit Project
                <ArrowIcon />
              </button>
            </a>
          )}
        </div>
      </ScrollArea>
    </DialogContent>
  );
}

export default function ProjectDialog({
  outerClassName,
  triggerClassName,
  title,
  triggerImg,
  tagline,
  desc2 = "",
  dev = false,
  creative = false,
  bannerColor,
  bodyImg,
  featuresTitle,
  featuresIntro,
  features = [],
  studioTagline,
  products,
  plans,
  clients,
  visitUrl,
  linkUrl,
}) {
  // When a linkUrl is provided, the card links straight to an external site
  // instead of opening a dialog.
  if (linkUrl) {
    return (
      <div className={outerClassName}>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={triggerClassName}
        >
          <div>
            <div className="w-[80%] ml-auto mr-auto h-[80%]">
              <div className="w-[100%] h-[50px] items-center justify-start flex">
                <p className="text-2xl fon">{title}</p>
                {triggerImg && (
                  <img src={triggerImg} className="ml-auto end-0 h-8 w-auto" alt="" />
                )}
              </div>
              <p className="text-sm fon mt-5 text-left">{tagline}</p>
              {desc2 && <p className="mt-2 text-sm fon text-left">{desc2}</p>}
            </div>
          </div>
        </a>
      </div>
    );
  }

  return (
    // open={false} disables the click-to-open dialog for now. Remove it to re-enable.
    <Dialog open={false}>
      <div className={outerClassName}>
        <DialogTrigger className={triggerClassName}>
          <div>
            <div className="w-[80%] ml-auto mr-auto h-[80%]">
              <div className="w-[100%] h-[50px] items-center justify-start flex">
                <p className="text-2xl fon">{title}</p>
                {triggerImg && <img src={triggerImg} className="ml-auto end-0" alt="" />}
              </div>
              <p className="text-sm fon mt-5 text-left">{tagline}</p>
              {desc2 && <p className="mt-2 text-sm fon text-left">{desc2}</p>}
            </div>
          </div>
        </DialogTrigger>
      </div>

      {dev ? (
        <DialogContent className="bg-[#161616] border border-[#e7e7e715] text-white sm:max-w-md">
          <DialogTitle className="fon text-lg text-white">{title}</DialogTitle>
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
              In Development
            </span>
            <p className="fon text-sm text-[#a1a1a1]">
              This section is still under development. Check back soon!
            </p>
          </div>
        </DialogContent>
      ) : creative ? (
        <CreativeStudioContent
          title={title}
          tagline={tagline}
          studioTagline={studioTagline}
          bannerColor={bannerColor}
          products={products}
          plans={plans}
          clients={clients}
          visitUrl={visitUrl}
        />
      ) : (
        <StandardContent
          title={title}
          bannerColor={bannerColor}
          bodyImg={bodyImg}
          featuresTitle={featuresTitle}
          featuresIntro={featuresIntro}
          features={features}
          visitUrl={visitUrl}
        />
      )}
    </Dialog>
  );
}
