const SplitSection = ({
    title1, 
    title2,
    description1,
    description2,
    description3,
    showDivider = true,
    children
}) => {
    return (
        <div className="h-auto items-center justify-center md:h-[300px] w-full ml-auto mr-auto flex flex-col md:flex-row border-b border-r border-[#e7e7e715]">
            <div className="border-r flex items-center justify-center border-[#e7e7e715] md:border-l border-b w-full md:w-3/5 lg:w-[60%] h-[300px] md:h-full">
                <div className="ml-auto mr-auto w-[80%] sm:w-[85%] lg:w-[80%] items-center justify-center">
                    <div className="w-[100%] flex items-center mb-5">
                        <p className="objr text-white text-2xl">{title1}</p>
                        {showDivider && (
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4 mr-4 w-10 text-white inline-flex">
                                <path d="M21.0001 12.4286L12.4287 21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M19.2857 3L3 19.2857" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        )}
                    </div>
                    <p className="fon text-md">{description1}</p>
                    <p className="mt-2 fon text-md">{description2}</p>
                </div>
            </div>
            <div className="w-full md:w-2/5 lg:w-[40%] h-[300px] md:h-full flex items-center justify-center">
                <div className="ml-auto mr-auto w-[80%] sm:w-[85%] lg:w-[80%] items-center justify-center">
                    <div className="w-[100%] flex items-center mb-5">
                        <p className="objr text-white text-2xl">{title2}</p>
                    </div>
                    <p className="mt-2 fon text-md">{description3}</p>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SplitSection;
