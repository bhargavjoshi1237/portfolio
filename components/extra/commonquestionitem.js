
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// CommonQuestionItem component
// Props:
// - question: string (question text)
// - answer: string (answer text)
// - borderSide: string (e.g., "border-t", "border-b", "border-l", "border-r")
export default function CommonQuestionItem({ question, answer, borderSide = "border-t" }) {
    return (
        <div className={`${borderSide} w-full border-[#e7e7e715]`}>
            <div className="w-[90%] ml-auto mr-auto pl-3 pr-3">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>{question}</AccordionTrigger>
                        <AccordionContent>
                            {answer}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
