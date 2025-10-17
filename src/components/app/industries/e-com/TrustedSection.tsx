import { ECOMMERCE_TRUST_SECTION } from "@/data/industries/ecom.data";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function TrustedSection() {
  return (
    <div
      className={
        "bg-muted px-20 py-10 items-center justify-center  flex flex-col gap-4 "
      }
    >
      <h1 className="text-center text-3xl leading-snug whitespace-pre-line md:text-5xl">
        {ECOMMERCE_TRUST_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p className={"whitespace-pre-line text-lg font-medium text-center "}>
        {ECOMMERCE_TRUST_SECTION.desc}
      </p>
      <CTAButton2
        href={ECOMMERCE_TRUST_SECTION.CTABtnLink}
        label={ECOMMERCE_TRUST_SECTION.CTABtnText}
      />
    </div>
  );
}
