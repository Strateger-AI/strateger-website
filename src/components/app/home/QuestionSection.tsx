import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QuestionSectionProps = {
  headingParts: {
    text: string;
    className: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export function QuestionSection({
  QUESTION_SECTION_DATA,
}: {
  QUESTION_SECTION_DATA: QuestionSectionProps;
}) {
  return (
    <div className="flex flex-col items-center space-y-8 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      {/* Header */}
      {/*<div className="flex w-full flex-col gap-2 gap-4 md:flex-row md:items-center md:justify-between">*/}
      {/* */}

      {/*  /!*<CustomSearchbar />*!/*/}
      {/*</div>*/}
      <h1 className=" text-center font-bold leading-normal text-2xl sm:text-3xl md:text-start md:text-5xl">
        {QUESTION_SECTION_DATA.headingParts.map((part, i: number) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>

      {/* Accordion */}
      <div className="w-full md:max-w-7xl">
        <Accordion type="single" collapsible className="w-full">
          {QUESTION_SECTION_DATA.faqs.map((faq, index: number) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className=" rounded-md py-5"
            >
              <AccordionTrigger className="w-full !border-none px-4 py-3 text-left font-medium md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground w-full px-4 pb-4 text-sm md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
