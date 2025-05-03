
import TiltedLines from "@/components/extra/tiltedlines";
import CommonQuestionItem from "@/components/extra/commonquestionitem";
import Meeter from "@/components/extra/meeter";
import Scro from "@/components/extra/scro";
import Scrox from "@/components/extra/scro";
import CdnOpt from "@/components/extra/cdnopt";


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
      <div className=" min-w-[54%] flex items-center justify-center   text-sm   "><p className="fon lit">Current Status: On Internship Under Amazon Hydrabad 6M </p> <div className="  h-[10px] w-[10px] ml-4 bg-green-500 rounded-full glow-green"></div></div>
      <div className="min-w-[23%] h-full tilted-lines border border-[#e7e7e715] flex   items-end  justify-start">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#e7e7e740] -ml-3 -mb-3" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      </div>

      </div>

      <div className="flex">
        <div className="min-w-[23%] h-full "></div>
        <div className="min-w-[54%]  flex border-l border-r  border-[#e7e7e730] ">
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
          <div className=" absolute z-20 w-[54%] flex  h-[67%]">
            
          <div className="w-[61.5%] flex flex-col items-center justify-center mr-auto  h-full">

          <div className="w-[85%] h-[35%]  -mt-10 ">
            <div className=" w-full h-[10%] flex items-end pb-4 justify-start ">
          <p className="text-sm fonc mb-2 text-[#e7e7e780] ">In The Pixel Perfection Era</p>

            </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-6xl objr text-[#e7e7e7]  ">Perfect solutions to build next-gen experiences</p>
          </div>
         
          
          </div>
          <div className="h-[35%] w-[85%] "> 
          <p className="fonc text-md mt-5 text-[#e7e7e770]">
          A passionate Full-Stack Developer focused on building high-performance, scalable web applications. transform complex ideas into robust, user-centric digital experiences.
          </p>
          <div className="flex mt-10">
          <p className="fonc  text-[#e7e7e770] mr-1.5"> For the </p><p className="fon">Pixel Perfection.</p>
          </div></div>
          </div>
          
          <div className="w-[38.5%]  bg-[#0059ff11]">
          <div className="w-full h-[38%] bg-[#17ff3e10] flex">
           <div className="w-[37%] bg-[#ff991356] h-full items-end flex" >
            
            

           <div className="w-[68%] bg-[#13ff1f56] h-[40%]" >
            
            </div> 
            <div className="w-[33%] bg-[#d813ff56] h-[40%]" >
            {/* <Switch /> */}

            </div>






            </div> 
            <div className="w-[64%] bg-[#13ff8956] h-full" >
            
            </div> 
          </div>
          <div className="w-full h-[61%] bg-[#c917ff10] ">
            
            </div>
          </div>

            
             </div>

          

        </div>
        
        <div className="min-w-[23.25%]  ">

          
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
    className=" fill-[#e7e7e715] h-[135%] ml-auto mr-auto  mt-29"
    src="/sq2.svg"
    alt="sq2"
    style={{ pointerEvents: "none" }}
  />
</div>
<div className=" h-[300px] w-[54%] ml-auto mr-auto flex">
    <div className=" w-[33.33%] h-full flex items-center border-[#e7e7e715] border-l">

        <div className="w-[80%] ml-auto mr-auto h-[80%]">
         <div className="  w-[100%] h-[50px] items-center justify-start flex">
         <p className="text-2xl fon ">Anime Alley</p>
         <img src="/aa.png" className="ml-auto end-0" alt="" />
         </div>
          <p className="text-sm fon mt-5 ">No hidden dependencies. No vendor lock-in. Only established, widely-adopted npm packages used.
<br /><br />
Install via CLI or copy-paste. All components live in your repo — you own your code</p>

        </div>
    </div>
    
    <div className=" w-[33.33%] border-l  border-[#e7e7e715] h-full flex items-center ">
    <div className="w-[80%] ml-auto mr-auto h-[80%]">
    <div className="  w-[100%] h-[50px] items-center justify-start flex">
         <p className="text-2xl fon ">Manga Fusion</p>
         <img src="/mf.png" className="ml-auto end-0" alt="" />
         </div>
          <p className="text-sm fon mt-5">No hidden dependencies. No vendor lock-in. Only established, widely-adopted npm packages used.</p>


        </div>

    </div>
    <div className=" w-[33.33%] border-l border-r  h-full flex items-center border-[#e7e7e715]">
      
    <div className="w-[80%] ml-auto mr-auto h-[80%]">
    <div className="  w-[100%] h-[50px] items-center justify-start flex">
         <p className="text-2xl fon ">0ms - LAS </p>
         <img src="/ms.png" className="ml-auto end-0" alt="" />
         </div>
         <p className="text-sm fon ">Latency Intelligence SaaS</p>

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
    {/* <svg className="" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 263"> <defs><linearGradient id="logosSupabaseIcon0" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%"><stop offset="0%" stopColor="#249361"></stop><stop offset="100%" stopColor="#3ECF8E"></stop></linearGradient><linearGradient id="logosSupabaseIcon1" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%"><stop offset="0%"></stop><stop offset="100%" stopOpacity="0"></stop></linearGradient></defs><path fill="url(#logosSupabaseIcon0)" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="url(#logosSupabaseIcon1)" fillOpacity=".2" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="#3ECF8E" d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"></path></svg> */}
    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 153"><path fill="#252F3E" d="M72.392 55.438c0 3.137.34 5.68.933 7.545a45.4 45.4 0 0 0 2.712 6.103c.424.678.593 1.356.593 1.95c0 .847-.508 1.695-1.61 2.543l-5.34 3.56c-.763.509-1.526.763-2.205.763c-.847 0-1.695-.424-2.543-1.187a26 26 0 0 1-3.051-3.984c-.848-1.44-1.696-3.052-2.628-5.001q-9.919 11.697-24.922 11.698c-7.12 0-12.8-2.035-16.954-6.103c-4.153-4.07-6.272-9.495-6.272-16.276c0-7.205 2.543-13.054 7.714-17.462c5.17-4.408 12.037-6.612 20.768-6.612c2.882 0 5.849.254 8.985.678c3.137.424 6.358 1.102 9.749 1.865V29.33c0-6.443-1.357-10.935-3.985-13.563c-2.712-2.628-7.29-3.9-13.817-3.9c-2.967 0-6.018.34-9.155 1.103s-6.188 1.695-9.155 2.882c-1.356.593-2.373.932-2.967 1.102s-1.017.254-1.356.254c-1.187 0-1.78-.848-1.78-2.628v-4.154c0-1.356.17-2.373.593-2.966c.424-.594 1.187-1.187 2.374-1.78q4.45-2.29 10.68-3.815C33.908.763 38.316.255 42.978.255c10.088 0 17.463 2.288 22.21 6.866c4.662 4.577 7.036 11.528 7.036 20.853v27.464zM37.976 68.323c2.798 0 5.68-.508 8.731-1.526c3.052-1.017 5.765-2.882 8.053-5.425c1.357-1.61 2.374-3.39 2.882-5.425c.509-2.034.848-4.493.848-7.375v-3.56a71 71 0 0 0-7.799-1.441a64 64 0 0 0-7.968-.509c-5.68 0-9.833 1.102-12.63 3.391s-4.154 5.51-4.154 9.748c0 3.984 1.017 6.951 3.136 8.986c2.035 2.119 5.002 3.136 8.901 3.136m68.069 9.155c-1.526 0-2.543-.254-3.221-.848c-.678-.508-1.272-1.695-1.78-3.305L81.124 7.799c-.51-1.696-.764-2.798-.764-3.391c0-1.356.678-2.12 2.035-2.12h8.307c1.61 0 2.713.255 3.306.848c.678.509 1.187 1.696 1.695 3.306l14.241 56.117l13.224-56.117c.424-1.695.933-2.797 1.61-3.306c.679-.508 1.866-.847 3.392-.847h6.781c1.61 0 2.713.254 3.39.847c.679.509 1.272 1.696 1.611 3.306l13.394 56.795L168.01 6.442c.508-1.695 1.102-2.797 1.695-3.306c.678-.508 1.78-.847 3.306-.847h7.883c1.357 0 2.12.678 2.12 2.119c0 .424-.085.848-.17 1.356s-.254 1.187-.593 2.12l-20.43 65.525q-.762 2.544-1.78 3.306c-.678.509-1.78.848-3.22.848h-7.29c-1.611 0-2.713-.254-3.392-.848c-.678-.593-1.271-1.695-1.61-3.39l-13.14-54.676l-13.054 54.59c-.423 1.696-.932 2.798-1.61 3.391c-.678.594-1.865.848-3.39.848zm108.927 2.289c-4.408 0-8.816-.509-13.054-1.526c-4.239-1.017-7.544-2.12-9.748-3.39c-1.357-.764-2.29-1.611-2.628-2.374a6 6 0 0 1-.509-2.374V65.78c0-1.78.678-2.628 1.95-2.628a4.8 4.8 0 0 1 1.526.255c.508.17 1.271.508 2.119.847a46 46 0 0 0 9.324 2.967a51 51 0 0 0 10.088 1.017c5.34 0 9.494-.932 12.376-2.797s4.408-4.577 4.408-8.053c0-2.373-.763-4.323-2.289-5.934s-4.408-3.051-8.561-4.408l-12.292-3.814c-6.188-1.95-10.765-4.832-13.563-8.647c-2.797-3.73-4.238-7.883-4.238-12.291q0-5.34 2.289-9.41c1.525-2.712 3.56-5.085 6.103-6.95c2.543-1.95 5.425-3.391 8.816-4.408c3.39-1.017 6.95-1.441 10.68-1.441c1.865 0 3.815.085 5.68.339c1.95.254 3.73.593 5.51.932c1.695.424 3.306.848 4.832 1.357q2.288.762 3.56 1.525c1.187.679 2.034 1.357 2.543 2.12q.763 1.017.763 2.797v3.984c0 1.78-.678 2.713-1.95 2.713c-.678 0-1.78-.34-3.22-1.018q-7.25-3.306-16.276-3.306c-4.832 0-8.647.763-11.275 2.374c-2.627 1.61-3.984 4.069-3.984 7.544c0 2.374.848 4.408 2.543 6.019s4.832 3.221 9.325 4.662l12.037 3.815c6.103 1.95 10.511 4.662 13.139 8.137s3.9 7.46 3.9 11.868c0 3.645-.764 6.951-2.205 9.833c-1.525 2.882-3.56 5.425-6.188 7.46c-2.628 2.119-5.764 3.645-9.409 4.747c-3.815 1.187-7.799 1.78-12.122 1.78"></path><path fill="#F90" d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534c-48.827 0-92.821-18.056-126.05-48.064c-2.628-2.373-.255-5.594 2.881-3.73c35.942 20.854 80.276 33.484 126.136 33.484c30.94 0 64.932-6.442 96.212-19.666c4.662-2.12 8.646 3.052 4.068 6.442m11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102c-2.713.34-3.137-2.034-.678-3.814c15.936-11.19 42.13-7.968 45.181-4.239c3.052 3.815-.848 30.008-15.767 42.554c-2.288 1.95-4.492.933-3.475-1.61c3.39-8.393 10.935-27.296 7.375-31.789"></path></svg>
    </div>
    <div className="w-full h-full border  border-[#e7e7e715]  flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="1.9em" height="1.9em" viewBox="0 0 256 383"><path fill="#DFDEDF" d="M253.422 214.246H2.192v-14.168c0-9.52 7.717-17.237 17.236-17.237h216.757c9.52 0 17.237 7.717 17.237 17.237z"></path><path fill="#FFF" d="M235.92 378.553H19.692c-9.666 0-17.502-7.836-17.502-17.502V214.246h251.23V361.05c0 9.666-7.835 17.502-17.502 17.502"></path><path d="M250.302 211.398v-12.706c0-7.501-6.08-13.582-13.581-13.582H19.279c-7.501 0-13.581 6.08-13.581 13.582v12.706zm0 151.469V217.096H5.698v145.77c0 7.502 6.08 13.582 13.581 13.582h217.442c7.501 0 13.581-6.08 13.581-13.581M20.554 179.413l.846-9.236l-3.592 9.31c.487-.037.974-.074 1.471-.074zm213.401-15.57l1.254 15.57h1.512c.809 0 1.601.066 2.384.163zm17.247 22.164c2.977 3.394 4.798 7.826 4.798 12.685v164.175c0 10.63-8.649 19.279-19.279 19.279H19.279C8.649 382.146 0 373.498 0 362.866V198.693c0-5.152 2.043-9.827 5.347-13.29l19.22-49.817l8.381-91.554l9.456.865l-7.552 82.492l2.66 1.026l-3.61 9.358l-3.812 41.64h195.593L214.829 44.669l9.464-.763l6.402 79.469l.004-.001zm-230.045 8.39a4.302 4.302 0 1 1 0 8.603a4.302 4.302 0 0 1 0-8.603m14.708 0a4.302 4.302 0 1 1 0 8.603a4.302 4.302 0 0 1 0-8.603m14.244 0a4.302 4.302 0 1 1 0 8.603a4.302 4.302 0 0 1 0-8.603"></path><path d="M36.022 287.748c.739-.855 1.128-1.979 1.128-3.374s-.39-2.475-1.128-3.33c-.778-.855-1.868-1.26-3.268-1.26h-6.847v9.223h6.847c1.4 0 2.49-.405 3.268-1.259m-3.268-13.497c2.956 0 5.29.9 7.04 2.744c1.752 1.844 2.608 4.318 2.608 7.38c0 3.102-.856 5.532-2.567 7.376c-1.751 1.846-4.085 2.79-7.081 2.79h-6.847v12.414h-5.291v-32.704zm28.544 20.057v-9.54h5.698v21.54h-5.698v-1.942c-1.727 1.726-3.97 2.589-6.777 2.589c-2.59 0-4.662-.863-6.259-2.546s-2.374-3.842-2.374-6.518v-13.123h5.698v11.914c0 1.51.388 2.763 1.208 3.67c.777.906 1.813 1.38 3.151 1.38c3.583 0 5.353-2.46 5.353-7.424m27.926 5.914q1.683-1.749 1.683-4.662c0-1.942-.56-3.54-1.683-4.705c-1.166-1.166-2.59-1.77-4.36-1.77q-2.394 0-4.273 1.813c-1.252 1.209-1.856 2.762-1.856 4.662s.604 3.454 1.856 4.618q1.878 1.815 4.273 1.814c1.77 0 3.194-.604 4.36-1.77m-3.367-16.101c2.806 0 5.31 1.08 7.425 3.238c2.115 2.2 3.15 4.92 3.15 8.2s-1.035 6-3.15 8.159s-4.576 3.237-7.425 3.237q-4.209 0-7.122-2.33v11.959h-5.698v-31.816h5.698v1.727c1.9-1.597 4.273-2.374 7.122-2.374m31.078 16.1q1.683-1.749 1.683-4.661c0-1.942-.561-3.54-1.683-4.705c-1.166-1.166-2.59-1.77-4.36-1.77q-2.395 0-4.273 1.813c-1.252 1.209-1.857 2.762-1.857 4.662s.605 3.454 1.857 4.618q1.878 1.815 4.273 1.814c1.77 0 3.194-.604 4.36-1.77m-3.368-16.1c2.806 0 5.31 1.08 7.426 3.238c2.114 2.2 3.15 4.92 3.15 8.2s-1.036 6-3.15 8.159c-2.116 2.159-4.576 3.237-7.426 3.237q-4.208 0-7.122-2.33v11.959h-5.697v-31.816h5.697v1.727c1.9-1.597 4.274-2.374 7.122-2.374m18.991 8.935h10.403c-.345-1.338-.993-2.33-1.899-2.98c-.907-.646-1.985-.991-3.195-.991a5.7 5.7 0 0 0-3.28 1.036c-1.036.69-1.727 1.683-2.029 2.935m5.31-8.935c2.935 0 5.482 1.036 7.597 3.065c2.115 2.072 3.194 4.704 3.324 7.942v1.943h-16.403q.453 2.264 1.943 3.626c.992.906 2.114 1.38 3.452 1.38c2.461 0 4.231-.95 5.353-2.848l5.094 1.079c-.907 2.202-2.288 3.843-4.1 4.965q-2.72 1.683-6.347 1.682c-3.108 0-5.74-1.078-7.856-3.193s-3.195-4.878-3.195-8.202s1.08-6.086 3.238-8.245c2.115-2.114 4.75-3.194 7.9-3.194m26.632 17.526c1.079 0 2.288-.346 3.583-1.036l1.64 4.748c-1.986 1.079-3.842 1.597-5.612 1.597c-2.633 0-4.705-.734-6.216-2.16c-1.51-1.422-2.244-3.538-2.244-6.43v-8.936h-4.62v-4.662h4.62v-6.517h5.698v6.517h7.036v4.662h-7.036v8.504c0 2.46 1.036 3.713 3.15 3.713m11.954-8.591h10.403c-.345-1.338-.993-2.33-1.899-2.98c-.907-.646-1.985-.991-3.195-.991a5.7 5.7 0 0 0-3.28 1.036c-1.036.69-1.727 1.683-2.029 2.935m5.31-8.935c2.935 0 5.482 1.036 7.597 3.065c2.115 2.072 3.194 4.704 3.324 7.942v1.943h-16.403q.453 2.264 1.943 3.626c.992.906 2.114 1.38 3.452 1.38c2.461 0 4.231-.95 5.353-2.848l5.093 1.079c-.906 2.202-2.287 3.843-4.1 4.965q-2.72 1.683-6.346 1.682c-3.108 0-5.74-1.078-7.856-3.193s-3.195-4.878-3.195-8.202s1.08-6.086 3.238-8.245c2.115-2.114 4.75-3.194 7.9-3.194m20.285 8.935h10.403c-.345-1.338-.993-2.33-1.898-2.98c-.907-.646-1.986-.991-3.196-.991a5.7 5.7 0 0 0-3.28 1.036c-1.036.69-1.727 1.683-2.029 2.935m5.31-8.935c2.935 0 5.482 1.036 7.597 3.065c2.115 2.072 3.195 4.704 3.325 7.942v1.943h-16.404q.453 2.264 1.944 3.626c.992.906 2.114 1.38 3.452 1.38c2.46 0 4.23-.95 5.352-2.848l5.095 1.079c-.907 2.202-2.288 3.843-4.101 4.965q-2.72 1.683-6.346 1.682c-3.108 0-5.742-1.078-7.856-3.193c-2.115-2.115-3.196-4.878-3.196-8.202s1.08-6.086 3.238-8.245c2.115-2.114 4.75-3.194 7.9-3.194m28.66.345c.649 0 1.167.043 1.513.172l-.303 5.483h-1.251c-5.137 0-7.685 3.065-7.685 9.238v6.949h-5.697v-21.54h5.697v3.928c1.943-2.806 4.533-4.23 7.727-4.23"></path><path fill="#00D8A2" d="m211.095 132.638l30.741-14.841v-14.84l-71.023-33.922l71.023-36.571v-14.31L212.155 4.373l-84.096 41.871l-85.51-41.871l-27.561 14.841v12.72L81.77 68.505l-66.782 33.922v15.37l28.621 14.841l84.803-43.462z"></path><path d="M214.95 126.585v-6.392l23.14-11.991v7.18zm-198.1-18.551l22.36 12.836v5.11l-22.36-11.312zM131.383 81.04l76.92 38.005v7.642l-76.92-39.405zm-85.526 39.117l78.88-39.11v6.233l-78.88 39.908zm55.852-63.905L21.887 17.714L42.561 7.207L128.06 51.53l84.067-44.304l21.404 10.963l-77.84 39.174c-3.113 1.566-3.108 6.01.007 7.57l77.038 38.557l-19.968 10.347l-84.708-43.403l-86.206 44.289l-19.689-11.303l79.59-39.562c3.152-1.567 3.126-6.075-.045-7.606M17.844 30.77v-7.014L92.29 60.899l-7.526 3.007zm152.654 33.548c-.102-.062-7.13-3.378-7.13-3.378l74.721-37.605v7.045zm7.48 3.683l65.674-32.976a1.97 1.97 0 0 0 1.085-1.76v-15.6a1.97 1.97 0 0 0-1.07-1.752L213.032.222a1.97 1.97 0 0 0-1.788-.003l-82.303 41.764a1.97 1.97 0 0 1-1.769.006L43.42.207a1.97 1.97 0 0 0-1.77.007L11.28 15.648a1.97 1.97 0 0 0-1.078 1.755v15.855c0 .749.425 1.433 1.097 1.765L77.25 67.607l-65.646 32.595a1.97 1.97 0 0 0-1.092 1.727l-.287 15.59a1.97 1.97 0 0 0 1.08 1.793l31.536 15.956a1.97 1.97 0 0 0 1.772.002l82.558-41.455a1.97 1.97 0 0 1 1.775.004l81.53 41.454a1.97 1.97 0 0 0 1.748.017l31.402-15.203a1.97 1.97 0 0 0 1.111-1.771v-16.29a1.97 1.97 0 0 0-1.1-1.767z"></path></svg>
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
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="33.24" height="28" viewBox="0 0 256 220"> <path fill="#912626" d="M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075s-23.437 7.78-35.34 2.09c-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95c13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988"/><path fill="#C6302B" d="m174.782 115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.82 1.82 0 0 1-1.459-.776a1.92 1.92 0 0 1-.203-1.693a2.5 2.5 0 0 1 2.154-1.662l93.173-1.193c11.063-.511 23.015-9.58 27.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126 20.51 166.91 0 137.96 0C111.269 0 88.626 17.403 80.5 41.596a27 27 0 0 0-19.156-5.359C48.549 37.524 38.25 47.946 36.979 60.88a27.9 27.9 0 0 0 .702 9.642C16.773 71.145 0 88.454 0 109.726c0 1.923.137 3.818.413 5.667c.115.897.879 1.57 1.783 1.568h170.48a2.22 2.22 0 0 0 2.106-1.63"></path></svg> */}
<svg xmlns="http://www.w3.org/2000/svg" width="1.9em" height="1.9em" viewBox="0 0 256 220"><path fill="#912626" d="M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075s-23.437 7.78-35.34 2.09c-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95c13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988"></path><path fill="#C6302B" d="M245.965 143.22c-13.661 7.118-84.431 36.218-99.498 44.072c-15.066 7.857-23.436 7.78-35.338 2.09c-11.903-5.686-87.214-36.113-100.78-42.594c-13.566-6.485-13.85-10.948-.524-16.166c13.326-5.22 88.224-34.605 104.055-40.284c15.828-5.677 21.319-5.884 34.789-.948c13.471 4.934 83.819 32.935 97.13 37.81c13.316 4.881 13.827 8.9.166 16.02"></path><path fill="#912626" d="M245.97 127.074c-13.662 7.122-84.434 36.22-99.501 44.078c-15.067 7.853-23.437 7.777-35.34 2.087c-11.903-5.687-87.216-36.112-100.783-42.597C3.566 127.402 0 124.67 0 122.085V96.206s98.05-21.344 113.879-27.023c15.828-5.679 21.32-5.885 34.79-.95C162.142 73.168 242.688 87.697 256 92.574l-.006 25.513c.002 2.557-3.07 5.363-10.024 8.987"></path><path fill="#C6302B" d="M245.965 101.351c-13.661 7.12-84.431 36.218-99.498 44.075c-15.066 7.854-23.436 7.777-35.338 2.087c-11.903-5.686-87.214-36.112-100.78-42.594c-13.566-6.483-13.85-10.947-.524-16.167C23.151 83.535 98.05 54.148 113.88 48.47c15.828-5.678 21.319-5.884 34.789-.949c13.471 4.934 83.819 32.933 97.13 37.81c13.316 4.88 13.827 8.9.166 16.02"></path><path fill="#912626" d="M245.97 83.653c-13.662 7.12-84.434 36.22-99.501 44.078c-15.067 7.854-23.437 7.777-35.34 2.087c-11.903-5.687-87.216-36.113-100.783-42.595C3.566 83.98 0 81.247 0 78.665v-25.88s98.05-21.343 113.879-27.021c15.828-5.68 21.32-5.884 34.79-.95C162.142 29.749 242.688 44.278 256 49.155l-.006 25.512c.002 2.555-3.07 5.361-10.024 8.986"></path><path fill="#C6302B" d="M245.965 57.93c-13.661 7.12-84.431 36.22-99.498 44.074c-15.066 7.854-23.436 7.777-35.338 2.09C99.227 98.404 23.915 67.98 10.35 61.497S-3.5 50.55 9.825 45.331C23.151 40.113 98.05 10.73 113.88 5.05c15.828-5.679 21.319-5.883 34.789-.948s83.819 32.934 97.13 37.811c13.316 4.876 13.827 8.897.166 16.017"></path><path fill="#FFF" d="m159.283 32.757l-22.01 2.285l-4.927 11.856l-7.958-13.23l-25.415-2.284l18.964-6.839l-5.69-10.498l17.755 6.944l16.738-5.48l-4.524 10.855zm-28.251 57.518L89.955 73.238l58.86-9.035zm-56.95-50.928c17.375 0 31.46 5.46 31.46 12.194c0 6.736-14.085 12.195-31.46 12.195s-31.46-5.46-31.46-12.195c0-6.734 14.085-12.194 31.46-12.194"></path><path fill="#621B1C" d="m185.295 35.998l34.836 13.766l-34.806 13.753z"></path><path fill="#9A2928" d="m146.755 51.243l38.54-15.245l.03 27.519l-3.779 1.478z"></path></svg>
    
    </div>
    <div className="w-full h-full border border-[#e7e7e715] flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="1.2em" viewBox="0 0 256 117"><path fill="#FBAD41" d="M205.52 50.813c-.858 0-1.705.03-2.551.058q-.207.012-.398.094a1.42 1.42 0 0 0-.92.994l-3.628 12.672c-1.565 5.449-.983 10.48 1.646 14.174c2.41 3.416 6.42 5.421 11.289 5.655l19.679 1.194c.585.03 1.092.312 1.4.776a1.92 1.92 0 0 1 .2 1.692a2.5 2.5 0 0 1-2.134 1.662l-20.448 1.193c-11.11.515-23.062 9.58-27.255 20.633l-1.474 3.9a1.092 1.092 0 0 0 .967 1.49h70.425a1.87 1.87 0 0 0 1.81-1.365A51.2 51.2 0 0 0 256 101.828c0-28.16-22.582-50.984-50.449-50.984"></path><path fill="#F6821F" d="m174.782 115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.82 1.82 0 0 1-1.459-.776a1.92 1.92 0 0 1-.203-1.693a2.5 2.5 0 0 1 2.154-1.662l93.173-1.193c11.063-.511 23.015-9.58 27.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126 20.51 166.91 0 137.96 0C111.269 0 88.626 17.403 80.5 41.596a27 27 0 0 0-19.156-5.359C48.549 37.524 38.25 47.946 36.979 60.88a27.9 27.9 0 0 0 .702 9.642C16.773 71.145 0 88.454 0 109.726c0 1.923.137 3.818.413 5.667c.115.897.879 1.57 1.783 1.568h170.48a2.22 2.22 0 0 0 2.106-1.63"></path></svg>



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
          <p className="text-2xl fon ">Coming Soon</p>
          <p className="text-sm fon mt-5">Upcoming Project</p>

        </div>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
        className="w-6 h-6 ml-1  text-[#e7e7e740] absolute bottom-0 right-0 -mb-3 -mr-3" aria-hidden="true">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    
    <div className=" w-[33.33%] border-l  border-[#e7e7e715] h-full flex items-center ">
    <div className="w-[80%] ml-auto mr-auto h-[80%]">
    <div className="  w-[100%] h-[50px] items-center justify-start flex">
         <p className="text-2xl fon ">Noteworthy</p>
         <img src="/note.png" className="ml-auto end-0" alt="" />
         </div>
         <p className="text-sm fon mt-5">No hidden dependencies. No vendor lock-in. Only established, widely-adopted npm packages used.

