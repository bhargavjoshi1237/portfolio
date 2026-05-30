export default function DesignGallery() {
  return (
<div className="w-[54%] ml-auto mr-auto py-2 border-r items-center border-l border-[#e7e7e715] 
  md:w-[54%] md:ml-auto md:mr-auto 
  w-full px-2
  ">
  <div className="w-full h-fit flex items-start mr- 
    md:flex-row flex-col gap-2">
    <div className="w-full mr-2 md:w-full flex flex-col">
      <div className="w-full">
        <img src="/svf/1.svg" className="m-3 w-[96%] max-w-full" alt="" />
      </div>
      <div className="w-full">
        <img src="/svf/.svg" className="m-2 w-[96%] max-w-full" alt="" />
      </div>
      <div className="w-full">
        <img src="/svf/10.svg" className="m-4 w-[96%] max-w-full" alt="" />
      </div>
      <div className="w-full">
        <img src="/svf/5.svg" className="m-2 w-[96%] max-w-full" alt="" />
      </div>
    </div>
    <div className="w-full mr-1 h-full md:w-full flex flex-col">
      <img src="/svf/2.svg" className="mt-2 mr-2 w-full h-[65%] max-w-full" alt="" />
      <div className="w-full flex items-center justify-end h-full">
        <img src="/svf/11.svg" className="m-4 w-[96%] max-w-full" alt="" />
      </div>
    </div>
    <div className="w-[70%] mr-2 md:w-[70%] w-full flex flex-col">
      <div className="w-full">
        <img src="/svf/4.svg" className="m-2 w-[96%] max-w-full" alt="" />
      </div>
      <div className="w-full">
        <img src="/svf/7.svg" className="m-2 w-[96%] max-w-full" alt="" />
      </div>
      <div className="w-full">
        <img src="/svf/8.svg" className="m-2 w-[96%] max-w-full" alt="" />
      </div>
      <div className="w-full">
        <img src="/svf/6.svg" className="m-2 w-[96%] max-w-full" alt="" />
      </div>
    </div>
  </div>
  <br />
  <div className="w-full flex flex-col md:flex-row ml-auto mr-auto ">
    <img src="/svf/13.svg" className="m-2 w-full md:w-[50%] max-w-full" alt="" />
    <img src="/svf/17.svg" className="m-2 w-full md:w-[50%] max-w-full" alt="" />
  </div>
  <br />
   <img src="/svf/12.svg" className="m-2 -mt-2 ml-auto mr-auto  w-full" alt="" />
 <img src="/svf/14.svg" className="m-2 ml-auto  " alt="" />
</div>
  );
}
