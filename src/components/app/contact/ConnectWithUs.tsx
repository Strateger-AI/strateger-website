import { CONNECT_WITH_US_SECTION } from "@/data/contact/contact.data";
import TiltCard from "@/components/common/TiltCard";

export function ConnectWithUs() {
  return (
    <div
      className={
        "flex flex-col items-center justify-center gap-5 px-5 pb-10 md:px-20 md:pb-20 lg:gap-8"
      }
    >
      <h1 className="text-center text-5xl leading-snug md:text-start md:text-7xl">
        {CONNECT_WITH_US_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <div className={"flex flex-wrap items-center justify-center gap-10"}>
        {CONNECT_WITH_US_SECTION.emails.map((email, i) => (
          <TiltCard key={i}>
            <div
              className={
                "border-primary group hover:bg-primary flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 bg-white px-10 py-5 shadow-xl transition-all duration-300"
              }
            >
              <h1
                className={
                  "text-primary text-3xl font-bold group-hover:text-white"
                }
              >
                {email.title}
              </h1>
              <p className={"text-xl group-hover:text-white"}>{email.mail}</p>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