Install via CLI or copy-paste. All components live in your repo — you own your code</p>
        </div>

    </div>
    <div className=" w-[33.33%] border-l border-r  h-full flex items-center border-[#e7e7e715]">
      
    <div className="w-[80%] ml-auto mr-auto h-[80%]">
    <p className="text-2xl fon ">Coming Soon</p>
    <p className="text-sm fon mt-5">Upcoming Project</p>

        </div>

    </div>
   
  </div>
  
  
  <div className="w-[54%] ml-auto mr-auto border-t border-[#e7e7e715]  flex items-center justify-center h-[50px]"> 

  <div className=" border-l border-[#e7e7e715]   w-full h-full flex">
   
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

  <div className="  w-full h-full flex border-r border-[#e7e7e715] ">
  
  </div>

  </div>




  <TiltedLines  borderL={true} borderR={true}  />


  <div className="w-[54%] ml-auto mr-auto h-[350px] ">
  <div className="border-b border-l  border-[#e7e7e715]  h-[350px] w-full flex">
    <div className=" w-[60%]  h-full flex justify-center items-center ">
      
     <Scrox />
    </div>
    <div className="w-[40%] border-l border-r border-[#e7e7e715] flex items-center ">

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
    <div className="w-[40%] border-l flex items-center justify-center border-r border-[#e7e7e715] ">
      
    </div>
  </div>
 
