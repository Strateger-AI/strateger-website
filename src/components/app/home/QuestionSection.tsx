import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GradientTextHeading from "@/components/common/GradientTextHeading";
import Container from "@/components/common/Container";

type QuestionSectionProps = {
  headingParts: {
    text: string;
    className: string;
    gradient?: boolean;
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
    <Container className="flex flex-col items-center space-y-8  md:space-y-10 ">
      {/* Header */}
      {/*<div className="flex w-full flex-col gap-2 gap-4 md:flex-row md:items-center md:justify-between">*/}
      {/* */}

      {/*  /!*<CustomSearchbar />*!/*/}
      {/*</div>*/}
      <GradientTextHeading headingParts={QUESTION_SECTION_DATA.headingParts} />
      {/* Accordion */}
      <div className="w-full md:max-w-7xl">
        <Accordion type="single" collapsible className="w-full">
          {QUESTION_SECTION_DATA.faqs.map((faq, index: number) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className=" rounded-md py-5"
            >
              <AccordionTrigger className="w-full !border-none px-4 py-3 text-left font-medium md:text-xl uppercase">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className=" w-full px-4 pb-4 text-sm md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
