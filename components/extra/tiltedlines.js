
const TiltedLines = ({
  width = 100,
  widthx = 54,
  height = 100,
  showIcons = true,
  borderL = false,
  borderR = false,
  borderT = false,
  borderB = false
}) => {
  const PlusIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-[#e7e7e740]"
      aria-hidden="true"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Build border classes based on props
  const borderClasses = [
    borderL ? 'border-l' : '',
    borderR ? 'border-r' : '',
    borderT ? 'border-t' : '',
    borderB ? 'border-b' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={` tilted-lines border flex items-center justify-center border-[#e7e7e715] w-[${width}%]  h-[${height}px]`}>
      <div className={`w-[${widthx}%] h-full ${borderClasses} border-[#e7e7e715]`}>
        {showIcons && (
          <>
            <div className="-ml-3 -mt-3.5 -mr-3.5 -mb-3">
              <PlusIcon />
            </div>
            <div className="float-end -ml-4 -mt-3 -mr-3 -mb-3">
              <PlusIcon />
            </div>
            <div className="h-full flex items-end justify-end">
              <div className="-ml-3.5 -mr-3.5 -mb-4">
                <PlusIcon />
              </div>
            </div>
            <div className="h-full flex">
              <div className="-ml-3 -mt-2">
                <PlusIcon />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TiltedLines;