</div>

 <CdnOpt />
<TiltedLines  borderL={true} borderR={true}  />
<div className="w-[54%] ml-auto mr-auto h-[300px] ">
  <div className="border-b border-l  border-[#e7e7e715]  h-[300px] w-full flex">
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
    <div className="w-[40%] border-l border-r border-[#e7e7e715] ">

    <Meeter />
    {/* <p className="fon text-lg">w</p> */}

    </div>
  </div>

</div>


<div className="w-[54%] ml-auto mr-auto h-[250px]  ">
  <div className="border-b border-r border-l  border-[#e7e7e715]  h-[250px] w-full flex">
    <div className=" w-[100%] h-full justify-center flex items-center ">
      <div className="w-[90%] h-[60%] ">
        <p className="fon text-2xl">Works with any Java Script  stack</p>
        <br />
        <p className="fon text-sm">shadcn/ui changed the game, by setting new standards for Web UI tooling, component composition and distribution. We’re huge fans of the shadcn/ui approach and are proud to build upon its foundation. Every component from uipub registry is compatible with shadcn/ui CLI.</p> <br />

      </div>

    </div>
  
  </div>
  <div className="h-[75px]  w-full flex">
  <div className="w-[20%]">
  <TiltedLines height={75}  showIcons={false}  widthx={100} />
  

  </div>
  <div className="w-[45%] border-b border-r flex items-center justify-center border-[#e7e7e715] ">

