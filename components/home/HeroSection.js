export default function HeroSection() {
  return (
    <>
    <style>{` 
      .glow-green {
        box-shadow: 0 0 20px 8px #22c55e, 0 0 36px 14px #22c55e;
        animation: glow-pulse 1.1s cubic-bezier(0.4,0,0.2,1) infinite;
      }
      @keyframes glow-pulse {
        0% {
          transform: scale(1);
          box-shadow: 0 0 6px 2px #22c55e, 0 0 12px 4px #22c55e;
          opacity: 0.7;
        }
        50% {
          transform: scale(1.2);
          box-shadow: 0 0 32px 12px #22c55e, 0 0 64px 24px #22c55e;
          opacity: 1;
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 6px 2px #22c55e, 0 0 12px 4px #22c55e;
          opacity: 0.7;
        }
      }
    `}</style>
      <div className="h-[50px]  w-full flex">
      <div className="w-[5%] md:min-w-[23%]    h-full flex  border-r border-[#e7e7e715]   items-end  justify-end">
      

    


      </div>

      <div className="w-full ml-auto mr-auto  border-r   border-[#e7e7e715]  "></div>
      <div className="w-[5%] md:min-w-[23%]   h-full ">
      

    
  
        </div>

      </div>
      <div className="h-[50px]   w-full flex">
      <div className="w-[5%] md:min-w-[23%]  h-full tilted-linesx border border-[#e7e7e715] flex   items-end  justify-end">
        
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#e7e7e740] -mr-3.5 -mb-3" aria-hidden="true">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>


      </div>
      <div className="w-full md:min-w-[54%] flex items-center justify-center   text-sm  border-[#e7e7e715] border-t border-b "><p className="fon lit">Current Status: Has Job and is Available</p>
     <div className="  h-[10px] w-[10px] ml-4 bg-green-500 rounded-full glow-green"></div></div>

      <div className="w-[5%] md:min-w-[23%]  h-full tilted-linesx border border-[#e7e7e715] flex   items-end  justify-start">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#e7e7e740] -ml-3 -mb-3" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      </div>

      </div>

      <div className="flex  md:h-full h-[700px] ">
        <div className="min-w-[23%] h-full md:block  hidden"></div>
        <div className="w-[5%]   ml-auto mr-auto tilted-linesx"></div>
        <div className="min-w-[54%]  w-[90%] flex border-l border-r  border-[#e7e7e730] ">
          
        <svg 
            className="-mt-0  md:-mt-[100%] inset-0 pointer-events-none  text-[#e7e7e730]" 
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
  
          <div className="  absolute z-20 w-full md:w-[54%]  flex md:flex-row flex-col md:h-[6.78%]">
            
          <div className="w-full  md:w-[61.5%] flex flex-col items-center justify-center mr-auto  h-full">

          <div className="w-[85%] h-[35%]  md:-mt-22 mt-10">
            <div className=" w-full h-[10%] flex items-end pb-4 justify-start md:block hidden">
          <p className="text-sm fonc mb-2 text-[#e7e7e780] ">In The Pixel Perfection Era</p>

            </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-4xl md:text-6xl mt-1 mb-2 objr text-[#e7e7e7]   w-full md:-ml-0   -ml-8">Perfect solutions to build next-gen experiences</p>
          </div>
         
          
          </div>
          <div className="h-[35%]  w-[75%] md:w-[85%] "> 
          <p className="fonc text-md mt-9 leading-loose text-[#e7e7e770]  md:-ml-0 -ml-10">
          A Full-Stack Developer across the Node.js and PHP / Laravel ecosystems, building high-performance, scalable web applications — and increasingly the AI/LLM systems behind them: RAG pipelines, self-hosted inference, and custom agents.
          </p>
          <div className="flex mt-10 md:block hidden">
          <p className="fonc  text-[#e7e7e770] mr-1.5"> For the </p><p className="fon">Clean & Sleek Look.</p>
          </div>
          <div className="mt-8 h-[30px] flex -ml-10   gap-5 md:-ml-0 px-6">

          <a className="-ml-5" href="https://www.linkedin.com/in/bhargav-joshi-95a1b9194/" target="_blank" rel="noopener noreferrer">
          <img className="h-[30px]" src="https://api.iconify.design/logos:linkedin-icon.svg" alt="" />
          </a>

 <a className="- " href="https://dribbble.com/bhargavj0shi" target="_blank" rel="noopener noreferrer">
          <img  className="h-[30px]" src="https://api.iconify.design/logos:dribbble-icon.svg" alt="" />
 </a>

 <a className=" " href="https://www.figma.com/@bhargavjoshi1" target="_blank" rel="noopener noreferrer">
          <img  className="h-[30px]" src=" https://api.iconify.design/logos:figma.svg" alt="" />
 </a>


 <a className=" " href="https://github.com/bhargavjoshi1237" target="_blank" rel="noopener noreferrer">
 <svg  className="h-[30px]" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
  <path fill="white" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
</svg></a>


          


          </div>
           
          {/* <a href="/simple"><button 
                
                className="w-[180px] h-[40px] mt-8 md:-ml-0 -ml-10 bg-[#1a1a1a] text-white rounded-md
                border border-[#e7e7e715] transition-all duration-200 hover:bg-[#2a2a2a]
                active:scale-95 focus:outline-none  focus:ring-2 focus:ring-[#e7e7e715]"
            >
               Simple Version
            </button> </a> */}
          
          </div>
          </div>

          <div className="w-full  md:mt-0 md:w-[38.5%]  flex flex-col items-end ">
          <div className="w-full h-[38%]   flex  ">
           <div className="w-[37%]   h-full items-end flex" >
            
            

           <div className="w-[68%] h-[40%] " >
            
            </div> 
            <div className="w-[33%]   h-[40%]" >


            </div>






            </div> 
            <div className="w-[64%]   h-full" >
            
            </div> 
          </div>
          <div className="w-full md:h-[61%]     flex items-center justify-center   ">
            
  <div className="w-full  ml-auto mr-auto  md:w-[75%] h-[80%]    md:mt-32 ">
  <div className="w-full h-[25px]  flex items-center justify-center md:block hidden">
    <p className="fonc  text-[#e7e7e775] text-md ">Build using industry standard tools</p>
  </div>
  <div className="w-full h-full  flex items-center md:mt-0 mt-5">
            <div className=" w-full h-[90%] flex  gap-2 flex-col items-center justify-center">

            <div className="w-[80%]     h-full   flex items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" height="2.2em" width="2.2em" viewBox="0 0 256 256"><defs><linearGradient id="logosNextjsIcon0" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stopColor="#FFF"></stop><stop offset="100%" stopColor="#FFF" stopOpacity="0"></stop></linearGradient><linearGradient id="logosNextjsIcon1" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stopColor="#FFF"></stop><stop offset="100%" stopColor="#FFF" stopOpacity="0"></stop></linearGradient><circle id="logosNextjsIcon2" cx="128" cy="128" r="128"></circle></defs><mask id="logosNextjsIcon3" fill="#fff"><use href="#logosNextjsIcon2"></use></mask><g mask="url(#logosNextjsIcon3)"><circle cx="128" cy="128" r="128"></circle><path fill="url(#logosNextjsIcon0)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"></path><path fill="url(#logosNextjsIcon1)" d="M163.556 76.8h17.067v102.4h-17.067z"></path></g></svg>
            <div className="w-full b  flex items-start justify-center">
            <p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2">Next.js</p>
            </div>
            </div>
           

 <div className="w-[80%]    h-full   flex items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 264"> <path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664c-2.452-.366-5.26-.21-8.583.475c-5.792 1.195-10.089 1.65-13.225 1.738c11.837-19.985 21.462-42.775 27.003-64.228c8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549c-5.928-1.046-12.302-1.63-18.99-1.738c-12.537-.2-23.614 2.533-33.079 8.15c-5.24-1.772-13.65-4.27-23.362-5.864c-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48c4.492 14.718 9.282 26.94 14.237 36.33c7.027 13.315 14.546 21.156 22.987 23.972c4.731 1.576 13.327 2.68 22.368-4.85c1.146 1.388 2.675 2.767 4.704 4.048c2.577 1.625 5.728 2.953 8.875 3.74c11.341 2.835 21.964 2.126 31.027-1.848c.056 1.612.099 3.152.135 4.482c.06 2.157.12 4.272.199 6.25c.537 13.374 1.447 23.773 4.143 31.049c.148.4.347 1.01.557 1.657c1.345 4.118 3.594 11.012 9.316 16.411c5.925 5.593 13.092 7.308 19.656 7.308c3.292 0 6.433-.432 9.188-1.022c9.82-2.105 20.973-5.311 29.041-16.799c7.628-10.86 11.336-27.217 12.007-52.99q.13-1.094.244-2.088l.16-1.362l1.797.158l.463.031c10.002.456 22.232-1.665 29.743-5.154c5.935-2.754 24.954-12.795 20.476-26.351"></path><path fill="#336791" d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934c31.4-46.593 44.527-105.736 33.2-120.211c-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067c-13.456-.22-23.664 3.528-31.41 9.402c0 0-95.43-39.314-90.991 49.444c.944 18.882 27.064 142.873 58.218 105.422c11.387-13.695 22.39-25.274 22.39-25.274c5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332c-8.026 8.967-5.667 10.541-21.711 13.844c-16.235 3.346-6.698 9.302-.471 10.86c7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952c-.37 12.568-.617 21.197 1.86 27.937c2.479 6.74 4.948 21.905 26.04 17.386c17.623-3.777 26.756-13.564 28.027-29.89c.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139c13.218-6.134 21.058-16.377 8.024-13.686z"></path><path fill="#FFF" d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902c-.69.523-.904 1.129-.962 1.546c-.154 1.105.62 2.327 1.096 2.957c1.346 1.784 3.312 3.01 5.258 3.28q.423.059.842.058c3.245 0 6.196-2.527 6.456-4.392c.325-2.336-3.066-3.893-6.355-4.35m88.784.073c-.256-1.831-3.514-2.353-6.606-1.923c-3.088.43-6.082 1.824-5.832 3.659c.2 1.427 2.777 3.863 5.827 3.863q.387 0 .78-.054c2.036-.282 3.53-1.575 4.24-2.32c1.08-1.136 1.706-2.402 1.591-3.225"></path><path fill="#FFF" d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28c-18.005 3.716-24.453 1.142-26.57-.417c13.995-21.32 25.508-47.092 31.719-71.137c2.942-11.39 4.567-21.968 4.7-30.59c.147-9.463-1.465-16.417-4.789-20.665c-13.402-17.125-33.072-26.311-56.882-26.563c-16.369-.184-30.199 4.005-32.88 5.183c-5.646-1.404-11.801-2.266-18.502-2.376c-12.288-.199-22.91 2.743-31.704 8.74c-3.82-1.422-13.692-4.811-25.765-6.756c-20.872-3.36-37.458-.814-49.294 7.571c-14.123 10.006-20.643 27.892-19.38 53.16c.425 8.501 5.269 34.653 12.913 59.698c10.062 32.964 21 51.625 32.508 55.464c1.347.449 2.9.763 4.613.763c4.198 0 9.345-1.892 14.7-8.33a530 530 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92q.016.2.035.398a118 118 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736c-3.225.666-11.79 2.431-11.916 8.435c-.136 6.56 10.125 9.315 11.294 9.607c4.074 1.02 7.999 1.523 11.742 1.523c9.103 0 17.114-2.992 23.516-8.781c-.197 23.386.778 46.43 3.586 53.451c2.3 5.748 7.918 19.795 25.664 19.794c2.604 0 5.47-.303 8.623-.979c18.521-3.97 26.564-12.156 29.675-30.203c1.665-9.645 4.522-32.676 5.866-45.03c2.836.885 6.487 1.29 10.434 1.289c8.232 0 17.731-1.749 23.688-4.514c6.692-3.108 18.768-10.734 16.578-17.36m-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414c-.573 3.717-1.165 7.56-1.314 12.225c-.147 4.54.42 9.26.968 13.825c1.108 9.22 2.245 18.712-2.156 28.078a37 37 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404c-6.399-11.476-21.384-38.35-13.713-49.316c2.285-3.264 8.084-6.62 22.64-4.813m-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72c9.164 11.711-.927 64.998-30.14 110.969a171 171 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738c-.54-4.488-1.05-8.727-.92-12.709c.134-4.22.692-7.84 1.232-11.34c.663-4.313 1.338-8.776 1.152-14.037c.139-.552.195-1.204.122-1.978c-.475-5.045-6.235-20.144-17.975-33.81c-6.422-7.475-15.787-15.84-28.574-21.482c5.5-1.14 13.021-2.203 21.442-2.016M66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288c-8.73-2.912-18.86-21.364-27.791-50.624c-7.728-25.318-12.244-50.777-12.602-57.916c-1.128-22.578 4.345-38.313 16.268-46.769c19.404-13.76 51.306-5.524 64.125-1.347c-.184.182-.376.352-.558.537c-21.036 21.244-20.537 57.54-20.485 59.759c-.002.856.07 2.068.168 3.735c.362 6.105 1.036 17.467-.764 30.334c-1.672 11.957 2.014 23.66 10.111 32.109a36 36 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426m22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99c1.9-13.592 1.199-25.43.822-31.79c-.053-.89-.1-1.67-.127-2.285c3.073-2.725 17.314-10.355 27.47-8.028c4.634 1.061 7.458 4.217 8.632 9.645c6.076 28.103.804 39.816-3.432 49.229c-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424c-6.938-.02-13.687-2.984-18.819-8.34m1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114c.893-.42 2.482-.992 5.238-1.56c13.337-2.745 15.397-4.683 19.895-10.394c1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412c1.621.67 3.2 2.702 3.84 4.938c.303 1.056.643 3.06-.47 4.62c-9.396 13.156-23.088 12.987-32.921 10.526m69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346c-2.457-6.144-3.665-33.85-2.808-64.447c.011-.407-.047-.8-.159-1.17a15.4 15.4 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72c-1.48-.613-4.196-1.738-7.46-.903c.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21c4.433-9.848 10.504-23.337 3.915-53.81c-2.468-11.414-10.71-16.988-23.204-15.693c-7.49.775-14.343 3.797-17.761 5.53c-.735.372-1.407.732-2.035 1.082c.954-11.5 4.558-32.992 18.04-46.59c8.489-8.56 19.794-12.788 33.568-12.56c27.14.444 44.544 14.372 54.366 25.979c8.464 10.001 13.047 20.076 14.876 25.51c-13.755-1.399-23.11 1.316-27.852 8.096c-10.317 14.748 5.644 43.372 13.315 57.129c1.407 2.521 2.621 4.7 3.003 5.626c2.498 6.054 5.732 10.096 8.093 13.046c.724.904 1.426 1.781 1.96 2.547c-4.166 1.201-11.649 3.976-10.967 17.847c-.55 6.96-4.461 39.546-6.448 51.059c-2.623 15.21-8.22 20.875-23.957 24.25m68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779c-7.48.35-11.288-.838-12.184-1.569c-.42-8.644 2.797-9.547 6.202-10.503c.535-.15 1.057-.297 1.561-.473q.469.383 1.032.756c6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772"></path></svg>
              <div className="w-full b  flex items-start justify-center">
            <p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2">Postgress</p>
            </div>
            </div>


            

            <div className="w-[80%]    h-full   flex items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.68em" height="1em" viewBox="0 0 256 153"> <path fill="#252F3E" d="M72.392 55.438c0 3.137.34 5.68.933 7.545a45.4 45.4 0 0 0 2.712 6.103c.424.678.593 1.356.593 1.95c0 .847-.508 1.695-1.61 2.543l-5.34 3.56c-.763.509-1.526.763-2.205.763c-.847 0-1.695-.424-2.543-1.187a26 26 0 0 1-3.051-3.984c-.848-1.44-1.696-3.052-2.628-5.001q-9.919 11.697-24.922 11.698c-7.12 0-12.8-2.035-16.954-6.103c-4.153-4.07-6.272-9.495-6.272-16.276c0-7.205 2.543-13.054 7.714-17.462c5.17-4.408 12.037-6.612 20.768-6.612c2.882 0 5.849.254 8.985.678c3.137.424 6.358 1.102 9.749 1.865V29.33c0-6.443-1.357-10.935-3.985-13.563c-2.712-2.628-7.29-3.9-13.817-3.9c-2.967 0-6.018.34-9.155 1.103s-6.188 1.695-9.155 2.882c-1.356.593-2.373.932-2.967 1.102s-1.017.254-1.356.254c-1.187 0-1.78-.848-1.78-2.628v-4.154c0-1.356.17-2.373.593-2.966c.424-.594 1.187-1.187 2.374-1.78q4.45-2.29 10.68-3.815C33.908.763 38.316.255 42.978.255c10.088 0 17.463 2.288 22.21 6.866c4.662 4.577 7.036 11.528 7.036 20.853v27.464zM37.976 68.323c2.798 0 5.68-.508 8.731-1.526c3.052-1.017 5.765-2.882 8.053-5.425c1.357-1.61 2.374-3.39 2.882-5.425c.509-2.034.848-4.493.848-7.375v-3.56a71 71 0 0 0-7.799-1.441a64 64 0 0 0-7.968-.509c-5.68 0-9.833 1.102-12.63 3.391s-4.154 5.51-4.154 9.748c0 3.984 1.017 6.951 3.136 8.986c2.035 2.119 5.002 3.136 8.901 3.136m68.069 9.155c-1.526 0-2.543-.254-3.221-.848c-.678-.508-1.272-1.695-1.78-3.305L81.124 7.799c-.51-1.696-.764-2.798-.764-3.391c0-1.356.678-2.12 2.035-2.12h8.307c1.61 0 2.713.255 3.306.848c.678.509 1.187 1.696 1.695 3.306l14.241 56.117l13.224-56.117c.424-1.695.933-2.797 1.61-3.306c.679-.508 1.866-.847 3.392-.847h6.781c1.61 0 2.713.254 3.39.847c.679.509 1.272 1.696 1.611 3.306l13.394 56.795L168.01 6.442c.508-1.695 1.102-2.797 1.695-3.306c.678-.508 1.78-.847 3.306-.847h7.883c1.357 0 2.12.678 2.12 2.119c0 .424-.085.848-.17 1.356s-.254 1.187-.593 2.12l-20.43 65.525q-.762 2.544-1.78 3.306c-.678.509-1.78.848-3.22.848h-7.29c-1.611 0-2.713-.254-3.392-.848c-.678-.593-1.271-1.695-1.61-3.39l-13.14-54.676l-13.054 54.59c-.423 1.696-.932 2.798-1.61 3.391c-.678.594-1.865.848-3.39.848zm108.927 2.289c-4.408 0-8.816-.509-13.054-1.526c-4.239-1.017-7.544-2.12-9.748-3.39c-1.357-.764-2.29-1.611-2.628-2.374a6 6 0 0 1-.509-2.374V65.78c0-1.78.678-2.628 1.95-2.628a4.8 4.8 0 0 1 1.526.255c.508.17 1.271.508 2.119.847a46 46 0 0 0 9.324 2.967a51 51 0 0 0 10.088 1.017c5.34 0 9.494-.932 12.376-2.797s4.408-4.577 4.408-8.053c0-2.373-.763-4.323-2.289-5.934s-4.408-3.051-8.561-4.408l-12.292-3.814c-6.188-1.95-10.765-4.832-13.563-8.647c-2.797-3.73-4.238-7.883-4.238-12.291q0-5.34 2.289-9.41c1.525-2.712 3.56-5.085 6.103-6.95c2.543-1.95 5.425-3.391 8.816-4.408c3.39-1.017 6.95-1.441 10.68-1.441c1.865 0 3.815.085 5.68.339c1.95.254 3.73.593 5.51.932c1.695.424 3.306.848 4.832 1.357q2.288.762 3.56 1.525c1.187.679 2.034 1.357 2.543 2.12q.763 1.017.763 2.797v3.984c0 1.78-.678 2.713-1.95 2.713c-.678 0-1.78-.34-3.22-1.018q-7.25-3.306-16.276-3.306c-4.832 0-8.647.763-11.275 2.374c-2.627 1.61-3.984 4.069-3.984 7.544c0 2.374.848 4.408 2.543 6.019s4.832 3.221 9.325 4.662l12.037 3.815c6.103 1.95 10.511 4.662 13.139 8.137s3.9 7.46 3.9 11.868c0 3.645-.764 6.951-2.205 9.833c-1.525 2.882-3.56 5.425-6.188 7.46c-2.628 2.119-5.764 3.645-9.409 4.747c-3.815 1.187-7.799 1.78-12.122 1.78"></path><path fill="#F90" d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534c-48.827 0-92.821-18.056-126.05-48.064c-2.628-2.373-.255-5.594 2.881-3.73c35.942 20.854 80.276 33.484 126.136 33.484c30.94 0 64.932-6.442 96.212-19.666c4.662-2.12 8.646 3.052 4.068 6.442m11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102c-2.713.34-3.137-2.034-.678-3.814c15.936-11.19 42.13-7.968 45.181-4.239c3.052 3.815-.848 30.008-15.767 42.554c-2.288 1.95-4.492.933-3.475-1.61c3.39-8.393 10.935-27.296 7.375-31.789"></path></svg>
             <div className="w-full b  flex items-start justify-center">
            <p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2"> AWS </p>
            </div>
            </div>

            <div className="w-[80%]    h-full   flex items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 256 220"> <path fill="#912626" d="M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075s-23.437 7.78-35.34 2.09c-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95c13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988"></path><path fill="#C6302B" d="M245.965 143.22c-13.661 7.118-84.431 36.218-99.498 44.072c-15.066 7.857-23.436 7.78-35.338 2.09c-11.903-5.686-87.214-36.113-100.78-42.594c-13.566-6.485-13.85-10.948-.524-16.166c13.326-5.22 88.224-34.605 104.055-40.284c15.828-5.677 21.319-5.884 34.789-.948c13.471 4.934 83.819 32.935 97.13 37.81c13.316 4.881 13.827 8.9.166 16.02"></path><path fill="#912626" d="M245.97 127.074c-13.662 7.122-84.434 36.22-99.501 44.078c-15.067 7.853-23.437 7.777-35.34 2.087c-11.903-5.687-87.216-36.112-100.783-42.597C3.566 127.402 0 124.67 0 122.085V96.206s98.05-21.344 113.879-27.023c15.828-5.679 21.32-5.885 34.79-.95C162.142 73.168 242.688 87.697 256 92.574l-.006 25.513c.002 2.557-3.07 5.363-10.024 8.987"></path><path fill="#C6302B" d="M245.965 101.351c-13.661 7.12-84.431 36.218-99.498 44.075c-15.066 7.854-23.436 7.777-35.338 2.087c-11.903-5.686-87.214-36.112-100.78-42.594c-13.566-6.483-13.85-10.947-.524-16.167C23.151 83.535 98.05 54.148 113.88 48.47c15.828-5.678 21.319-5.884 34.789-.949c13.471 4.934 83.819 32.933 97.13 37.81c13.316 4.88 13.827 8.9.166 16.02"></path><path fill="#912626" d="M245.97 83.653c-13.662 7.12-84.434 36.22-99.501 44.078c-15.067 7.854-23.437 7.777-35.34 2.087c-11.903-5.687-87.216-36.113-100.783-42.595C3.566 83.98 0 81.247 0 78.665v-25.88s98.05-21.343 113.879-27.021c15.828-5.68 21.32-5.884 34.79-.95C162.142 29.749 242.688 44.278 256 49.155l-.006 25.512c.002 2.555-3.07 5.361-10.024 8.986"></path><path fill="#C6302B" d="M245.965 57.93c-13.661 7.12-84.431 36.22-99.498 44.074c-15.066 7.854-23.436 7.777-35.338 2.09C99.227 98.404 23.915 67.98 10.35 61.497S-3.5 50.55 9.825 45.331C23.151 40.113 98.05 10.73 113.88 5.05c15.828-5.679 21.319-5.883 34.789-.948s83.819 32.934 97.13 37.811c13.316 4.876 13.827 8.897.166 16.017"></path><path fill="#FFF" d="m159.283 32.757l-22.01 2.285l-4.927 11.856l-7.958-13.23l-25.415-2.284l18.964-6.839l-5.69-10.498l17.755 6.944l16.738-5.48l-4.524 10.855zm-28.251 57.518L89.955 73.238l58.86-9.035zm-56.95-50.928c17.375 0 31.46 5.46 31.46 12.194c0 6.736-14.085 12.195-31.46 12.195s-31.46-5.46-31.46-12.195c0-6.734 14.085-12.194 31.46-12.194"></path><path fill="#621B1C" d="m185.295 35.998l34.836 13.766l-34.806 13.753z"></path><path fill="#9A2928" d="m146.755 51.243l38.54-15.245l.03 27.519l-3.779 1.478z"></path></svg>
             <div className="w-full b  flex items-start justify-center">
            <p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2">Redis</p>
            </div>
            </div>

            <div className="w-[80%]    h-full   flex items-center justify-center ">
           <div className="flex items-center w-full">  <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 256 384"> <path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64"></path><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64"></path><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64"></path><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z"></path><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64"></path></svg>
             <div className="w-full b  flex items-start justify-center">
            <p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2">Figma</p></div>
            </div>
            </div>

            <div className="w-[80%]    h-full   flex items-center justify-center  md:block hidden">
             <div className="flex items-center w-full"><img src="https://api.iconify.design/logos:hugging-face-icon.svg" alt="HuggingFace" className="h-[1.5em] -ml-1" />
             <div className="w-full -ml-2 flex items-start justify-center">
            <p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2">Hugging Face</p></div>
            </div>
            </div>

            <div className="w-[80%]    h-full   flex items-center justify-center  md:block hidden">
             <div className="flex items-center w-full"><img src="https://api.iconify.design/logos:mysql-icon.svg" alt="MySQL" className="h-[1.5em]" />
             <div className="w-full b  flex items-start justify-center">
            <p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2">MySQL</p></div>
            </div>
            </div>

            

            </div>
            <div className=" w-full h-[90%] flex gap-2 flex-col items-center justify-center">

<div className="w-[80%]   mt-1.5  h-full   flex items-center justify-center ">
<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.em" viewBox="0 0 256 228"> <path fill="#00D8FF" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"></path></svg>

<div className="w-full   flex items-start justify-center">
<p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2">React</p>
</div>
</div>


<div className="w-[80%]    h-full   flex items-center justify-center ">
<svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 256 289"> <path fill="#539E43" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571"></path></svg>
  <div className="w-full b  flex items-start justify-center">
<p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2">Node.JS</p>
</div>
</div>




<div className="w-[80%]    h-full   flex items-center justify-center ">
<svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.6em" className="-ml-0.5" viewBox="0 0 256 154"> <defs><linearGradient id="logosTailwindcssIcon0" x1="-2.778%" x2="100%" y1="32%" y2="67.556%"><stop offset="0%" stopColor="#2298BD"></stop><stop offset="100%" stopColor="#0ED7B5"></stop></linearGradient></defs><path fill="url(#logosTailwindcssIcon0)" d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"></path></svg>
 <div className="w-full b  flex items-start justify-center">
<p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2"> Tailwind </p>
</div>
</div>

<div className="w-[80%]    h-full   flex items-center justify-center ">
<svg xmlns="http://www.w3.org/2000/svg" width="1.45em" height="1.4em" viewBox="0 0 256 351"> <defs><filter id="logosFirebase0" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix></filter><filter id="logosFirebase1" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="3.5"></feGaussianBlur><feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix></filter><path id="logosFirebase2" d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"></path><path id="logosFirebase3" d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"></path></defs><path fill="#FFC24A" d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"></path><use fill="#FFA712" fillRule="evenodd" href="#logosFirebase2"></use><use filter="url(#logosFirebase0)" href="#logosFirebase2"></use><path fill="#F4BD62" d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"></path><use fill="#FFA50E" fillRule="evenodd" href="#logosFirebase3"></use><use filter="url(#logosFirebase1)" href="#logosFirebase3"></use><path fill="#F6820C" d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"></path><path fill="#FDE068" d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.13 24.13 0 0 0 23.513.005"></path><path fill="#FCCA3F" d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.94 23.94 0 0 0 23.334.006z"></path><path fill="#EEAB37" d="M139.12 345.64a24.13 24.13 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.13 24.13 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"></path></svg>
 <div className="w-full b  flex items-start justify-center">
<p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2">Firebase</p>
</div>
</div>

<div className="w-[80%]    h-full   flex items-center justify-center  ">
 <div className="flex items-center w-full"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 256 231">  <defs><linearGradient id="logosCloudflareWorkersIcon0" x1="50%" x2="25.7%" y1="100%" y2="8.7%"><stop offset="0%" stopColor="#EB6F07"></stop><stop offset="100%" stopColor="#FAB743"></stop></linearGradient><linearGradient id="logosCloudflareWorkersIcon1" x1="81%" x2="40.5%" y1="83.7%" y2="29.5%"><stop offset="0%" stopColor="#D96504"></stop><stop offset="100%" stopColor="#D96504" stopOpacity="0"></stop></linearGradient><linearGradient id="logosCloudflareWorkersIcon2" x1="42%" x2="84%" y1="8.7%" y2="79.9%"><stop offset="0%" stopColor="#EB6F07"></stop><stop offset="100%" stopColor="#EB720A" stopOpacity="0"></stop></linearGradient><linearGradient id="logosCloudflareWorkersIcon3" x1="50%" x2="25.7%" y1="100%" y2="8.7%"><stop offset="0%" stopColor="#EE6F05"></stop><stop offset="100%" stopColor="#FAB743"></stop></linearGradient><linearGradient id="logosCloudflareWorkersIcon4" x1="-33.2%" x2="91.7%" y1="100%" y2="0%"><stop offset="0%" stopColor="#D96504" stopOpacity=".8"></stop><stop offset="49.8%" stopColor="#D96504" stopOpacity=".2"></stop><stop offset="100%" stopColor="#D96504" stopOpacity="0"></stop></linearGradient><linearGradient id="logosCloudflareWorkersIcon5" x1="50%" x2="25.7%" y1="100%" y2="8.7%"><stop offset="0%" stopColor="#FFA95F"></stop><stop offset="100%" stopColor="#FFEBC8"></stop></linearGradient><linearGradient id="logosCloudflareWorkersIcon6" x1="8.1%" x2="96.5%" y1="1.1%" y2="48.8%"><stop offset="0%" stopColor="#FFF" stopOpacity=".5"></stop><stop offset="100%" stopColor="#FFF" stopOpacity=".1"></stop></linearGradient><linearGradient id="logosCloudflareWorkersIcon7" x1="-13.7%" x2="100%" y1="104.2%" y2="46.2%"><stop offset="0%" stopColor="#FFF" stopOpacity=".5"></stop><stop offset="100%" stopColor="#FFF" stopOpacity=".1"></stop></linearGradient></defs><path fill="url(#logosCloudflareWorkersIcon0)" d="m65.82 3.324l30.161 54.411l-27.698 49.857a16 16 0 0 0 0 15.573l27.698 49.98l-30.16 54.411a32 32 0 0 1-13.542-12.74L4.27 131.412a32.13 32.13 0 0 1 0-32.007l48.01-83.403a32 32 0 0 1 13.542-12.68"></path><path fill="url(#logosCloudflareWorkersIcon1)" d="M68.283 107.654a16 16 0 0 0 0 15.51l27.698 49.98l-30.16 54.412a32 32 0 0 1-13.542-12.74L4.27 131.412c-3.816-6.586 17.542-14.465 64.014-23.698z" opacity=".7"></path><path fill="url(#logosCloudflareWorkersIcon2)" d="m68.898 8.802l27.083 48.933l-4.493 7.818l-23.882-40.44c-6.894-11.264-17.42-5.416-30.591 17.358l1.97-3.386l13.294-23.082a32 32 0 0 1 13.419-12.68l3.139 5.479z" opacity=".5"></path><path fill="url(#logosCloudflareWorkersIcon3)" d="m203.696 16.003l48.01 83.403c5.725 9.848 5.725 22.159 0 32.007l-48.01 83.402a32.01 32.01 0 0 1-27.698 16.004h-48.01l59.705-107.654a16 16 0 0 0 0-15.511L127.988 0h48.01a32.01 32.01 0 0 1 27.698 16.003"></path><path fill="url(#logosCloudflareWorkersIcon4)" d="m173.536 230.45l-47.395.43l57.367-108.208a16.62 16.62 0 0 0 0-15.634L126.14 0h10.834l60.197 106.546a16.62 16.62 0 0 1-.062 16.496a9617 9617 0 0 0-38.592 67.707c-11.695 20.558-6.648 33.791 15.018 39.7"></path><path fill="url(#logosCloudflareWorkersIcon5)" d="M79.978 230.819c-4.924 0-9.849-1.17-14.157-3.263l59.212-106.792a11.05 11.05 0 0 0 0-10.71L65.821 3.324A32 32 0 0 1 79.978 0h48.01l59.705 107.654a16 16 0 0 1 0 15.51L127.988 230.82z"></path><path fill="url(#logosCloudflareWorkersIcon6)" d="M183.508 110.054L122.448 0h5.54l59.705 107.654a16 16 0 0 1 0 15.51L127.988 230.82h-5.54l61.06-110.055a11.05 11.05 0 0 0 0-10.71" opacity=".6"></path><path fill="url(#logosCloudflareWorkersIcon7)" d="M125.033 110.054L65.821 3.324c1.846-.985 4.062-1.724 6.155-2.34c13.049 23.452 32.315 59.029 57.859 106.67a16 16 0 0 1 0 15.51L71.053 229.589c-2.093-.616-3.201-1.047-5.17-1.97l59.089-106.792a11.05 11.05 0 0 0 0-10.71z" opacity=".6"></path></svg>
 <div className="w-full b  flex items-start justify-center">
<p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2">CF Worker</p></div>
</div>
</div>

<div className="w-[80%]    h-full   flex items-center justify-center  md:block hidden">
 <div className="flex items-center w-full"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.3em" viewBox="0 0 256 185"> <path fill="#2396ED" d="M250.716 70.497c-5.765-4-18.976-5.5-29.304-3.5c-1.2-10-6.725-18.749-16.333-26.499l-5.524-4l-3.844 5.75c-4.803 7.5-7.205 18-6.485 28c.24 3.499 1.441 9.749 5.044 15.249c-3.362 2-10.328 4.5-19.455 4.5H1.155l-.48 2c-1.682 9.999-1.682 41.248 18.014 65.247c14.892 18.249 36.99 27.499 66.053 27.499c62.93 0 109.528-30.25 131.386-84.997c8.647.25 27.142 0 36.51-18.75c.24-.5.72-1.5 2.401-5.249l.961-2zM139.986 0h-26.42v24.999h26.42zm0 29.999h-26.42v24.999h26.42zm-31.225 0h-26.42v24.999h26.42zm-31.225 0H51.115v24.999h26.421zM46.311 59.998H19.89v24.999h26.42zm31.225 0H51.115v24.999h26.421zm31.225 0h-26.42v24.999h26.42zm31.226 0h-26.422v24.999h26.422zm31.225 0H144.79v24.999h26.422z"></path></svg>
<div className="w-full -ml-2 flex items-start justify-center">
<p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2">Docker  </p></div>
</div>
</div>

<div className="w-[80%]    h-full   flex items-center justify-center  md:block hidden">
 <div className="flex items-center w-full"><img src="https://api.iconify.design/logos:laravel.svg" alt="Laravel" className="h-[1.7em] ml-1" />
 <div className="w-full b  flex items-start justify-center">
<p className="text-sm w-[70%]     text-[#e7e7e795] fonc ml-2">Laravel</p></div>
</div>
</div>



</div>

  </div>
  </div>               

            </div>
          </div>

            
             </div>

          

        </div>
       <div className="w-[5%]   ml-auto mr-auto tilted-linesx"></div>
        <div className="min-w-[23.25%] md:block hidden">

          
        </div>
      </div>
    </>
  );
}
