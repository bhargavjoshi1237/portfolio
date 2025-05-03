export default function TiltedLines({ width = 100, height = 50, showIcons = true, borderL = false, borderR = false }) {
    return (
      <div className={`tilted-lines border flex items-center justify-center border-[#e7e7e715] h-[${height}px]`}>
        <div className={`border ${borderL ? 'border-l' : ''} ${borderR ? 'border-r' : ''} border-[#e7e7e715] w-[${width}%] h-full`}>
          {showIcons && (
            <>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 -ml-3 -mt-3.5 text-[#e7e7e740] -mr-3.5 -mb-3" aria-hidden="true">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 float-end h-6 -ml-4 -mt-3 text-[#e7e7e740] -mr-3 -mb-3" aria-hidden="true">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </>
          )}
        </div>
      </div>
    );
  }
  