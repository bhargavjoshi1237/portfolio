"use client"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useState } from "react";
import Chart1 from "./chart1";
import { toast } from "sonner"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
export default function CdnOpt() {
    const [selectedRoute, setSelectedRoute] = useState("direct");
    const [selectedVersion, setSelectedVersion] = useState("light");
    const [selectedSize, setSelectedSize] = useState("light");
    const [selectedCdn, setSelectedCdn] = useState("light");
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
    <div className="w-full md:w-[54%] ml-auto mr-auto h-[1300px] md:h-[650px] relative z-[9999]">
        <div className="border-b border-l border-[#e7e7e715] h-[1300px] md:h-[650px] w-full flex flex-col md:flex-row">
            <div className="w-full h-[50%] md:w-[60%] md:h-full flex items-center">
                <div className="w-full flex">
                    <div className="w-[85%] flex ml-auto mr-auto items-center justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 transition-transform duration-[3000ms] ease-in-out 
                                bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent blur-[60px] 
                                -z-10 hover:scale-110 animate-pulse">
                            </div>
                            <div className="absolute inset-0 transition-transform duration-[3000ms] ease-in-out 
                                bg-gradient-to-b from-blue-600/30 via-purple-600/20 to-transparent blur-[40px] 
                                -z-10 hover:scale-105 animate-pulse" 
                                style={{ animationDelay: '1500ms' }}>
                            </div>
                            <img id="cdnImage" className="h-[80%] w-[80%] ml-auto mr-auto relative z-10" src="logo1.svg" alt="CDN Image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[50%] md:w-[40%] items-center -mt-16 md:-mt-0 md:h-full border-l border-r border-[#e7e7e715] ">
                <div className="w-full h-full flex flex-col items-start justify-start">
                    {/* Desktop view */}
                    <div className="hidden md:block w-full h-full">
                        <ResizablePanelGroup direction="vertical" > 
                            <ResizablePanel defaultSize={40} className={"flex items-center justify-center h-full "}>
                                <div className="w-[80%] ml-auto mr-auto gap-4 flex flex-col items-center justify-center h-[40%]">
                                    <ToggleGroup type="single" value={selectedRoute} onValueChange={setSelectedRoute}>
                                        <ToggleGroupItem value="direct" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>Non Routed</ToggleGroupItem>
                                        <ToggleGroupItem value="routed" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>Routed</ToggleGroupItem>
                                        <ToggleGroupItem value="wrapped" className={"px-8 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>Routed + Wrapped</ToggleGroupItem>
                                    </ToggleGroup>

                                    <ToggleGroup type="single" value={selectedSize} onValueChange={setSelectedSize}>
                                        <ToggleGroupItem value="light" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>~500 KB</ToggleGroupItem>
                                        <ToggleGroupItem value="dark" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>~ 1 MB</ToggleGroupItem>
                                        <ToggleGroupItem value="system" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>~ 5 MB</ToggleGroupItem>
                                    </ToggleGroup>
                                    <ToggleGroup type="single" value={selectedCdn} onValueChange={setSelectedCdn}>
                                        <ToggleGroupItem value="light" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>EU Endpoint</ToggleGroupItem>
                                        <ToggleGroupItem value="dark" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>Mumbai Endpoint</ToggleGroupItem>
                                        <ToggleGroupItem value="system" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>Global CDN</ToggleGroupItem>
                                    </ToggleGroup>
                                </div>
                            </ResizablePanel>
                            <ResizableHandle className={"bg-[#e7e7e715] w-[90%] ml-auto mr-auto"} />
                            <ResizablePanel defaultSize={60} className={"flex flex-col items-center justify-start"}>
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
                                    className="w-[180px] h-[40px]   bg-[#1a1a1a] text-white rounded-md
                                    border border-[#e7e7e715] transition-all duration-200 hover:bg-[#2a2a2a]
                                    active:scale-95 focus:outline-none focus:ring-2 mt-8 focus:ring-[#e7e7e715]"
                                >
                                   Test CDN
                                </button>

                                <div className="h-[100px] ">  {/* Changed from w-full to w-[200px] and added mx-auto */}
                                    
                                    <Chart1 
                                      data={chartData}
                                      centerLabel={loadTime.toFixed(0)}
                                      className="text-white"
                                    />
                                </div>
                                
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>

                    {/* Mobile view */}
                    <div className="md:hidden w-full h-full flex flex-col">
                        <div className="w-[80%] ml-auto mr-auto gap-4 flex flex-col items-center justify-center py-8">
                            <ToggleGroup type="single" value={selectedRoute} onValueChange={setSelectedRoute}>
                                <ToggleGroupItem value="direct" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>Non Routed</ToggleGroupItem>
                                <ToggleGroupItem value="routed" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>Routed</ToggleGroupItem>
                                <ToggleGroupItem value="wrapped" className={"px-8 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>Routed + Wrapped</ToggleGroupItem>
                            </ToggleGroup>

                            <ToggleGroup type="single" value={selectedSize} onValueChange={setSelectedSize}>
                                <ToggleGroupItem value="light" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>~500 KB</ToggleGroupItem>
                                <ToggleGroupItem value="dark" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>~ 1 MB</ToggleGroupItem>
                                <ToggleGroupItem value="system" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>~ 5 MB</ToggleGroupItem>
                            </ToggleGroup>

                            <ToggleGroup type="single" value={selectedCdn} onValueChange={setSelectedCdn}>
                                <ToggleGroupItem value="light" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>EU Endpoint</ToggleGroupItem>
                                <ToggleGroupItem value="dark" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>Mumbai Endpoint</ToggleGroupItem>
                                <ToggleGroupItem value="system" className={"px-4 text-[#e7e7e795] data-[state=on]:text-[#e7e7e7]"}>Global CDN</ToggleGroupItem>
                            </ToggleGroup>
                        </div>

                        <div className="flex flex-col items-center justify-start mt-4">
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
                                className="w-[180px] h-[40px] bg-[#1a1a1a] text-white rounded-md
                                border border-[#e7e7e715] transition-all duration-200 hover:bg-[#2a2a2a]
                                active:scale-95 focus:outline-none focus:ring-2 mt-8 focus:ring-[#e7e7e715]"
                            >
                                Test CDN
                            </button>

                            <div className="h-[100px] mt-4">
                                <Chart1 
                                    data={chartData}
                                    centerLabel={loadTime.toFixed(0)}
                                    className="text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}