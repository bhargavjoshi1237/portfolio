import CommonQuestionItem from "@/components/extra/commonquestionitem";
import { FAQS } from "@/components/home/data";

function FaqList() {
  return (
    <>
      {FAQS.map((faq, i) => (
        <CommonQuestionItem
          key={i}
          borderSide={i === 0 ? "" : i === FAQS.length - 1 ? "border-b border-t" : "border-t"}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </>
  );
}

function PlusIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FaqSection() {
  return (
    <div className="md:w-[54%] w-[100%] ml-auto mr-auto min-h-[600px]">
      <div className="block md:hidden">
        <div className="w-[100%] border-r border-b border-[#e7e7e715] min-h-[200px] flex items-center relative">
          <div className="w-[80%] h-[85%] ml-auto mr-auto">
            <p className="text-2xl fon">Common Questions</p>
            <p className="text-xs ml-0.5 mt-1.5 fon">Still have questions? Email Me</p>
          </div>
        </div>
        <div className="w-[100%] border-r min-h-[600px] border-[#e7e7e715]">
          <FaqList />
        </div>
      </div>
      <div className="border-b border-l border-[#e7e7e715] min-h-[600px] w-full flex md:flex hidden md:block">
        <div className="w-[33.33%] border-r border-[#e7e7e715] min-h-[600px] flex items-center relative">
          <PlusIcon className="w-6 h-6 text-[#e7e7e740] absolute top-0 right-0 -mt-3 -mr-3" />
          <div className="w-[80%] h-[85%] ml-auto mr-auto">
            <p className="text-2xl fon">Common Questions</p>
            <p className="text-xs ml-0.5 mt-1.5 fon">Still have questions? Email Me</p>
          </div>
          <PlusIcon className="w-6 h-6 text-[#e7e7e740] absolute bottom-0 right-0 -mb-3 -mr-3.5" />
        </div>
        <div className="w-[66.66%] border-r min-h-[600px] border-[#e7e7e715]">
          <FaqList />
        </div>
      </div>
    </div>
  );
}
