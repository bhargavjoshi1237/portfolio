"use client"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState } from "react";
import Chart1 from "./chart1";
import { toast } from "sonner"


export default function CdnOpt() {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedCdn, setSelectedCdn] = useState("");
    const [selectedRoute, setSelectedRoute] = useState("");
    const [loadTime, setLoadTime] = useState(0);
    const [chartData, setChartData] = useState([
        { name: "DNS Lookup", time: 0, fill: "#FFFFFF" },
        { name: "TCP Connection", time: 0, fill: "#E0E0E0" },
        { name: "TLS Handshake", time: 0, fill: "#BDBDBD" },
        { name: "First Byte", time: 0, fill: "#9E9E9E" },
        { name: "Content Download", time: 0, fill: "#757575" },
        { name: "Processing", time: 0, fill: "#616161" }
    ]);

    const getImageUrl = () => {
        if (!selectedSize || !selectedCdn) return "";
        
        const timestamp = new Date().getTime(); // Add timestamp for cache busting
        const baseUrl = selectedSize === "light" ? ( // 500KB
            selectedCdn === "dark" ? "https://i.ibb.co/yFqkFypX/FMalah-AWUAMTxz2.jpg" : "https://ik.imagekit.io/mtdahcqcx/FMalahAWUAMTxz2.jpg"
        ) : selectedSize === "dark" ? ( // 1MB
            selectedCdn === "dark" ? "https://i.ibb.co/LdjzFjCd/Screenshot-554.png" : "https://ik.imagekit.io/mtdahcqcx/Screenshot%20(554).png"
        ) : selectedSize === "system" ? ( // 5MB
            selectedCdn === "dark" ? "https://i.ibb.co/5WpYfRyG/941369.png" : "https://ik.imagekit.io/mtdahcqcx/941369.png"
        ) : "";
        
        return baseUrl ? `${baseUrl}?t=${timestamp}` : "";
    };

    return (<>
<div className="w-[54%] ml-auto mr-auto h-[650px] ">
  <div className="border-b border-l  border-[#e7e7e715]  h-[650px] w-full flex">
    <div className=" w-[60%] h-full flex items-center ">
      
<div className=" w-[100%] flex ">
      <div className="w-[85%] flex ml-auto mr-auto items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 scale-y-[2.5] translate-y-[25%] bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent blur-[60px] -z-10"></div>
          <div className="absolute inset-0 scale-y-[2] translate-y-[35%] bg-gradient-to-b from-blue-600/30 via-purple-600/20 to-transparent blur-[40px] -z-10"></div>
          <img id="cdnImage" className="h-[80%] w-[80%] ml-auto mr-auto relative z-10" src="logo1.svg" alt="CDN Image" />
        </div>
      </div>
    </div>
    </div>
    <div className="w-[40%] border-l border-r border-[#e7e7e715] ">

    <div className="w-full h-full flex flex-col items-start justify-start">
            <div className="w-[80%] ml-auto mr-auto border-b border-[#e7e7e715] gap-2 flex items-center justify-center h-[20%]">
                <Select onValueChange={setSelectedRoute}>
                    <SelectTrigger className="text-white w-[180px]">
                        <SelectValue className="text-white" placeholder="Route" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="direct">Non Routed</SelectItem>
                        <SelectItem value="routed">Routed</SelectItem>
                        <SelectItem value="wrapped">Routed + Wrapped</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="text-white w-[180px]">
                        <SelectValue placeholder="Version" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">v 0.1</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="w-[80%] ml-auto mr-auto gap-2 flex items-center justify-center h-[20%]">
                <Select onValueChange={setSelectedSize}>
                    <SelectTrigger className="text-white w-[180px]">
                        <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">~500 KB</SelectItem>
                        <SelectItem value="dark">~ 1 MB</SelectItem>
                        <SelectItem value="system">~ 5 MB</SelectItem>
                    </SelectContent>
                </Select>
                <Select onValueChange={setSelectedCdn}>
                    <SelectTrigger className="text-white w-[180px]">
                        <SelectValue placeholder="Points Of Presence" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">EU Endpoint</SelectItem>
                        <SelectItem value="dark">Mumbai Endpoint</SelectItem>
                        <SelectItem value="system">Global CDN</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <hr className="w-[95%] ml-auto mr-auto border-[#e7e7e715] bg-[#e7e7e715]" />

            <button 
                onClick={() => {
                    if (!selectedSize || !selectedCdn || !selectedRoute) {
                      
                        toast("Please select all options") 
                        return;
                    }

                    const imageUrl = getImageUrl();
                    const imgElement = document.getElementById('cdnImage');
                    if (imgElement) {
                        const startTime = performance.now();
                        
                        const calculateTimings = (totalTime) => {
                            // Add extra time based on route type
                            let adjustedTime = totalTime;
                            if (selectedRoute === "routed") {
                                adjustedTime += 10;
                            } else if (selectedRoute === "wrapped") {
                                adjustedTime += 20;
                            }

                            return [
                                { name: "DNS Lookup", time: adjustedTime * 0.05, fill: "#FFFFFF" },
                                { name: "TCP Connection", time: adjustedTime * 0.1, fill: "#E0E0E0" },
                                { name: "TLS Handshake", time: adjustedTime * 0.15, fill: "#BDBDBD" },
                                { name: "First Byte", time: adjustedTime * 0.2, fill: "#9E9E9E" },
                                { name: "Content Download", time: adjustedTime * 0.4, fill: "#757575" },
                                { name: "Processing", time: adjustedTime * 0.1, fill: "#616161" }
                            ];
                        };

                        imgElement.onload = () => {
                            const endTime = performance.now();
                            let totalTime = endTime - startTime;
                            
                            // Add route timing adjustments
                            if (selectedRoute === "routed") {
                                totalTime += 10;
                            } else if (selectedRoute === "wrapped") {
                                totalTime += 20;
                            }
                            
                            setLoadTime(totalTime);
                            setChartData(calculateTimings(totalTime));
                        };
                        imgElement.src = imageUrl;
                    }
                }}
                className="w-[180px] h-[40px] mt-4 mx-auto bg-[#1a1a1a] text-white rounded-md
                border border-[#e7e7e715] transition-all duration-200 hover:bg-[#2a2a2a]
                active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#e7e7e715]"
            >
               Test CDN
            </button>

            <div className="h-[100px] mt-4 mx-auto">  {/* Changed from w-full to w-[200px] and added mx-auto */}
                
                <Chart1 
                  data={chartData}
                  centerLabel={loadTime.toFixed(0)}
                  className="text-white"
                />
            </div>

            <div className="ml-auto mr-auto w-full items-center justify-center bg-red-600"></div>
               
            </div>
        


    </div>
  </div>

</div>
    </>)
}