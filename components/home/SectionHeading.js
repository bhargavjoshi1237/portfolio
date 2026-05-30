export default function SectionHeading({
  title1,
  title2 = "",
  wrapperClassName = "w-[100%] flex items-center mb-7",
  title1ClassName = "objr text-white text-xl md:text-2xl",
  title2ClassName = "w-full objr text-white text-xl",
}) {
  return (
    <div className={wrapperClassName}>
      <p className={title1ClassName}>{title1}</p>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-4 mr-4 w-10 text-white inline-flex"
      >
        <path d="M21.0001 12.4286L12.4287 21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.2857 3L3 19.2857" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className={title2ClassName}>{title2}</p>
    </div>
  );
}
