import Image from "next/image";
// import sq2 from "./public/sq2.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import TiltedLines from "@/components/extra/tiltedlines";
import CommonQuestionItem from "@/components/extra/commonquestionitem";

export default function Home() {
  return (
    <>
    <style>{`
      .glow-green {
        box-shadow: 0 0 20px 8px #22c55e, 0 0 36px 14px #22c55e55;
        animation: glow-pulse 1.1s cubic-bezier(0.4,0,0.2,1) infinite;
      }
      @keyframes glow-pulse {
        0% {
          transform: scale(1);
          box-shadow: 0 0 6px 2px #22c55e, 0 0 12px 4px #22c55e55;
          opacity: 0.7;
        }
        50% {
          transform: scale(1.2);
          box-shadow: 0 0 32px 12px #22c55e, 0 0 64px 24px #22c55e88;
          opacity: 1;
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 6px 2px #22c55e, 0 0 12px 4px #22c55e55;
          opacity: 0.7;
        }
      }
    `}</style>
    <div className="w-full h-full min-h-screen bg-[#161616] ">
      <div className="h-[50px]  w-full flex">
      <div className="min-w-[23%] h-full flex  border-r border-[#e7e7e715]   items-end  justify-end">
      

    


      </div>

      <div className="min-w-[54%]  border-r border-b border-[#e7e7e715]  "></div>
      <div className="min-w-[23%] h-full ">
      

    
  
        </div>

      </div>
      <div className="h-[50px]   w-full flex">
      <div className="min-w-[23%] h-full tilted-lines border border-[#e7e7e715] flex   items-end  justify-end">
        
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#e7e7e740] -mr-3.5 -mb-3" aria-hidden="true">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>


      </div>
      <div className="min-w-[54%] flex items-center justify-center   text-sm   "><p className="fon lit">Current Status: On Internship Under Amazon Hydrabad 6M </p> <div className="  h-[10px] w-[10px] ml-4 bg-green-500 rounded-full glow-green"></div></div>
      <div className="min-w-[23%] h-full tilted-lines border border-[#e7e7e715] flex   items-end  justify-start">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#e7e7e740] -ml-3 -mb-3" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      </div>

      </div>

      <div className="flex">
        <div className="min-w-[23%] h-full "></div>
        <div className="min-w-[54%]   border-l border-r  border-[#e7e7e730] ">
        <svg 
            className="  -mt-[100%] inset-0 pointer-events-none  text-[#e7e7e730]" 
            viewBox="0 0 210 340" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M380.853 105.099L-201.625 464.632" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 12.56" vectorEffect="non-scaling-stroke"/>
              <path d="M-165.247 -267.831L369.777 600.141" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 12.56" vectorEffect="non-scaling-stroke"/>
              <path d="M209.5 260L130 260" stroke="currentColor" vectorEffect="non-scaling-stroke"/>
              <path d="M129.5 339.5L129.5 210" stroke="currentColor" vectorEffect="non-scaling-stroke"/>
              <path d="M159.5 260L159.5 210" stroke="currentColor" vectorEffect="non-scaling-stroke"/>
              <path d="M3.09944e-06 210L209.5 210" stroke="currentColor" vectorEffect="non-scaling-stroke"/>
              <path d="M160 240L130.133 240" stroke="currentColor" vectorEffect="non-scaling-stroke"/>
              <path d="M149.5 240L149.5 260" stroke="currentColor" vectorEffect="non-scaling-stroke"/>
              <rect x="159.5" y="210" width="30" height="30" transform="rotate(90 159.5 210)" stroke="currentColor" vectorEffect="non-scaling-stroke"/>
              <rect x="149.5" y="240" width="20" height="20" transform="rotate(90 149.5 240)" stroke="currentColor" vectorEffect="non-scaling-stroke"/>
              <rect x="159.5" y="240" width="20" height="10" transform="rotate(90 159.5 240)" stroke="currentColor" vectorEffect="non-scaling-stroke"/>
              <path d="M149.643 239.897C155.106 239.897 159.619 244.414 159.619 249.882C159.619 255.35 155.106 259.868 149.643 259.868C138.717 259.868 129.69 250.833 129.69 239.897C129.69 223.493 143.23 209.941 159.619 209.941C186.935 209.941 209.5 232.527 209.5 259.868C209.5 303.613 173.396 339.75 129.69 339.75C58.6695 339.75 -1.22732e-05 281.027 -9.16589e-06 209.941C-4.14648e-06 95.1103 94.7738 0.24998 209.5 0.249985C395.69 0.250001 549.5 154.06 549.5 340.25" stroke="url(#paint0_linear_138_42)" vectorEffect="non-scaling-stroke"/>
            </g>
            <defs>
              <linearGradient className="bg-[#e7e7e715]" id="paint0_linear_138_42" x1="549.5" y1="113.142" x2="150.049" y2="239.893">
                <stop offset="0.43" stopColor="#e7e7e730"/>
                <stop offset="1" stopColor="#e7e7e730"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="min-w-[23.25%] h-full "></div>
      </div>


      

<div className="tilted-lines border flex items-center justify-center border-[#e7e7e715] h-[100px]">
 <div className="border border-[#e7e7e715] w-[54%] h-full">
  
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 -ml-3 -mt-3.5 text-[#e7e7e740] -mr-3.5 -mb-3" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 float-end h-6 -ml-4 -mt-3 text-[#e7e7e740] -mr-3 -mb-3" aria-hidden="true">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>

    <div className="h-full flex items-end justify-end">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 -ml-3.5  text-[#e7e7e740] -mr-3.5 -mb-4" aria-hidden="true">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </div>
    <div className="h-full flex ">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 -ml-3 -mt-2  text-[#e7e7e740] " aria-hidden="true">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </div>
  </div>
</div>
<div className="h-[250px] w-[54%] flex  ml-auto mr-auto -mt-[1px] -mb-[1px] border-l border-[#373737]">

    <div className=" w-[60%] flex">
      <div className="w-[85%]  flex ml-auto mr-auto items-center justify-center">
        <div className="h-[70%]  ml-auto mr-auto w-full items-center justify-center">
          <p className="fon text-2xl mb-4">Inspired by Epic Games</p>
          <p className="fon text-sm">shadcn/ui changed the game, by setting new standards for Web UI tooling, component composition and distribution.

We’re huge fans of the shadcn/ui approach and are proud to build upon its foundation.

Every component from uipub registry is compatible with shadcn/ui CLI.</p>
          </div>
      </div>
    </div>
    <div className=" w-[40%]  bg-[#222222]">
    <div className=" flex items-center justify-center ">
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="h-full px-12 md:px-8 py-8 flex flex-col gap-4 bg-surface-a2 hover:bg-surface-2"
    href="https://x.com/shadcn/status/1909619428146528363"
  >
    <div className="flex items-center gap-2">
      <img
        src="https://pbs.twimg.com/profile_images/1894281187658477568/MATnWO_P_400x400.jpg"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col text-3 leading-none">
        <div className="flex items-center gap-2 mb-2">
          <div className="font-bold fon">ようこそ実力至上主義の教室へ</div>
          <svg
            className="h-5 w-5"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.6047 37.0002C68.5442 34.8273 67.8815 32.7116 66.6875 30.8919C65.4967 29.0755 63.8216 27.6224 61.8505 26.7008C62.6006 24.6591 62.7587 22.4491 62.3215 20.32C61.8808 18.1874 60.8515 16.2231 59.3547 14.6455C57.7738 13.1487 55.8128 12.1228 53.6803 11.6788C51.5511 11.2415 49.3412 11.3996 47.2995 12.1497C46.3812 10.1752 44.9315 8.49678 43.1117 7.30605C41.292 6.11533 39.1763 5.44933 37 5.39551C34.8271 5.45269 32.7181 6.11196 30.9017 7.30605C29.0854 8.50014 27.6424 10.1786 26.7308 12.1497C24.6857 11.3996 22.4691 11.2348 20.3332 11.6788C18.1973 12.1161 16.2295 13.1453 14.6486 14.6455C13.1518 16.2264 12.1293 18.1941 11.6954 20.3233C11.2581 22.4525 11.4263 24.6624 12.1797 26.7008C10.2053 27.6224 8.52345 29.0721 7.326 30.8885C6.12855 32.7049 5.45918 34.824 5.39527 37.0002C5.46255 39.1765 6.12855 41.2922 7.326 43.112C8.52345 44.9283 10.2053 46.3814 12.1797 47.2997C11.4263 49.3381 11.2581 51.548 11.6954 53.6771C12.1326 55.8097 13.1518 57.7741 14.6453 59.355C16.2262 60.8451 18.1905 61.8676 20.3197 62.3082C22.4489 62.7522 24.6588 62.5908 26.7005 61.8508C27.6222 63.8219 29.0719 65.497 30.8916 66.691C32.708 67.8818 34.8271 68.5444 37 68.605C39.1763 68.5511 41.292 67.8885 43.1117 66.6978C44.9315 65.5071 46.3812 63.8252 47.2995 61.8541C49.3311 62.6581 51.5578 62.8498 53.7005 62.4058C55.8397 61.9618 57.8041 60.9022 59.3514 59.355C60.8986 57.8077 61.9615 55.8433 62.4055 53.7007C62.8495 51.5581 62.6578 49.3313 61.8505 47.2997C63.8216 46.3781 65.4967 44.9283 66.6908 43.1086C67.8815 41.2922 68.5442 39.1731 68.6047 37.0002ZM32.4995 49.9502L20.9655 38.4197L25.3147 34.0402L32.2842 41.0097L47.0842 24.8844L51.615 29.0755L32.4995 49.9502Z"
              fill="#1D9BF0"
            />
          </svg>
        </div>
        <div className="text-surface-10 fon">@youkosozitsu</div>
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <p className=" fon">
      ◤本日発売！◢

『ようこそ実力至上主義の教室へ』シリーズの累計発行部数が大台の１０3⃣０万部突破！（※電子書籍を含む）{/* */}{" "}
      </p>
     
     
    </div>
  </a>
</div>

    </div>


</div>


<div className="tilted-lines border flex items-center justify-center border-[#e7e7e715] h-[100px]">
 <div className="border border-[#e7e7e715] w-[54%] h-full">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 -ml-3 -mt-3.5 text-[#e7e7e740] -mr-3.5 -mb-3" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 float-end h-6 -ml-4 -mt-3 text-[#e7e7e740] -mr-3 -mb-3" aria-hidden="true">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    <div className="h-full flex items-end justify-end">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 -ml-3.5  text-[#e7e7e740] -mr-3.5 -mb-4" aria-hidden="true">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </div>
    <div className="h-full flex ">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 -ml-3 -mt-2  text-[#e7e7e740] " aria-hidden="true">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </div>
  </div>
</div>




<div className="w-[54%] ml-auto mr-auto h-[350px] ">
  <div className="border-l  border-[#e7e7e715]  h-[350px] w-full flex">
    <div className=" w-[60%] h-full flex items-center ">
      
<div className=" w-[100%] flex ">
      <div className="w-[85%]  flex ml-auto mr-auto items-center justify-center">
        <div className="  ml-auto mr-auto w-full items-center justify-center">
          <p className="fon text-2xl mb-4">Inspired by Epic Games</p>
          <p className="fon text-sm">shadcn/ui changed the game, by setting new standards for Web UI tooling, component composition and distribution.

We’re huge fans of the shadcn/ui approach and are proud to build upon its foundation.

Every component from uipub registry is compatible with shadcn/ui CLI.</p>
          </div>
      </div>
    </div>
    </div>
    <div className="w-[40%] border-l border-r border-[#e7e7e715] "></div>
  </div>
  {/* <div className="border border-[#e7e7e715]  h-[200px] w-full flex">
    <div className=" w-[60%] h-full">
      
<div className=" w-[100%] flex ">
      <div className="w-[85%]  flex ml-auto mr-auto items-center justify-center">
        <div className="h-[70%]  ml-auto mr-auto w-full items-center justify-center">
          <p className="fon text-2xl mb-4">Inspired by Epic Games</p>
          <p className="fon text-sm">shadcn/ui changed the game, by setting new standards for Web UI tooling, component composition and distribution.

We’re huge fans of the shadcn/ui approach and are proud to build upon its foundation.

Every component from uipub registry is compatible with shadcn/ui CLI.</p>
          </div>
      </div>
    </div>
    </div>
    
    <div className="w-[40%]  border-l border-[#e7e7e715] ml-[1px]"></div>
  </div> */}
</div> 



<div className="w-[54%] ml-auto mr-auto">

<TiltedLines width={100} showIcons={false} height={50} />

</div>















<div className=" absolute z-1 left-1/2 -mt-13 flex items-center justify-center ml-8 h-[100%] max-w-none w-[120%] -translate-y-1/2  -translate-x-1/2">
<img
    className=" fill-[#e7e7e715] h-[155%] ml-auto mr-auto  mt-25 "
    src="/sq2.svg"
    alt="sq2"
    style={{ pointerEvents: "none" }}
  />
</div>
<div className=" h-[300px] w-[54%] ml-auto mr-auto flex">
    <div className=" w-[33.33%] h-full flex items-center border-[#e7e7e715] border-l">

        <div className="w-[80%] ml-auto mr-auto h-[80%]">
          <p className="text-2xl fon ">Code Ownership</p>
          <p className="text-sm fon mt-5">No hidden dependencies. No vendor lock-in. Only established, widely-adopted npm packages used.

Install via CLI or copy-paste. All components live in your repo — you own your code</p>

        </div>
    </div>
    
    <div className=" w-[33.33%] border-l  border-[#e7e7e715] h-full flex items-center ">
    <div className="w-[80%] ml-auto mr-auto h-[80%]">
          <p className="text-2xl fon ">Code Ownership</p>
          <p className="text-sm fon mt-5">No hidden dependencies. No vendor lock-in. Only established, widely-adopted npm packages used.</p>


        </div>

    </div>
    <div className=" w-[33.33%] border-l border-r  h-full flex items-center border-[#e7e7e715]">
      
    <div className="w-[80%] ml-auto mr-auto h-[80%]">
          <p className="text-2xl fon ">Code Ownership</p>
          <p className="text-sm fon mt-5">No hidden dependencies. No vendor lock-in. Only established, widely-adopted npm packages used.

Install via CLI or copy-paste. All components live in your repo — you own your code</p>

        </div>

    </div>
   
  </div>
  <div className="w-[54%] ml-auto mr-auto border-t border-[#e7e7e715]  flex items-center justify-center h-[50px]"> 

  <div className="   w-full h-full flex">
    <div className="w-[20%] flex items-center justify-center">
    <TiltedLines  height={50} showIcons={false} />

    </div>
    <div className=" w-full flex items-center justify-center h-full">
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
    <svg className="" xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 256 256"> <defs><linearGradient id="logosNextjsIcon0" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><linearGradient id="logosNextjsIcon1" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><circle id="logosNextjsIcon2" cx="128" cy="128" r="128"/></defs><mask id="logosNextjsIcon3" fill="#fff"><use href="#logosNextjsIcon2"/></mask><g mask="url(#logosNextjsIcon3)"><circle cx="128" cy="128" r="128"/><path fill="url(#logosNextjsIcon0)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"/><path fill="url(#logosNextjsIcon1)" d="M163.556 76.8h17.067v102.4h-17.067z"/></g></svg>

    </div>
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
    <svg className="" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 263"> <defs><linearGradient id="logosSupabaseIcon0" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%"><stop offset="0%" stopColor="#249361"></stop><stop offset="100%" stopColor="#3ECF8E"></stop></linearGradient><linearGradient id="logosSupabaseIcon1" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%"><stop offset="0%"></stop><stop offset="100%" stopOpacity="0"></stop></linearGradient></defs><path fill="url(#logosSupabaseIcon0)" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="url(#logosSupabaseIcon1)" fillOpacity=".2" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="#3ECF8E" d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"></path></svg>

    </div>
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="1.65em" height="1.65em" viewBox="0 0 256 351"><defs><filter id="logosFirebase0" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix></filter><filter id="logosFirebase1" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="3.5"></feGaussianBlur><feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix></filter><path id="logosFirebase2" d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"></path><path id="logosFirebase3" d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"></path></defs><path fill="#FFC24A" d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"></path><use fill="#FFA712" fillRule="evenodd" href="#logosFirebase2"></use><use filter="url(#logosFirebase0)" href="#logosFirebase2"></use><path fill="#F4BD62" d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"></path><use fill="#FFA50E" fillRule="evenodd" href="#logosFirebase3"></use><use filter="url(#logosFirebase1)" href="#logosFirebase3"></use><path fill="#F6820C" d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"></path><path fill="#FDE068" d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.13 24.13 0 0 0 23.513.005"></path><path fill="#FCCA3F" d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.94 23.94 0 0 0 23.334.006z"></path><path fill="#EEAB37" d="M139.12 345.64a24.13 24.13 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.13 24.13 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"></path></svg>
    </div>
    </div>
    <div className="ml-auto w-[25%] ">
    <TiltedLines  height={50} showIcons={false} />
    

    </div>
  </div>
  <div className="  w-full h-full flex">
  <div className="w-[20%]">
    <TiltedLines  height={50} showIcons={false} />
    </div>
    <div className=" w-full flex items-center justify-center h-full">
    <div className="w-full h-full border  border-[#e7e7e715]  flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"> <defs><linearGradient id="logosNextjsIcon0" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><linearGradient id="logosNextjsIcon1" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><circle id="logosNextjsIcon2" cx="128" cy="128" r="128"/></defs><mask id="logosNextjsIcon3" fill="#fff"><use href="#logosNextjsIcon2"/></mask><g mask="url(#logosNextjsIcon3)"><circle cx="128" cy="128" r="128"/><path fill="url(#logosNextjsIcon0)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"/><path fill="url(#logosNextjsIcon1)" d="M163.556 76.8h17.067v102.4h-17.067z"/></g></svg>
    </div>
    <div className="w-full h-full border  border-[#e7e7e715]  flex items-center justify-center">
    <svg className="" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 263"> <defs><linearGradient id="logosSupabaseIcon0" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%"><stop offset="0%" stopColor="#249361"></stop><stop offset="100%" stopColor="#3ECF8E"></stop></linearGradient><linearGradient id="logosSupabaseIcon1" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%"><stop offset="0%"></stop><stop offset="100%" stopOpacity="0"></stop></linearGradient></defs><path fill="url(#logosSupabaseIcon0)" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="url(#logosSupabaseIcon1)" fillOpacity=".2" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="#3ECF8E" d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"></path></svg>
    </div>
    <div className="w-full h-full border  border-[#e7e7e715]  flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 256 256"><path fill="#010101" d="M96.447 7.382c32.267-8.275 67.929-3.453 96.386 14.11c35.84 21.433 59.238 61.976 59.833 103.71c1.31 42.15-20.659 83.944-55.963 106.865c-39.293 26.433-93.648 27.446-133.775 2.322c-40.9-24.41-64.774-73.645-58.641-120.916c4.94-49.95 43.52-94.005 92.16-106.09"></path><path fill="#FFF" d="M91.505 27.803c60.964-24.41 135.74 20.658 142.05 86.028c9.824 58.82-38.995 118.593-98.59 120.32c-56.677 5.656-111.449-42.39-113.056-99.304c-4.227-46.08 26.136-91.803 69.596-107.044"></path><path fill="#010101" d="M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097c-14.646 22.505-29.708 44.711-44.354 67.215c-12.562.06-25.123.06-37.626-.119m23.1 12.443c12.621 0 25.183 0 37.745.179c-27.505 22.206-54.117 45.484-82.099 67.096c14.646-22.505 29.708-44.77 44.354-67.275"></path></svg>

    </div>
    </div>
    <div className="ml-auto w-[25%]">
    <TiltedLines  height={50} showIcons={false} />
    </div>
  </div>
  <div className="  w-full  h-full flex">
  <div className="w-[20%]">
    <TiltedLines  height={50} showIcons={false} />
    </div>
    <div className=" w-full flex items-center justify-center h-full">
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center" ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"> <defs><linearGradient id="logosNextjsIcon0" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><linearGradient id="logosNextjsIcon1" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><circle id="logosNextjsIcon2" cx="128" cy="128" r="128"/></defs><mask id="logosNextjsIcon3" fill="#fff"><use href="#logosNextjsIcon2"/></mask><g mask="url(#logosNextjsIcon3)"><circle cx="128" cy="128" r="128"/><path fill="url(#logosNextjsIcon0)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"/><path fill="url(#logosNextjsIcon1)" d="M163.556 76.8h17.067v102.4h-17.067z"/></g></svg></div>
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="33.24" height="28" viewBox="0 0 256 220"> <path fill="#912626" d="M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075s-23.437 7.78-35.34 2.09c-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95c13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988"/><path fill="#C6302B" d="m174.782 115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.82 1.82 0 0 1-1.459-.776a1.92 1.92 0 0 1-.203-1.693a2.5 2.5 0 0 1 2.154-1.662l93.173-1.193c11.063-.511 23.015-9.58 27.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126 20.51 166.91 0 137.96 0C111.269 0 88.626 17.403 80.5 41.596a27 27 0 0 0-19.156-5.359C48.549 37.524 38.25 47.946 36.979 60.88a27.9 27.9 0 0 0 .702 9.642C16.773 71.145 0 88.454 0 109.726c0 1.923.137 3.818.413 5.667c.115.897.879 1.57 1.783 1.568h170.48a2.22 2.22 0 0 0 2.106-1.63"></path></svg>
    </div>
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="2.19em" height="1em" viewBox="0 0 256 117"><path fill="#FBAD41" d="M205.52 50.813c-.858 0-1.705.03-2.551.058q-.207.012-.398.094a1.42 1.42 0 0 0-.92.994l-3.628 12.672c-1.565 5.449-.983 10.48 1.646 14.174c2.41 3.416 6.42 5.421 11.289 5.655l19.679 1.194c.585.03 1.092.312 1.4.776a1.92 1.92 0 0 1 .2 1.692a2.5 2.5 0 0 1-2.134 1.662l-20.448 1.193c-11.11.515-23.062 9.58-27.255 20.633l-1.474 3.9a1.092 1.092 0 0 0 .967 1.49h70.425a1.87 1.87 0 0 0 1.81-1.365A51.2 51.2 0 0 0 256 101.828c0-28.16-22.582-50.984-50.449-50.984"></path><path fill="#F6821F" d="m174.782 115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.82 1.82 0 0 1-1.459-.776a1.92 1.92 0 0 1-.203-1.693a2.5 2.5 0 0 1 2.154-1.662l93.173-1.193c11.063-.511 23.015-9.58 27.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126 20.51 166.91 0 137.96 0C111.269 0 88.626 17.403 80.5 41.596a27 27 0 0 0-19.156-5.359C48.549 37.524 38.25 47.946 36.979 60.88a27.9 27.9 0 0 0 .702 9.642C16.773 71.145 0 88.454 0 109.726c0 1.923.137 3.818.413 5.667c.115.897.879 1.57 1.783 1.568h170.48a2.22 2.22 0 0 0 2.106-1.63"></path></svg>

    </div>
    </div>
    <div className="ml-auto w-[25%]">
    <TiltedLines  height={50} showIcons={false} />
    </div>
  </div>

  </div>



  <div className=" h-[300px] w-[54%] ml-auto mr-auto flex">
    <div className=" w-[33.33%] h-full flex items-center border-[#e7e7e715] border-l relative">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
        className="w-6 h-6 text-[#e7e7e740] absolute top-0 right-0 -mt-3 -mr-3" aria-hidden="true">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
        <div className="w-[80%] ml-auto mr-auto h-[80%]">
          <p className="text-2xl fon ">Code Ownership</p>
          <p className="text-sm fon mt-5">No hidden dependencies. No vendor lock-in. Only established, widely-adopted npm packages used.

Install via CLI or copy-paste. All components live in your repo — you own your code</p>

        </div>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
        className="w-6 h-6 ml-1  text-[#e7e7e740] absolute bottom-0 right-0 -mb-3 -mr-3" aria-hidden="true">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    
    <div className=" w-[33.33%] border-l  border-[#e7e7e715] h-full flex items-center ">
    <div className="w-[80%] ml-auto mr-auto h-[80%]">
          <p className="text-2xl fon ">Code Ownership</p>
          <p className="text-sm fon mt-5">No hidden dependencies. No vendor lock-in. Only established, widely-adopted npm packages used.</p>


        </div>

    </div>
    <div className=" w-[33.33%] border-l border-r  h-full flex items-center border-[#e7e7e715]">
      
    <div className="w-[80%] ml-auto mr-auto h-[80%]">
          <p className="text-2xl fon ">Code Ownership</p>
          <p className="text-sm fon mt-5">No hidden dependencies. No vendor lock-in. Only established, widely-adopted npm packages used.

Install via CLI or copy-paste. All components live in your repo — you own your code</p>

        </div>

    </div>
   
  </div>
  
  
  <div className="w-[54%] ml-auto mr-auto border-t border-[#e7e7e715]  flex items-center justify-center h-[50px]"> 

  <div className="   w-full h-full flex">
    <div className="w-[20%] flex items-center justify-center">
    <TiltedLines  height={50} showIcons={false}/>

    </div>
    <div className=" w-full flex items-center justify-center h-full">
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
    <svg className="" xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 256 256"> <defs><linearGradient id="logosNextjsIcon0" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><linearGradient id="logosNextjsIcon1" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><circle id="logosNextjsIcon2" cx="128" cy="128" r="128"/></defs><mask id="logosNextjsIcon3" fill="#fff"><use href="#logosNextjsIcon2"/></mask><g mask="url(#logosNextjsIcon3)"><circle cx="128" cy="128" r="128"/><path fill="url(#logosNextjsIcon0)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"/><path fill="url(#logosNextjsIcon1)" d="M163.556 76.8h17.067v102.4h-17.067z"/></g></svg>

    </div>
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
    <svg className="" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 263"> <defs><linearGradient id="logosSupabaseIcon0" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%"><stop offset="0%" stopColor="#249361"></stop><stop offset="100%" stopColor="#3ECF8E"></stop></linearGradient><linearGradient id="logosSupabaseIcon1" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%"><stop offset="0%"></stop><stop offset="100%" stopOpacity="0"></stop></linearGradient></defs><path fill="url(#logosSupabaseIcon0)" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="url(#logosSupabaseIcon1)" fillOpacity=".2" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="#3ECF8E" d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"></path></svg>

    </div>
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="1.65em" height="1.65em" viewBox="0 0 256 351"><defs><filter id="logosFirebase0" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix></filter><filter id="logosFirebase1" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="3.5"></feGaussianBlur><feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix></filter><path id="logosFirebase2" d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"></path><path id="logosFirebase3" d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"></path></defs><path fill="#FFC24A" d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"></path><use fill="#FFA712" fillRule="evenodd" href="#logosFirebase2"></use><use filter="url(#logosFirebase0)" href="#logosFirebase2"></use><path fill="#F4BD62" d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"></path><use fill="#FFA50E" fillRule="evenodd" href="#logosFirebase3"></use><use filter="url(#logosFirebase1)" href="#logosFirebase3"></use><path fill="#F6820C" d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"></path><path fill="#FDE068" d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.13 24.13 0 0 0 23.513.005"></path><path fill="#FCCA3F" d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.94 23.94 0 0 0 23.334.006z"></path><path fill="#EEAB37" d="M139.12 345.64a24.13 24.13 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.13 24.13 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"></path></svg>
    </div>
    </div>
    <div className="ml-auto w-[25%] ">
    <TiltedLines  height={50} showIcons={false} />
    

    </div>
  </div>
  <div className="   w-full h-full flex">
    <div className="w-[20%] flex items-center justify-center">
    <TiltedLines  height={50} showIcons={false}/>

    </div>
    <div className=" w-full flex items-center justify-center h-full">
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
    <svg className="" xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 256 256"> <defs><linearGradient id="logosNextjsIcon0" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><linearGradient id="logosNextjsIcon1" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><circle id="logosNextjsIcon2" cx="128" cy="128" r="128"/></defs><mask id="logosNextjsIcon3" fill="#fff"><use href="#logosNextjsIcon2"/></mask><g mask="url(#logosNextjsIcon3)"><circle cx="128" cy="128" r="128"/><path fill="url(#logosNextjsIcon0)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"/><path fill="url(#logosNextjsIcon1)" d="M163.556 76.8h17.067v102.4h-17.067z"/></g></svg>

    </div>
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
    <svg className="" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 263"> <defs><linearGradient id="logosSupabaseIcon0" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%"><stop offset="0%" stopColor="#249361"></stop><stop offset="100%" stopColor="#3ECF8E"></stop></linearGradient><linearGradient id="logosSupabaseIcon1" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%"><stop offset="0%"></stop><stop offset="100%" stopOpacity="0"></stop></linearGradient></defs><path fill="url(#logosSupabaseIcon0)" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="url(#logosSupabaseIcon1)" fillOpacity=".2" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="#3ECF8E" d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"></path></svg>

    </div>
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="1.65em" height="1.65em" viewBox="0 0 256 351"><defs><filter id="logosFirebase0" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix></filter><filter id="logosFirebase1" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="3.5"></feGaussianBlur><feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix></filter><path id="logosFirebase2" d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"></path><path id="logosFirebase3" d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"></path></defs><path fill="#FFC24A" d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"></path><use fill="#FFA712" fillRule="evenodd" href="#logosFirebase2"></use><use filter="url(#logosFirebase0)" href="#logosFirebase2"></use><path fill="#F4BD62" d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"></path><use fill="#FFA50E" fillRule="evenodd" href="#logosFirebase3"></use><use filter="url(#logosFirebase1)" href="#logosFirebase3"></use><path fill="#F6820C" d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"></path><path fill="#FDE068" d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.13 24.13 0 0 0 23.513.005"></path><path fill="#FCCA3F" d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.94 23.94 0 0 0 23.334.006z"></path><path fill="#EEAB37" d="M139.12 345.64a24.13 24.13 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.13 24.13 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"></path></svg>
    </div>
    </div>
    <div className="ml-auto w-[25%] ">
    <TiltedLines  height={50} showIcons={false} />
    

    </div>
  </div>

  <div className="  w-full h-full flex">
  <div className="w-[20%]">
    <TiltedLines  height={50} showIcons={false} />
    </div>
    <div className=" w-full flex items-center justify-center h-full">
    <div className="w-full h-full border  border-[#e7e7e715]  flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"> <defs><linearGradient id="logosNextjsIcon0" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><linearGradient id="logosNextjsIcon1" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><circle id="logosNextjsIcon2" cx="128" cy="128" r="128"/></defs><mask id="logosNextjsIcon3" fill="#fff"><use href="#logosNextjsIcon2"/></mask><g mask="url(#logosNextjsIcon3)"><circle cx="128" cy="128" r="128"/><path fill="url(#logosNextjsIcon0)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"/><path fill="url(#logosNextjsIcon1)" d="M163.556 76.8h17.067v102.4h-17.067z"/></g></svg></div>
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="33.24" height="28" viewBox="0 0 256 220"> <path fill="#912626" d="M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075s-23.437 7.78-35.34 2.09c-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95c13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988"/><path fill="#C6302B" d="m174.782 115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.82 1.82 0 0 1-1.459-.776a1.92 1.92 0 0 1-.203-1.693a2.5 2.5 0 0 1 2.154-1.662l93.173-1.193c11.063-.511 23.015-9.58 27.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126 20.51 166.91 0 137.96 0C111.269 0 88.626 17.403 80.5 41.596a27 27 0 0 0-19.156-5.359C48.549 37.524 38.25 47.946 36.979 60.88a27.9 27.9 0 0 0 .702 9.642C16.773 71.145 0 88.454 0 109.726c0 1.923.137 3.818.413 5.667c.115.897.879 1.57 1.783 1.568h170.48a2.22 2.22 0 0 0 2.106-1.63"></path></svg>
    </div>
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="2.19em" height="1em" viewBox="0 0 256 117"><path fill="#FBAD41" d="M205.52 50.813c-.858 0-1.705.03-2.551.058q-.207.012-.398.094a1.42 1.42 0 0 0-.92.994l-3.628 12.672c-1.565 5.449-.983 10.48 1.646 14.174c2.41 3.416 6.42 5.421 11.289 5.655l19.679 1.194c.585.03 1.092.312 1.4.776a1.92 1.92 0 0 1 .2 1.692a2.5 2.5 0 0 1-2.134 1.662l-20.448 1.193c-11.11.515-23.062 9.58-27.255 20.633l-1.474 3.9a1.092 1.092 0 0 0 .967 1.49h70.425a1.87 1.87 0 0 0 1.81-1.365A51.2 51.2 0 0 0 256 101.828c0-28.16-22.582-50.984-50.449-50.984"></path><path fill="#F6821F" d="m174.782 115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.82 1.82 0 0 1-1.459-.776a1.92 1.92 0 0 1-.203-1.693a2.5 2.5 0 0 1 2.154-1.662l93.173-1.193c11.063-.511 23.015-9.58 27.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126 20.51 166.91 0 137.96 0C111.269 0 88.626 17.403 80.5 41.596a27 27 0 0 0-19.156-5.359C48.549 37.524 38.25 47.946 36.979 60.88a27.9 27.9 0 0 0 .702 9.642C16.773 71.145 0 88.454 0 109.726c0 1.923.137 3.818.413 5.667c.115.897.879 1.57 1.783 1.568h170.48a2.22 2.22 0 0 0 2.106-1.63"></path></svg>

    </div>
    </div>
    <div className="ml-auto w-[25%]">
    <TiltedLines  height={50} showIcons={false} />
    </div>
  </div>

  </div>




  <TiltedLines  borderL={true} borderR={true}  />


  <div className="w-[54%] ml-auto mr-auto h-[350px] ">
  <div className="border-b border-l  border-[#e7e7e715]  h-[350px] w-full flex">
    <div className=" w-[60%] h-full flex items-center ">
      
<div className=" w-[100%] flex ">
      <div className="w-[85%]  flex ml-auto mr-auto items-center justify-center">
        <div className="  ml-auto mr-auto w-full items-center justify-center">
          <p className="fon text-2xl mb-4">Inspired by Epic Games</p>
          <p className="fon text-sm">shadcn/ui changed the game, by setting new standards for Web UI tooling, component composition and distribution.

We’re huge fans of the shadcn/ui approach and are proud to build upon its foundation.

Every component from uipub registry is compatible with shadcn/ui CLI.</p>
          </div>
      </div>
    </div>
    </div>
    <div className="w-[40%] border-l border-r border-[#e7e7e715] "></div>
  </div>
  {/* <div className="border border-[#e7e7e715]  h-[200px] w-full flex">
    <div className=" w-[60%] h-full">
      
<div className=" w-[100%] flex ">
      <div className="w-[85%]  flex ml-auto mr-auto items-center justify-center">
        <div className="h-[70%]  ml-auto mr-auto w-full items-center justify-center">
          <p className="fon text-2xl mb-4">Inspired by Epic Games</p>
          <p className="fon text-sm">shadcn/ui changed the game, by setting new standards for Web UI tooling, component composition and distribution.

We’re huge fans of the shadcn/ui approach and are proud to build upon its foundation.

Every component from uipub registry is compatible with shadcn/ui CLI.</p>
          </div>
      </div>
    </div>
    </div>
    
    <div className="w-[40%]  border-l border-[#e7e7e715] ml-[1px]"></div>
  </div> */}
</div> 
<div className="w-[54%] ml-auto mr-auto h-[350px] ">
  <div className="border-b border-l  border-[#e7e7e715]  h-[350px] w-full flex">
    <div className=" w-[60%] h-full flex items-center ">
      
<div className=" w-[100%] flex ">
      <div className="w-[85%]  flex ml-auto mr-auto items-center justify-center">
        <div className="  ml-auto mr-auto w-full items-center justify-center">
          <p className="fon text-2xl mb-4">Inspired by Epic Games</p>
          <p className="fon text-sm">shadcn/ui changed the game, by setting new standards for Web UI tooling, component composition and distribution.

We’re huge fans of the shadcn/ui approach and are proud to build upon its foundation.

Every component from uipub registry is compatible with shadcn/ui CLI.</p>
          </div>
      </div>
    </div>
    </div>
    <div className="w-[40%] border-l border-r border-[#e7e7e715] "></div>
  </div>
  {/* <div className="border border-[#e7e7e715]  h-[200px] w-full flex">
    <div className=" w-[60%] h-full">
      
<div className=" w-[100%] flex ">
      <div className="w-[85%]  flex ml-auto mr-auto items-center justify-center">
        <div className="h-[70%]  ml-auto mr-auto w-full items-center justify-center">
          <p className="fon text-2xl mb-4">Inspired by Epic Games</p>
          <p className="fon text-sm">shadcn/ui changed the game, by setting new standards for Web UI tooling, component composition and distribution.

We’re huge fans of the shadcn/ui approach and are proud to build upon its foundation.

Every component from uipub registry is compatible with shadcn/ui CLI.</p>
          </div>
      </div>
    </div>
    </div>
    
    <div className="w-[40%]  border-l border-[#e7e7e715] ml-[1px]"></div>
  </div> */}
</div> <div className="w-[54%] ml-auto mr-auto h-[350px] ">
  <div className="border-b border-l  border-[#e7e7e715]  h-[350px] w-full flex">
    <div className=" w-[60%] h-full flex items-center ">
      
<div className=" w-[100%] flex ">
      <div className="w-[85%]  flex ml-auto mr-auto items-center justify-center">
        <div className="  ml-auto mr-auto w-full items-center justify-center">
          <p className="fon text-2xl mb-4">Inspired by Epic Games</p>
          <p className="fon text-sm">shadcn/ui changed the game, by setting new standards for Web UI tooling, component composition and distribution.

We’re huge fans of the shadcn/ui approach and are proud to build upon its foundation.

Every component from uipub registry is compatible with shadcn/ui CLI.</p>
          </div>
      </div>
    </div>
    </div>
    <div className="w-[40%] border-l border-r border-[#e7e7e715] "></div>
  </div>
  {/* <div className="border border-[#e7e7e715]  h-[200px] w-full flex">
    <div className=" w-[60%] h-full">
      
<div className=" w-[100%] flex ">
      <div className="w-[85%]  flex ml-auto mr-auto items-center justify-center">
        <div className="h-[70%]  ml-auto mr-auto w-full items-center justify-center">
          <p className="fon text-2xl mb-4">Inspired by Epic Games</p>
          <p className="fon text-sm">shadcn/ui changed the game, by setting new standards for Web UI tooling, component composition and distribution.

We’re huge fans of the shadcn/ui approach and are proud to build upon its foundation.

Every component from uipub registry is compatible with shadcn/ui CLI。</p>
          </div>
      </div>
    </div>
    </div>
    
    <div className="w-[40%]  border-l border-[#e7e7e715] ml-[1px]"></div>
  </div> */}
</div> 
<TiltedLines  borderL={true} borderR={true}  />
<div className="w-[54%] ml-auto mr-auto h-[350px] ">
  <div className="border-b border-l  border-[#e7e7e715]  h-[350px] w-full flex">
    <div className=" w-[60%] h-full flex items-center ">
      
<div className=" w-[100%] flex ">
      <div className="w-[85%]  flex ml-auto mr-auto items-center justify-center">
        <div className="  ml-auto mr-auto w-full items-center justify-center">
          <p className="fon text-2xl mb-4">Inspired by Epic Games</p>
          <p className="fon text-sm">shadcn/ui changed the game, by setting new standards for Web UI tooling, component composition and distribution.

We’re huge fans of the shadcn/ui approach and are proud to build upon its foundation.

Every component from uipub registry is compatible with shadcn/ui CLI.</p>
          </div>
      </div>
    </div>
    </div>
    <div className="w-[40%] border-l border-r border-[#e7e7e715] "></div>
  </div>

</div>


<div className="w-[54%] ml-auto mr-auto h-[350px] ">
  <div className="border-b border-r border-l  border-[#e7e7e715]  h-[350px] w-full flex">
    <div className=" w-[100%] h-full flex items-center ">
      

    </div>
  
  </div>
  
</div>
<div className="w-[54%] ml-auto mr-auto h-[250px] ">
  <div className="border-b  border-r border-l  border-[#e7e7e715]  h-[250px] w-full flex">
    <div className=" w-[100%] h-full flex items-center ">
      

    </div>
  
  </div>
  
</div>
<TiltedLines  borderL={true} borderR={true}  />
<div className="w-[54%] ml-auto mr-auto min-h-[600px] ">
  <div className="border-b border-l  border-[#e7e7e715] min-h-[600px] w-full flex">
    <div className=" w-[33.33%]  border-r border-[#e7e7e715] min-h-[600px] flex items-center relative">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
        className="w-6 h-6 text-[#e7e7e740] absolute top-0 right-0 -mt-3 -mr-3" aria-hidden="true">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      
      <div className=" w-[80%] h-[85%] ml-auto mr-auto">
        <p className="text-2xl fon">Common Questions</p>
        <p className="text-xs ml-0.5 mt-1.5 fon">Still have questions? Email Me</p>
      </div>

      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
        className=" w-6 h-6  text-[#e7e7e740] absolute bottom-0 right-0 -mb-3 -mr-3.5" aria-hidden="true">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div className=" w-[66.66%]  border-r min-h-[600px] border-[#e7e7e715]  ">


<CommonQuestionItem borderSide="" question={"What Is Your Education?"} answer={"I will receive a M.Tech degree in 2026 and B.E. in IT Engineering from SVIT, Vasad (GTU) in 2024, building on my Diploma in Computer Engineering (8 CGPA) from Parul Polytechnic Institute (GTU)."} />
<CommonQuestionItem question={" What Are Your Experiences?"} answer={" Primarily project-based, focusing on full-stack web development using technologies like Next.js, PostgreSQL, Firebase, and Supabase. I'm eager to apply my skills in a professional setting"}  />
<CommonQuestionItem question={"How Are You In Communications?"} answer={"I communicate effectively with open-mindedness, active listening, and clear articulation. Beyond conveying technical details, I focus on building rapport, understanding project needs, and ensuring everyone is aligned. My soft skills enable me to foster collaborative environments, manage expectations, and maintain professionalism in all interactions. This enables me to deliver a project under the desired requirements. "}  />
<CommonQuestionItem question={"What Are Your Projects Made By?"} answer={"My projects showcase my full-stack development capabilities, from project initiation to completion, by working on Frontend, Backend, and the integration of the Backend to the Frontend. I am skilled in choosing the right technologies to meet specific project requirements. This includes server-side rendering, interactive front-ends, data management, and leveraging cloud platforms for scalable backend services. "}  />
<CommonQuestionItem question={"Are You Down To Learn New Languages? "} answer={" Absolutely"}  />
<CommonQuestionItem question={"  Are You Down To Relocate To Another Town?"} answer={" I'm open to relocation depending on the role and company. I prioritize opportunities that align with my growth targets."}  />
<CommonQuestionItem question={"What Is Your Current CTC and Position? "} answer={"Im currently holding on an offer of 4LPA but on the same time also, I'm actively seeking entry-level opportunities that offer hands-on experience and long-term rowth potential. "}  />
<CommonQuestionItem question={"Have You Done Any Internships Till This Day? "} answer={"I'm currently looking for internships to gain real-world experience and contribute to meaningful projects. I am actively applying and interviewing "}  />
<CommonQuestionItem borderSide="border-b border-t" question={"How Many Languages Do You Know? "} answer={" I'm fluent in English, Hindi, Marathi, and Gujarati."}  />

      </div>
  </div>
  
</div>
<TiltedLines  borderL={true} borderR={true}  />
<div className="w-[54%] border-b  border-[#e7e7e715] ml-auto mr-auto h-[250px] ">
  <div className="border-b border-l border-r border-[#e7e7e715]  h-[250px] w-full flex">
    <div className=" w-[100%] h-full flex items-center justify-center ">
      
    <div className="h-[70%]  w-[95%] flex items-start  ">
    <p className="text-sm fon">© 2025 Designed & Developed By Bhargav Joshi</p>
    </div>


    </div>
  
  </div>
  
</div>
{/* <div className="h-[50%]"> <p>wd</p></div> */}
{/* <div className="h-[200px] mt-4 w-[54%] ml-auto mr-auto flex items-center justify-center">
  <p className="text-3xl fon">MILLIONS OF USERS ONE SCALABLE EXPERIENCE</p>
</div> */}

</div>


    </>
  );
}