<svg className=" fill-[#e7e7e7]" xmlns="http://www.w3.org/2000/svg" width="157.54" height="28" viewBox="0 0 512 104"><path d="M429.543.043v16.46h-35.377V103.1h-17.69V16.504h-36.114V.043zm3.977 93.24c1.246 0 2.336.448 3.259 1.346c.936.897 1.402 1.972 1.415 3.224a4.5 4.5 0 0 1-.66 2.327a4.8 4.8 0 0 1-1.714 1.665a4.4 4.4 0 0 1-2.3.626c-1.296 0-2.398-.449-3.32-1.346c-.923-.898-1.38-1.985-1.368-3.272q-.017-1.878 1.368-3.224c.922-.898 2.024-1.346 3.32-1.346M82.916 103.1L17.69 22.028v81.03H0V0h22.111l82.406 102.329l.001-85.825l-.007-16.461h89.18v16.46h-71.484v26.48h57.488v16.461h-57.488V86.64h71.485v16.46zm167.469-43.813L261.978 73.7l-23.755 29.522h-23.215zM238.223.086l29.93 37.17L297.989.2l23.15-.035l-41.396 51.485l41.463 51.493h-23.217L215.074.086zm225.488 58.97h7.838v30.2c-.011 2.775-.612 5.148-1.785 7.145c-1.187 1.995-2.83 3.519-4.938 4.594c-2.098 1.062-4.555 1.606-7.348 1.606c-2.553 0-4.841-.46-6.879-1.358s-3.655-2.244-4.842-4.016c-1.2-1.771-1.787-3.98-1.787-6.625h7.852c.012 1.157.275 2.16.778 3a5 5 0 0 0 2.086 1.924q1.348.675 3.091.674c1.26 0 2.338-.26 3.213-.792q1.312-.78 2.014-2.338c.455-1.028.695-2.303.707-3.815zm40.09 11.81c-.19-1.83-1.03-3.26-2.492-4.275c-1.475-1.028-3.38-1.535-5.718-1.535c-1.64 0-3.055.248-4.23.732c-1.174.496-2.085 1.157-2.709 1.996c-.622.838-.934 1.795-.959 2.87c0 .897.216 1.677.635 2.326a5.2 5.2 0 0 0 1.714 1.666a11.5 11.5 0 0 0 2.398 1.145q1.33.46 2.66.78l4.087 1.004c1.643.378 3.237.885 4.759 1.535c1.521.638 2.9 1.453 4.11 2.433q1.817 1.47 2.877 3.543c.707 1.382 1.067 3 1.067 4.866c0 2.515-.647 4.724-1.954 6.637c-1.306 1.902-3.188 3.39-5.657 4.465c-2.457 1.063-5.43 1.606-8.929 1.606c-3.38 0-6.328-.52-8.81-1.559c-2.492-1.027-4.434-2.54-5.837-4.524s-2.157-4.405-2.265-7.251h7.768c.107 1.488.587 2.728 1.402 3.732c.826.992 1.905 1.724 3.224 2.22c1.33.485 2.816.733 4.458.733c1.714 0 3.224-.26 4.53-.768c1.295-.508 2.313-1.216 3.045-2.138c.743-.91 1.115-1.984 1.127-3.212c-.012-1.122-.349-2.055-.996-2.788q-.989-1.098-2.733-1.842c-1.173-.496-2.54-.945-4.098-1.334l-4.962-1.252c-3.584-.91-6.424-2.291-8.498-4.146c-2.085-1.854-3.116-4.31-3.116-7.393c0-2.527.695-4.748 2.098-6.65c1.39-1.9 3.296-3.377 5.705-4.428c2.42-1.063 5.154-1.583 8.197-1.583c3.093 0 5.801.52 8.139 1.583c2.336 1.051 4.171 2.515 5.5 4.381c1.331 1.867 2.027 4.004 2.063 6.425z"/></svg>

  </div>

  <div className="w-[25%] pt-[1px]  border-b border-[#e7e7e715] flex items-center justify-center">

    <div className="w-full h-full  border-[#e7e7e715] flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="37.24" height="22" viewBox="0 0 256 220"><path fill="#912626" d="M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075s-23.437 7.78-35.34 2.09c-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95c13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988"/><path fill="#C6302B" d="M245.965 143.22c-13.661 7.118-84.431 36.218-99.498 44.072c-15.066 7.857-23.436 7.78-35.338 2.09c-11.903-5.686-87.214-36.113-100.78-42.594c-13.566-6.485-13.85-10.948-.524-16.166c13.326-5.22 88.224-34.605 104.055-40.284c15.828-5.677 21.319-5.884 34.789-.948c13.471 4.934 83.819 32.935 97.13 37.81c13.316 4.881 13.827 8.9.166 16.02"/><path fill="#912626" d="M245.97 127.074c-13.662 7.122-84.434 36.22-99.501 44.078c-15.067 7.853-23.437 7.777-35.34 2.087c-11.903-5.687-87.216-36.112-100.783-42.597C3.566 127.402 0 124.67 0 122.085V96.206s98.05-21.344 113.879-27.023c15.828-5.679 21.32-5.885 34.79-.95C162.142 73.168 242.688 87.697 256 92.574l-.006 25.513c.002 2.557-3.07 5.363-10.024 8.987"/><path fill="#C6302B" d="M245.965 101.351c-13.661 7.12-84.431 36.218-99.498 44.075c-15.066 7.854-23.436 7.777-35.338 2.087c-11.903-5.686-87.214-36.112-100.78-42.594c-13.566-6.483-13.85-10.947-.524-16.167C23.151 83.535 98.05 54.148 113.88 48.47c15.828-5.678 21.319-5.884 34.789-.949c13.471 4.934 83.819 32.933 97.13 37.81c13.316 4.88 13.827 8.9.166 16.02"/><path fill="#912626" d="M245.97 83.653c-13.662 7.12-84.434 36.22-99.501 44.078c-15.067 7.854-23.437 7.777-35.34 2.087c-11.903-5.687-87.216-36.113-100.783-42.595C3.566 83.98 0 81.247 0 78.665v-25.88s98.05-21.343 113.879-27.021c15.828-5.68 21.32-5.884 34.79-.95C162.142 29.749 242.688 44.278 256 49.155l-.006 25.512c.002 2.555-3.07 5.361-10.024 8.986"/><path fill="#C6302B" d="M245.965 57.93c-13.661 7.12-84.431 36.22-99.498 44.074c-15.066 7.854-23.436 7.777-35.338 2.09C99.227 98.404 23.915 67.98 10.35 61.497S-3.5 50.55 9.825 45.331C23.151 40.113 98.05 10.73 113.88 5.05c15.828-5.679 21.319-5.883 34.789-.948s83.819 32.934 97.13 37.811c13.316 4.876 13.827 8.897.166 16.017"/><path fill="#FFF" d="m159.283 32.757l-22.01 2.285l-4.927 11.856l-7.958-13.23l-25.415-2.284l18.964-6.839l-5.69-10.498l17.755 6.944l16.738-5.48l-4.524 10.855zm-28.251 57.518L89.955 73.238l58.86-9.035zm-56.95-50.928c17.375 0 31.46 5.46 31.46 12.194c0 6.736-14.085 12.195-31.46 12.195s-31.46-5.46-31.46-12.195c0-6.734 14.085-12.194 31.46-12.194"/><path fill="#621B1C" d="m185.295 35.998l34.836 13.766l-34.806 13.753z"/><path fill="#9A2928" d="m146.755 51.243l38.54-15.245l.03 27.519l-3.779 1.478z"/></svg>
    </div>
    <div className="w-full h-full  border-[#e7e7e715] flex items-center justify-center">
     <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 154"><defs><linearGradient id="logosTailwindcssIcon0" x1="-2.778%" x2="100%" y1="32%" y2="67.556%"><stop offset="0%" stopColor="#2298BD"></stop><stop offset="100%" stopColor="#0ED7B5"></stop></linearGradient></defs><path fill="url(#logosTailwindcssIcon0)" d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"></path></svg>
    </div>
    <div className="w-full h-full  border-r flex items-center justify-center border-[#e7e7e715]">

    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>

    </div>



  </div> 

  <div className="w-[25%] border-t border-b border-[#e7e7e715] flex items-center justify-center">
  <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="8.2em" height="1.5em" viewBox="0 0 512 76"><path d="M214.633 47.4h7.505v20.704h13.096v6.643h-20.6zm28.361 13.751v-.08c0-7.856 6.257-14.218 14.61-14.218c8.35 0 14.529 6.295 14.529 14.138v.08c0 7.853-6.257 14.218-14.61 14.218s-14.531-6.287-14.531-14.138zm21.49 0v-.08c0-3.948-2.82-7.384-6.96-7.384c-4.142 0-6.84 3.356-6.84 7.304v.08c0 3.945 2.816 7.384 6.92 7.384c4.1 0 6.88-3.358 6.88-7.304m16.827 1.602V47.41h7.613v15.197c0 3.945 1.965 5.815 4.982 5.815c3.014 0 4.982-1.8 4.982-5.627V47.4h7.61v15.157c0 8.832-4.983 12.69-12.673 12.69s-12.524-3.948-12.524-12.5m36.674-15.34h10.438c9.658 0 15.262 5.625 15.262 13.508v.08c0 7.882-5.685 13.747-15.42 13.747h-10.28V47.4v.01zm10.546 20.621c4.487 0 7.454-2.497 7.454-6.912v-.08c0-4.377-2.974-6.915-7.454-6.915h-3.055v13.907zM354.575 47.4h21.637v6.646h-14.145v4.643h12.79v6.287h-12.79v9.771h-7.492zm32.068 0h7.502v20.704h13.098v6.643h-20.6zm40.19-.193h7.223l11.517 27.535h-8.036l-1.978-4.884H425.12l-1.928 4.884h-7.888l11.517-27.535zm6.572 16.755l-3.016-7.773l-3.055 7.773zm21.828-16.554h12.79c4.134 0 7 1.099 8.807 2.966c1.594 1.559 2.394 3.677 2.394 6.365v.08c0 4.177-2.206 6.953-5.566 8.393l6.455 9.53h-8.659l-5.446-8.282h-3.283v8.282h-7.502V47.4l.01.01zm12.446 13.126c2.55 0 4.021-1.247 4.021-3.238v-.077c0-2.149-1.54-3.238-4.06-3.238h-4.905v6.566h4.952l-.008-.01zM490.044 47.4h21.758v6.445h-14.334v4.136h12.988v5.984h-12.988v4.337H512v6.445h-21.956zM198.212 64.356c-1.05 2.4-3.263 4.099-6.2 4.099c-4.09 0-6.916-3.439-6.916-7.384v-.083c0-3.948 2.745-7.303 6.839-7.303c3.084 0 5.436 1.917 6.435 4.535h7.898c-1.267-6.503-6.92-11.37-14.263-11.37c-8.343 0-14.61 6.365-14.61 14.219v.08c0 7.853 6.177 14.138 14.532 14.138c7.136 0 12.72-4.679 14.193-10.943h-7.918l.01.01z"></path><path fill="#FBAD41" d="M132.234 32.698c-.552 0-1.097.02-1.641.037a.8.8 0 0 0-.256.06a.92.92 0 0 0-.593.64l-2.334 8.155c-1.006 3.506-.632 6.744 1.06 9.12c1.55 2.2 4.13 3.49 7.263 3.64l12.662.768c.376.02.702.2.9.5c.211.322.258.725.129 1.089a1.61 1.61 0 0 1-1.373 1.069l-13.157.768c-7.147.331-14.838 6.164-17.536 13.277l-.948 2.51a.703.703 0 0 0 .622.958h45.312a1.205 1.205 0 0 0 1.165-.878a33 33 0 0 0 1.204-8.885c0-18.12-14.529-32.808-32.459-32.808"></path><path fill="#F6821F" d="m112.457 74.235l.838-2.949c1.009-3.506.635-6.744-1.054-9.12c-1.556-2.2-4.134-3.49-7.268-3.64l-59.395-.768a1.17 1.17 0 0 1-.939-.5a1.24 1.24 0 0 1-.13-1.089a1.61 1.61 0 0 1 1.385-1.069l59.95-.768c7.117-.329 14.807-6.164 17.505-13.277l3.419-9.035a2.3 2.3 0 0 0 .1-1.197C122.973 13.199 107.392 0 88.764 0c-17.172 0-31.741 11.199-36.97 26.767A17.37 17.37 0 0 0 39.47 23.32c-8.232.828-14.858 7.534-15.676 15.857a18 18 0 0 0 .452 6.204C10.792 45.78 0 56.92 0 70.608c0 1.238.088 2.457.266 3.647c.073.577.565 1.01 1.147 1.009h109.688a1.43 1.43 0 0 0 1.356-1.05"></path></svg> 
    </div> 
 



  <div className="w-[20%] flex">
  <TiltedLines height={75} showIcons={false}    widthx={100} />

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
<div className="w-[54%] border-b bg-[#161616]  border-[#e7e7e715] ml-auto mr-auto h-[150x] ">
  <div className="border-b border-l border-r border-[#e7e7e715]  h-[150px] w-full ">
    <div className=" w-[100%] h-full flex items-center justify-center ">
      
    <div className="h-[70%]  w-[95%] flex items-start  ">
    <p className="text-sm fon">© 2025 Designed & Developed By Bhargav Joshi</p>
    </div>


    </div>
  
  </div>

</div>
<div className="bg-red-600 w-[54%] ml-auto mr-auto  h-[50px] border ">



</div>





<div className=" w-[54%] ml-auto mr-auto  h-[50px]  "></div>

{/* <div className="h-[50%]"> <p>wd</p></div> */}
{/* <div className="h-[200px] mt-4 w-[54%] ml-auto mr-auto flex items-center justify-center">
  <p className="text-3xl fon">MILLIONS OF USERS ONE SCALABLE EXPERIENCE</p>
</div> */}

</div>


    </>
  );
}
