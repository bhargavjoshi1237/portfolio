export default function CommonQuestionItem({ question, answer, borderSide = "border-b" }) {
    return (
      <div className={`min-h-[150px] ${borderSide} border-[#e7e7e715] flex items-center`}>
        <div className="w-[85%] ml-auto mr-auto">
          <p className="text-xl fon">{question}</p>
          <p className="text-sm mt-5 fon text-[#e7e7e780]">{answer}</p>
        </div>
      </div>
    );
  }
  